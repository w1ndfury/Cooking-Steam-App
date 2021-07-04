import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import './customNodeOvalInput.css'

export default memo(({ data }) => {
    return (
        <>      
            <Handle
                type="source"
                position="bottom"
                id="b"
                style={{ left: '50.5%', bottom: '6px', background: 'blue', zIndex: '2' }}
            />

            <div class="ovalInput">
                <span>
                    <textarea contentEditable="true" class="mylabeltext_oval_input" defaultValue={data.label}
                    onChange={e => data.label=e.target.value}  name="title" suppressContentEditableWarning={true}></textarea>            
                </span>
            </div>   
        </>
    );
});