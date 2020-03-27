import React from 'react'
import {Route} from 'react-router-dom'

const Form = () => {
    return (
        <form>
            <label htmlFor="name">
            Name:
                <input
                    type="text"
                    name="name"
                />
            {/* errors go here */}
            </label>

            <label htmlFor="pizza-size">
            Pizza Size
                <select 
                    id="pizza-size"
                    name="size">
                    {/* // onchange goes here> */}
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="large">large</option>
                </select>
            </label>
            
        </form>
    )
}


export default Form;