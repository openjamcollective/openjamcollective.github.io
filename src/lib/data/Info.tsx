import * as Module from '../interfaces';

export const mission: Module.InfoProps = {
    title: 'Mission',
    info: ['Open Jam Collective aims to keep the legacy of street dance culture, specifically “popping”, alive by creating spaces and opportunities for exchange, knowledge-sharing and growth.']
}

export const objectives: Module.InfoProps = {
    title: 'Objectives',
    info: ['Create spaces for beginner and experienced street dancers of all ages to get together, express themselves, and build relationships',
    'Provide opportunities for the broader community to learn, engage, and/or participate in street dance and street dance culture',
    'Organize a one-time festival of street dance in Toronto, Canada',
    'Build a relationship with the City of Toronto in hopes of receiving direct and/or financial support for street dancers in the future',
    'Be a point of contact for out-of-town dancers to learn and/or connect with the street dance community in Toronto',
    'Be a part of fostering and promoting street dance culture and resistance in the broader community'
]
}

export const whoweare: Module.InfoProps = {
    title: 'Who We Are',
    info: ['Open Jam Collective (formerly Oatmilk & Jam) was formed by Luis Miguel, Keith Dang, Diana Da Silva and Tamami Gavrilovic in response to the closures of indoor dance spaces and integral community dance events for street dancers during the pandemic. During this time, we coordinated and facilitated organized sessions, event trips, and competitions as a way to maintain connection with each other and keep the legacy of street dance culture alive. Currently, we decided we want to continue to do the work of preserving street dance culture as well as expand it! ']
}

export const orgInfoList: Module.InfoProps[] = [mission, objectives, whoweare];