import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'

export default function listJob(props) {
    const [open, setOpen] = useState(false)

    const row = () =>{
        const list = props.job || []
        return list.map(el => (
            <tr key={el.id}>
                <td>
                    <div className='card col-sm-9 col-md-12 col-xs-12 '>
                        <h5 className='card-header'>{el.title} - <span className='text-muted font-weight-light'>{el.company}</span></h5>
                        <div className='card-body'>
                            <h6 className='card-subtitle'><span className='text-muted mb-2'>{ new Date(el.created_at).toLocaleDateString() }</span></h6>
                            <div>
                                <span className='badge mr-2'>{el.location}</span>
                                <span className='badge mr-2'>{el.type}</span>
                                <img className="d-none d-md-block logoCompany" height="50" alt={el.company} src={el.company_logo} />
                            </div>
                            <div className='card-text'>
                                <button id='btn' type='button' className='col-sm-3 col-md-2 col-xs-12 btn btn-primary'
                                    onClick={() => setOpen(prevOpen => !prevOpen)}
                                > 
                                    Details 
                                </button>
                            </div>
                            <Collapse in={open}>
                                <div className="mt-4 description col-sm-9 col-md-12 col-xs-12">
                                    <ReactMarkdown source={el.description} />
                                    <ReactMarkdown source={el.how_to_apply} />
                                    <button id='btn' type='button' className='col-sm-3 col-md-2 col-xs-12 btn btn-primary'
                                        onClick={() => setOpen(prevOpen => !prevOpen)}
                                    > 
                                        Hide Details
                                    </button>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </td>
            </tr>
        ))
    }

    return (
        <table className='table'>
            <tbody>
                {row()}
            </tbody>
        </table>

        // <div>
        //     {props.job.title}
        // </div>
    )
}
