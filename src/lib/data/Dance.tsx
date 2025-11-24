import * as Module from '../interfaces';
import { location, dance_styles } from '../util'; 

export const unityfest: Module.DanceProps = {
    title: 'Unity Festival',
    year: 2023,
    quantity: 3,
    placement: 1,
    organizer: "Unity Charity",
    style: dance_styles.OPEN,
    location: location.TORONTO
}

export const topopping: Module.DanceProps = {
    title: 'Toronto Popping',
    year: 2019,
    quantity: 1,
    placement: 1,
    style: dance_styles.POPPING,
    location: location.TORONTO
}

export const parksnwreck: Module.DanceProps = {
    title: 'Parks N Wreck',
    year: 2018,
    quantity: 2,
    placement: 2,
    style: dance_styles.POPPING,
    location: location.TORONTO
}

export const beatsAllDay: Module.DanceProps = {
    title: 'B.A.D. (Beats All Day)',
    year: 2024,
    quantity: 4,
    placement: 2,
    organizer: "Daniel Keith Morrison",
    style: dance_styles.OPEN,
    location: location.TORONTO
}

export const playYourCards: Module.DanceProps = {
    title: 'play Your Cards Right',
    year: 2022,
    quantity: 2,
    placement: 4,
    organizer: "Unity Charity",
    style: dance_styles.OPEN,
    location: location.TORONTO
}

export const jamdemic: Module.DanceProps = {
    title: 'Jamdemic',
    year: 2021,
    quantity: 2,
    placement: 4,
    style: dance_styles.OPEN,
    location: location.TORONTO
}

export const jamdemic2: Module.DanceProps = {
    title: 'Jamdemic 2',
    year: 2021,
    quantity: 1,
    placement: 4,
    style: dance_styles.OPEN,
    location: location.TORONTO
}

export const vsdf: Module.DanceProps = {
    title: 'Vancouver Street Dance Festival',
    year: 2019,
    quantity: 1,
    placement: 8,
    style: dance_styles.POPPING,
    location: location.VANCOUVER
}

export const stackingStyles: Module.DanceProps = {
    title: 'Stackin Stylez: Tha Foundation',
    year: 2019,
    quantity: 1,
    placement: 8,
    style: dance_styles.POPPING,
    location: location.BOSTON
}

export const tkl: Module.DanceProps = {
    title: 'Toronto Krump League',
    year: 2024,
    quantity: 1,
    placement: 8,
    style: dance_styles.KRUMP,
    location: location.TORONTO
}

export const waveswithin: Module.DanceProps = {
    title: 'Waves Within International Qualifier',
    year: 2022,
    quantity: 1,
    placement: 8,
    style: dance_styles.WAVING,
    location: location.INTERNATIONAL
}

export const soulbotics: Module.DanceProps = {
    title: 'Soulbotics Krew Animation Battle',
    year: 2021,
    quantity: 1,
    placement: 32,
    style: dance_styles.ANIMATION,
    location: location.INTERNATIONAL
}



export const danceList: Module.DanceProps[] = [unityfest, topopping, parksnwreck, beatsAllDay, jamdemic, jamdemic2, vsdf, stackingStyles, waveswithin, tkl,soulbotics];