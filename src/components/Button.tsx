type ButtonProps = {
    label?: string,
    backgroundColor?: string,
    size?: 'sm' | 'md' | 'lg',
    onClick: () => void,
}

export function Button({
    label,
    backgroundColor = 'white',
    size = 'md',
    onClick,
}: ButtonProps) {
    let scale = 1

    if (size === 'sm') scale = 0.75
    if (size === 'lg') scale = 1.5

    const style = {
        backgroundColor,
        borderRadius: '5px',
        padding: `${scale * 1}rem ${scale * 2}rem`,
    }

    return (
        <button
            style={style}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
