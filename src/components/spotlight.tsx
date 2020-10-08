import React from 'react';

import { Button, Modal, Form } from 'react-bootstrap';
import { useAppStore } from 'stores/app';
import { Board } from 'stores/board';

import { observer } from 'mobx-react';
import { CircleAvatar } from 'components/user/avatar';

import _ from "lodash";

const CommunityList: React.FC<{ data: Array<Board> }> = ({ data }) => {
    return (
        <ul className="list-group">
            {data.map((e) =>
                <li className="list-group-item py-0">
                    <CircleAvatar src="" size={32} />
                    {e.uId}
                </li>)
            }
        </ul>
    )
}

const Spotlight: React.FC = observer(() => {
    const app = useAppStore();
    //const store = useBoardStore();
    const [search, setSearch] = React.useState("");
    const onChange = React.useCallback(_.debounce((v: any) => {
        //store.spotlightQuery = v.target.value;
        app.spotlightQuery(search);
    }, 10), []);

    return (
        <div style={{ minHeight: "50vh" }}>
            <Form.Control
                type="text"
                placeholder="Search Communities, Memberships, Messages, Users"
                required
                onChange={(e) => {
                    e.persist();
                    setSearch(e.target.value);
                    onChange(e);
                }} />
            <div>
                <h4>Communities</h4>
                <CommunityList data={app.communitySearch?.data ?? []} />
            </div>
        </div>
    )
})

export const SpotlightModal: React.FC<{}> =
    observer(({ children }) => {
        const app = useAppStore();
        return (
            <Modal
                show={app.UIShowSpotlight}
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