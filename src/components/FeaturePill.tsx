import type { IconType } from "react-icons"

interface FeatureProps {
    icon?: IconType
    head?: string
    desc?: string
}

const FeaturePill = ({ icon: Icon, head, desc }: FeatureProps) => {
    return (
        <div className="flex items-center gap-4">
            {Icon && <Icon size={48} className="bg-light rounded-full p-3" />}
            <div>
                {head && <p className="font-semibold text-lg capitalize">{head}</p>}
                {desc && <p className="text-subtle">{desc}</p>}
            </div>
        </div>
    )
}

export default FeaturePill