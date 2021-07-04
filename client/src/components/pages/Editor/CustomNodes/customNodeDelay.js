import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import './customNodeDelay.css'

export default memo(({ data }) => {
    return (
        <>
            <Handle
                type="target"
                position="top"
                id="aa"
                style={{ background: 'black', top: '6px', left: '50.5%', zIndex:'2' }}
                onConnect={(params) => console.log('handle onConnect', params)}
            />

            <div class="delay">
                <span>
                    <textarea contentEditable="true" class="mylabeltext_delay" defaultValue={data.label}
                    onChange={e => data.label=e.target.value}  name="title" suppressContentEditableWarning={true}></textarea>            
                </span>
            </div>


            <Handle
                type="source"
                position="bottom"
                id="b"
                style={{ left: '50.5%', bottom: '6px', background: 'blue' }}
            />
        </>
    );
});