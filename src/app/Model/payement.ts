import { Commande } from "./commande";

export class Payement {
    id!:number;
    paymentDate!: Date;
	carteNumber!: string;
    carteType!: string;
    order!:Commande;

}

