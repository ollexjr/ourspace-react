import React from 'react';
import { Router, Route, Switch, RouteComponentProps } from "react-router";
import { BoardView } from "../../components/board/board";
import { BoardStoreProvider } from "../../stores/board"

export const ScreenFrontpage: React.FC<RouteComponentProps<{}>> = () => {
    return (
        <BoardStoreProvider boardId="_">
            "screen front page"
            <BoardView />
        </BoardStoreProvider>
    )
}