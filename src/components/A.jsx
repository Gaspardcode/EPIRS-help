function A({ href, children }){
    return(
        <a
            href={href}
            target={"_blank"}
            className={"text-blue-600 hover:underline"}
        >
            {children}
        </a>)
}

export default A;