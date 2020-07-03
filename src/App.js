import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  //Crear Listado de Productos (STATE)
   const [ productos, guardarProductos ] = useState([
     { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
     { id: 2, nombre: 'Camisa VueJS', precio: 40 },
     { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
     { id: 4, nombre: 'Camisa Angular', precio: 20 },
   ]);


  //Obtener la fecha
  const fecha = new Date().getFullYear();


  return (
    <Fragment>
        <Header 
          titulo="Tienda virtual"
                   
          />

        <Footer 
          fecha={fecha}
        
        />
    </Fragment>
  );
}

export default App;
