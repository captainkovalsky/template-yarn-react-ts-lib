import * as React from 'react'
import {FC} from "react";

export interface HeaderProps {
    title: string;
}
export const Header: FC<HeaderProps> = (props) => {
    return (<div>{props.title}</div>)
};
