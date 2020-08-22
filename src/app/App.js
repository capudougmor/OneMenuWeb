import React from 'react';
import '../app/helpers/Global.css';

import Routes from './routes'

import { ProfileProvider } from '../../src/app/hooks/Context/Provider'

function App() {
  return (
    <ProfileProvider>
      <Routes />
    </ProfileProvider>
  );
}

export default App;
