export default function TerminalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-mono selection:bg-[#262626]">
      <nav className="border-b border-[#262626] p-4 flex justify-between uppercase tracking-widest">
        <span>Obsidian Council // Terminal</span>
        <div className="flex gap-6 opacity-60">
          <span>Operatives</span>
          <span>Missions</span>
        </div>
      </nav>
      {children}
    </div>
  );
}