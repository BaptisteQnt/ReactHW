import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Dish from './components/Dish';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Dish name={'Tacos'}  />
        <Dish name={'Enchiladas'} prix={12} img={'https://cdn.pixabay.com/photo/2014/01/14/22/13/mexican-245240_960_720.jpg'} />
        <Dish name={'Mole poblano'} prix={15} img={' https://cdn.pixabay.com/photo/2021/02/04/03/57/mole-5980185_960_720.jpg'} />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
