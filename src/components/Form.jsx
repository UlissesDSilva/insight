import React from 'react'

export default (props) => {
    return(
        <div role='form'>
            <div className="campo">
                <label htmlFor="job">Job Description</label><br/>
                <input id="description"
                    name="description"
                    value={props.params.title}
                    onChange={props.change}
                />
            </div>
            <div className="campo">
                <label htmlFor="job">Location</label><br/>
                <input id="description"
                    name="location"
                    value={props.params.location}
                    onChange={props.change}
                />
            </div>
        </div>
    )
}