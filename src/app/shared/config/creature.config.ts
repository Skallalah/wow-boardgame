import { Creature, CreatureEnum, CreatureRating } from '../entities';

interface CreatureData {
    id: CreatureEnum;

    portrait: string;

    name: string;

    threat: number[];
    attack: number[];
    health: number[];

    capacity: string;
}

export class CreatureConfig {
    // TODO: replace with true data
    static CREATURES: CreatureData[] = [
        {
            id: CreatureEnum.Murloc,
            portrait: '',
            name: 'Murloc',
            threat: [4, 4, 5],
            attack: [3, 4, 4],
            health: [3, 3, 4],
            capacity: '',
        },
    ];

    static getCreatureData(id: CreatureEnum, type: CreatureRating): Creature {
        const creature = this.CREATURES.find((c) => c.id === id);

        if (!creature) {
            throw new Error(`missing creature for id : ${id as string}`);
        }

        return {
            ...creature,
            threat: this.getCreatureAttributeByRating(creature, 'threat', type),
            attack: this.getCreatureAttributeByRating(creature, 'attack', type),
            health: this.getCreatureAttributeByRating(creature, 'health', type),
        };
    }

    static getCreatureAttributeByRating(
        creature: CreatureData,
        attribute: 'threat' | 'attack' | 'health',
        type: CreatureRating
    ): number {
        const attributeData = creature[attribute];

        if (type === CreatureRating.Boss) {
            return attributeData[0];
        }

        return attributeData[Object.keys(CreatureRating).indexOf(type)];
    }
}
