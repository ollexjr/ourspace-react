import React from 'react';
import { useAppStore } from 'stores/app';
import { useBoardStore, BoardStore } from 'stores/board';
import { ScreenScaffold } from 'components/screen';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ThreadCreateForm from 'components/board/thread/create';
import { IThreadCreateResponse } from 'model/compiled';

const ScreenCreate: React.FC = () => {
    const store = useBoardStore();
    const history = useHistory();
    return (
        <ScreenScaffold title="Create new discussion">
            <ThreadCreateForm
                boardId={store.boardId}
                onSubmit={(t) => 
                    store.createThread(t).then(
                        (t: IThreadCreateResponse) => 
                            history.replace(store.getThreadLink(t.threadId ?? "error")))} />
        </ScreenScaffold>
    )
}

export default ScreenCreate;