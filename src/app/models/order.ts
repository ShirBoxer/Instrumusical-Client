import {User} from './user';
import {Instrument} from './instrument';


export interface Order {
    _id: number,
    owner: number,
    orderDate: Date,
    supplyDate: Date,
    address: string,
    phoneNum: number,
    totalPrice: number,
    products: Instrument[],
    
}