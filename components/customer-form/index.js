// content
import { inputLabelsContent } from './content';

// partials
import Inputs from './input';


const CustomerForm = () => {

        return (
            <section className='container'>
                <form className='customer-form-wrapper' >
                    <Inputs inputLabels={inputLabelsContent} />
                </form>
            </section>
    );
}

export default CustomerForm;