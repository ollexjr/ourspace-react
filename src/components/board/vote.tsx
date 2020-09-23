import React from 'react';
import classNames from "classnames";
import { Spinner } from 'react-bootstrap';
import { IVote } from 'model/compiled';

//😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉

const codeMap: { [k: string]: string } = {
    'like': '👍',
    'funny': '🤣',
    'crazy': '🤪',
    'thinking': '🤔',
    'dislike': '👎',
    'love': 'heart',
    'angry': 'angry',
    'vangry': 'vangry'
}

export const InlineVoter: React.FC<{
    onClick: (a: string) => Promise<any>,
    table: Array<string>,
    votes?: { [k: string]: number },
    value: string
}> = ({ onClick, value, votes, table }) => {
    const [state, setLoading] = React.useState(false);
    const fire = (v: string) => {
        setLoading(true);
        onClick((value == v ? "unset" : v)).catch(t => setLoading(false)).finally(() => setLoading(false));
    }

    return (
        <div className="rounded border">
            {table.map((v, i) =>
                <button 
                    key={v}
                    type="button" className={
                    classNames("btn",
                        { "btn-outline": v != value },
                        { "btn-outline-primary": v == value },
                        { "selected": v == value })}
                    onClick={() => fire(v)}>{codeMap[v] ?? ""} <span>{(votes && votes[v])}</span></button>)}
            {state && <Spinner animation="border" role="status" size="sm" />}
        </div>
    )
}