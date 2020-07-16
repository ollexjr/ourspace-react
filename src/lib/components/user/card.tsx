import React from 'react';

import { useAppStore } from "../../stores/app";

export const NavUserCard: React.FC = () => {
    const app = useAppStore();
    return <span className="pr-4"><strong>@{app.active?.username}</strong></span>
}