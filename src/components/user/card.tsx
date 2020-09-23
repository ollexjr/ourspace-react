import React from 'react';

import { useAppStore } from 'stores/app';
import { CircleAvatar } from './avatar';
import { Dropdown } from "react-bootstrap";
import { ModalSheetWrapper } from "components/modal"
export const NavUserCard: React.FC = () => {
    const app = useAppStore();
    return <span className="pr-4"><strong>@{app.active?.username}</strong></span>
}

export const InlineNavCard: React.FC = ({ }) => {
    const store = useAppStore();
    return (
        <>
            {store.loggedIn && <ModalSheetWrapper
                title="Confirm sign out"
                onConfirm={() => store.logout()}
                acceptText="Logout">
                {[(show) => (
                    <div className="d-inline-block d-flex flex-row flex-grow-1 flex-md-grow-0 p-1 rounded align-items-center">
                        <Dropdown>
                            <Dropdown.Toggle variant="white" id="dropdown-basic"></Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item variant="primary" onClick={() => show()}>Logout</Dropdown.Item>
                                <Dropdown.Item onClick={() => store.logout()}>
                                    Account
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <CircleAvatar size={36} />
                        <span className="ml-2">
                            <strong>@</strong>{store.active!.username ?? "unknown_username?"}
                        </span>
                    </div>
                ), () => (
                    <p>Logout</p>
                )]}
            </ModalSheetWrapper>}
        </>
    )
}