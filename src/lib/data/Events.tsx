import * as Module from '../interfaces';
import botbp from '../images/BOTBPoster.png';
import cotbp from '../images/COTB.png';
import potbp from '../images/potb.jpg';
import potbp2 from '../images/potb2.png';
import topop from '../images/topopping.jpeg';
import daven from '../images/dp.png';
import daven2 from '../images/dpnchc.jpg';
import fffp from '../images/Funk_4_Fun.jpg';
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
const coin8 = "Coin 8 Studio";
const dvpch = "Davenport-Perth Neighbourhood and Community Health Centre";

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

export const potb: Module.EventProps = {
    name: 'Party On The Block',
    about: 'Launch party in partnership with various dance collectives',
    role: 'Organizer',
    date: [new Date(2023, 1, 10)],
    location: coin8,
    media: potbp,
    instagram: 'p/Cn4gbq8Lzk6/',
    facebook: '1116902578989034',
    media2: potbp2,
    link: 'cotb',
    event: MediaType.Normal
}

export const topopping: Module.EventProps = {
    name: 'Toronto Popping Battle Series',
    about: '1v1 Popping Battles',
    role: 'Sponsor',
    date: [new Date(2022, 10, 25), new Date(2023, 0, 20), new Date(2023, 2, 17)],
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
    location: dvpch,
    media: daven,
    media2: daven2,
    instagram: 'p/CmZx7VBv3G0/',
    link: 'sessions',
    event: MediaType.Program
}

export const fff: Module.EventProps = {
    name: 'Funk 4 Fun',
    about: 'Workshops & Battle',
    date: [new Date(2023, 2, 1), new Date(2023, 2, 22)],
    location: dvpch,
    media: fffp,
    instagram: 'p/Co3TsXQt6wn/',
    facebook: '1534855293677206',
    event: MediaType.Festival
}




export const event_unsorted: Module.EventProps[] = [potb, cotb, dperth, topopping, botb, fff];

export const eventlist: Module.EventProps[] = Util.sortEventsByDate(event_unsorted);