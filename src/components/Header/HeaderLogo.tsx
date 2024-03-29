import React from 'react';

import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/cs_networking.jpg';

export const HeaderLogo = () => {
  const navigate = useNavigate();

  return (
    <div style={{ cursor: 'pointer' }}>
      <img
        onClick={() => {
          navigate('/');
        }}
        alt="logo"
        src={logo}
      />
    </div>
  );
};
