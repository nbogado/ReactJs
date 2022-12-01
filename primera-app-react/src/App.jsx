import React from 'react';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemsListContainer greeting={"Pagina en Construccion"}/>
    </div>
  );
}

export default App;
