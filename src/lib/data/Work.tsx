import * as Module from '../interfaces';
import oraclePhoto from '../images/oracle3.png';
import fmsPhoto from '../images/fixmestick.png';
import nokiaPhoto from '../images/nokia2.png';
import smiths from '../images/smithlogo.png';
import mcgillPhoto from '../images/mcgill3.png';

export const oracle: Module.WorkProps = {
    title: 'IC2 Software Developer',
    company: 'Oracle',
    info: ['feature & test driven development in Netsuite’s Order To Cash Team, which involves its Pricing, Sales Order, Return Authorization & Subscriptions applications for its UI and backend',
        'Consistently resolved all production issues investigation and maintained the Service level Target (SLT) of above 90%, a benchmark achieved by fewer than 10% of teams',
        'Created architectural design schematic of the pricing code, allowing developers to have a high-level view of the hundreds of classes from UI, fragments, to database schemas. Created automated scripts for CRUD via suitescript'],
    date: [new Date(2018,11),new Date(2025,9)],
    languages: ['Java', 'Typescript', 'SQl'],
    location: 'Waterloo, ON',
    achievements: ['Outstanding team award for 2024', 
        '1st place in two hackathons: 2019 for a SQL Analyzer of Netsuite application & 2025 adding AI chat analyzer in Netsuite application',
        'Promoted from IC1 to IC2 in 2021 from successful independent feature work in subscriptions'],
    logo: oraclePhoto
}

export const fixmestick: Module.WorkProps = {
    title: 'Software Developer',
    company: 'FixMeStick',
    info: ['Resolve bugs and improve performance, dealing with multiple aspects such as Encryption, Encoding Booting, and Device compatibility using Object Oriented Concepts',
        'Improved front end of applications',
        'Automated scripts to retrieve and diagnose user application information',
    'Tier 2 Support to resolve direct technical issues with the FixMeStick device'],
    date: [new Date(2017, 6), new Date(2018, 5)],
    languages: ['C++','Javascript','Nodejs','Html & Css','Bash'],
    location: 'Montreal, QC',
    logo: fmsPhoto
}

export const nokia: Module.WorkProps = {
    title: 'Hardware Support Engineer Intern',
    company: 'Nokia',
    info: ['Hardware verification including high speed signal integrity analysis through oscilloscopes, network analyzers, and telecom interface. Thermal analysis, stress testing, frequency response',
        'Worked closely with engineers to assist to improve prototype design and series production'],
    date: [new Date(2016, 5), new Date(2016, 8)],
    location: 'Kanata, ON',
    logo: nokiaPhoto
}

export const reflex: Module.WorkProps = {
    title: 'Hardware Engineer Intern',
    company: 'Reflex Photonics/ Smiths Interconnect',
    info: ['Implemented quality control and assurance processes to analyze product prototype design of multimode short range optical transceivers used for high-speed data transmission',
        'Performed measurements of hardware characteristics using oscilloscopes, power meters, and attenuators to examine bit error ratios, sensitivity, and thermal testing'],
    date: [new Date(2015, 1), new Date(2015, 8)],
    location: 'Montreal, QC',
    logo: smiths
}

export const mcgill: Module.WorkProps = {
    title: 'Bachelors of Electrical Engineering',
    company: 'McGill',
    info: ['3.24 GPA'],
    date: [new Date(2012, 9), new Date(2017, 4)],
    location: 'Montreal, QC',
    logo: mcgillPhoto
}

// export const ojc: Module.WorkProps = {
//     title: 'Co-Founder, Dancer, & Community Events Organizer',
//     company: 'Open Jam Collective',
//     info: ['A street dance collective of four. Lead and acquired +$50k in funding to organize 12 community dance events, each over 100+ attendees/participants, and 5 monthly programs, all free',
//         'Managed and fostered relationships with key sponsors to garner financial support including with We Are Family Foundation, Redbull, City of Toronto, Toronto Arts Council'],
//     date: [new Date(2022, 3), new Date()],
//     location: 'Toronto, ON',
// }
var backend_languages = ['C++', 'Java', 'Python', 'Spring', 'Spring Boot', 'SQL'];
var frontend_languages = ['React', 'Typescript', 'NodeJs', 'Javascript', 'Html & Css'];
var operatin_systers = ['Windows', 'Mac', 'Linux'];
var tools = ['AWS', 'Google+', 'Express', 'Stripe', 'SendGrid','MongoDB', 'Postman']
var dance_awards = ['1st place: 3v3 Open Styles Unity Festival 2023 & 1v1 Toronto Popping 2020', '2 Finals, 4 Semi Finals, Top 8 Popping in Vancouver & Boston, Toronto Krump, and Waving International'];

export const workList: Module.WorkProps[] = [oracle, fixmestick, nokia, reflex];