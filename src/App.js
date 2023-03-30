import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="w-[80%] mx-auto">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
