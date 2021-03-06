// components
import Header from '../../components/layout/header';
import Footer from '../../components/layout/footer';


const FormLayout = ({ children }) => {
    return (
        <>
            <Header companyName='jawnerz' />
                    <main className='site-content'>{children}</main>
            <Footer />
        </>
    );
}

export default FormLayout;