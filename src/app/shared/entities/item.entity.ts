export enum ItemRarity {
    Common = 'common',
    Rare = 'rare',
    Epic = 'epic',
    Reward = 'reward',
}

export interface Item {
    id: string;
    icon: string;

    name: string;
    level: number;
    rarity: ItemRarity;

    goldValue: string;
    description: string;
}
