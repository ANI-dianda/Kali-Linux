
import { ShieldCheck, Fingerprint, LockOpen, Code } from 'lucide-react';

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 py-20 text-center">
      <div className="relative z-10 flex flex-col items-center">
        {/* === Central Isometric Screen === */}
        <div className="relative mb-8 animate-fade-in-up [animation-delay:200ms]">
          <div
            className="group relative w-[280px] h-[200px] sm:w-[400px] sm:h-[280px] lg:w-[500px] lg:h-[350px] transition-transform duration-500 ease-in-out hover:scale-105"
            style={{ transformStyle: 'preserve-3d', transform: 'rotateX(45deg) rotateZ(-45deg)' }}
          >
            {/* Screen Frame and Glow */}
            <div className="absolute inset-0 rounded-2xl border-4 border-black bg-gray-900/50 shadow-2xl transition-all duration-300 group-hover:shadow-glow-cyan-light"></div>
            
            {/* Screen Content */}
            <div className="absolute inset-2 sm:inset-3 rounded-lg bg-black/50 overflow-hidden">
              {/* Data lines background */}
              <Code className="absolute -left-10 -top-10 h-32 w-32 text-neon-blue/10 animate-glow-pulse [animation-delay:500ms]" strokeWidth={1} />
              <Code className="absolute -right-10 -bottom-10 h-48 w-48 text-neon-pink/10 animate-glow-pulse" strokeWidth={1} />
              
              {/* Icons */}
              <div className="relative flex h-full w-full items-center justify-around">
                <ShieldCheck className="h-16 w-16 sm:h-24 sm:h-24 text-neon-blue drop-shadow-neon-cyan animate-glow-pulse" strokeWidth={1.5} />
                <LockOpen className="h-20 w-20 sm:h-28 sm:h-28 text-amber-300/80 drop-shadow-neon-gold animate-glow-pulse [animation-delay:300ms]" strokeWidth={1} />
                <Fingerprint className="h-16 w-16 sm:h-24 sm:h-24 text-neon-pink drop-shadow-neon-pink animate-glow-pulse" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Screen Stand */}
            <div className="absolute bottom-[-10px] left-[10%] h-[10px] w-[80%] bg-gray-800 rounded-b-md" style={{ transform: 'translateZ(-20px)' }}></div>
          </div>
          {/* Shadow */}
          <div className="absolute bottom-[-50px] left-0 right-0 mx-auto h-8 w-[80%] rounded-full bg-dark-purple-shadow blur-2xl drop-shadow-long-soft-purple" />
        </div>

        {/* === Title & Subtitle === */}
        <div className="relative animate-fade-in-up [animation-delay:400ms]">
          <h1 className="font-orbitron text-5xl font-black text-white sm:text-7xl lg:text-8xl xl:text-9xl text-glow-cyan relative">
            CYBER SÉCURITÉ
            <span className="absolute -bottom-2 sm:-bottom-4 left-1/2 -translate-x-1/2 h-1 w-2/3 origin-center animate-draw-line bg-bright-red sm:w-1/2" />
          </h1>
          <p className="mt-8 font-exo-2 text-lg font-light text-light-gray-text sm:text-xl lg:text-2xl max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
          </p>
        </div>

        {/* === CTA Button === */}
        <div className="mt-12 animate-fade-in-up [animation-delay:600ms]">
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-transparent bg-gradient-to-r from-grad-pink to-grad-violet px-10 py-4 font-exo-2 text-lg font-bold text-white shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-glow-button">
            <span className="relative z-10">DÉCOUVRIR</span>
          </button>
        </div>
      </div>
    </main>
  );
}
