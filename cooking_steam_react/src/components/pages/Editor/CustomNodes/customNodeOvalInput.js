import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import './customNodeOvalInput.css'

export default memo(({ data }) => {
    return (
        <>
            <div class="ovalInput">
                {data.label}
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