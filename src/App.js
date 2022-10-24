import './App.css';
import { GlobalStyle } from './style/GlobalStyle ';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCard } from './components/ListOfPhotoCard';
import { Logotipo } from './components/Logotipo';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Logotipo />
      <header className="App-header">
       <ListOfCategories />
      </header>
      <main className='App-main'>
        <ListOfPhotoCard />
      </main>
    </div>
  );
}

export default App;
