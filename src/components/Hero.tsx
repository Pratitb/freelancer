import type { IconType } from "react-icons"
import Button from "./Button"
import { LuArrowRight, LuMessageCircleMore } from "react-icons/lu"
import { counters } from "../utils/data"
import Counter from "./Counter"

interface HeroProps {
    icon: IconType
    preHead?: string
    head?: string
    desc?: string
}
const Hero = ({ preHead, head, desc }: HeroProps) => {
    return (
        <>
            <div className="mb-16 rounded-xl bg-bgCard">
                {/*  h-170 bg-[url('./hero-1.png')] bg-cover bg-no-repeat */}
                <p className="subHead mb-2">{preHead}</p>
                {/* <Icon size={36} className="bg-iconBg rounded-full p-2 mb-2" /> */}
                <p className="heroText">{head}</p>
                <p className="mt-2 mb-8 text-subtle">{desc}</p>
                <div className="flex gap-4">
                    <Button buttonName="view work" leadIcon={LuArrowRight} />
                    <Button buttonName="lets talk" trailIcon={LuMessageCircleMore} />
                </div>
                <div className="flex">
                    {counters?.map(item => <Counter key={item.id} count={item.count} label={item.label} />)}
                </div>
            </div>
            {/* <img src="./hero-2.png" alt="hero image with an inspiration to change" className="image" /> */}
        </>
    )
}

export default Hero