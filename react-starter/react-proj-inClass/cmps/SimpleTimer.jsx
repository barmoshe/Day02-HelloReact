const { useState, useEffect, useRef } = React



export function SimpleTimer() {
    //!TIP! State is used to store data - that when we change it will trigger a re-render of the component (by a new V-dom etc..)
    const [time, setTime] = useState(0)

    //!TIP! Ref is used to store data between renders 
    const intervalIdRef = useRef()

    //!TIP! reguler vars change on every render
    let x = 'hi'

    //!TIP! useEffect that will happen only after the first render
    useEffect(() => {
        x = 'bye'

        console.log(intervalIdRef);
         intervalIdRef.current = setInterval(() => {
            //0 + 1
            // console.log('time', time);
            // setTime(time + 1)
            setTime((prevTime) => {
                // console.log('prevTime', prevTime);
                return prevTime + 1
            })
        }, 1000)

        //!TIP! The callback return from useEffect will happen when a component unMounts
        return () => {
            onStopTimer()
        }
    }, [])
    
    
    function onStopTimer() {
        // console.log('STOP', intervalIdRef);
        clearInterval(intervalIdRef.current)
    } 
    
    
    return <section className="simple-timer">
        <span>{time}</span>
        <button onClick={onStopTimer}>Stop</button>
    </section>
}
