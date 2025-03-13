'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  alpha: number;
}

const ParticleEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number | null>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const isMouseMoving = useRef(false);
  const lastMouseMoveTime = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      isMouseMoving.current = true;
      lastMouseMoveTime.current = Date.now();
      
      // Add particles on mouse move
      for (let i = 0; i < 3; i++) {
        addParticle(e.clientX, e.clientY);
      }
    };

    // Initialize particles
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        addParticle(x, y);
      }
    };

    // Add a particle
    const addParticle = (x: number, y: number) => {
      const colors = ['#4a1d96', '#be185d', '#3b82f6', '#8b5cf6'];
      const particle: Particle = {
        x,
        y,
        size: Math.random() * 5 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.8 + 0.2
      };
      particles.current.push(particle);
      
      // Limit particles to prevent performance issues
      if (particles.current.length > 200) {
        particles.current.splice(0, 1);
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Check if mouse has been idle
      if (Date.now() - lastMouseMoveTime.current > 200) {
        isMouseMoving.current = false;
      }
      
      // Update and draw particles
      particles.current.forEach((particle, index) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Reduce size
        particle.size -= 0.05;
        
        // Remove small particles
        if (particle.size <= 0.3) {
          particles.current.splice(index, 1);
          return;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
      });
      
      // Add random particles occasionally
      if (Math.random() > 0.95) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        addParticle(x, y);
      }
      
      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Start everything
    canvas.addEventListener('mousemove', handleMouseMove);
    initParticles();
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-10 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ParticleEffect; 