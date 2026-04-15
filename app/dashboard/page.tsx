'use client';
import { useState } from 'react';
import { Progress } from '@/components/ui/progress';

export default function Dashboard() {
  const [progress] = useState(22);

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-5xl font-bold text-green-400 mb-10">Senior Dashboard — Welcome back, Moe Kyaw Aung</h1>
      
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-8 rounded-3xl border border-green-500/30">
          <h2 className="text-xl text-zinc-400">Overall Senior Progress</h2>
          <div className="text-7xl font-bold text-green-400 mt-4">{progress}%</div>
          <Progress value={progress} className="mt-6 h-3" />
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-purple-500/30">
          <h2 className="text-xl text-zinc-400">Current Streak</h2>
          <div className="text-7xl font-bold text-purple-400 mt-4">14 days</div>
          <p className="text-sm text-zinc-500 mt-4">Keep the senior learning streak alive!</p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl border border-cyan-500/30">
          <h2 className="text-xl text-zinc-400">Repositories Synced</h2>
          <div className="text-7xl font-bold text-cyan-400 mt-4">4</div>
          <p className="text-sm text-zinc-500 mt-4">From 4 dedicated senior repos</p>
        </div>
      </div>

      {/* Roadmap phases as cards, charts, etc. */}
    </div>
  );
}
