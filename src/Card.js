import React from 'react';

const Card = (props) =>{
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow tc'>
            <img alt='robot' src={`https://robohash.org/${props.id}?size=200x200`} />
            <div>
                <h4>{props.name}</h4>
                <p>{props.email}</p>
            </div>
        </div>
    )
};

export default Card;