'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting] = useState(false);
  const [submitSuccess] = useState(false);
  const [submitError] = useState('');

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:chaudharyabhay111@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoUrl;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="section relative overflow-hidden py-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 padd-bottom rounded-full text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <motion.h2 
            className="text-4xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Let&apos;s <span className="text-blue-500">Connect</span>
          </motion.h2>
          <p className="inline-block text-text-secondary padd-bottom max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto padd-top">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-stretch">
            {/* Contact Info - Left Side */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-2 flex flex-col h-full"
            >
              <motion.div variants={itemVariants} className="bg-secondary/10 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-accent/10 hover:border-primary/20 transition-all duration-300 group flex-1 flex flex-col">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-500 text-center">Contact Information</h3>
                <p className="text-text-secondary mb-6 md:mb-8 text-sm md:text-base padd-left padd-right text-center">
                  I&apos;m open to opportunities, collaborations, and interesting projects.
                </p>
                
                <div className="space-y-8 flex-grow">
                  <div className="flex items-center group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-5 group-hover:bg-primary/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary mb-2">Email</p>
                      <a href="mailto:chaudharyabhay111@gmail.com" className="text-lg font-medium hover:text-primary transition-colors duration-300">
                        chaudharyabhay111@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mr-5 group-hover:bg-primary/20 transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary mb-2">Location</p>
                      <p className="text-lg font-medium">Bengaluru, India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-auto pt-8 border-t border-accent/10">
                  <p className="text-sm text-text-secondary mb-4 padd-left">Connect with me</p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/abhay1821" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary/30 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-secondary/50 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/abhay1821/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary/30 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-secondary/50 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                      </svg>
                    </a>
                    <a 
                      href="https://x.com/AbhayChaudhary" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-secondary/30 flex items-center justify-center text-text-secondary hover:text-primary hover:bg-secondary/50 transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form - Right Side */}
            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="lg:col-span-3 bg-secondary/10 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-accent/10 shadow-xl relative overflow-hidden group flex flex-col h-full"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-0"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl z-0"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 border-2 border-primary/20 rounded-full z-0 opacity-60"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 border-2 border-accent/20 rounded-full z-0 opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/10 rounded-full z-0 opacity-30"></div>
              
              <div className="relative z-10 flex-1 flex flex-col">
                <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold mb-8 text-center">
                  Send me a <span className="text-blue-500">message</span>
                </motion.h3>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary/10 border-2 border-primary/30 text-text-primary p-8 rounded-2xl mb-8 backdrop-blur-sm"
                  >
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p>Thank you for your message! I&apos;ll get back to you soon.</p>
                    </div>
                  </motion.div>
                )}

                {submitError && (
                  <div className="bg-red-500/10 border-2 border-red-500/30 text-red-500 p-8 rounded-2xl mb-8 backdrop-blur-sm">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p>{submitError}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-10 flex-grow flex flex-col">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 padd-left padd-right">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="name" className="block text-base font-semibold text-text-primary mb-4">Your Name</label>
                      <div className="relative">
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full padd-left padd-right py-4 bg-background/60 rounded-2xl border-2 border-accent/20 focus:border-primary/50 focus:ring-4 focus:ring-primary/20 transition-all duration-300 outline-none text-base hover:border-accent/30"
                          required
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="email" className="block text-base font-semibold text-text-primary mb-4">Your Email</label>
                      <div className="relative">
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full padd-left padd-right py-4 bg-background/60 rounded-2xl border-2 border-accent/20 focus:border-primary/50 focus:ring-4 focus:ring-primary/20 transition-all duration-300 outline-none text-base hover:border-accent/30"
                          required
                        />
                      </div>
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-base font-semibold text-text-primary padd-left padd-right mb-4" style={{paddingTop: '5px'}}>Subject</label>
                    <div className="relative padd-left padd-right">
                      <input
                        id="subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can I help you?"
                        className="w-full padd-left padd-right py-4 bg-background/60 rounded-2xl border-2 border-accent/20 focus:border-primary/50 focus:ring-4 focus:ring-primary/20 transition-all duration-300 outline-none text-base hover:border-accent/30"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="message" className="block text-base font-semibold text-text-primary padd-left "style={{paddingTop: '5px'}}>Message</label>
                    <div className="relative padd-left padd-right">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message here..."
                        rows={5}
                        className="w-full padd-left padd-right py-4 bg-background/60 rounded-2xl border-2 border-accent/20 focus:border-primary/50 focus:ring-4 focus:ring-primary/20 transition-all duration-300 outline-none resize-none text-base hover:border-accent/30"
                        required
                      ></textarea>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="pt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-5 px-8 rounded-2xl font-semibold text-lg transition-all duration-300 relative overflow-hidden ${
                        isSubmitting
                          ? 'bg-primary/70 cursor-not-allowed'
                          : 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02]'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message &nbsp;

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>

                            
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 