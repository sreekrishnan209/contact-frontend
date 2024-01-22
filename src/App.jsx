import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Add from './Components/Add';
import Edit from './Components/Edit';
import View from './Components/View';
import PageNotFound from './Components/PageNotFound';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <Header/>
      <section>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/list' element={<List/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<View/>}/>
        <Route path='*' element={<PageNotFound/>}/>


      </Routes>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
