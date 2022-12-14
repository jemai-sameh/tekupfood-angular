import { Commande } from "./commande";

export class Client {
	id!:number;
    fullName!: string;
	phoneNumber!: string;
	password!: string;
	email!: string;
	orders!:Commande[];


}
