import type { RefObject } from "react"

export const handleSectionScroll = (section: RefObject<HTMLDivElement | null> | undefined) => {
    section?.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
}