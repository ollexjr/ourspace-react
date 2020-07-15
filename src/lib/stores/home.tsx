import React from 'react';
import { useLocalStore } from "mobx-react";


const homeStoreContext = React.createContext<HomeStore | null>(null);
export const AppStoreProvider: React.FC = (props) => {
    const store = useLocalStore(() => new HomeStore());
    return (
        <homeStoreContext.Provider value={store}>
            {props.children}
        </homeStoreContext.Provider>
    )
}

export class HomeStore {

}

