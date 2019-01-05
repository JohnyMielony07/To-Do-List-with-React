import React from 'react';

import Button from '../UI/Button/Button';

const taskBuilder = (props) => {

    return (
        <div>
            <div>
                <input type="text"></input>
                <Button>Kategoria</Button>
                <Button>Dodaj</Button>
            </div>
            <div>
                <Button>Dodaj kategorie</Button>
            </div>

        </div>
    )
};

export default taskBuilder;