export enum FactionEnum {
    Horde = 'horde',
    Alliance = 'alliance',
}

export enum ClassEnum {
    Warrior = 'warrior',
}

export interface Character {
    id: string;

    faction: FactionEnum;
    class: ClassEnum;

    gold: number;
    experience: number;
}
