import React from 'react';
import { useAppStore } from 'stores/app';
import { useBoardStore } from 'stores/board';

import { ScreenScaffold } from 'components/screen';
import { Form, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import ThreadCreateForm from 'components/board/thread/create';

const ScreenCreate: React.FC = () => {
    const store = useBoardStore();

    return (
        <ScreenScaffold title="Create new discussion">
            <ThreadCreateForm onSubmit={() => store.createThread()} />
        </ScreenScaffold>
    )
}

export default ScreenCreate;