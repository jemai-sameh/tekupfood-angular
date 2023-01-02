import { Delivery } from "./delivery";

export class DeliveryMan {
	id!:number;
    fullName!: string;
	phoneNumber!: string;
	password!: string;
	email!: string;
	latitude!: string;
	longitude!: string;
	availablity!: Boolean;
	delivery!:Delivery[];
}
