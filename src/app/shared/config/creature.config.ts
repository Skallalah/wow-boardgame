import { Creature, CreatureEnum, CreatureRating } from '../entities';

interface CreatureData {
    name: string;
    portrait: string;

    threat: number;
    attack: number;
    health: number;

    capacity: string;
}

export class CreatureConfig {
    // TODO: replace with true data
    static CREATURES: Creature[] = [
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

    static getCreatureData(
        id: CreatureEnum,
        type: CreatureRating
    ): CreatureData {
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
        creature: Creature,
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
