import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import './customNodeIngredient.css'

export default memo(({ data }) => {
    return (
        <>

            <div class="ingredient">
                {data.label}
            </div>


            <Handle
                type="source"
                position="bottom"
                id="b"
                style={{ left: '50%',top:'93%', bottom: '0%', background: 'blue' }}
            />
        </>
    );
});