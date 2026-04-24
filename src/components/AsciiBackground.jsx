// AsciiBackground — Animated digit rain effect inspired by supermemory.ai
// Performance-optimized: CSS-only animation, no JS interval rendering
import React, { useMemo } from 'react';

const AsciiBackground = ({ density = 30, className = '' }) => {
    const columns = useMemo(() => {
        return Array.from({ length: density }, (_, i) => {
            const chars = '01234567890ABCDEF><{}[]|/\\';
            const columnChars = Array.from({ length: 25 }, () =>
                chars[Math.floor(Math.random() * chars.length)]
            ).join('\n');
            const left = (i / density) * 100 + (Math.random() * (100 / density) * 0.6);
            const duration = 12 + Math.random() * 18;
            const delay = -(Math.random() * 20);
            const opacity = 0.03 + Math.random() * 0.06;
            const fontSize = 10 + Math.floor(Math.random() * 4);

            return { id: i, text: columnChars, left, duration, delay, opacity, fontSize };
        });
    }, [density]);

    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
            style={{ contain: 'layout style paint' }}
        >
            {columns.map((col) => (
                <pre
                    key={col.id}
                    className="absolute font-mono text-aurora-cyan whitespace-pre leading-tight select-none"
                    style={{
                        left: `${col.left}%`,
                        top: '-100%',
                        opacity: col.opacity,
                        fontSize: `${col.fontSize}px`,
                        animation: `ascii-fall ${col.duration}s linear ${col.delay}s infinite`,
                        willChange: 'transform',
                    }}
                >
                    {col.text}
                </pre>
            ))}
            {/* Gradient mask for fade at top and bottom */}
            <div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(180deg, 
                        var(--color-bg-deep) 0%, 
                        transparent 15%, 
                        transparent 85%, 
                        var(--color-bg-deep) 100%)`,
                }}
            />
        </div>
    );
};

export default AsciiBackground;
