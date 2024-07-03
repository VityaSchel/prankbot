/// <reference types="react" />
import { TextFieldProps } from '@mui/material/TextField';
export default function TextField(props: Omit<TextFieldProps, 'error'> & {
    endAdornment?: React.ReactNode;
    error?: string;
    'data-pf'?: string;
}): JSX.Element;
