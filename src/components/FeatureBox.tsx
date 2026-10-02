import type { RefObject } from "react"
import type { FeaturesType } from "../utils/types"
import FeaturePill from "./FeaturePill"

interface BoxProps {
    preHead?: string
    head?: string
    desc?: string
    getFeatures?: FeaturesType[]
    getSection?: RefObject<HTMLDivElement | null>
}
const FeatureBox = ({ preHead, head, desc, getFeatures, getSection }: BoxProps) => {
    return (
        <div className="bg-bgCard mb-16 pt-8 md:flex md:gap-16" ref={getSection}>
            <div className="flex-1">
                {preHead && <p className="subHead mb-2">{preHead}</p>}
                {head && <p className="heroText">{head}</p>}
                {desc && <p className="text-subtle capitalize">{desc}</p>}
            </div>
            <div className="mt-8 flex flex-col gap-4 flex-1">
                {getFeatures?.map(item => <FeaturePill key={item.id} icon={item.icon} head={item.label} desc={item.desc} />)}
            </div>
        </div>
    )
}

export default FeatureBox