export interface IEvent {
    id: string;
    eventType: EventType;
}

export interface IParametricEvent<T> extends IEvent {
    parameter: T;
}

export enum EventType{
    summon,
    getAttackedBy,
}