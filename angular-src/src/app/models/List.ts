export interface List {
    _id?: string;
    title: string;
    description: string;
    category: string;
}

export class ListClass implements List{
    _id?: string = '';
    title: string = '';
    description: string = '';
    category: string = '';
}