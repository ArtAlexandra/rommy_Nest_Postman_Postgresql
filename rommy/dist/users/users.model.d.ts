import { Model } from "sequelize-typescript";
export declare class User extends Model {
    id: number;
    username: string;
    password: string;
    balance: number;
    phone: string;
    email: string;
}
