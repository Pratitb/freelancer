import type { IconType } from "react-icons"

interface ButtonProps {
    buttonName?: string
    trailIcon?: IconType
    leadIcon?: IconType
}

const Button = ({ buttonName = "", trailIcon: TrailIcon, leadIcon: LeadIcon }: ButtonProps) => {
    return (
        <div className="primaryBtn">
            {TrailIcon && <TrailIcon size={16} />}
            {buttonName && <span className="tracking-widest">{buttonName}</span>}
            {LeadIcon && <LeadIcon size={16} />}
        </div>
    )
}

export default Button