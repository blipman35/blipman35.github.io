import React, { useRef, useEffect } from "react";
import useScrollAnimation from '../hooks/useScrollAnimation';

function Contact() {
  const titleRef = useScrollAnimation(); // Animate the title
  const contentRef = useScrollAnimation(); // Animate the content
  const containerRef = useRef(null);

  // Contact methods, each one for a card
  const contactMethods = [
    {
      title: "Email",
      value: "benlipman35@gmail.com",
      icon: "📧",
      href: "mailto:benlipman35@gmail.com"
    },
    {
      title: "LinkedIn",
      value: "blipman",
      icon: "💼",
      href: "https://www.linkedin.com/in/blipman"
    },
    {
      title: "GitHub",
      value: "blipman35",
      icon: "💻",
      href: "https://github.com/blipman35"
    },
    // {
    //   title: "X",
    //   value: "blipman",
    //   icon: "🐦",
    //   href: "None"
    // }

  ];

  // Handle mouse movement for the gradient effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const cards = containerRef.current.querySelectorAll('.contact-card');
      
      cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        
        // Calculate relative position within the card
        const relativeX = ((e.clientX - cardRect.left) / cardRect.width) * 100;
        const relativeY = ((e.clientY - cardRect.top) / cardRect.height) * 100;
        
        // Apply gradient based on mouse position regardless of distance
        card.style.background = `radial-gradient(circle at ${relativeX}% ${relativeY}%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))`;
      });
    };
    
    // Set initial gradient for all cards
    const initializeGradients = () => {
      const cards = containerRef.current?.querySelectorAll('.contact-card');
      if (cards) {
        cards.forEach(card => {
          card.style.background = 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15))';
        });
      }
    };
    
    // Initialize gradients
    initializeGradients();
    
    // Add event listener
    document.addEventListener('mousemove', handleMouseMove);
    
    // Clean up
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="flex items-center justify-center py-12"> {/* Container for the contact section */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-16" ref={containerRef}> {/* Container for the content */}
        <div ref={titleRef} className="opacity-0"> {/* Animate the title */}
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"> {/* Title */}
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-4xl"> {/* Description text */}
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
        </div>
        
        {/* Contact cards */}
        <div 
          ref={contentRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 opacity-0"
        >
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {method.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact; 