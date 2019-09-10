export interface ITodoItem {
    id: number;
    title: string;
    completed: boolean;
}

export enum TodoItemState {
    all = 'all',
    completed = 'completed'
}