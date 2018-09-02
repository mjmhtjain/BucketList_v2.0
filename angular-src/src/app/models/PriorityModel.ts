export interface Priority{
    level : string;
    _id ?: string;
}

export class PriorityClass implements Priority{
    level : string = '';
    _id ?: string = '';
}