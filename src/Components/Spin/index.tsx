type SpingProps = {
    size?: number;

}

export function Spin({size}:SpingProps){

    const className = `animate-spin rounded-full`
    return (
       
            <div
            
            className={className}
            style={{
            width: size ? size : 64,
            height: size ? size : 64,
            background: `conic-gradient(
                #4d7c4a 0deg 60deg,       /* parte escura */
                transparent 60deg 70deg, /* espaço */
                #7ce05c 70deg 350deg,     /* parte clara */
                transparent 350deg 360deg  /* espaço final */
            )`,
            mask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 100%)',
            WebkitMask: 'radial-gradient(farthest-side, transparent calc(100% - 4px), black 100%)',
            }}
        />
    )
}