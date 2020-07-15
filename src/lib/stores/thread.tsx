import React from 'react';
import { useLocalStore } from 'mobx-react';
import { Response, AppStore } from "./app";

export class ThreadStore {
    app: AppStore
    constructor(app: AppStore) {
        this.app = app;
    }    
}

const threadStoreContext = React.createContext<ThreadStore | null>(null);
export const BoardStoreProvider: React.FC<{ boardId: string, app: AppStore }> = (props) => {
    const store = useLocalStore(() => new ThreadStore(props.app));
    return (
        <threadStoreContext.Provider value={store}>
            {props.children}
        </threadStoreContext.Provider>
    )
}

export const useBoardStore = () => {
    const store = React.useContext(threadStoreContext)
    if (!store) {
        throw new Error('appStoreContext must be used within a StoreProvider.')
    }
    return store
}