import { Commande } from "./commande";
import { Plat } from "./plat";

export class Manager {
	id!:number;
    firstName!: string;
	lastName!: string;
	phoneNumber!: string;
	passwd!: string;
	orders!:Commande[];
	plats!:Plat[];

}