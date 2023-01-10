import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { QuickJoin } from '../components';

const withAccount = (WrappedComponent) => {
  return function (props) {
    const location = useLocation();

    const [account, setAccount] = useState({});

    const adjustAccount = (value) => {
      setAccount((prev) => {
        const newValue = { ...prev, ...value };
        localStorage.setItem('account', JSON.stringify(newValue));
        return newValue;
      });
    }

    const handleRemoveAccount = () => {
      setAccount({});
      localStorage.removeItem('account');
    };

    useEffect(() => {
      const acc = localStorage.getItem('account') || '';
      if (acc.length === 0) {
        return;
      } else {
        const newAccount = JSON.parse(acc);
        setAccount(newAccount);
      }
    }, []);

    return (
      <div className="relative">
        {Object.keys(account).length === 0 && location.pathname !== '/account' ? <QuickJoin setAccount={adjustAccount} /> : null}
        <WrappedComponent account={account} setAccount={adjustAccount} removeAccount={handleRemoveAccount} {...props} />
      </div>
    )
  }
}

export default withAccount