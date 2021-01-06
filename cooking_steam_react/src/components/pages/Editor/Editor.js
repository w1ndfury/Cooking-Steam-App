import '../../../App.css'
import './Editor.css'

import React, { useState, useEffect, useCallback, Fragment } from 'react';
import ReactFlow, { removeElements, addEdge, Background, Controls, ReactFlowProvider,updateEdge } from 'react-flow-renderer';

import data from './Data/data';
import data2 from './Data/data2';
import data3 from './Data/data3';
import mydata from './Data/mydata';

import ConnectionLine from './Features/ConnectionLine';
import Sidebar from './Features/Sidebar';

import customNodeDiamond from './CustomNodes/customNodeDiamond';
import customNodeOvalInput from './CustomNodes/customNodeOvalInput';
import customNodeOvalOutput from './CustomNodes/customNodeOvalOutput';
import customNodeDelay from './CustomNodes/customNodeDelay';
import customNodeIngredient from './CustomNodes/customNodeIngredient';


// MATERIAL-UI
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//IMAGES
import Decision from './icons/decision.png';
import Delay from './icons/delay.png';
import End from './icons/end.png';
import Ingredient from './icons/ingredient.png';
import Start from './icons/start.png';
import Line from './icons/line.png';
import Arrow from './icons/arrow.png';
import Arrowhead from './icons/arrowhead.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    decisionButton: {
        backgroundImage: `url(${Decision})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 70,
        "width": 70,
        "title":{
            "position": "relative",
            "height": 70,
            "width": 70
        }
    },
    delayButton: {
        backgroundImage: `url(${Delay})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 70,
        "width": 70
    },
    endButton: {
        backgroundImage: `url(${End})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 70,
        "width": 70
    },
    ingredientButton: {
        backgroundImage: `url(${Ingredient})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 70,
        "width":70
    },
    startButton: {
        backgroundImage: `url(${Start})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 70,
        "width": 70
    },
    lineButton: {
        backgroundImage: `url(${Line})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 50,
        "width": 50
    },
    arrowButton: {
        backgroundImage: `url(${Arrow})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 50,
        "width": 50
    },
    arrowheadButton: {
        backgroundImage: `url(${Arrowhead})`,
        "background-repeat": "no-repeat",
        "background-position": "center",
        "background-size": "contain",
        "height": 50,
        "width": 50
    }
}));


const onElementClick = (event, element) => console.log('click', element);

// my custom nodes init
const nodeTypes = {
    NodeDiamond: customNodeDiamond,
    NodeOvalInput: customNodeOvalInput,
    NodeOvalOutput: customNodeOvalOutput,
    NodeDelay: customNodeDelay,
    NodeIngredient: customNodeIngredient
};


const Editor = () => {

    // MATERIAL - UI
    const classes = useStyles();

    // My Hooks
    const [reactflowInstance, setReactflowInstance] = useState(null);
    const [elements, setElements] = useState([]);
    const [name, setName] = useState("");
    const [edgeName, setEdgeName] = useState("");
    const [animated, setAnimated] = useState(false);



    const handleClick = () => setAnimated(!animated);

    

    //Node types that spawn by clicking the button!
   /* const addNode = () => {
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
*/
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

    
    const onElementsRemove = (elementsToRemove) => setElements((e) => removeElements(elementsToRemove, e));


    // gets called after end of edge gets dragged to another source or target
    const onEdgeUpdate = (oldEdge, newConnection) =>
        setElements((e) => updateEdge(oldEdge, newConnection, e));


    const onConnect = (params) =>
        setElements((e) => addEdge({
            ...params,
            animated: animated,
            arrowHeadType: `${edgeName}`,
            id: (e.length + 1).toString(),
            type: 'smoothstep'
        }, e));


    // Fits view port so that all nodes are inside the view port.
    useEffect(() => {
        if (reactflowInstance && elements.length > 0) {
            reactflowInstance.fitView();
        }
    }, [reactflowInstance, elements.length]);

   
    const onLoad = useCallback(
        (rfi) => {
            if (!reactflowInstance) {
                setReactflowInstance(rfi);
                console.log('flow loaded:', rfi);
            }
        },
        [reactflowInstance]
    );
    
  
    return (
        <Fragment>
            <div className={classes.root} style={{ padding: 20, height: '10vh' }}>
            {/* I am a container Grid with 1 (8px) spacing*/}
            <Grid container spacing={1} >
                <Grid container item xs={3} sm={2} md={2} spacing={1} max-height={100}> 
                    <Grid item xs={12} sm={12} md={12}>
                            <span><input type="text" class="mytext" onChange={e => setName(e.target.value)} name="title" placeholder="Node Discription"/></span>

                        <div class="GroupButtons">

                            <Button className={classes.decisionButton}
                            onClick={addCustomNodeDiamond} title="Decision"
                            ></Button>

                                <Button className={classes.startButton}
                                    onClick={addCustomNodeOvalInput} title="Start"
                            ></Button>

                                <Button className={classes.endButton}
                                    onClick={addCustomNodeOvalOutput} title="End"
                            ></Button>

                                <Button className={classes.delayButton}
                                    onClick={addCustomNodeDelay} title="Delay"
                            ></Button>

                                <Button className={classes.ingredientButton}
                                    onClick={addCustomNodeIngredient} title="Ingredient"
                            ></Button>

                        </div>

                        <div class="ArrowHeadButtons">
                            <div class="GroupButtons">
                                    <Button className={classes.lineButton} title="Line"
                                    onClick={() => setEdgeName("")}>                                  
                                </Button>
                                    <Button className={classes.arrowButton} title="Arrow"
                                        onClick={() => setEdgeName("arrow")}>
                                </Button>
                                    <Button className={classes.arrowheadButton} title="Arrowclosed"
                                    onClick={() => setEdgeName("arrowclosed")}>            
                                </Button>
                            </div>
                            <div> 
                                <input onClick={handleClick} checked={animated} type="checkbox" /> Animated Line
                            </div>
                        </div>

                        <div class="dataButtons">
                            <div class="GroupButtons">
                                <Button onClick={() => setElements([])}>
                                    Delete All
                                </Button>
                                <Button onClick={() => setElements(data3)}>
                                    Data3
                                </Button>
                                <Button onClick={() => setElements(data2)}>
                                    Data2
                                </Button>
                                <Button onClick={() => setElements(mydata)}>
                                        Data
                                </Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                    <Grid container item xs={9} sm={10} md={10} spacing={1}>
                    <ReactFlowProvider>
                        <Grid item xs={10} sm={10} md={10}>
                            <div class="Map">
                                <ReactFlow
                                    style={{ width: '100%', height: '100%' }}
                                    connectionLineStyle={{ stroke: "#dde", strokeWidth: 2 }}
                                    connectionLineType="bezier"
                                    snapToGrid={false}
                                    snapGrid={[16, 16]}
                                    nodeTypes={nodeTypes}
                                    elements={elements}
                                    onElementClick={onElementClick}
                                    onElementsRemove={onElementsRemove}
                                    connectionLineComponent={ConnectionLine}
                                    onLoad={onLoad}
                                    onEdgeUpdate={onEdgeUpdate}
                                    onConnect={onConnect}
                                >
                                <Background
                                    color="#000"
                                    gap={32}
                                    variant="dots"
                                />
                                <Controls />
                                </ReactFlow>
                            </div>

                        </Grid>
                            <Grid item xs={2} sm={2} md={2}>
                                <div class="Sidebar">
                                    <Sidebar />
                                </div>
                        </Grid>
                    </ReactFlowProvider>
                    
                </Grid>

            </Grid>

        </div>  
        </Fragment>
       
    )

}
export default Editor

