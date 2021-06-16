import React, { Fragment } from 'react';
import { useStoreState } from 'react-flow-renderer';
import './Sidebar.css'
import { Button } from "@material-ui/core";

const Sidebar = () => {

    const nodes = useStoreState((store) => store.nodes);
    const edges = useStoreState((store) => store.edges);
    //const transform = useStoreState((store) => store.transform);
    //const setSelectedElements = useStoreActions((actions) => actions.setSelectedElements);

    return (
        <Fragment>
            <div className="nodes_edges">        
                <div className="nodes">Nodes</div>
                {nodes.map((node) => (
                    <div className="myNodes" key={node.id}>
                        Node {node.id} "{node.data.label}"
                    </div>
                ))}

                <div className="edges">Edges</div>
                {edges.map((edges) => (
                    <div key={edges.id}>
                    {edges.id} source: {edges.source} target: {edges.target}
                    </div>
                ))}                      
            </div>

            <div>
                <Button>SAVE RECIPE</Button>
            </div>
        </Fragment>

    );
};

export default Sidebar

/*import { useStoreState, useStoreActions } from 'react-flow-renderer';
const selectAll = () => {
    setSelectedElements(nodes.map((node) => ({ id: node.id, type: node.type })));
};

<div className="selectall">
    <button onClick={selectAll}>select all nodes</button>
</div>*/