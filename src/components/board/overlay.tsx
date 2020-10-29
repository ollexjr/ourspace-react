import React from 'react';
import { observer } from 'mobx-react';
import { Modal } from 'react-bootstrap';
import { useBoardStore } from 'stores/board';
import { ThreadStoreProvider } from 'stores/thread';
import { BoardStoreProvider } from 'stores/board';

import { ThreadView } from 'components/board/thread/thread';
import { Switch, Route } from 'react-router-dom';

const BoardSingleThreadOverlayObserver = observer(() => {
    const store = useBoardStore();

    console.log("[BoardSingleThreadOverlayObserver]")
    //return store.overlayThread != undefined ? 
    return (
        <Modal
            //className="primary"
            show={store.overlayThread != undefined}
            onHide={() => store.overlayThread = undefined}
            //backdrop="static"
            size="lg"
            >
            <Modal.Body className="p-0">
                {false && <Switch>
                    <Route path={`/+${store.boardId}/:threadId/`} component={undefined} />
                </Switch>}
                {store.overlayThread && <BoardStoreProvider boardId={store.overlayThread!.boardId!}>
                    <ThreadStoreProvider threadId={store.overlayThread!.uId!}>
                        {store.overlayThread &&
                            <ThreadView threadId={store.overlayThread!.uId!} />}
                    </ThreadStoreProvider>
                </BoardStoreProvider>}
            </Modal.Body>
        </Modal >
    );
});

export default BoardSingleThreadOverlayObserver;