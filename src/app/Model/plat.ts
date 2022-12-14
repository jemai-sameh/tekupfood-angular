import { Commande } from "./commande";
import { Manager } from "./manager";

export class Plat {
	id!:number;
     platName!: string;
	 platPrix!: number;
	 platType!: string;
	 description!: string;
	 image!: string;
	 manager!:Manager;
	 //order!:Commande[];

}
