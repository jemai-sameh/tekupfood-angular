import { Delivery } from "./delivery";

export class DeliveryMan {
	id!:number;
    firstName!: string;
    lastName!: string;
	phoneNumber!: string;
	passwd!: string;
	latitude!: string;
	longitude!: string;
	availablity!: Boolean;
	delivery!:Delivery[];
}
