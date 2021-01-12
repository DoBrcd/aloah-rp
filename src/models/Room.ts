import { IAction } from "./Action";

export interface IRoom {
    id: string;
    name: string;
    description: string;
    linkToRooms: IRoom[];
    actions: IAction[];
}