import "./Checkbox.css";

import { ReactComponent as CheckedIcon } from "./icons/ic_checkbox_checked.svg";
import { ReactComponent as IndeterminateIcon } from "./icons/ic_checkbox_half.svg";
import { ReactComponent as UncheckedIcon } from "./icons/ic_checkbox_unchecked.svg";
import { useState } from "react";

interface CheckboxIconProps {
    isChecked: boolean;
    isIndeterminate: boolean;
    disabled: boolean
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({ isChecked, isIndeterminate, disabled }) => {
    const classIcon = `checkbox-icon ${disabled && "disabled"}`;

    return (
        <>
            {isChecked ? (
                <CheckedIcon
                    className={`${classIcon} checked`}
                />
            ) : isIndeterminate ? (
                <IndeterminateIcon
                    className={classIcon}
                />
            ) : (
                <UncheckedIcon
                    className={classIcon}
                />
            )}
        </>
    );
};

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