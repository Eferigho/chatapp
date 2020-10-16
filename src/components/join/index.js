import React, { useState } from 'react'
import { Container, Heading, Input, MyButton, MyForm } from './style'
import {Link} from 'react-router-dom'

export default function Join() {

    const [form, setForm] = useState({})

    const onChangeHandler = field=>(e)=>{
        setForm({
            ...form,
            [field]: e.target.value
        })
        console.log(form)
    }
    
    const onCLickHandler = (e)=>{
        if(!form.username || !form.room){
                e.preventDefault()
        }
    }

    return (
        <Container>
            <Heading>Join</Heading>
            <MyForm>
                <Input onChange={onChangeHandler("username")} placeholder="username" />
                <Input onChange={onChangeHandler("room")} placeholder="room" />
                <Link onClick={onCLickHandler} to={`/chat/?username=${form.username}&room=${form.room}`}> <MyButton>Join</MyButton></Link>
            </MyForm>
        </Container>
    )
}
