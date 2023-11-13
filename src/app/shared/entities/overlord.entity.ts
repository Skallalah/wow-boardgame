export enum OverlordIdentifier {
    KelThuzad = 'kelthuzad',
}

export interface Overlord {
    id: OverlordIdentifier;

    icon: string;
    portrait: string;

    name: string;
}
