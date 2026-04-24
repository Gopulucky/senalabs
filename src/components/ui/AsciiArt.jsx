import React, { useMemo } from 'react';

// ═══════════════════════════════════════════════════════════
// GENERATIVE ASCII ART CANVAS — "The Real Meaning of Art"
// Dynamic, expressive, and organic patterns representing
// paintings, writings, and murals in the digital space.
// ═══════════════════════════════════════════════════════════

const generateWaves = (rows, cols) => {
    const chars = [' ', ' ', '.', '-', '~', ':', '=', '+', '*', '%', '@', '#'];
    let grid = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Complex wave formula combining sines and cosines
            const v = Math.sin(c * 0.15 + r * 0.1) + Math.cos(r * 0.2 - c * 0.05) + Math.sin((r + c) * 0.1) + 3; 
            const idx = Math.floor((v / 6) * chars.length);
            grid += (chars[Math.min(chars.length - 1, Math.max(0, idx))]) + ' ';
        }
        grid += '\n';
    }
    return grid;
};

const generateMural = (rows, cols) => {
    const chars = [' ', '░', '▒', '▓', '█', '▀', '▄', '■', '▪', '▫'];
    let grid = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Bitwise generative texture (Sierpinski / demoscene style)
            const v = (c ^ r) % chars.length;
            // Add some organic noise to break the rigid math
            const noise = Math.random() > 0.8 ? Math.floor(Math.random() * chars.length) : v;
            grid += chars[noise] + ' ';
        }
        grid += '\n';
    }
    return grid;
};

const generateWritings = (rows, cols) => {
    const words = ['ART', 'CANVAS', 'CREATE', 'EXPRESS', 'DESIGN', 'VISION', 'LABS', 'SENA', 'CODE', 'IMAGINE', 'FLOW'];
    const chars = ['/', '\\', '|', '-', '_', '+', '=', '*', ':', '.', ' ', ' ', ' ', ' ']; // Extra spaces for breathing room
    let grid = '';
    for (let r = 0; r < rows; r++) {
        let rowStr = '';
        while (rowStr.length < cols * 2) {
            if (Math.random() > 0.95 && rowStr.length < cols * 2 - 10) {
                const word = words[Math.floor(Math.random() * words.length)];
                rowStr += word + ' ';
            } else {
                rowStr += chars[Math.floor(Math.random() * chars.length)] + ' ';
            }
        }
        grid += rowStr.substring(0, cols * 2) + '\n';
    }
    return grid;
};

const generateHackathonNetwork = (rows, cols) => {
    const chars = ['0', '1', '{', '}', ';', '/', '<', '>', '_', '|'];
    let grid = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const isCodeBlock = Math.sin(c * 0.3) + Math.cos(r * 0.4) > 0.8;
            if (isCodeBlock) {
                grid += chars[Math.floor(Math.random() * chars.length)] + ' ';
            } else {
                grid += '  ';
            }
        }
        grid += '\n';
    }
    return grid;
};

const generateExpoShowcase = (rows, cols) => {
    let grid = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Geometric showcase booths / networking nodes
            if (r % 6 === 0 && c % 6 === 0) {
                grid += 'O ';
            } else if (r % 6 === 0 && c % 6 !== 0) {
                grid += Math.random() > 0.3 ? '- ' : '  ';
            } else if (r % 6 !== 0 && c % 6 === 0) {
                grid += Math.random() > 0.3 ? '| ' : '  ';
            } else if (r % 3 === 0 && c % 3 === 0) {
                grid += '+ ';
            } else {
                grid += '  ';
            }
        }
        grid += '\n';
    }
    return grid;
};

const generateContactNetwork = (rows, cols) => {
    let grid = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Radiating signal pattern from a focal point
            const dist = Math.sqrt(Math.pow(r - rows/2, 2) + Math.pow((c - cols/2)*0.5, 2));
            const v = Math.sin(dist * 0.8) * 5;
            if (v > 3.5) {
                grid += (c < cols/2 ? '(' : ')') + ' ';
            } else if (v > 2) {
                grid += '~ ';
            } else if (v < -4) {
                grid += '* ';
            } else {
                grid += '  ';
            }
        }
        grid += '\n';
    }
    return grid;
};

const generateTeamRoster = (rows, cols) => {
    let grid = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Interconnected nodes representing collaboration
            if (r % 5 === 0 && c % 8 === 0) {
                grid += 'O ';
            } else if (r % 5 === 0 && c % 8 !== 0) {
                grid += '- ';
            } else if (r % 5 !== 0 && c % 8 === 0) {
                grid += '| ';
            } else if ((r + c) % 7 === 0) {
                grid += '* ';
            } else {
                grid += '  ';
            }
        }
        grid += '\n';
    }
    return grid;
};

const generateStaticHex = () => `
  / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\
 |   |   |   |   |   |   |   |   |   |
  \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /
  / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\
 |   |   |   |   |   |   |   |   |   |
  \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ /
`;

const AsciiArt = ({ theme = 'canvas_waves', className = '', accent = 'aurora-cyan', rows = 30, cols = 60, style = {} }) => {
    // Generate the specific art pattern
    const art = useMemo(() => {
        switch (theme) {
            case 'canvas_waves':
                return generateWaves(rows, cols);
            case 'abstract_mural':
                return generateMural(rows, cols);
            case 'expressive_writings':
                return generateWritings(rows, cols);
            case 'hackathon_network':
                return generateHackathonNetwork(rows, cols);
            case 'expo_showcase':
                return generateExpoShowcase(rows, cols);
            case 'contact_network':
                return generateContactNetwork(rows, cols);
            case 'team_roster':
                return generateTeamRoster(rows, cols);
            case 'hex_grid':
                return generateStaticHex();
            default:
                return generateWaves(rows, cols);
        }
    }, [theme, rows, cols]);

    return (
        <div className={`ascii-art-container ${className}`} style={style}>
            <pre
                className="ascii-art select-none"
                style={{ color: `var(--color-${accent})` }}
            >
                {art.replace(/^\n/, '')}
            </pre>
        </div>
    );
};

export default AsciiArt;
