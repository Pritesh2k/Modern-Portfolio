import React from 'react'

function MagicButton({
    title,
    icon,
    position,
    handleClick,
    otherClasses
}: {
    title: string,
    icon?: React.ReactNode,
    position?: string,
    handleClick?: () => void,
    otherClasses?: string
}) {
    return (
        <button
            className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10 drop-shadow-lg"
            onClick={handleClick}
        >
            {/* animated gradient background */}
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

            {/* button content with text shadow */}
            <span
                className={`
                    inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
                    opacity-99 bg-white-200 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-3
                    ${otherClasses}
                    [text-shadow:2px_2px_6px_rgba(0,0,0,0.35)]
                `}
            >
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </span>
        </button>
    )
}

export default MagicButton
