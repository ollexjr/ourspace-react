import React from 'react';
import { observer } from 'mobx-react';
import { Modal } from 'react-bootstrap';
import { useBoardStore } from 'stores/board';
import { ThreadStoreProvider } from 'stores/thread';

import { ThreadView } from 'components/board/thread/thread';
import { Switch, Route } from 'react-router-dom';

const BoardSingleThreadOverlayObserver = observer(() => {
    const store = useBoardStore();

    return store.overlayThread ? (
        <Modal
            show={store.overlayThread != undefined}
            onHide={() => store.overlayThread = undefined}
            //backdrop="static"
            size="xl">
            <Modal.Header closeButton>
                <Modal.Title>{store.overlayThread.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="p-0">
                {false && <Switch>
                    <Route path={`/+${store.boardId}/:threadId/`} component={undefined} />
                </Switch>}
                <ThreadStoreProvider threadId={store.overlayThread!.uId!}>
                    {store.overlayThread &&
                        <ThreadView threadId={store.overlayThread!.uId!} />}
                </ThreadStoreProvider>
            </Modal.Body>
        </Modal >
    ): null;
});

export default BoardSingleThreadOverlayObserver;