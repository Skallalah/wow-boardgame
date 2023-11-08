export enum FactionEnum {
    Horde = 'horde',
    Alliance = 'alliance',
}

export enum ClassEnum {
    Paladin = 'paladin',
    Warrior = 'warrior',
}

export interface Character {
    id: string;

    faction: FactionEnum;
    class: ClassEnum;

    gold: number;
    experience: number;
}
