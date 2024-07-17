const GredientButton = ({ children, className, ...rest }) => {
    return (
        <button
            className={`px-6 py-3 rounded-full font-figtree border font-semibold text-[#ECF9FD] text-base bg-[#2D419F] bg-gradient-to-tl from-[#7209B7] from-15.6% to-[#4361EE] to-84.4% transition-all hover:bg-gradient-to-tr ${className}`}
            {...rest}
        >
            {children}
        </button>
    )
}

export default GredientButton