//import React from 'react';


const data = [
    //////////////// NODES ///////////////////
    {
        id: '1',
        type: 'NodeOvalInput',
        data: {
            label: "Φακές με σάλτσα φέτας και κρουτόν",
        },
        position: { x: 59, y: 0 },
    },
    {
        id: '2',
        data: {
            label: "Ετοιμάζουμε τις φακές",
        },
        position: { x: -100, y: 200 },

    },
    {
        id: '3',
        data: {
            label: "Ετοιμάζουμε τη σάλτσα φέτας",
        },
        position: { x: 100, y: 200 },

    },
    {
        id: '4',
        data: {
            label: "Ετοιμάζουμε το κρουτον",
        },
        position: { x: 300, y: 200 },

    },
    {
        id: '5',
        data: {
            label: "Σερβίρουμε τις φακές σε ατομικά πιάτα",
        },
        position: { x: -100, y: 300 },

    },
    {
        id: '6',
        data: {
            label: "Σερβίρουμε τη σάλτσα φέτας σε μπολ",
        },
        position: { x: 100, y: 300 },

    },
    {
        id: '7',
        data: {
            label: "Σερβίρουμε το κρουτον σε πιάτο",
        },
        position: { x: 300, y: 300 },

    },
    {
        id: '8',
        type: 'NodeDiamond',
        sourcePosition: 'bottom',
        data: {
            label: "Θέλουμε καλύτερη απορρόφηση σιδήρου;",
        },
        position: { x: 69, y: 400 },

    },
    {
        id: '9',
        data: {
            label: "Προσθέτουμε χυμό λεμονιού στις φακές",
        },
        position: { x: 0, y: 600 },

    },
    {
        id: '10',
        type: 'NodeOvalOutput',
        data: {
            label: "Καλή όρεξη!",
        },
        position: { x: 159, y: 700 },

    },

    ////////////////////////////////////
    {
        id: '11',
        type: 'NodeOvalInput',
        data: {
            label: "Φακές με σάλτσα φέτας και κρουτόν",
        },
        position: { x: 59, y: 800 },
    },
    {
        id: '12',
        type: 'NodeIngredient',
        data: {
            label: "Φέτα",
        },
        position: { x: 300, y: 900 },

    },
    {
        id: '13',
        type: 'NodeIngredient',
        data: {
            label: "Γάλα",
        },
        position: { x: 500, y: 900 },

    },
    {
        id: '14',
        data: {
            label: "Ανακατεύουμε σε multi",
        },
        position: { x: 100, y: 1000 },

    },
    {
        id: '15',
        type: 'NodeOvalOutput',
        data: {
            label: "Σάλτσα φέτας έτοιμη",
        },
        position: { x: 59, y: 1100 },
    },


    ////////////////////////////////////
    


    //////////////// EDGES ///////////////////
    //{ id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },

    { id: 'e1-2', source: '1', target: '2', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e1-3', source: '1', target: '3', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e1-4', source: '1', target: '4', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e2-5', source: '2', target: '5', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e3-6', source: '3', target: '6', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e4-7', source: '4', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e5-8', source: '5', target: '8', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e6-8', source: '6', target: '8', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e7-8', source: '7', target: '8', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e8a-10', source: '8__a', target: '10', arrowHeadType: 'arrowclosed', type: 'step', label: 'ΟΧΙ', labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0 } },
    { id: 'e8b-9', source: '8__b', target: '9', arrowHeadType: 'arrowclosed', type: 'smoothstep', label: 'ΝΑΙ', labelBgStyle: { fill: '#FFCC00', color: '#fff', fillOpacity: 0 } },
    

    { id: 'e9-10', source: '9', target: '10', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    ////////////////////////////////////

    { id: 'e11-14', source: '11', target: '14', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e12-14', source: '12', target: '14', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e13-14', source: '13', target: '14', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e14-15', source: '14', target: '15', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    




    ////////////////////////////////////

];

export default data