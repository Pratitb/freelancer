import { LuBadgeCheck, LuClipboardPenLine, LuCode, LuMessagesSquare, LuPaintbrushVertical, LuRefreshCw, LuRocket, LuSettings, LuSmartphone, LuUsers } from "react-icons/lu"
import type { FeaturesType } from "./types"

export const clients = [{ id: 1, url: './client-1.png' }, { id: 2, url: './client-2.png' }, { id: 3, url: './client-3.png' },]
// export const whyPointers = [{ id: 1, point: 'your ideas are heard and considered' }, { id: 2, point: 'business and customer focus development' }, { id: 3, point: 'customer focused features' }, { id: 4, point: 'modern design' }, { id: 5, point: 'mobile and desktop development' }, { id: 6, point: 'fast loading' }, { id: 7, point: 'end to end delivery' }]

const exp = new Date().getFullYear() - 2022
export const counters = [{ id: 1, label: 'clients', count: 3 }, { id: 2, label: 'projects', count: 3 }, { id: 3, label: 'years exp.', count: exp }]

export const projects = [
    {
        id: 1,
        name: 'the tile theory - australia',
        desc: "australia's destination for premium tiles. excellent quality meets intelligent pricing.",
        url: 'https://thetiletheory.com.au',
        pages: 6,
    },
    {
        id: 2,
        name: 'go wood industries - india',
        desc: "we manufacture all our products from premium quality raw materials acquired from reliable sources.",
        url: 'https://gowoodind.co.in',
        pages: 2,
    },
    {
        id: 3,
        name: 'enarchitecture EN+AD - india',
        desc: "we combine environment and architecture to create humane spaces that inspire and endure co-ordination between built and un-built.",
        url: 'https://enarchitecture.in',
        pages: 7,
    },
]

export const services: FeaturesType[] = [
    {
        id: 1,
        label: 'website design',
        desc: 'clean, modern and customer focused designs',
        icon: LuClipboardPenLine,
    },
    {
        id: 2,
        label: 'development',
        desc: 'responsive, fast & scalable',
        icon: LuCode,
    },
    {
        id: 3,
        label: 'redesign',
        desc: 'modern upgrade to existing design',
        icon: LuRefreshCw,
    },
    {
        id: 4,
        label: 'maintainence',
        desc: 'regular support, new features and updates',
        icon: LuSettings,
    },
]

export const whyPointers = [
    {
        id: 1,
        label: 'your ideas are heard and considered',
        icon: LuMessagesSquare,
    },
    {
        id: 2,
        label: 'business & customer focus',
        icon: LuUsers,
    },
    {
        id: 3,
        label: 'modern & clean design',
        icon: LuPaintbrushVertical,
    },
    {
        id: 4,
        label: 'mobile and desktop ready',
        icon: LuSmartphone,
    },
    {
        id: 5,
        label: 'fast loading',
        icon: LuRocket,
    },
    {
        id: 6,
        label: 'end to end setup and delivery',
        icon: LuBadgeCheck,
    },
]