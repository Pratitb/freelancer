import type { IconType } from "react-icons"
import Button from "./Button"

interface HeroProps {
    icon: IconType
    preHead?: string
    head?: string
    desc?: string
}
const Card = ({ icon: Icon, head, desc }: HeroProps) => {
    return (
        <>
            <div className="mt-4 mb-16 rounded-xl p-8 bg-bgCard">
                {/*  h-170 bg-[url('./hero-1.png')] bg-cover bg-no-repeat */}
                {/* <p className="text-secondary uppercase text-xs">{preHead}</p> */}
                <Icon size={36} className="bg-iconBg rounded-full p-2 mb-2" />
                <p className="heroText">{head}</p>
                <p className="capitalize mt-2 mb-8">{desc}</p>
                <Button buttonName="my work" />
            </div>
            {/* <img src="./hero-2.png" alt="hero image with an inspiration to change" className="image" /> */}
        </>
    )
}

export default Card