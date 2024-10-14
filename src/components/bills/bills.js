import React from 'react';
import './bills.css'
import CreditLine from '../credit_line/creditLline';
const Bills = () => {
  return (
    <div className='bills_cover'>
      <h1>abohashem</h1>
  <h1>Calculat Bills</h1>
      <div className='bills_cover'>
      <h2>The order is Credit Line</h2>
        <div className='links'><a className='yes' href='credit'>Yes</a>
        <a className='yes' href='not_credit'>No</a></div>
        
        
      </div>
      <CreditLine />
    </div>
  );
}

export default Bills;
