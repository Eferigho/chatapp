import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-items:center;
`
export const Heading = styled.h1`
    text-align: center;
    margin-bottom: 30px !important;
    color: red;
`

export const MyForm = styled.form`
    display: flex;
    flex-flow: column wrap;
    width:350px;
`

export const Input = styled.input`
    padding: 10px !important;
    height:25px;
    margin-bottom: 10px !important;
    border: 1px solid red;
    border-radius: 5px;

    &:focus{
        outline:none;
    }
`

export const MyButton = styled.button`
    padding:10px;
    background: red;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    border: none;
    height: 45px;
    width: 100%;
    cursor: pointer;

    &:focus{
        outline:none;
    }
`