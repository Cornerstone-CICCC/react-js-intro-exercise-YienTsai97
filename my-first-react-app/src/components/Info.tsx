type Prop = {
    firstname: string,
    lastname: string,
    age: number,
    isStudent: boolean
}

const Info = ({ firstname, lastname, age, isStudent }: Prop) => {
    return (
        <>
            <div>
                <p>Name: {firstname} {lastname}</p>
                <p>age: {age}</p>
                <p>Is Student: {isStudent ? "Yes" : "No"}</p>
            </div>
        </>
    )
}

export default Info