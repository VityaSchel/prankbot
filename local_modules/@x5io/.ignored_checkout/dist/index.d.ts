import React from 'react';
export declare type CheckoutRefProperties = {
    initialize: (object: {
        email: string;
    }) => any;
};
export declare type CheckoutProps = {
    /** ClassName of wrapping div */
    wrapClassName?: string;
    /** Brand color applied to all elements; can be any color allowed in CSS */
    color?: string;
    labels?: {
        /** Defaults to "Оплата" */
        header?: string;
        /** Button label, defaults to "Оплатить " */
        pay?: string;
    };
    subject: {
        /** Public ID from CloudPayments provider */
        publicID: string;
        /** Human-readable title */
        name: string;
        /** Price in any string format */
        price: string;
    };
    components?: {
        header?: React.ReactNode;
    };
    /** Fires when user entered their payment details, request to API must be made and return true|false indicating whether it was successfull */
    onRequest: (cryptogram: string) => Promise<boolean>;
    /** Fires when user cancel payment (e.g. closes dialog with 'X' button) */
    onCancel?: () => any;
    /** Fires when payment was processed succesfully and user wish to return */
    onSuccess?: () => any;
    /** Fires when payment was failed and user wish to return */
    onFailed?: () => any;
};
declare const Checkout: React.ForwardRefExoticComponent<CheckoutProps & React.RefAttributes<unknown>>;
export default Checkout;
