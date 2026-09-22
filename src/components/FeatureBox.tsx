import type { FeaturesType } from "../utils/types"
import FeaturePill from "./FeaturePill"

interface BoxProps {
    preHead?: string
    head?: string
    desc?: string
    getFeatures?: FeaturesType[]
}
const FeatureBox = ({ preHead, head, desc, getFeatures }: BoxProps) => {
    return (
        <div className="bg-bgCard mb-16">
            {preHead && <p className="subHead mb-2">{preHead}</p>}
            {head && <p className="heroText">{head}</p>}
            {desc && <p className="text-subtle capitalize">{desc}</p>}
            <div className="mt-8 flex flex-col gap-4">
                {getFeatures?.map(item => <FeaturePill key={item.id} icon={item.icon} head={item.label} desc={item.desc} />)}
            </div>
        </div>
    )
}

export default FeatureBox