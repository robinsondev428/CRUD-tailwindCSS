export type Player = {
    id:string;
    name:string;
    age:number;
    position: string;
};
export type FormProps = {
    addPlayer: (newPlayer: Player) =>void;
};