import React, { memo} from 'react';
import { Handle } from 'react-flow-renderer';
import './customNodeDiamond.css'


export default memo(({ data }) => {

    const [text, setText] = React.useState(data.label);

    function textChange(event) {
        setText(event.target.value);
        data.label = event.target.value;
    }

    return (
        
        <>
            <Handle
                type="target"
                position="top"
                id="aa"
                style={{ background:'black', top: '6px', left: '50.5%'}}          
            />
            
            <div class="diamond">
                <span>
                    <textarea 
                        contentEditable="true" 
                        className="mylabeltext_diamond" 
                        defaultValue={text}
                        onChange={textChange}
                        value={text}
                        name="title"
                        type="text" 
                        suppressContentEditableWarning={true}>
                    </textarea>            
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
        </>
    );
    
});