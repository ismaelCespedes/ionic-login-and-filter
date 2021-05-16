import {User} from './user';
import {TutenUserProfessional} from './tutenUserProfessional';

export class BookingUser {
    bookingTime: number;
    streetAddress: string;
    bookingPrice: number;
    fullName: string;
    tutenUserClient: User;
    tutenUserProfessional: TutenUserProfessional;

     public BookingUser(bookingTime: number, tutenUserProfessional: TutenUserProfessional, bookingPrice: number, tutenUserClient: User){
        this.bookingTime = bookingTime;
        this.tutenUserProfessional = tutenUserProfessional;
        this.bookingPrice = bookingPrice;
        this.tutenUserClient = tutenUserClient;
        if (tutenUserClient) {
            this.fullName = `${tutenUserClient.firstName} ${tutenUserClient.lastName}`;
        }
        if (tutenUserProfessional) {
            this.streetAddress = tutenUserProfessional.streetAddress;
        }
    }

    setTutenUserClient(tutenUserClient:User) {
        this.tutenUserClient = tutenUserClient;
        if (tutenUserClient) {
            this.fullName = `${tutenUserClient.firstName} ${tutenUserClient.lastName}`;
        }
    }

}
