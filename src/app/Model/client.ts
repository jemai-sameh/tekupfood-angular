import { Commande } from "./commande";

export class Client {
	id!:number;
    firstName!: string;
	lastName!: string;
	phoneNumber!: string;
	passwd!: string;
	mail!: string;
	orders!:Commande[];

}
