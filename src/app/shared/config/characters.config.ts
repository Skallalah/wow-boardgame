import { Class, Faction } from '../entities';

interface CharacterData {
    id: string;

    name: string;
    faction: Faction;
    class: Class;

    portrait: string;
}

export class CharactersConfig {
    // TODO: replace with true data
    static CHARACTERS: CharacterData[] = [
        {
            id: 'paladin',
            name: 'Uther',
            faction: Faction.Alliance,
            class: Class.Paladin,
            portrait:
                'assets/images/characters/portraits/paladin_alliance.jpeg',
        },
    ];

    static getCharacterData(id: string, member: keyof CharacterData) {
        const character = this.CHARACTERS.find((c) => c.id === id);

        if (!character) {
            throw new Error('Cannot find character with id ' + id);
        }

        return character[member];
    }
}
