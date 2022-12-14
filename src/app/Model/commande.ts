import { Address } from "./address";
import { Client } from "./client";
import { Manager } from "./manager";
import { Plat } from "./plat";

export class Commande {
    id!: number;
    orderDate!: Date;
    reference!: string;
    totalPrice!: number;
    paymentMethod!: string;
    address!: Address;
    client!: Client;
    manager!: Manager;
    platIds!: number[];
    plat!: Plat;


    constructor() {
        this.platIds = []
        this.plat = new Plat()
    };
    //plat!:Plat[];
}
