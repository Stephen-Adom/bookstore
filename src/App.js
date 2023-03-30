import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './features';
import { Home, Categories } from './pages';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="w-[80%] mx-auto mt-5">
        <Routes>
          <Route exact path="/" element={<Home />}> </Route>
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
