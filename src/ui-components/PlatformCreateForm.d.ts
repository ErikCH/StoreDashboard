/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Product } from "../API.ts";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PlatformCreateFormInputValues = {
    name?: string;
    value?: string;
    Products?: Product[];
};
export declare type PlatformCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    value?: ValidationFunction<string>;
    Products?: ValidationFunction<Product>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PlatformCreateFormOverridesProps = {
    PlatformCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    Products?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type PlatformCreateFormProps = React.PropsWithChildren<{
    overrides?: PlatformCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PlatformCreateFormInputValues) => PlatformCreateFormInputValues;
    onSuccess?: (fields: PlatformCreateFormInputValues) => void;
    onError?: (fields: PlatformCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PlatformCreateFormInputValues) => PlatformCreateFormInputValues;
    onValidate?: PlatformCreateFormValidationValues;
} & React.CSSProperties>;
export default function PlatformCreateForm(props: PlatformCreateFormProps): React.ReactElement;
