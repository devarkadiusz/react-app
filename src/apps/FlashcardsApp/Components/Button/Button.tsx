import React, { FunctionComponent } from "react";

interface ButtonProps {
    value: string;
    onClick: any;
};

export const Button: FunctionComponent<ButtonProps> = props => {
    return(
        <input value={props.value} type="button" onClick={props.onClick} />
    );
};