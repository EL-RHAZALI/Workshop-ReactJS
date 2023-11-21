import React from 'react';

const filtre = ({filmName , changeFilter}) => {
    return (
        <div>
            <input type = "text" placeholder='search' value={filmName}
            onChange={(Event)=>changeFilter(Event.target.value)}
            />
        </div>
    )
}

export default filtre;