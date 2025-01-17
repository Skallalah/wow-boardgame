export enum CreatureEnum {
    Murloc = 'murloc',
}

export enum CreatureRating {
    Green = 'green',
    Red = 'red',
    Blue = 'blue',
    Boss = 'boss',
}

export interface Creature {
    id: CreatureEnum;

    portrait: string

    name: string;

    threat: number;
    attack: number;
    health: number;

    capacity: string;
}
