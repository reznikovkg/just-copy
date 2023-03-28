import React from 'react';

const IconComponent = (props) => {
    return (
        <svg
            className={props.className}
            height={props.height}
            width={props.width}
            viewBox={props.viewBox}
            xmlns= {props.xmlns}
        >
            <path
                d={props.d}
                fill={props.fill}
            />
        </svg>
    );
};

export default IconComponent;