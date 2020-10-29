import '../../App.css'
import './Editor.css'

import React, { useState, Fragment } from 'react';
import ReactFlow, { removeElements, addEdge, Background, Controls } from 'react-flow-renderer';

//import data from './Data/data';
import data2 from './Data/data2';
//import data3 from './Data/data3';

import ConnectionLine from './ConnectionLine';

import customNodeDiamond from './CustomNodes/customNodeDiamond';
import customNodeOvalInput from './CustomNodes/customNodeOvalInput';
import customNodeOvalOutput from './CustomNodes/customNodeOvalOutput';
import customNodeDelay from './CustomNodes/customNodeDelay';
import customNodeIngredient from './CustomNodes/customNodeIngredient';


const onLoad = (reactFlowInstance) => {
    reactFlowInstance.fitView();
}

const nodeTypes = {
    NodeDiamond: customNodeDiamond,
    NodeOvalInput: customNodeOvalInput,
    NodeOvalOutput: customNodeOvalOutput,
    NodeDelay: customNodeDelay,
    NodeIngredient: customNodeIngredient
};


const Editor = () => {

    
    //const [elements, setElements] = useState(data);
    const [elements, setElements] = useState(data2);
    //const [elements, setElements] = useState(data3);
    const onElementsRemove = (elementsToRemove) => setElements((e) => removeElements(elementsToRemove, e));
    const [name, setName] = useState("")

    //Type of Node which spawn by clicking the button!
    const addNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addInputNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            type: 'input',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addOutputNode = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            type:'output',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeDiamond = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            type: 'NodeDiamond',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeOvalInput = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            type: 'NodeOvalInput',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeOvalOutput = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            type: 'NodeOvalOutput',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeDelay = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            type: 'NodeDelay',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeIngredient = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${name}` },
            type: 'NodeIngredient',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };


    var a = 'arrow';
    const onConnect = (params) => setElements((e) => addEdge({ ...params, animated: false, arrowHeadType: `${a}`, type: 'smoothstep' }, e));

    


    return (
        <Fragment>

            <div class="split right">            
                <ReactFlow
                    style={{ width: '100%', height: '100%' }}
                    connectionLineStyle={{ stroke: "#dde", strokeWidth: 2 }}
                    connectionLineType="bezier"
                    snapToGrid={false}
                    snapGrid={[16, 16]}
                    nodeTypes={nodeTypes}
                    elements={elements}
                    onElementsRemove={onElementsRemove}
                    connectionLineComponent={ConnectionLine}               
                    onLoad={onLoad}                    
                    onConnect={onConnect}                  
                >
                    <Background
                        color="#000"
                        gap={16}
                    />
                    <Controls />
                    </ReactFlow>             
            </div>

            <div class="split left">
                <div class="UserTools">
                    <ul>
                        <h1 class="h1"> -- Node Data --</h1>
                        <input type="text"
                            class="mytext"
                            onChange={e => setName(e.target.value)}
                            name="title" />

                        <li>
                            <h1 class="h1">-- Choose Your Node Type --</h1>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addNode}
                            >Middle</button>
                        </li>
                        <li>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addInputNode}
                            >Input</button>
                        </li>
                        <li>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addOutputNode}
                            >Output</button>
                        </li>
                        <li>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addCustomNodeDiamond}
                            >Diamond</button>
                        </li>
                        <li>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addCustomNodeOvalInput}
                            >Oval Input</button>
                        </li>
                        <li>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addCustomNodeOvalOutput}
                            >Oval Output</button>
                        </li>
                        <li>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addCustomNodeDelay}
                            >Delay</button>
                        </li>
                        <li>
                            <button
                                class="mybutton"
                                type="button"
                                onClick={addCustomNodeIngredient}
                            >Ingredient</button>
                        </li>

                        
                    </ul>
                   
                </div>

            </div>
            
        </Fragment>     
    )

}
export default Editor

