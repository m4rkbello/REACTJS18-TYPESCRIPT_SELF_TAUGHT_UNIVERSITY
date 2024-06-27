import React from "react";
import { Dispatch } from "react";
import { IAction } from "../UseReducerCalculator";


interface Props {
    dispatch: Dispatch<IAction>;
}

export const MultiplyUseReducer: React.FC<Props> = ({ dispatch }) => {
    return(
        <div>
            <h1>MULTIPLY HOOK!</h1>
        </div>
    )
};