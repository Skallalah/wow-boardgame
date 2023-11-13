export enum Faction {
    Horde = 'horde',
    Alliance = 'alliance',
}

export enum Class {
    Paladin = 'paladin',
    Warrior = 'warrior',
}

export interface Character {
    id: string;

    faction: Faction;
    class: Class;

    gold: number;
    experience: number;
}
