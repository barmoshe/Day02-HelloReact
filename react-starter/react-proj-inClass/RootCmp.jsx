
import { CarApp } from './cmps/CarApp.jsx'
import { Home } from './cmps/Home.jsx'

export function RootCmp() {

    return <section className="app">
        <header className="app-header">
            <h1>Hello react!</h1>
        </header>

        <section className="container">
            <Home />
        </section>
{/* 
        <section className="container">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
            <img src="./assets/img/1.jpeg" />
        </section> */}
    </section>
}