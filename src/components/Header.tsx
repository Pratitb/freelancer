
interface HeaderProps {
    name?: string
    role?: string
}

const Header = ({ name, role }: HeaderProps) => {
    return (
        <div className="flex gap-2 items-center mb-8">
            <img src="./profile-3.png" alt="" className="w-12 rounded-full" />
            <div>
                <p className="headText">{name}</p>
                <p className="subHead mt-1">{role}</p>
            </div>
        </div>
    )
}

export default Header