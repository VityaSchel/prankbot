/// <reference types="react" />
import { CheckoutProps } from './index';
interface IFormProps {
    onSubmit: (cryptogram: string) => any;
    initialData: {
        email: string;
    } | null | undefined;
}
export default function Form(props: CheckoutProps & IFormProps): JSX.Element;
export {};
