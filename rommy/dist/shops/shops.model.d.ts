import { Model } from "sequelize-typescript";
export declare class Shop extends Model {
    id: number;
    name: string;
    password: string;
    address: string;
    owner: string;
    phone: string;
    email: string;
    image: string;
    city: string;
    timeWork: string;
}
