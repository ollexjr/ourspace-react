import React from 'react';

import { Button, Modal, Form } from 'react-bootstrap';
import { useAppStore } from 'stores/app';
import { Board } from 'stores/board';

import { observer } from 'mobx-react';
import _ from "lodash";

const CommunityList: React.FC<{ data: Array<Board> }> = ({ data }) => {
    return (
        <div>
            {data.map((e) => <span></span>)}
        </div>
    )
}

const Spotlight: React.FC = observer(() => {
    const app = useAppStore();
    //const store = useBoardStore();
    const [search, setSearch] = React.useState("");
    const onChange = React.useCallback(_.debounce((v: any) => {
        setSearch(v.target.value);
        //store.spotlightQuery = v.target.value;
        app.spotlightQuery(v.target.value);
    }, 100), []);

    return (
        <div style={{ minHeight: "50vh" }}>
            <Form.Control
                type="text"
                placeholder="Search Communities, Memberships, Messages, Users"
                required
                onChange={(e) => {
                    e.persist();
                    onChange(e);
                }} />
            <CommunityList data={[]} />
        </div>
    )
})

export const SpotlightModal: React.FC<{}> = 
    observer(({ children }) => {
    const app = useAppStore();
    return (
        <Modal
            show={app.UIShowSpotlight }
            onHide={() => app.UIShowSpotlight = false}
            //backdrop="static"
            size="lg"
            keyboard={false}
        >
            <Modal.Header className="border-none" closeButton>
                <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Spotlight />
            </Modal.Body>
        </Modal >
    );
})