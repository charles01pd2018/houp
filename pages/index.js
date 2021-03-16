// dependencies
import { useState, useEffect } from 'react';

// pages
import CustomerForm from './customerPortal';
import Loading from './loading';

// layouts
import formLayout from './layout/formLayout';

// utils
import { getServerStatus } from '../utils/data-fetch';

export default () => {

  // async function to fetch data from client server
  // for now, we will simply use a function that always returns true for testing purposes
  var [ serverStatus, setServerStatus ] = useState(getServerStatus());

  serverStatus = true;

  // testing server status
    // useEffect( () => {
    //   setTimeout( () => { setServerStatus(true) }, 3000);
    // })

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
