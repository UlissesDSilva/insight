import React from 'react'

export default (props) =>{

    return(
        <div className="topo">
            <div>
                <h1 className='title'>{props.title} <small className='small'>{props.small}</small></h1>
            </div>            
        </div>
    )
}