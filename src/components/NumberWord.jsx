import React from 'react';

const NumberWord = props => {

    const { parameter } = props;
    
    return (
        <div className="col-4 mx-auto"> 
        {
        isNaN(parameter) ? <h1>The word is: {parameter}</h1> : <h1>The number is: {parameter}</h1>
        }    
        </div>
    );
}

export default NumberWord;