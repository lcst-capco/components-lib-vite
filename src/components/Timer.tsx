import { useEffect, useRef, useState } from "react"
import { Button } from "./Button"

/** leverage ref attribute on an instance variable to keep track of a state
 *  without causing the app to rerender
 */
export function Timer() {
    const [counter, setCounter] = useState<number>(0)
    const [toggle, setToggle] = useState<boolean>(false)

    const ref = useRef<NodeJS.Timeout | null>(null)

    const toggleTimer = () => {
        setToggle(!toggle)
    }

    const resetTimer = () => {
        setToggle(false)
        setCounter(0)
    }

    useEffect(() => {
        ref.current = setInterval(() => {
            if (toggle) setCounter(state => state + 1)
        }, 1000)

        return () => {
            if (ref.current) clearInterval(ref.current)
        }
    },[toggle])

    return (
        <div>
            <p>Counter: {counter}</p>
            <Button label={toggle ? 'Stop' : 'Start'} onClick={toggleTimer} size = 'sm'/>
            <Button label="Reset" onClick={resetTimer} size="sm" />
        </div>
    )
}
