'use client';

import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

interface TerminalLine {
    text: string;
    type?: 'command' | 'output' | 'success' | 'info';
}

const terminalLogs: TerminalLine[] = [
    { text: '$ npm run dev', type: 'command' },
    { text: '', type: 'output' },
    { text: '> portfolio@1.0.0 dev', type: 'info' },
    { text: '> next dev', type: 'info' },
    { text: '', type: 'output' },
    { text: '  ▲ Next.js 15.0.0', type: 'info' },
    { text: '  - Local:        http://localhost:3000', type: 'success' },
    { text: '', type: 'output' },
    { text: ' ✓ Ready in 1.8s', type: 'success' },
];

export function TerminalPanel() {
    return (
        <div className="h-40 bg-[#1e1e1e] border-t border-[#2d2d30] flex flex-col">
            {/* Terminal Header */}
            <div className="h-9 bg-[#252526] border-b border-[#2d2d30] flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-xs text-gray-300 font-medium">bash</span>
                </div>
            </div>

            {/* Terminal Content */}
            <div className="flex-1 overflow-y-auto p-3 font-mono text-[13px] leading-relaxed">
                {terminalLogs.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 + index * 0.08, duration: 0.2 }}
                        className={`${line.type === 'command'
                                ? 'text-cyan-400'
                                : line.type === 'success'
                                    ? 'text-green-400'
                                    : line.type === 'info'
                                        ? 'text-gray-400'
                                        : 'text-gray-500'
                            }`}
                    >
                        {line.text || '\u00A0'}
                    </motion.div>
                ))}
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ delay: 2.5, duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
                    className="inline-block w-2 h-3.5 bg-cyan-400 ml-0.5"
                />
            </div>
        </div>
    );
}
