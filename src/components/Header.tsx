import type { RefObject } from "react"

interface HeaderProps {
    name?: string
    role?: string
    getSection: RefObject<HTMLDivElement | null>
}

const Header = ({ name, role, getSection }: HeaderProps) => {
    return (
        <div className="flex gap-2 items-center mb-8" ref={getSection}>
            <img src="./profile-3.png" alt="" className="w-24 rounded-full" />
            <div>
                <p className="headText">{name}</p>
                <p className="subHead">{role}</p>
            </div>
        </div>
    )
}

export default Header