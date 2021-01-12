import { IItem } from "./Item";
import { IEvent } from "./Event";

export interface IAction{
    id: string;
    type: ActionType;
    requiredKeyword: string[];
    eventIfSuccess: IEvent;
    eventIfFailed: IEvent;
    reward: IItem[];
    status: ActionStatus[];
}

export enum ActionType{
    investigation,
    vigilance,
    atk,
    itemUse
}

export enum ActionStatus{
    available,
    lock,
    used,
    reusable
}