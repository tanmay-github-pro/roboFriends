import React from 'react';

const Scroll = (props) => {
    return (
        // returning object within javascript expression
        // that's why 2 curly brackets
        <div style={{overflowY: 'scroll', height: '80vh'}}>
            {props.children}
        </div>
    );
};

export default Scroll;