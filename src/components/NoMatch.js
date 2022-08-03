import NotFound from "../img/error404.jpg";
import React from 'react';

const NoMatch = () => {
    return (
        <div className="main container">
            <div className="nomatch">
            <img
                src={NotFound}
                alt="404"
            />
            <p>You just found no where</p>
            </div>
        </div>
    )        
}

export default NoMatch;