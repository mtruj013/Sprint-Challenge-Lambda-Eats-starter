import React, { useState, useEffect } from "react"
import axios from "axios"
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required("please input name").min(2, "name must be more than 2 characters"),
    size: yup.string(),
    // toppings: yup.boolean(),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
    peppers: yup.boolean(),
    mushrooms: yup.boolean(),
    notes: yup.string()
})

const Form = () => {

    const [button, setButton] = useState(true);//button state

    const [formState, setFormState] = useState({//form state
        name: "",
        size: "",
        pepperoni: false,
        pineapple: false,
        peppers: false,
        mushrooms: false,
        notes: ""
    })

    const [errors, setErrors] = useState({//errors state
        name: ""
    })

    const [post, setPost] = useState([]);//post req state


    useEffect(() => {
        formSchema.isValid(formState)
            .then(valid => {
                setButton(!valid);
            });
    }, [formState]);

    const formSubmit = event => {
        event.preventDefault();
        axios.post("https://reqres.in/api/orders", formState)
            .then(response => {
                setPost(response.data);

                setFormState({
                    name: "",
                    size: "",
                    // toppings: "",
                    pepperoni: false,
                    pineapple: false,
                    peppers: false,
                    mushrooms: false,
                    notes: ""
                })

            })
            .catch(error => {
                console.log("submition failed", error)
            })
    }

    const validateChange = event => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setErrors({
                    ...errors,
                    [event.target.name]: ""
                })
            })
            .catch(err => {
                setErrors({
                    ...errors,
                    [event.target.name]: err.errors[0]
                })
            })
    }

    const inputChange = event => {
        event.persist();
        const newFormData = {
            ...formState,
            [event.target.name]:
                event.target.type === "checkbox" ? event.target.checked : event.target.value

        }
        validateChange(event);
        setFormState(newFormData)
    }



    return (
        <form onSubmit={formSubmit}>
            <label htmlFor="name">
                Name:
                <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={inputChange}
                />
                {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
            </label><br />

            <label htmlFor="pizza-size">
                Pizza Size
                <select
                    id="pizza-size"
                    name="size"
                    onChange={inputChange}>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
            </label><br />

            
            <legend>Toppings:</legend>
                <label htmlFor="pepperoni">
                
                    <input
                    id="pepperoni"
                    type="checkbox"
                    name="pepperoni"
                    checked={formState.pepperoni}
                    onChange={inputChange}
                />Pepperoni
            </label>
            <label htmlFor="pineapple">
                
                    <input
                    id="pineapple"
                    type="checkbox"
                    name="pineapple"
                    checked={formState.pineapple}
                    onChange={inputChange}
                />Pineapple
            </label>
            <label htmlFor="peppers">
                
                    <input
                    id="peppers"
                    type="checkbox"
                    name="peppers"
                    checked={formState.peppers}
                    onChange={inputChange}
                />Bell Peppers
            </label>
            <label htmlFor="mushrooms">
                
                    <input
                    id="mushrooms"
                    type="checkbox"
                    name="mushrooms"
                    checked={formState.mushrooms}
                    onChange={inputChange}
                />Mushrooms
            </label>
            {/* </label> */}

            <label htmlFor="special-instructions">
                
                <textarea
                    id="notes"
                    name="notes"
                />Special Instructions:
            </label>
            <pre>{JSON.stringify(post, null, 2)}</pre>
            <button disabled={button}>Submit</button>
        </form>
    )
}


export default Form;