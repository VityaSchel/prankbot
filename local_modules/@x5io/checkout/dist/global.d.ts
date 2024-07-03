/* eslint-disable no-var */
declare class cp {
  static Checkout = class {
    constructor({ publicId }: { publicId: string }) {
      //
    }
    createPaymentCryptogram: (data: {
      cvv: string
      cardNumber: string
      expDateMonth: string
      expDateYear: string
    }) => Promise<string>
  }
}

declare interface CardData {
  cvv: string;
  cardNumber: string;
  expDateMonth: string;
  expDateYear: string;
}