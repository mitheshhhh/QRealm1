"use client"

import katex from "katex"

interface MathProps {
    tex: string
    className?: string
}

export function InlineMath({ tex, className = "" }: MathProps) {
    let html = ""
    try {
        html = katex.renderToString(tex, {
            displayMode: false,
            throwOnError: false,
            trust: true,
        })
    } catch {
        return <span className={className}>{tex}</span>
    }
    return (
        <span
            className={`katex-inline ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}

export function BlockMath({ tex, className = "" }: MathProps) {
    let html = ""
    try {
        html = katex.renderToString(tex, {
            displayMode: true,
            throwOnError: false,
            trust: true,
        })
    } catch {
        return <div className={`text-center font-mono text-saffron-300/80 ${className}`}>{tex}</div>
    }
    return (
        <div
            className={`katex-block overflow-x-auto ${className}`}
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}
