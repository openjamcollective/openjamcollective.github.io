import * as Module from '../interfaces';

export const mission: Module.InfoProps = {
    title: 'Our Mission',
    info: ['Open Jam Collective works to keep the spirit of street dance culture—especially popping—alive by creating spaces where people can share, learn, and grow together.']
}

export const objectives: Module.InfoProps = {
    title: 'Our Goals',
    info: ['<strong>Bring dancers together</strong>—from beginners to seasoned pros—to connect, create, and inspire each other.',
    '<strong>Open doors for the community</strong> to learn, participate, and level up their skills by connecting Toronto dancers with international street dance artists.',
    '<strong>Host an annual street dance festival</strong> in Toronto that draws talent and fans from around the world.',
    '<strong>Build strong ties with the City of Toronto</strong> to secure support for street dancers and the culture we’re passionate about.',
    '<strong>Be a hub for visiting dancers</strong> to connect, collaborate, and build a global support network.',
    '<strong>Celebrate and grow street dance culture</strong> as a force for creativity, community, and positive change.'
]
}

export const whoweare: Module.InfoProps = {
    title: 'Who We Are',
    info: ['In 2022, Open Jam Collective (formerly Oatmilk & Jam) was formed by Luis (Cheech) Miguel, Keith Dang, Diana Da Silva and Tamami Gavrilovic decided street dance couldn’t be stopped—even by a pandemic! When indoor dance spaces and community events shut down, we moved the beats outside, bringing people together for park sessions, dance battles, and event trips to keep the legacy alive.',
        'In 2023, we decided to keep the momentum going and grow as a collective dedicated to celebrating and sharing street dance culture. Since then, Tamami has stepped back, and AJ Harper has jumped in to join the team! '
    ]
}

export const orgInfoList: Module.InfoProps[] = [mission, objectives, whoweare];