// import React from 'react';
// import { Download, Rocket } from 'lucide-react';
// import AnimatedText from './AnimatedText';
// import GlowButton from './GlowButton';

// const Hero = () => {
//   return (
//     <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         <div className="text-center lg:text-left">
//           <AnimatedText>
//             <h1 className="text-5xl md:text-7xl font-black mb-6">
//               Hi, I'm{' '}
//               <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Tarun
//               </span>
//               <div className="inline-block ml-2 animate-bounce">👋</div>
//             </h1>
//           </AnimatedText>
          
//           <AnimatedText delay={200}>
//             <div className="text-2xl md:text-3xl text-gray-300 mb-8">
//               <span className="text-emerald-400">Full Stack Developer</span> &{' '}
//               <span className="text-cyan-400">Problem Solver</span>
//             </div>
//           </AnimatedText>
          
//           <AnimatedText delay={400}>
//             <p className="text-xl text-gray-400 mb-12 max-w-2xl">
//               Crafting digital experiences with cutting-edge technologies. 
//               Passionate about building scalable applications that make a difference.
//             </p>
//           </AnimatedText>
          
//           <AnimatedText delay={600}>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <GlowButton 
//                 variant="primary"
//                 href="/resume.pdf"
//                 download="Tarun_Kullolli_Resume.pdf"
//               >
//                 <Download size={20} />
//                 Download Resume
//               </GlowButton>
//               <GlowButton variant="secondary" onClick={() => document.getElementById('projects').scrollIntoView()}>
//                 <Rocket size={20} />
//                 View Projects
//               </GlowButton>
//             </div>
//           </AnimatedText>
//         </div>
        
//         <div className="flex justify-center lg:justify-end">
//           <AnimatedText delay={300}>
//             <div className="relative">
//               <div className="w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 p-2 animate-pulse">
//                 <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 p-1">
//                   <img 
//                     src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23333'%3ETarun Kullolli%3C/text%3E%3C/svg%3E"
//                     alt="Tarun Kullolli"
//                     className="w-full h-full rounded-full object-cover"
//                   />
//                 </div>
//               </div>
//               <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-ping"></div>
//               <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
//             </div>
//           </AnimatedText>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from 'react';
import { Rocket } from 'lucide-react';
import AnimatedText from './AnimatedText';
import ProductionResumeDownload from './ProductionResumeDownload';
import GlowButton from './GlowButton';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <AnimatedText>
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Tarun
              </span>
              <div className="inline-block ml-2 animate-bounce">👋</div>
            </h1>
          </AnimatedText>
          
          <AnimatedText delay={200}>
            <div className="text-2xl md:text-3xl text-gray-300 mb-8">
              <span className="text-emerald-400">Full Stack Developer</span> &{' '}
              <span className="text-cyan-400">Problem Solver</span>
            </div>
          </AnimatedText>
          
          <AnimatedText delay={400}>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl">
              Crafting digital experiences with cutting-edge technologies. 
              Passionate about building scalable applications that make a difference.
            </p>
          </AnimatedText>
          
          <AnimatedText delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <ProductionResumeDownload />
              <GlowButton 
                variant="secondary" 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Rocket size={20} />
                View Projects
              </GlowButton>
            </div>
          </AnimatedText>
        </div>
        
        {/* Profile Image Section */}
        <div className="flex justify-center lg:justify-end">
          <AnimatedText delay={300}>
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 p-2 animate-pulse">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 p-1">
                  {/* <img 
                    // src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23333'%3ETarun Kullolli%3C/text%3E%3C/svg%3E"
                    src="D:\React Projects\my_portfolio\public\PROFILE.jpg"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='%23333'%3ETarun Kullolli%3C/text%3E%3C/svg%3E"
                    alt="Tarun Kullolli"
                    className="w-full h-full rounded-full object-cover"
                  /> */}
                  <img
  src="/PROFILE.jpg"   // ✅ Image inside public/
  alt="Tarun Kullolli"
  className="w-full h-full rounded-full object-cover"
/>

                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full animate-ping"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-cyan-400 rounded-full animate-ping delay-1000"></div>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default Hero;