/// <reference types="react" />
import { CheckoutProps } from './index';
export default function Result(props: CheckoutProps & {
    result: 'loading' | 'success' | 'fail';
    onReturn: () => any;
}): JSX.Element;
