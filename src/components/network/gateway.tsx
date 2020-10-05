import React from 'react';
import { ObservableRequestState } from "service/api";
import { Spinner, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';

export const NetworkGateway: React.FC<{ retry: () => any, state: () => ObservableRequestState }> = 
    observer(({ retry, state, children }) => {
    return (
        <>
            {(state().isFetching && !state().ignore) || state().error ?
                <div className="d-flex justify-content-center align-items-center" style={{
                    minHeight: '50vh'
                }}>
                    {state().error ? <div>
                        <h1>Failed to load something</h1>
                        <Button onClick={() => retry()}>Retry</Button>
                    </div>
                        : <Spinner animation="border" />}
                </div> : children
            }
        </>
    )
})
