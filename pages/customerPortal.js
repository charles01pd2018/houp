// dependencies 
import Head from 'next/head';

//compnents
import CustomerForm from '../components/customer-form/customerForm';

const CustomerPortal = ({
    layout: Layout
}) => {
    
    return (
        <>
            <Head>
                <title>houp: Customer Portal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <CustomerForm />
ß        </>
    );
}

export default CustomerPortal;