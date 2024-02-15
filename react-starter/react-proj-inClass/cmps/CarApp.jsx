const { useState, useEffect } = React
import { carService } from '../services/car.service.js'

export function CarApp() {
    const [cars, setCars] = useState(null)

    useEffect(() => {
        //!TIP!  We get the data from the service only ONCE and only AFTER the component is rendered.
        // In the meantime we show a cute loader :)
        loadCars()
    }, [])

    async function loadCars() {
        const cars = await carService.query()
        setCars(cars)
    }

    async function onRemoveCar(carId) {
        //!TIP! When removing a car -> 
        // Delete from the storage using a service -> 
        await carService.remove(carId)

        // Update the state accordingly to see the view changes.
        // Always use prevState when relying on the current state for changes
        // Filter method return a new array WITHOUT the wanted element to delete :)
        setCars(prevCars => prevCars.filter(car => car.id !== carId))
    }

    if (!cars) return <div>Loading..</div>
    return (
        <section className="car-app">
            <h2>List of Cars</h2>
            <ul>
                {
                    cars.map(car => <li key={car.id}>
                        {car.vendor} - {car.maxSpeed}
                        <button onClick={() => onRemoveCar(car.id)}>X</button>
                    </li>)
                }
            </ul>
        </section>
    )
}