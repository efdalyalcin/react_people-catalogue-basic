import React from 'react';
import './App.scss';
import { Users } from './components/Users/Users';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Users />
    </div>
  );
}

export default App;
