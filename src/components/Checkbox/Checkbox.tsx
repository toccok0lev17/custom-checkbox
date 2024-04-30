import "./Checkbox.css";

import { CheckboxIcon } from "./CheckboxIcon/CheckboxIcon";
import { useState } from "react";

interface CheckboxProps {
    id: string;
    label: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean
    [key: string]: any;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    id,
    label,
    indeterminate = false,
    checked = false,
    disabled = false,
    ...props
}) => {
    const [isChecked, setIsChecked] = useState(checked);
    const [isIndeterminate, setIsIndeterminate] = useState(indeterminate);

    const toggleCheckbox = () => {
        if (isIndeterminate) {
            setIsChecked(true);
            setIsIndeterminate(false);
        } else if (isChecked) {
            setIsChecked(false);
            setIsIndeterminate(false);
        } else {
            setIsChecked(true);
        }
    };

    return (
        <label htmlFor={id} className="checkbox-wrapper">
            <input
                id={id}
                type="checkbox"
                checked={isChecked}
                disabled={disabled}
                ref={input => {
                    if (input) {
                        input.indeterminate = isIndeterminate;
                    }
                }}
                {...props}
                style={{ display: "none" }}
            />
            <div onClick={() => !disabled && toggleCheckbox()} style={{ display: "flex" }}>
                <CheckboxIcon {...{ isChecked, isIndeterminate, disabled }} />
            </div>
            <span className={`checkbox-label ${disabled && "disabled"}`}>{label}</span>
        </label>
    )
}