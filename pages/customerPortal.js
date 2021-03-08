// dependencies 
import Head from 'next/head';

//compnents
import CustomerForm from '../components/customer-form/customerForm';

import Filler from './filler';

const CustomerPortal = ({
    layout: Layout
}) => {
    
    return (
        <>
        <Layout>
            <Head>
                <title>houp: Customer Portal</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <CustomerForm />

            <Filler />
        </Layout>
        </>
    );
}

export default CustomerPortal;