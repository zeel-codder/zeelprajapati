import react,{useEffect} from 'react'
import './style/App.css';
import HOME from './Halpper/Home_Page/Home'
import {AppProvider} from './Halpper/Home_Page/context'


function App() {

  return (
    <AppProvider>
    <HOME></HOME>
    </AppProvider>
  );
}

export default App;
