import { Contract } from './contract';
import { User } from './user';
import { Offer } from './offer';

export class Orders {
    orderId: number;
    userId: number;
    discount: number;
    totalPrice: number;
    contract: Contract;
    user: User;
    offerId: number;
    offers: Offer;
}
