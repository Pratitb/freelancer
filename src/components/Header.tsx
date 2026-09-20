
interface HeaderProps {
    name?: string
    role?: string
}

const Header = ({ name, role }: HeaderProps) => {
    return (
        <div className="flex gap-2 items-center">
            <img src="./profile-3.png" alt="" className="w-12 rounded-full" />
            <div>
                <p className="headText">{name}</p>
                <p className="capitalize">{role}</p>
            </div>
        </div>
    )
}

export default Header