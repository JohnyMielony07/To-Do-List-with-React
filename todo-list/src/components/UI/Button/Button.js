import React from 'react';
import Button from '@material-ui/core/Button';

const button = (props) => (
    
        <Button onClick={props.clicked} to="/open-collective" color="secondary" variant="contained">
            {props.children}            
        </Button>
    
);

export default button;
