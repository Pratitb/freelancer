import type { IconType } from "react-icons"

const variants = {
    primary: 'text-white bg-primary',
    secondary: 'text-primary bg-white',
} as const

type ButtonVariant = keyof typeof variants

interface ButtonProps {
    name?: string
    trailIcon?: IconType
    leadIcon?: IconType
    variant?: ButtonVariant
    getBtnClick?: () => void
}

const Button = ({ name = "", trailIcon: TrailIcon, leadIcon: LeadIcon, variant = 'primary', getBtnClick }: ButtonProps) => {
    return (
        <div className={`btn ${variants[variant]}`} onClick={getBtnClick}>
            {TrailIcon && <TrailIcon size={16} />}
            {name && <span className="tracking-widest font-semibold">{name}</span>}
            {LeadIcon && <LeadIcon size={16} />}
        </div>
    )
}

export default Button