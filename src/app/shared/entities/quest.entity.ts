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

interface QuestMonster {
    type: Creature['id'];
    difficulty: CreatureRating;
    quantity: number;
    zone: string;
}

export type QuestMonsterGroup = QuestMonster[];

export interface Quest {
    id: string;

    name: string;

    rating: QuestRating;
    level: number;

    group: QuestMonsterGroup;
    additionnalGroup: QuestMonsterGroup;

    reward: {
        gold: number;
        experience: number;
        items: QuestItemReward[];
        uniqueItems: Array<Item['id']>;
    };

    description: string;
}
