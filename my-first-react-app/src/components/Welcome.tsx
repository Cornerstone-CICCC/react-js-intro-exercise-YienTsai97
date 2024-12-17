type Prop = {
    greeting: string
}


const Welcome = ({ greeting }: Prop) => {
    return (
        <>
            <p>{greeting}</p>
        </>
    )
}

export default Welcome