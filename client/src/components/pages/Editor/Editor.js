import '../../../App.css'
import './Editor.css'
import './react_flow.css'

import React, { useState, useEffect, useCallback, Fragment } from 'react';
import ReactFlow, { useZoomPanHelper, 
                    removeElements, 
                    addEdge, 
                    Background, 
                    Controls, 
                    ReactFlowProvider,
                    updateEdge, 
                    isEdge } from 'react-flow-renderer';

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
import Board from './icons/board.png';
import Sponge from './icons/sponge.png';

import localforage from 'localforage';


/* Styles */
const useStyles = makeStyles((theme) => ({
    root: {
        height:"100%",
        padding: 20
    },
    deleteAllButton: {
        backgroundImage: `url(${Sponge})`,
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
const onNodeDragStop = (event, node) => console.log('drag stop', node);

// my custom nodes init
const nodeTypes = {
    NodeDiamond: customNodeDiamond,
    NodeOvalInput: customNodeOvalInput,
    NodeOvalOutput: customNodeOvalOutput,
    NodeDelay: customNodeDelay,
    NodeIngredient: customNodeIngredient
};

localforage.config({
    name: 'react-flow-docs',
    storeName: 'flows',
});
const flowKey = 'example-flow';


const Editor = () => {

    // MATERIAL - UI
    const classes = useStyles();

    // My Hooks
    const [rfInstance, setRfInstance] = useState(null);
    const [reactflowInstance, setReactflowInstance] = useState(null);
    const [elements, setElements] = useState([]);
    const [nodeName, setNodeName] = useState('');
    const [edgeName, setEdgeName] = useState("");
    const [animated, setAnimated] = useState(false);  

    const handleClick = () => setAnimated(!animated);

    // Fits view port so that all nodes are inside the view port.
    useEffect(() => {
    if (reactflowInstance && elements.length > 0) {
        reactflowInstance.fitView();
    }

       
    }, [reactflowInstance, elements.length]);

   
    const _onChange = () => {
      console.log("test");  
    };

    useEffect(() => {
        setElements((els) =>
          els.map((el) => {
            if (!isEdge(els)) {
              // it's important that you create a new object here
              // in order to notify react flow about the change
              el.data = {
                ...el.data,
                label: nodeName,
              };
            }
    
            return el;
          })
        );
      }, [nodeName, setElements]);
   

    /*Node types that spawn by clicking the button!*/

    const addCustomNodeDiamond = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${nodeName}`},
            type: 'NodeDiamond',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeOvalInput = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${nodeName}` },
            type: 'NodeOvalInput',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeOvalOutput = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${nodeName}` },
            type: 'NodeOvalOutput',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeDelay = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${nodeName}` },
            type: 'NodeDelay',
            position: { x: 0 * window.innerWidth, y: 0 * window.innerHeight }
        }));
    };

    const addCustomNodeIngredient = () => {
        setElements(e => e.concat({
            id: (e.length + 1).toString(),
            data: { label: `${nodeName}` },
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

   
    const onLoad = useCallback(
        (rfi) => {
            if (!reactflowInstance) {
                setReactflowInstance(rfi);
                console.log('flow loaded:', rfi);
            }
        },
        [reactflowInstance]
    );

    const onSave = useCallback(() => {
        if (rfInstance) {
            const flow = rfInstance.toObject();
            localforage.setItem(flowKey, flow);
        }
    }, [rfInstance]);
    const onRestore = useCallback(() => {
        const restoreFlow = async () => {
            const flow = await localforage.getItem(flowKey);
            if (flow) {
                const [x = 0, y = 0] = flow.position;
                setElements(flow.elements || []);
                
            }
        };
        restoreFlow();
    }, [setElements]);
    
  
    return (
        <Fragment>
            <ReactFlowProvider>
            <div className={classes.root}>
            {/* I am a container Grid with 2 (16px) spacing*/}   
                <Grid container spacing={2}>
                    <Grid container direction="column" justify="center" alignItems="center" item xs={12} sm={12} md={2} spacing={1}> 
                        <div class="ToolSidebar">
                            <Grid item xs={12} sm={12} md={12} container direction="column" display="flex">
                                <div class="ToolSidebar-1">
                                    
                                    <div>
                                        <span>
                                            <input 
                                                type="text" 
                                                className="mytext"
                                                value={nodeName} 
                                                onChange={e => setNodeName(e.target.value)} 
                                                name="title" 
                                                placeholder="Node Discription"
                                            />
                                        </span>
                                    </div>
                                    
                                    {/* Εδώ επιλέγουμε τα nodes */}
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

                                    {/* Εδώ επιλέγουμε τα arrows */}
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

                                    <div class="dataButtons">
                                        <div class="GroupButtons">
                                            <Button onClick={onSave}>save</Button>
                                            <Button onClick={onRestore}>restore</Button>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="ToolSidebar-2">                                                                      
                                        <Sidebar />                    
                                </div>
                            </Grid>
                        </div> 
                    </Grid>

                    <Grid container item xs={12} sm={12} md={10} spacing={1}>
                        
                            <Grid item xs={12} sm={12} md={12}>
                                <div class="Border" style={{ backgroundImage : `url(${Board})` }}>
                                    <div class="Map" >
                                    
                                        <ReactFlow
                                            connectionLineStyle={{ stroke: "#dde", strokeWidth: 2 }}
                                            connectionLineType="bezier"
                                            snapToGrid={true}
                                            snapGrid={[20, 20]}
                                            defaultZoom={1.3}
                                            nodeTypes={nodeTypes}
                                            elements={elements}
                                            onElementClick={onElementClick}
                                            onNodeDragStop={onNodeDragStop}
                                            onElementsRemove={onElementsRemove}
                                            connectionLineComponent={ConnectionLine}
                                            onLoad={setRfInstance}
                                            onEdgeUpdate={onEdgeUpdate}
                                            onConnect={onConnect}
                                        >
                                            
                                            <Background
                                                gap={32}
                                                variant="dots"
                                            />
                                            <Controls />
                                        </ReactFlow>

                                        <div class="Delete-All-Button" >
                                        <Button className={classes.deleteAllButton} 
                                            onClick={() => setElements([])}
                                            title="Delete All"
                                        >    
                                        </Button>
                                    </div>
                                    </div>
                                    
                                </div>
                                
                            </Grid>
                        
                    </Grid>

                </Grid>

            </div>
            </ReactFlowProvider>   
        </Fragment>
       
    )

}
export default Editor

