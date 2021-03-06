// pages
import SubCustomerPortal from './sub__customerPortal';
import CustomerForm from './customerPortal';

// layouts
import formLayout from './layout/formLayout';

export default function() {
  return (
    <>
      <CustomerForm />
      <SubCustomerPortal layout={formLayout}/>
    </>
  );
}
