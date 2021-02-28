import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'

import React, {useState} from 'react'

import useBuscador from '../components/UseBuscador'
import Header from '../components/Header'
import ListJob from '../components/ListJob'
import Form from '../components/Form'



export default () => {
    const [params, setParams] = useState({})
    const {jobs, loading, error} = useBuscador(params)

    function change(evt){
        const campo = evt.target.name
        const value = evt.target.value
        setParams(prevParams =>{
            return {
                ...prevParams,
                [campo]: value
            }
        })
    }

    return (
        <div className='container'>
            <Header title='GitHub' small='Jobs'/>
            <hr className="headerLine"/> 
            <Form
                change={change}
                params={params}
            />
            {loading && <h1 className='start'>loading...</h1>}
            {error && <h1 className='erro'>Erro! Tente novamente</h1>}
            <ListJob job={jobs}/>
        </div>
    )
}