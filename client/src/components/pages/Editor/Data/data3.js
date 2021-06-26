//import React from 'react';


const data = [
    //////////////// NODES ///////////////////
    {
        id: '1',
        type: 'NodeOvalInput',
        data: {
            label: "Ετοιμάζουμε τo κρουτόν",
        },
        position: { x: -141, y: -100 },
    },
    {
        id: '2',
        type: 'NodeIngredient',
        data: {
            label: "Ψωμί",
        },
        position: { x: 200, y: 50},

    },
    {
        id: '3',
        type: 'default',
        data: {
            label: "Καθαρίζουμε από την κόρα",
        },
        position: { x: 100, y: 150 },

    },
    {
        id: '4',
        type: 'default',
        data: {
            label: "Κόβουμε σε κυβάκια",
        },
        position: { x: 0, y: 250 },

    },
    {
        id: '5',
        type: 'default',
        data: {
            label: "Ραντίζουμε",
        },
        position: { x: 0, y: 400},
    },
    {
        id: '6',
        type: 'NodeIngredient',
        data: {
            label: "Ελαιόλαδο",
        },
        position: { x: 200, y: 300 },

    },
    {
        id: '7',
        data: {
            label: "Ρίχνουμε",
        },
        position: { x: 0, y: 600 },
    },
    {
        id: '8',
        type: 'NodeIngredient',
        data: {
            label: "Αλάτι",
        },
        position: { x: 100, y: 500 },

    },
    {
        id: '9',
        type: 'NodeIngredient',
        data: {
            label: "Πιπέρι",
        },
        position: { x: 300, y: 500 },

    },

    {
        id: '10',
        data: {
            label: "Ανακατεύουμε",
        },
        position: { x: 0, y: 700 },
    },
    {
        id: '11',
        type: 'NodeDelay',
        data: {
            label: "Προθερμαίνουμε τον φούρνο στους 180 βαθμούς Κελσίου",
        },
        position: { x: -41, y: 800 },

    },
    {
        id: '12',
        data: {
            label: "Απλώνουμε αραιά αραιά τα κυβάκια του ψωμιού σε ένα ταψί",
        },
        position: { x: 0, y: 900 },
    },
    {
        id: '13',
        data: {
            label: "Βάζουμε το ταψί στον προθερμασμαίνο φούρνο",
        },
        position: { x: 0, y: 1000 },
    },
    {
        id: '14',
        type: 'NodeDelay',
        data: {
            label: "Περιμένουμε 5-10 λεπτά μέχρι να ροδίσουν τα κυβάκια του ψωμιού",
        },
        position: { x: -41, y: 1100 },

    },
   
    {
        id: '15',
        type: 'NodeOvalOutput',
        data: {
            label: "Κρουτόν έτοιμα",
        },
        position: { x: -41, y: 1200 },
    },



    //////////////// EDGES ///////////////////
    { id: 'e1-3', source: '1', target: '3', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e2-3', source: '2', target: '3', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e3-4', source: '3', target: '4', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e4-5', source: '4', target: '5', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e6-5', source: '6', target: '5', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e5-7', source: '5', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e8-7', source: '8', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e9-7', source: '9', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e7-10', source: '7', target: '10', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e10-11', source: '10', target: '11', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e11-12', source: '11', target: '12', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e12-13', source: '12', target: '13', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e13-14', source: '13', target: '14', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e14-15', source: '14', target: '15', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

   




];

export default data