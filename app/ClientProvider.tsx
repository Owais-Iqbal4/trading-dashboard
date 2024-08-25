// app/ClientProvider.tsx
'use client'; // Ensure this component is treated as a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store'; // Adjust path to your store

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientProvider;
