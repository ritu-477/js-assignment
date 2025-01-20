const Heading = ({ classStyle, text,}) => {
    return (
        <h2 className={`${classStyle} xl:text-5xl font-semibold md:text-4xl text-3xl`}>{text}</h2>
    )
}

export default Heading