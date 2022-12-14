import { Commande } from "./commande";

export class Address {
	id!:number;
	 street!: string;
	  town!: string;
	  postalCode!: string;
	  orders!:Commande[];
}
