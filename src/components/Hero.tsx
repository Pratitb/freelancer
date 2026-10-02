import type { IconType } from "react-icons"
import Button from "./Button"
import { LuArrowRight, LuMessageCircleMore } from "react-icons/lu"
import { counters } from "../utils/data"
import Counter from "./Counter"
import type { RefObject } from "react"
import { handleSectionScroll } from "../utils/actions"

interface HeroProps {
    icon: IconType
    preHead?: string
    head?: string
    desc?: string
    getWork?: RefObject<HTMLDivElement | null>
    getContact?: RefObject<HTMLDivElement | null>
    getHero?: RefObject<HTMLDivElement | null>
}
const Hero = ({ preHead, head, desc, getWork, getContact, getHero }: HeroProps) => {

    return (
        <>
            <div className="mb-8 rounded-xl bg-bgCard md:flex md:gap-16" ref={getHero}>
                <div className="">
                    <p className="subHead mb-2">{preHead}</p>
                    <p className="heroText">{head}</p>
                    <p className="mt-2 mb-8 text-subtle">{desc}</p>
                    <div className="flex gap-4">
                        <Button name="view work" leadIcon={LuArrowRight} getBtnClick={() => handleSectionScroll(getWork)} />
                        <Button name="lets talk" trailIcon={LuMessageCircleMore} getBtnClick={() => handleSectionScroll(getContact)} />
                    </div>
                    <div className="flex">
                        {counters?.map(item => <Counter key={item.id} count={item.count} label={item.label} />)}
                    </div>
                </div>
                <div>
                    <img src="./hero-4.png" className="hidden rounded-lg md:max-w-96 lg:max-w-120 md:flex" alt="hero banner" />
                </div>
            </div>
            {/* <img src="./hero-2.png" alt="hero image with an inspiration to change" className="image" /> */}
        </>
    )
}

export default Hero