import * as Module from '../interfaces';
import { funkforyourfeet, area51, topoppingold } from './Events';
import * as Util from '../util';

export const twok: Module.PopProps = {
    year: 2000,
    individuals: ["Frank Boogie","Tommy Steeze", "Da Funky Mystic"],
    groups: ["Fantastic Poppers"],
    events: [funkforyourfeet]
}

export const twokten: Module.PopProps = {
    year: 2010,
    groups: ["Casino Boys", "Tense Image", "Blckout Fam"],
    events: [area51]
}

export const twokeighteen: Module.PopProps = {
    year: 2018,
    events: [topoppingold]
}

export const ojc: Module.PopProps = {
    year: 2022,
    groups: ["Open Jam Collective"]
}

export const eralist: Module.PopProps[] = [twok, twokten, twokeighteen, ojc]
export const eralistsorted: Module.PopProps[] = Util.sortErasByDate(eralist);