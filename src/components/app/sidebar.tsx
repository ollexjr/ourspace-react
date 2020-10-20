import React from 'react';
import ReactDOM from 'react-dom';

export const SidebarCard: React.FC = ({ children }) => {
    return (
        <div className="mb-2">
            {children}
        </div>
    )
}

export const Portal: React.FC<{ target: string }> = ({ children, target }) => {
    const v = document.getElementById(target);
    if (!v) {
        return <div></div>
    }
    return ReactDOM.createPortal(
        <SidebarCard>
            {children}
        </SidebarCard>, v);
}