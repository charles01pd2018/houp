// partials
import Inputs from './partials/input/inputs';
import { useState } from 'react';

const CustomerForm = () => {

    // input labels that are made from the businesses pov
    // fetch via some sort of server
    // we will use a template design for now
    const [ inputLabels, setInputLabels ] = useState([
        {
            inputText: "Name",
            inputFieldText: "enter your name"
        },
        {
            inputText: "Customer ID",
            inputFieldText: "enter your customer ID"
        },
        {
            inputText: "Reason For Contact",
            inputFieldText: "why are you reaching out?"
        },
        {
            inputText: "Phone Number",
            inputFieldText: "best number to reach you"
        }
    ]);

        return (
            <div className='container'>
                <form className='customer-form-wrapper' >
                    <Inputs inputLabels={inputLabels} />
                </form>
            </div>
    );
}

export default CustomerForm;