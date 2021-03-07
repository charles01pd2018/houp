// pages
import CustomerForm from './customerPortal';

// layouts
import formLayout from './layout/formLayout';

export default function() {
  return (
    <>
      <CustomerForm layout={formLayout}/>
    </>
  );
}
