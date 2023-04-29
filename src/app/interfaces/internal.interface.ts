export interface Card  {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    idOwner: number;
    idUserAssigned: number;
    };
export interface Column {
        id: number;
        title: string;
        cards: Card[];
        }
export interface Board
{
    id: number;
    title: string;
    columns: Column[];
    idUsers: number[];
};
export interface User{
    id: number;
    name: string;
    email: string;
}