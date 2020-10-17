import React from 'react';
import classNames from "classnames";
import { Spinner, OverlayTrigger, Popover } from 'react-bootstrap';
import { IVote } from 'model/compiled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

//😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉

const codeMap: { [k: string]: string } = {
    'up': '👍',
    'down': '👎',
    'funny': '🤣',
    'crazy': '🤪',
    'thinking': '🤔',
    'love': '❤️',
    'angry': '😠',
    'vangry': '👿'
}

export const InlineVoter: React.FC<{
    className?: string
    size?: string
    simple?: boolean
    onClick: (a: string) => Promise<any>,
    table: Array<string>,
    votes?: { [k: string]: number },
    value: string
}> = ({ onClick, value, votes, table, className, size }) => {
    const [state, setLoading] = React.useState(false);
    const [valueState, setValue] = React.useState<string>(value);
    const [pop, setPop] = React.useState<boolean>(false);

    const fire = (v: string) => {
        const nv = (valueState == v) ? "unset" : v;
        setLoading(true);
        onClick(nv)
            .then((t: IVote) => setValue(nv))
            .catch(t => setLoading(false))
            .finally(() => setLoading(false));
    }
    const def = " rounded border";
    const cls = className ? className + def : def;
    return (
        <OverlayTrigger
            trigger={["hover", "focus"]}
            overlay={
                <Popover id={`popover${state}`}>
                    <Popover.Title as="h3">Vote</Popover.Title>
                    <Popover.Content>
                        %info%
                    </Popover.Content>
                </Popover>
            }
        >
            <div className={cls}
                onMouseLeave={(e) => {

                }}
                onMouseEnter={(e) => {

                }} >
                {table.map((v, i) => {
                    const isThis = (v == valueState);
                    let count = (votes && votes[v]) ?? 0;
                    //if (!isThis && count > 0) {
                    //    count--;
                    //}
                    return (
                        <button
                            key={v}
                            style={{ padding: size }}
                            type="button" className={
                                classNames("btn",
                                    "btn-sm",
                                    { "btn-outline": !isThis },
                                    { "btn-outline-primary": isThis },
                                    { "selected": isThis })}
                            onClick={() => fire(v)}>
                            {codeMap[v] ?? ""}
                            <span>{count}</span>
                        </button>
                    )
                })}
                {state && <Spinner animation="border" role="status" size="sm" />}
            </div>
        </OverlayTrigger>
    )
}

export const VerticalVoter: React.FC<{
    table: Array<string>,
}> = ({ table }) => {
    return (
        <div className="vote-vertical _d-flex _flex-column _justify-content-around rounded border p-1 overflow-hidden" style={{ maxHeight: 100 }}>
            {
                /*
                <FontAwesomeIcon icon={faArrowUp} color="grey" />
                <FontAwesomeIcon icon={faArrowDown} color="grey" />
                */
            }
            <div className="d-flex flex-column vote-inner">
                {table.map((v, i) =>
                    <button
                        key={v}
                        className="btn btn-outline"
                        type="button">{codeMap[v] ?? ""}</button>)}
            </div>
        </div>
    )
}


