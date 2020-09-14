import React from 'react';

const WordColor = props => {
    
    const { word, tColor, bgColor} = props;

    return (
        <div className="col-4 mx-auto text-center"> 
            <h1 style={{color: tColor, backgroundColor: bgColor}}>The word is: {word}</h1>
        </div>
    );
}

export default WordColor;