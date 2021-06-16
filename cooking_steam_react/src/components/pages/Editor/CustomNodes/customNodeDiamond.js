import React, { useState, memo } from 'react';
import { Handle } from 'react-flow-renderer';
import './customNodeDiamond.css'


export default memo(({ data }) => {

    const [name, setName] = useState({data});

    return (
        <div class="nowheel">
            <Handle
                type="target"
                position="top"
                id="aa"
                style={{ background:'black', top: '6px', left: '50.5%'}}
                onConnect={(params) => console.log('handle onConnect', params)}               
            />
            
            <div class="diamond">
                <span>
                    <textarea contenteditable="true" rows="70" cols="50" class="mylabeltext" value={data.label}
                    onChange={e => data.label = setName(e.target.value)} name="title"></textarea>
                </span>
            </div>
            
 
            <Handle
                type="source"
                position="right"
                id="a"
                style={{ left: '93.5%', top: '50.5%', background: 'blue' }}
            />
            <Handle
                type="source"
                position="bottom"
                id="b"
                style={{ left: '50.5%', bottom: '6px', background: 'blue' }}
            />
        </div>
    );
});