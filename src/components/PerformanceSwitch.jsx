import { useEffect, useState } from 'react'

// Spline can be heavy. This switch defers its mount and allows users to toggle effects.
export default function PerformanceSwitch({ onToggle }) {
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    onToggle?.(enabled)
  }, [enabled, onToggle])

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button onClick={() => setEnabled((e) => !e)}
        className="rounded-full border border-white/10 bg-black/60 backdrop-blur px-3 py-1.5 text-xs text-white hover:bg-black/80">
        {enabled ? 'Ultra mode: ON' : 'Ultra mode: OFF'}
      </button>
    </div>
  )
}
