import "./CheckboxIcon.css";

import { ReactComponent as CheckedIcon } from "./icons/ic_checkbox_checked.svg";
import { ReactComponent as IndeterminateIcon } from "./icons/ic_checkbox_half.svg";
import { ReactComponent as UncheckedIcon } from "./icons/ic_checkbox_unchecked.svg";

interface CheckboxIconProps {
    isChecked: boolean;
    isIndeterminate: boolean;
    disabled: boolean
}

export const CheckboxIcon: React.FC<CheckboxIconProps> = ({ isChecked, isIndeterminate, disabled }) => {
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