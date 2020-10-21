import React from 'react';
import { ObservableRequestState } from "service/api";
import { Spinner, Button } from 'react-bootstrap';
import { observer } from 'mobx-react';
import { IconButton } from 'components/button';
import { faSync } from '@fortawesome/free-solid-svg-icons';

export const NetworkGateway: React.FC<{ retry: () => any, state: () => ObservableRequestState }> =
    observer(({ retry, state, children }) => {
        return (
            <>
                {(state().isFetching && !state().ignore) || state().error ?
                    <div className="d-flex flex-column justify-content-center align-items-center" style={{
                        minHeight: '50vh'
                    }}>
                        {state().error ? <div>
                            <div>
                                <small>Failed to load something: {JSON.stringify(state().error)}</small>
                            </div>
                            <IconButton icon={faSync} onClick={() => retry()}>Retry</IconButton>
                        </div>
                            : <Spinner animation="border" />}
                    </div> : children
                }
            </>
        )
    })
