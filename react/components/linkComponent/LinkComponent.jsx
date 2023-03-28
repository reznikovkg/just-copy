import React from 'react';
import "./LinkStyle.scss"
import {Link} from "react-router-dom";
const LinkComponent = ({link, children}) => {
    return (
        <Link className="link" to={link}>
            {children}
        </Link>
    );
};

export default LinkComponent;