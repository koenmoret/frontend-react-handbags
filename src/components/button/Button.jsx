import "./Button.css";

// eslint-disable-next-line react/prop-types
function Button({  children, disabled, icon, handleClick, buttonType }) {
    return (
        <button disabled={disabled} type={buttonType} onClick={handleClick}>{children} {icon}</button>
    );
}

export default Button;