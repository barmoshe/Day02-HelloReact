
const { useState, useEffect } = React


//!TIP!  Always destructure props!! Best for read-ability
export function SimpleCounter({ initialVal, onModified }) {
	//!TIP!  Divide your state into small maintanble pieces.
	const [count, setCount] = useState(initialVal || 10)
	const [isDark, setIsDark] = useState(false)

	//!TIP!  useEffect with an empty dependency array - only after first render
	useEffect(() => {
		console.log('Mounted')

		//!TIP!  return a function will happen when the componend is removed 
		return () => {
			console.log('Unmounted')
		}
	}, [])

	// !TIP! useEffect with entities in the dependency array will happen after first render AND after each change
	useEffect(() => {
		console.log('Updated');
		document.title = count
		if (onModified) onModified(count)
	}, [count])

	function onChangeCount(diff) {
		// !TIP! 2 ways to update state -> send a new value or a CB function
		// SET STATE IS AN ASYNC ACTION. 
		// SO WE WILL ALWAYS USE a CB FUNCTION when RELYING on the previous piece of STATE

		// option 1 here doesnt work
		// setCount(count + diff)
		// setCount(count + diff)
		// setCount(count + diff)

		// option 2 does!
		// setCount(prevCount => prevCount + diff) //11
		// setCount(prevCount => prevCount + diff) //12
		setCount(prevCount => prevCount + diff) //13
	}

	// let count = 0
	// console.log(isDark);
	console.log('RENDERED');
	const dynClass = isDark ? 'dark' : 'light'
	// return <div className="simple-counter" ${dynClass}`}>
	return <div className={`simple-counter ${dynClass}`}>
		<button onClick={() => {
			// count++
			// console.log('hi', count)
			onChangeCount(1)
		}}>+</button>
		<span>{count}</span>
		<button onClick={() => onChangeCount(-1)}>-</button>

		<div>
			<button onClick={() => setIsDark(!isDark)}>Toggle dark mode</button>
		</div>
	</div>
}