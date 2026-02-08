import React from 'react';
import FleetTile from './components/FleetTile';

export default function App() {
  return (
    <main className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center p-8">
      
      {/* Background decoration to show the component isolation */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-emerald-500/5 blur-[150px] rounded-full" />
      </div>

      <div className="z-10 flex flex-col items-center gap-8">
        <div className="text-center space-y-2 mb-8">
          <h1 className="text-3xl font-black text-white tracking-tight">Component Extraction: FleetTile</h1>
          <p className="text-slate-500 font-medium">
            Isolated 600x600px driver performance module
          </p>
        </div>
        
        {/* The Isolated Component */}
        <FleetTile />
        
      </div>
    </main>
  );
}