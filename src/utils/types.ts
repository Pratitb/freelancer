import type { RefObject } from "react"
import type { IconType } from "react-icons"

export interface FeaturesType {
    id?: number
    label?: string
    desc?: string
    icon?: IconType
}

export interface MenuType {
    id?: number
    label?: string
    icon?: IconType
}

export interface Sections {
    home: RefObject<HTMLDivElement | null>;
    services: RefObject<HTMLDivElement | null>;
    work: RefObject<HTMLDivElement | null>;
    why: RefObject<HTMLDivElement | null>;
    contact: RefObject<HTMLDivElement | null>;
};