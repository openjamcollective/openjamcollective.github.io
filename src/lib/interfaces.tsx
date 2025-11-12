import { MediaType } from "./util"

export interface PersonProps {
    name: string
    about: string
    social?: string
    fb?: string
    media?: string
    photo_style?: string
}

export interface PopProps {
    individuals?: string []
    year: number
    groups?: string []
    events?: EventProps[]
}

export interface InfoProps {
    title?: string
    info: string[]
}

export interface EventProps {
    name: string
    about: string
    date: Date[]
    location: string
    media?: string
    media2?: string
    link?: string
    video?: string
    instagram?: string
    facebook?: string
    info?: string
    role?: string
    event: MediaType
    affiliates?: AffiliateProps[]
    attendees?: number
}

export interface AffiliateProps {
    name: string
    fund: number
}

