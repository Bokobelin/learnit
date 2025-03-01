"use client";
import React, { useState } from 'react';

interface CodeBlockProps {
    code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="relative group">
            <pre className="bg-gray-800 text-white p-4 rounded-md transition-transform transform group-hover:scale-105">
                <code>{code}</code>
            </pre>
            <button
                onClick={handleCopy}
                className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
            >
                {isCopied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};

export default CodeBlock;