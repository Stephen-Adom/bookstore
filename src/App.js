import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './features';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="w-full lg:w-[80%] mx-auto mt-5">
        <Outlet />
      </section>
    </div>
  );
}

export default App;
