import React from 'react';
import { Router, Route, Switch, RouteComponentProps } from "react-router";
import { BoardView } from "components/board/board";
import { BoardStoreProvider } from "../../stores/board"

export const ScreenFrontpage: React.FC<RouteComponentProps<{}>> = () => {
    console.log("[frontpage] constructing")
    return (
        <BoardStoreProvider boardId="all">
            <BoardView />
        </BoardStoreProvider>
    )
}