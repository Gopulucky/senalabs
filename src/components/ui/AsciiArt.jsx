import React from 'react';

const ART_LIBRARY = {
    ai_brain: `
      .o88888888o.
    .88"  .::.  "88.
   .8'   .::::.   '8.
  .8'    '::::'    '8.
  88      '::'      88
  88     [====]     88
  '8.    [====]    .8'
   '8.   '::::'   .8'
    '88.  '::'  .88'
      'o8888888o'
    `,
    server_rack: `
 ┌───────────────────────┐
 │ [■] [■] [■] [■] [■]   │
 ├───────────────────────┤
 │ ▣ SYSTEM      [====]  │
 ├───────────────────────┤
 │ ▣ NETWORK     [||||]  │
 ├───────────────────────┤
 │ ▣ STORAGE     [    ]  │
 ├───────────────────────┤
 │ ◎ ◎ ◎ ◎ ░░░░░░░░░░░░  │
 └───────────────────────┘
    `,
    cyber_eye: `
      .▄▄▄▄▄▄▄▄.
   .▄████████████▄.
 .▄█████▀▀██▀▀█████▄.
 ▄█████    ██    █████▄
 ▐█████    ██    █████▌
 ▐█████▄▄▄▄██▄▄▄▄█████▌
 ▀████████████████████▀
 '▀████████████████▀'
   '▀████████████▀'
      '▀▀▀▀▀▀▀▀'
    `,
    satellite: `
        \\ | /
      '-.;;;.-'
     -==;;;;;==-
      .-';;;'-.
        / | \\
          |
         / \\
        /   \\
    `,
    drone: `
   \\       /
    \\ ___ /
  ---( ◉ )---
    / \\_/ \\
   /       \\
    `,
    mech_core: `
      / \\
    /     \\
   |\\     /|
   | \\   / |
   |  | |  |
   | /   \\ |
   |/     \\|
    \\     /
      \\ /
    `
};

const AsciiArt = ({ theme = 'server_rack', className = '', accent = 'aurora-cyan' }) => {
    const art = ART_LIBRARY[theme] || ART_LIBRARY.server_rack;

    return (
        <div className={\`inline-block \${className}\`}>
            <pre className={\`font-mono text-xs leading-tight select-none text-\${accent} opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md\`}>
                {art.trim()}
            </pre>
        </div>
    );
};

export default AsciiArt;
