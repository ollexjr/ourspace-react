import React from 'react';
import { ObservableRequestState } from "service/api";
import { Spinner } from 'react-bootstrap';
import { observer } from 'mobx-react';

export const NetworkGateway: React.FC<{ retry: () => any, state: () => ObservableRequestState }> = observer(({ state, children }) => {
    return (
        <>
            {state().isFetching || state().error ?
                <div className="d-flex justify-content-center align-items-center" style={{
                    minHeight: '50vh'
                }}>
                    {state().error ? <div>
                        <h1>Failed to load something</h1>
                        <button>Retry</button>
                    </div>
                        : <Spinner animation="border" />}
                </div> : children
            }
        </>
    )
})
