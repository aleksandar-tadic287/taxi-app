export interface ScheduledRide {
  startingAddress: string;
  finalAddress: string;
  dateTime: Date;
  phoneNumber: string;
  paymentMethod: string;
  cardNumber?: string;
  expirationCardDate?: Date;
  price?: number;
}