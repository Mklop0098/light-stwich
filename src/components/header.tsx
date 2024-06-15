import { useState } from "react"
import { Toggle } from "./Toggle"

export const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <div className="h-[60px] flex flex-row items-center justify-center  ">
            <Toggle toggle={toggle} onClick={handleClick}/>
        </div>
    )

}