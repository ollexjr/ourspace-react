import React from 'react';
import { Link } from 'react-router-dom';
import classNames from "classnames";
import { Spinner, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import { IVote } from 'model/compiled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

//😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉

const codeMap: { [k: string]: string } = {
    'up': '👍',
    'down': '👎',
    'funny': '🤣',
    'wow': '😯',
    'haha': '😂',
    'crazy': '🤪',
    'thinking': '🤔',
    'love': '❤️',
    'angry': '😠',
    'vangry': '👿'
}


const arrowMap: { [k: string]: any } = {
    'up': faArrowUp,
    'down': faArrowDown,
}

const v: Array<string> = [
    'up',
    'down',
];

export const ArrowVoter: React.FC<{
    className?: string,
    onVote: (a: string) => Promise<any>,
    votes?: { [k: string]: number }
    vote?: string,
}> = ({
    onVote,
    votes,
    vote
}) => {
        const [mvt, setVoteChange] = React.useState<string | undefined>(vote);
        let up = 0, down = 0;
        if (votes && votes['up']) {
            up = votes['up'];
        }
        if (votes && votes['down']) {
            down = votes['down'];
        }
        const total = up - down;

        const onVotePre = (v: string) => {
            onVote(v).then(t => {
                setVoteChange(v);
            });
        }

        const getVote = (): number => {
            if (vote != mvt && mvt == 'down') {
                return -1;
            }

            if (vote != mvt && mvt == 'up') {
                return 1;
            }

            return 0;
            //((!vote && mvt == 'down') ? -1 : ((!vote && mvt == 'up') ? 1: 0))
        }

        return (
            <div className="d-flex flex-column align-items-center">
                <small>{total + getVote()}</small>
                <div className="d-flex flex-column justify-content-between">
                    {v.map(v => {
                        const isThis = (mvt == v);
                        return (
                            <Button
                                onClick={() => onVotePre(v)}
                                key={v}
                                size="sm"
                                variant="none"
                                className={isThis ? "text-primary" : ""}>
                                <FontAwesomeIcon icon={arrowMap[v]} />
                            </Button>
                        )
                    })}
                </div>
            </div>
        )
    }

export const InlineVoter: React.FC<{
    loggedIn?: boolean,
    className?: string
    size?: string
    preview?: boolean
    onClick: (a: string) => Promise<any>,
    table: Array<string>,
    votes?: { [k: string]: number },
    value: string
}> = ({ loggedIn, onClick, preview, value, votes, table, className, size }) => {

    const [state, setLoading] = React.useState(false);
    const [valueState, setValue] = React.useState<string>(value);
    const [pop, setPop] = React.useState<boolean>(false);

    const fire = (v: string): Promise<any> => {
        const nv = (valueState == v) ? "unset" : v;
        setLoading(true);
        return onClick(nv)
            .then((t: IVote) => setValue(nv))
            .catch(t => setLoading(false))
            .finally(() => setLoading(false));
    }
    let overlay = React.useRef(null);

    const def = ""; //" rounded border";
    const cls = className ? className + def : def;

    // https://stackoverflow.com/questions/38467848/react-bootstrap-how-to-manually-close-overlaytrigger
    // https://stackoverflow.com/a/47636953
    return (
        <OverlayTrigger
            rootClose={true}
            //componentRef={(ref: any) => this.overlay = ref}
            //ref={ref}
            //trigger={["hover", "focus"]}
            //: ["hover", "focus"]
            trigger={preview ? ["click"] : undefined}
            placement="auto"
            overlay={
                <Popover id={`popover${state}`}>
                    <Popover.Title as="h3">
                        Opinion
                    </Popover.Title>
                    <Popover.Content>
                        {table.map((v, i) => {
                            const isThis = (v == valueState);
                            let count = (votes && votes[v]) ?? 0;
                            return (
                                <button
                                    key={v}
                                    style={{ padding: size }}
                                    type="button" className={
                                        classNames("btn btn-sm",
                                            { "btn-outline": !isThis },
                                            { "btn-outline-primary": isThis },
                                            { "selected": isThis })}
                                    onClick={() => fire(v).then(t => document.body.click())}>
                                    {codeMap[v] ?? ""}
                                    <span>{count}</span>
                                </button>
                            );
                        })}
                    </Popover.Content>
                    <Link className="px-2" to="/about"><small>Read more here</small></Link>
                </Popover>
            }
        >
            <div className={cls}
                onMouseLeave={(e) => { }}
                onMouseEnter={(e) => { }} >
                {table.map((v, i) => {
                    if (preview && i > 1) {
                        return;
                    }
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
                                classNames("btn btn-sm",
                                    { "btn-outline": !isThis },
                                    { "btn-outline-primary": isThis },
                                    { "selected": isThis })}
                            onClick={() => !preview && fire(v)}>
                            {codeMap[v] ?? ""}
                            {count}
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


