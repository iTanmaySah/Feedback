import React from 'react';
import FormSign from './FormSign';


const Card=(props)=>{
        const temp=props.data
        return(
            <div>
                <h1>{temp.fullName}</h1>
              
                <p>{temp.feedback}</p>
            </div>
        )
    };

export default Card;
