import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
//import {Link} from "react-router-dom";


const formSchema = yup.object().shape({
    name: yup.string().required('No pizza for people who forget their name!').min(2, 'name must be more than 2 toppings!'),
    //email: yup.string().email().required('Need your email ya bum!'),
    size: yup.string().required('how a big you-a want it!? We-a need-a know!'),
    toppings: yup.boolean().oneOf([true],'You want just a pizza that is just dough? This is how you get that if you leave this open!'),
    instructions: yup.string().required('Tell us things now please.')
});//closes schema

const Form = () => {
//state set up
//button state
const [buttonDisabled, setButton] = useState(true);



//state for form
const [formState, setFormState] = useState({
    name: '',//input
    size: '',//dropdown
    toppings: '' ,//checkboxes
    instructions: ''//textarea

});



//error state
const [errors, setErrors] = useState({
    name: '',
    size: '',
    toppings: '',
    instructions: ''
});

//post state
const [post, setPost] = useState()//dont forget you can takethis array out if you want to later.
//use effect for schema
useEffect(()=>{
    formSchema.isValid(formState).then(valid =>{
        setButton(!valid);
    })
},[formState]);



//form submit function for submited form
const formSubmit = event =>{
    event.preventDefault();
    axios
    .post('https://reqres.in/api/users', formState)
    .then(response=>{
        
        setPost(response.data);
        console.log('success', post);
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
    .validate(e.target.name === 'toppings' ? e.target.checked : e.target.value)//might need to tweek this.
    .then(valid =>{
        setErrors({
            ...errors, [e.target.name]: ''
        });
    })
    .catch(err => {
        setErrors({
            ...errors, [e.target.name]: err.errors[0]
        })
    })
}

//input change
const inputChange = e => {
    e.persist();
    
    const newFormData = {
        ...formState, 
        [e.target.name]:
        e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }
    validateChange(e);
    setFormState(newFormData);
}


    return(
        //building out that big ole form yup!
        <form onSubmit ={formSubmit}>
            <h2>Build Your Own Pizza!</h2>

            <label htmlFor="name">
                Name:
                <input 
                id="name"
                type="text"
                name="name"
                value={formState.name}
                onChange={inputChange}
                />
                {errors.name.length > 0 ? <p className='error'>{errors.name}</p>:null}
                
            </label>

            <label htmlFor='size'>
                Choice of Size
                <select
                id = 'size'
                name = 'size'
                onChange={inputChange}>
                    <option value ='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='extraLarge'>Extra F'n Large</option>
                </select>
                {/* {errors.size.length > 0 ? <p className='error'>{errors.size}</p>:null} */}
            </label><br/>

            <h3> Add Your Toppings!</h3>
            <label htmlFor="toppings">
                Cheese
                
                <input 
                id='toppings'
                type="checkbox"
                name="toppings"
                checked={formState.toppings[0]}
                 onChange={inputChange}
                 />
                

                Pepperoni
                <input 
                id='toppings'
                type="checkbox"
                name="toppings"
                checked={formState.toppings[1]}
                 onChange={inputChange}
                 />
                

                 Veggies
                 <input 
                id='toppings'
                type="checkbox"
                name="toppings"
                checked={formState.toppings[2]}
                 onChange={inputChange}
                 />
                

                 Tomato
                 <input 
                id='toppings'
                type="checkbox"
                name="toppings"
                checked={formState.toppings[3]}
                 onChange={inputChange}
                 />
                
            </label><br/>

            <label htmlFor="instructions">
                Additional Instructions
                <textarea
                id="instructions"
                name="instructions"
                value={formState.flavor}
                onChange={inputChange}/>
                {errors.instructions.length > 0 ? <p className='error'>{errors.instructions}</p>:null}
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button disabled={buttonDisabled}>Add To Order</button>

            



        </form>

    )//closes Form Return.







}//closes form function

export default Form;