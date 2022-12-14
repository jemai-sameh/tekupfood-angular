import { Commande } from "./commande";
import { Plat } from "./plat";

export class Manager {
	id!:number;
    fullName!: string;
	phoneNumber!: string;
	password!: string;
	email!: string;
	orders!:Commande[];
	plats!:Plat[];

}