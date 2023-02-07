import * as Module from '../interfaces';
import botbp from '../images/BOTBPoster.png';
import cotbp from '../images/COTB.png';
import topop from '../images/topopping.jpeg';
import daven from '../images/dp.png';
import daven2 from '../images/dpnchc.jpg';
import * as Util from '../util';
import { MediaType } from '../util';

const vickie: Module.AffiliateProps = {
    name: 'Vickie',
    role: 'Creative Director'
}

const curtis: Module.AffiliateProps = {
    name: 'Curtis',
    role: 'Creative Director'
}
const bentway = "The Bentway Studio";

export const botb: Module.EventProps = {
    name: 'Boogie On The Block',
    about: '1v1 Popping Battle',
    role: 'Organizer',
    date: [new Date(2022, 3, 30)],
    location: bentway,
    media: botbp,
    instagram: '/p/CdAZ_6nuVT-/',
    facebook: '970824263797543',
    video: '4Cr8iaauP4U',
    link: 'botb',
    event: MediaType.Normal
}

export const cotb: Module.EventProps = {
    name: 'Cypher On The Block',
    about: 'Popping Cypher Jam',
    role: 'Organizer',
    date: [new Date(2022, 8, 24)],
    location: bentway,
    media: cotbp,
    instagram: 'p/CjisSNHJ3Mz/',
    facebook: '431711305467858',
    video: 'd2mMJJVw_mk',
    link: 'cotb',
    event: MediaType.Normal
}

export const topopping: Module.EventProps = {
    name: 'Toronto Popping Battle Series',
    about: '1v1 Popping Battles',
    role: 'Sponsor',
    date: [new Date(2022, 10, 25), new Date(2023, 0, 20)],
    location: 'Studio North Toronto',
    media: topop,
    instagram: 'p/CkwhtZ-toKU/',
    video: 'yt46sesZX5w',
    link: 'topopping',
    event: MediaType.Series
}

export const dperth: Module.EventProps = {
    name: 'Street Dance Drop-In Sessions',
    about: 'Weekly Program',
    date: [new Date(2023, 0, 4), new Date(2022, 10, 2)],
    location: 'Davenport-Perth Neighbourhood and Community Health Centre',
    media: daven,
    media2: daven2,
    instagram: 'p/CmZx7VBv3G0/',
    link: 'sessions',
    event: MediaType.Program
}




export const event_unsorted: Module.EventProps[] = [cotb, dperth, topopping, botb];

export const eventlist: Module.EventProps[] = Util.sortEventsByDate(event_unsorted);