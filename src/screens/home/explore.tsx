import React from 'react';
//import { DataSet, Network } from 'vis-network';
import { DataSet, Network } from 'vis-network/standalone';

export const ScreenExploreGraph: React.FC<{}> = () => {
    const ref = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        let nodes = new DataSet([
            { id: 1, label: 'Node 1' },
            { id: 2, label: 'Node 2' },
            { id: 3, label: 'Node 3' },
            { id: 4, label: 'Node 4' },
            { id: 5, label: 'Node 5' }
        ]);
        if (ref.current)
            new Network(ref.current, { nodes: nodes }, {});
    }, [ref])
    return (
        <div ref={ref} className="d-flex align-self-stretch" 
            style={{ height: 'calc(100vh - 60px)'}}></div>
    )
}