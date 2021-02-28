import {useReducer, useEffect} from 'react'
import axios from 'axios'

const url = 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'

const METHOD = {
    REQUEST: 'make-request',
    GET: 'get-data',
    ERROR: 'error'
}

function reducer(state, action){
    switch(action.type){
        case METHOD.REQUEST:
            return{loading: true, jobs: []}
        case METHOD.GET:
            return {...state, loading: false, jobs: action.payload.jobs}
        case METHOD.ERROR:
            return {...state, loading: false, error: action.payload.error, jobs: []}
        default:
            return state
    }
}
export default function useBuscador(params){
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() =>{
        const cancel = axios.CancelToken.source()
        dispatch({type: METHOD.REQUEST})
        axios.get(url, {
            cancel: cancel.token,
            params: {markdown: true, ...params}
        }).then(res =>{
            dispatch({type: METHOD.GET, payload: {jobs: res.data}})
        }).catch(err =>{
            if(axios.isCancel(err))
                return
            dispatch({type: METHOD.ERROR, payload: {error: err}})
        })

        return() =>{
            cancel.cancel()
        }
    }, [params])

    return state
}