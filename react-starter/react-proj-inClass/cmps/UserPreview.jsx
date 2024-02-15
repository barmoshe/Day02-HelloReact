import { SimpleCounter } from "./SimpleCounter.jsx";

const { useState } = React

export function UserPreview() {

    const [user, setUser] = useState({
        fullname: 'Puki Reactof',
        score: 87
    })

    function onChangeScore(newScore) {
        // user.score = newScore
        // console.log('user from change score', user);
        // setUser(user)
        // setUser({ ...user, score: newScore })

        // !TIP! - when changing an object as a piece of state don't forget to spread all of its fields
        // so you wont lose any data and to create a new OBJECT so react will relise it needs to re-render this component
        setUser((prevUser) => {
            return {
                ...prevUser,
                score: newScore
            }
        })
    }

    console.log('user', user);
    return <section className="user-preview">
        <h2>{user.fullname}</h2>
        <h3>Score: {user.score}</h3>
        <button onClick={() => onChangeScore(0)}>Reset</button>

        {user.score < 90 && <SimpleCounter initialVal={user.score} onModified={onChangeScore} />}
        {/* <SimpleCounter initialVal={user.score}  /> */}
    </section>
}


