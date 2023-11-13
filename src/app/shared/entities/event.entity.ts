import { Overlord } from './overlord.entity';

export enum EventType {
    Boss = 'boss',
}

export interface Event {
    id: string;

    type: EventType;
    value: number;

    description: string;

    bonus?: boolean;
    overlord?: Overlord['id'];
}
