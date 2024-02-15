import { SimpleCounter } from "./SimpleCounter.jsx"
import { UserPreview } from './UserPreview.jsx'
import { SimpleTimer } from './SimpleTimer.jsx';
import { CarApp } from "./CarApp.jsx";


export function Home() {
    //!TIP!  Its best to comment out each cmp on its own to best be able to see what it does!

    function onDrink() {
        console.log('Drinking!');
    }

    return <section className="home">
        <h2>Home Sweet Home</h2>
        {/* <SimpleCounter initialVal={100} onModified={onDrink}/> */}
        {/* <SimpleCounter initialVal={50} onModified={() => alert('Ooof')}/> */}
        {/* <SimpleCounter /> */}

        {/* <UserPreview /> */}
        {/* <SimpleTimer /> */}
        <CarApp/>

    </section>
}


