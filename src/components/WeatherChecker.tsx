// prop render pattern

import { ReactNode, useState } from "react";

type InputType = {
    render: (value: string) => ReactNode
}

const InputField = ({ render }: InputType) => {
    const [value, setValue] = useState('')

    return (
        <>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Temp in °C"
            />
            {render(value)}
        </>
    )
}

const Farenheit = ({ value = 0 }) => {
    return (
        <div>{(value * 9) / 5 + 32}°F</div>
    )
}

const Kelvin = ({ value = 0 }) => {
    return (
        <div>{value + 273.15} K</div>
    )
}

export function WeatherChecker() {
    return (
        <InputField
            render={(value: string) => (
                <>
                    <Farenheit value={Number(value)} />
                    <Kelvin value={Number(value)} />
                </>
            )}
        />
    )
}
