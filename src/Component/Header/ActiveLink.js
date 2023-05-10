import React from 'react';
import { NavLink } from 'react-router-dom';
import "./ActiveLink.css"

const ActiveLink = ({to , children}) => {
    return (
        <div>
            <NavLink 
                    to={to}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : "Other"
                    }
                  >
                    {children}
                  </NavLink>
        </div>
    );
};

export default ActiveLink;