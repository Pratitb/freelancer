
interface ButtonProps {
    buttonName?: string
}
const Button = ({ buttonName }: ButtonProps) => {
    return (
        <div className="primaryBtn">{buttonName}</div>
    )
}

export default Button