import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';


const formSchema = yup.object().shape({
    name
});//closes schema

export default function Form(){
//state set up
//button state
const [button, setButton] = useState(true);

//state for form
const [formState, setFormState] = useState({
    name: '',
    size: '',
    toppings: '',
    instructions: '',
})

//error state
const [errors, setErrors] = useState({
    name: '',
    size: '',
    toppings: '',
    instructions: '',
})

//post state
const [post, setPost] = useState([])//dont forget you can takethis array out if you want to later.
//use effect for schema
useEffect(()=>{
    formSchema.isValid(formSchema).then(valid =>{
        setButton(!valid);
    })
},[formState])

//form submit function for submited form
const formSubmit = event =>{
    event.preventDefault();
    axios
    .post('https://reqres.in/api/orders', formState)
    .then(response=>{
        setPost(response.data);
        setFormState({
            name: '',
            size: '',
            toppings: '',
            instructions: '',
        })
    }).catch(err => console.log('your pizza is over cooked and your code is wrong', err.response))
};

const validateChange = e => {
    yup
    .reach(formSchema, e.target.name)
    .validate(e.target.name === 'toppings' e.target.checked : e.target.value)//might need to tweek this.
}



    return(

    )//closes Form Return.







}//closes form function