'use client';

import { motion } from 'framer-motion';

interface Token {
    text: string;
    type: 'keyword' | 'function' | 'string' | 'property' | 'comment' | 'punctuation' | 'plain';
}

interface CodeLine {
    tokens: Token[];
}

// Exact code from reference page
const codeLines: CodeLine[] = [
    {
        tokens: [
            { text: 'const', type: 'keyword' },
            { text: ' developer = {', type: 'plain' },
        ],
    },
    {
        tokens: [
            { text: '  name: ', type: 'property' },
            { text: '"Santiago"', type: 'string' },
            { text: ',', type: 'punctuation' },
        ],
    },
    {
        tokens: [
            { text: '  role: ', type: 'property' },
            { text: '"Full Stack"', type: 'string' },
            { text: ',', type: 'punctuation' },
        ],
    },
    {
        tokens: [
            { text: '  skills: [', type: 'property' },
            { text: '"TypeScript"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"React"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"Next.js"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"Python"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"Java"', type: 'string' },
            { text: ', ', type: 'punctuation' },
            { text: '"C# Azure"', type: 'string' },
            { text: '],', type: 'punctuation' },
        ],
    },
    {
        tokens: [
            { text: '};', type: 'punctuation' },
        ],
    },
    { tokens: [] },
    {
        tokens: [
            { text: 'function', type: 'keyword' },
            { text: ' ', type: 'plain' },
            { text: 'buildFuture', type: 'function' },
            { text: '() {', type: 'punctuation' },
        ],
    },
    {
        tokens: [
            { text: '  ', type: 'plain' },
            { text: 'return', type: 'keyword' },
            { text: ' ', type: 'plain' },
            { text: 'new', type: 'keyword' },
            { text: ' ', type: 'plain' },
            { text: 'Innovation', type: 'function' },
            { text: '();', type: 'punctuation' },
        ],
    },
    {
        tokens: [
            { text: '}', type: 'punctuation' },
        ],
    },
];

const tokenColors: Record<Token['type'], string> = {
    keyword: 'text-[#C586C0]',
    function: 'text-[#DCDCAA]',
    string: 'text-[#CE9178]',
    property: 'text-[#9CDCFE]',
    comment: 'text-[#6A9955]',
    punctuation: 'text-[#D4D4D4]',
    plain: 'text-[#D4D4D4]',
};

export function CodeEditor() {
    return (
        <div className="flex-1 overflow-hidden bg-[#1e1e1e]">
            {/* Tab Bar */}
            <div className="h-9 bg-[#252526] border-b border-[#2d2d30] flex items-center px-2">
                <div className="flex items-center gap-2 px-3 py-1.5 text-gray-300 text-xs bg-[#1e1e1e] border-t-2 border-t-cyan-500/80 font-mono">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2L3 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" fill="#61DAFB" opacity="0.9" />
                    </svg>
                    <span className="font-medium">developer.js</span>
                </div>
            </div>

            {/* Code Content */}
            <div className="bg-[#1e1e1e] h-full overflow-y-auto text-[13px]" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                <div className="flex">
                    {/* Line Numbers */}
                    <div className="select-none text-right pr-6 pl-4 py-3 text-[#858585] bg-[#1e1e1e] min-w-[50px]">
                        {codeLines.map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.03, duration: 0.2 }}
                                className="leading-[1.7] h-[22px]"
                            >
                                {index + 1}
                            </motion.div>
                        ))}
                    </div>

                    {/* Code Lines */}
                    <div className="flex-1 py-3 pr-4">
                        {codeLines.map((line, lineIndex) => (
                            <motion.div
                                key={lineIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + lineIndex * 0.03, duration: 0.2 }}
                                className="leading-[1.7] h-[22px] whitespace-pre"
                            >
                                {line.tokens.length === 0 ? (
                                    '\u00A0'
                                ) : (
                                    line.tokens.map((token, tokenIndex) => (
                                        <span key={tokenIndex} className={tokenColors[token.type]}>
                                            {token.text}
                                        </span>
                                    ))
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
