import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

let result;
export default function Chat({location}) {
    const [myData,setMyData] = useState()
    useEffect(()=>{
        const data= queryString.parse(location.search)
        setMyData({...data})
        const ENDPOINT = `localhost:7003`
        result = io(ENDPOINT)
        result.emit('join',data,()=>{

        })
    },[location.search])
    return (
        <div>
            <h1>welcome {myData?myData.username:null}</h1>
        </div>
    )
}
