import React from "react";
import ProTypes from "prop-types";

function ThemedButton({theme, label, ...restProps}){ 
    return(
        <button className={`btn btn-${theme}`} {...restProps}>
            {label}
        </button>
    );
}

ThemedButton.defaultProps = {
    theme: 'default',
};

ThemedButton.propTypes = {
    theme: ProTypes.string,
    label: ProTypes.string.isRequired,
}

export default ThemedButton;