import { useEffect, useState } from "react";

export const App = () => {
  
  //useState
  const [time, setTime] = useState(new Date());

  //useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  const formatTime = (date) => date.toLocaleTimeString("Pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-950 to-black overflow-hidden">

      {/* Ambiente Gradient Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[160px]"></div>

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-600/30 rounded-full blur-[160px]"></div>

      {/* Clock Card */}

      <div className="relative z-10 px-14 py-10 rounded-[32px] bg-zinc-900/60 backdrop-blur-xl border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.35)]">
        {/* Glow Layer */}
        <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 blur-2xl -z-10"></div>

        <h1 className="text-6xl md:text7xl font-mono tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-purple-100 via-pink-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]">
          {formatTime(time)}
        </h1>

        <p className="mt-6 text-center text-xs uppercase tracking-widest text-zinc-400">Relógio Digital</p>

      </div>
    </div>
  )
}

export default App;