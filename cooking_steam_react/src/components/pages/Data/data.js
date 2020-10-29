//import React from 'react';


const data = [
     //////////////// NODES ///////////////////
    {
        id: '1',
        type: 'NodeOvalInput',
        data: {
            label: "Ετοιμάζουμε τις φακές",
        },
        position: { x: -141, y: 0 },
    },  
    {
        id: '2',
        type: 'NodeIngredient',
        data: {
            label: "Πράσο",
        },
        position: { x: 100, y: 100 },

    },
    {
        id: '3',
        type: 'NodeIngredient',
        data: {
            label: "Κρεμμύδι",
        },
        position: { x: 300, y: 100 },
 
    },
    {
        id: '4',
        type: 'NodeIngredient',
        data: {
            label: "Καρότο",
        },
        position: { x: 500, y: 100 },

    },
    {
        id: '5',
        data: {
            label: "Κόβουμε σε κυβάκια",
        },
        position: { x: -100, y: 200 },
    },
    {
        id: '25',
        type: 'NodeIngredient',
        data: {
            label: "Ελαιόλαδο",
        },
        position: { x: 100, y: 250 },
 
    },
    {
        id: '6',
        data: {
            label: "Σωτάρουμε τα υλικά",
        },
        position: { x: -100, y: 350 },
    },
    {
        id: '7',
        data: {
            label: "Προσθέτουμε",
        },
        position: { x: -100, y: 600 },
    },
    {
        id: '8',
        data: {
            label: "Καθαρισμένες, χωρίς να τις κόψουμε",
        },
        position: { x: 500, y: 520 },
    },
    {
        id: '9',
        type: 'NodeIngredient',
        data: {
            label: "Αλάτι",
        },
        position: { x: 100, y: 450 },

    },
    {
        id: '10',
        type: 'NodeIngredient',
        data: {
            label: "Πιπέρι",
        },
        position: { x: 300, y: 450 },

    },
    
    {
        id: '11',
        type: 'NodeIngredient',
        data: {
            label: "Σκελίδες Σκόρδου",
        },
        position: { x: 500, y: 450 },
     
    },
    {
        id: '12',
        data: {
            label: "Προσθέτουμε",
        },
        position: { x: -100, y: 750 },
    },
    {
        id: '13',
        type: 'NodeIngredient',
        data: {
            label: "Πελτέ",
        },
        position: { x: 100, y: 650 },
    
    },
    {
        id: '14',
        data: {
            label: "Σωτάρουμε",
        },
        position: { x: -100, y: 850 },
    },
    {
        id: '15',
        data: {
            label: "Προσθέτουμε",
        },
        position: { x: -100, y: 1000 },
    },
    {
        id: '16',
        type: 'NodeIngredient',
        data: {
            label: "Φακές",
        },
        position: { x: 100, y: 900 },
       
    },
    {
        id: '17',
        data: {
            label: "Ανακατεύουμε",
        },
        position: { x: -100, y: 1100 },
    },
    {
        id: '18',
        data: {
            label: "Προσθέτουμε για να καλυφθεί το μείγμα και λίγο παραπάνω",
        },
        position: { x: -100, y: 1300 },
    },
    {
        id: '19',
        type: 'NodeIngredient',
        data: {
            label: "Ζωμό Κοτόπουλου",
        },
        position: { x: 100, y: 1200 },
        
    },
    {
        id: '20',
        type: 'NodeIngredient',
        data: {
            label: "Νερό",
        },
        position: { x: 300, y: 1200 },
        
    },
    {
        id: '21',
        data: {
            label: "Προσθέτουμε",
        },
        position: { x: -100, y: 1500 },
    },
    {
        id: '22',
        type: 'NodeIngredient',
        data: {
            label: "Δάφνη",
        },
        position: { x: 100, y: 1400 },
        
    },
    {
        id: '23',
        type: 'NodeDelay',
        data: {
            label: "Περιμένουμε όσο χρόνο χρειαστεί για να ψηθεί το φαγητό",
        },
        position: { x: -141, y: 1600 },
    },
    {
        id: '24',
        type:'NodeOvalOutput',
        data: {
            label: "Φακές έτοιμες",
        },
        position: { x: -141, y: 1700 },
    },

   

    //////////////// EDGES ///////////////////
    //{ id: 'e1-2', source: '1', target: '2', label: 'this is an edge label' },

    { id: 'e1-5', source: '1', target: '5', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e2-5', source: '2', target: '5', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e3-5', source: '3', target: '5', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e4-5', source: '4', target: '5', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e5-6', source: '5', target: '6', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e25-6', source: '25', target: '6', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e6-7', source: '6', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e9-7', source: '9', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e10-7', source: '10', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e8-7', source: '8', target: '7', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e11-8', source: '11', target: '8', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e7-12', source: '7', target: '12', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e13-12', source: '13', target: '12', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e12-14', source: '12', target: '14', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e14-15', source: '14', target: '15', arrowHeadType: 'arrowclosed', type: 'smoothstep' },


    { id: 'e16-15', source: '16', target: '15', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e15-17', source: '15', target: '17', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e17-18', source: '17', target: '18', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e19-18', source: '19', target: '18', arrowHeadType: 'arrowclosed', type: 'smoothstep' },
    { id: 'e20-18', source: '20', target: '18', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e18-21', source: '18', target: '21', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e22-21', source: '22', target: '21', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e21-23', source: '21', target: '23', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

    { id: 'e23-24', source: '23', target: '24', arrowHeadType: 'arrowclosed', type: 'smoothstep' },

   

    //{
     //   id: 'e9-7',
     //   source: '9',
      //  target: '7',
      //  type: 'step',
      //  style: { stroke: '#f6ab6c' },
     //   label: 'a step edge',
     //   animated: true,
      //  labelStyle: { fill: '#f6ab6c', fontWeight: 700 },
    //},

   
];

export default data