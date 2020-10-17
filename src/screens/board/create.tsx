import React from 'react';
import { useAppStore } from 'stores/app';
import { ScreenScaffold } from 'components/screen';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import BoardCreateForm from 'components/board/create';
//import { IBoardCreateResponse } from 'model/compiled';

const ScreenCreate: React.FC<{ onSubmit: () => Promise<any> }> = ({ onSubmit }) => {
    const app = useAppStore();
    const history = useHistory();
    return (
        <ScreenScaffold title="Create a new Community">
            <BoardCreateForm onSubmit={(o) => app.createCommunity(o).then(
                (unknown) => history.replace(app.getCommunityLink(o.name ?? "error")))} />
        </ScreenScaffold>
    )
}

export default ScreenCreate;