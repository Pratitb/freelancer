import { handleSectionScroll } from "../utils/actions"
import type { MenuType, Sections } from "../utils/types"

interface MenuProps {
    getLinks?: MenuType[]
    active?: string
    getSections: Sections
    getActiveFn: (label: string) => void
}

const Menu = ({ getLinks, active, getSections, getActiveFn }: MenuProps) => {
    const getSectionRef = (label?: string) => {
        const sectionKey = (label?.toLowerCase() ?? "home") as keyof Sections;
        return getSections[sectionKey] ?? getSections.home;
    };

    return (
        <div className="fixed bottom-2 left-[50%] translate-[-50%] bg-bgCard flex rounded-4xl p-1.5 overflow-x-auto max-w-68 sm:max-w-full shadow-xl whitespace-nowrap border border-subtle">
            {getLinks?.map(item =>
                <div key={item.id} className={`px-3 py-2 rounded-4xl ${active === item.label ? 'bg-primary text-white' : ''}`} onClick={() => {
                    handleSectionScroll(getSectionRef(item.label))
                    getActiveFn(item.label ?? 'home')
                }}>
                    <p className={`capitalize ${active === item.label ? '' : ''}`}>{item.label}</p>
                </div>
            )}
        </div>
    )
}

export default Menu