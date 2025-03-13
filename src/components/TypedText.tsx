'use client';

import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface TypedTextProps {
  strings: string[];
  className?: string;
}

const TypedText = ({ strings, className = '' }: TypedTextProps) => {
  const el = useRef<HTMLSpanElement>(null);
  const typed = useRef<Typed | null>(null);

  useEffect(() => {
    if (el.current) {
      typed.current = new Typed(el.current, {
        strings,
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
        autoInsertCss: true,
      });
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [strings]);

  return <span ref={el} className={className}></span>;
};

export default TypedText; 