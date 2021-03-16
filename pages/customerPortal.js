// dependencies 
import Head from 'next/head';

//compnents
import CustomerForm from '../components/customer-form';

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
        </Layout>
        </>
    );
}

export default CustomerPortal;