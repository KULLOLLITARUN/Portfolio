import React from 'react';
import { Mail, Globe, ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import GlowButton from './GlowButton';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedText>
          <h2 className="text-4xl md:text-6xl font-black text-center mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
        </AnimatedText>
        
        <AnimatedText delay={200}>
          <p className="text-xl text-center text-gray-300 mb-12">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </AnimatedText>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedText delay={300}>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-400 mb-6">Get In Touch</h3>
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                <Mail className="text-emerald-400" size={24} />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">tarun@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                <Globe className="text-cyan-400" size={24} />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Bengaluru, India</p>
                </div>
              </div>
              
              <div className="flex gap-4 pt-4">
                <a
                  href="mailto:tarun@example.com"
                  className="flex items-center gap-2 p-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                >
                  <Mail size={20} />
                  Email Me
                </a>
              </div>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                />
              </div>
              <div>
                <textarea
                  rows={5}
                  placeholder="Your Message"
                  className="w-full p-4 bg-gray-800/50 border border-gray-600 rounded-lg focus:border-emerald-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                />
              </div>
              <GlowButton variant="primary" className="w-full">
                <ArrowRight size={20} />
                Send Message
              </GlowButton>
            </form>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default Contact;