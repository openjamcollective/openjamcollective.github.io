import * as Module from '../interfaces';
import * as UtilConst from '../util';
import kd from '../images/Keith2.jpg';
import DIANA_PHOTO from '../images/Diana.jpg';
import AJ_PHOTO from '../images/AJ.jpg';
import LUIS_PHOTO from '../images/Luis.jpg';
export const diana: Module.PersonProps = {
    name: 'Diana Da Silva',
    about: 'Diana Da Silva is a caregiver, activist, migrant justice community organizer, community builder, grant writer, second generation settler, multi disciplined mover, and artist. She likes to spend most of her time dreaming and building a better world where dance is present and vibrant.',
    fb: 'dasilvapereiradiana',
    media: DIANA_PHOTO,
    photo_style: "horizontal-rect"
}

export const luis: Module.PersonProps = {
    name: 'Luis Miguel',
    about: 'Luis Miguel aka “Cheech”, is a seasoned professional street dance instructor, choreographer, street performer, competitive battler, and community leader. He has been active in the street dance community for over 10 years, and one of his goals is to continue to expand street dance culture as a fellow grant recipient of Ontario Community Changemakers!',
    social: 'cheech1teach1/',
    media: LUIS_PHOTO
}

export const keith: Module.PersonProps = {
    name: 'Keith Dang',
    about: 'Keith Dang aka "Slow Keith", is a street dancer, software developer, and second generation Vietnamese immigrant. He has been active in the street dance community for 10 years. Also, he created this website, hello world.',
    fb: 'keith.dang',
    social: 'slow.keith/',
    media: kd,
    photo_style: "vertical-rect"
}

export const aj: Module.PersonProps = {
    name: 'AJ Harper',
    about: 'AJ is an African Canadian street dancer, performer, dance instructor, musician, and aspiring professional artist, specializing in popping and waving. He has been evolving within the street dance community for more than fifteen years, and after excelling in street dance competitions, he now wants to explore Afro-cultural and therapeutic approaches to street dance.',
    fb: 'aj.harper.39',
    social: 'aaronjharper/',
    media: AJ_PHOTO
}

export const peoplelist: Module.PersonProps[] = [keith, diana, luis, aj];