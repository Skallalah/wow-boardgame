import { Item, ItemRarity } from './item.entity';
import { Creature, CreatureRating } from './monster.entity';

export enum QuestRating {
    Gray = 'gray',
    Green = 'green',
    Yellow = 'yellow',
    Red = 'red',
}

export interface QuestItemReward {
    number: number;
    rarity: ItemRarity;
}

interface QuestCreature {
    type: Creature['id'];
    difficulty: CreatureRating;
    quantity: number;
}

export type QuestCreatureGroup = { zone: string; creatures: QuestCreature[] };

export interface Quest {
    id: string;

    name: string;

    rating: QuestRating;
    level: number;

    group: QuestCreatureGroup;
    additionnalGroup: QuestCreatureGroup;

    reward: {
        gold: number;
        experience: number;
        items: QuestItemReward[];
        uniqueItems: Array<Item['id']>;
    };

    description: string;
}
