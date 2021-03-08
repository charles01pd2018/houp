// pages
import CustomerForm from './customerPortal';

// layouts
import formLayout from './layout/formLayout';
import Loading from './loading';

// utils
import { getServerStatus } from '../utils/data-fetch';

export default () => {

  // async function to fetch data from client server
  // for now, we will simply use a function that always returns true for testing purposes
  var serverStatus = getServerStatus();

  // testing server status
  // serverStatus = false;

  return (
    <>
    {
      serverStatus === true ? (
      <CustomerForm layout={formLayout}/>
      ) : ( 
        <Loading animationType='houp' loadingTitle='jawnerz' />
      )
    }
    </>
  );
}
