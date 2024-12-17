type Prop = {
    logoText: string
}

const Header = ({ logoText }: Prop) => {
    return (
        <>
            <h1>{logoText}</h1>
        </>
    )
}

export default Header