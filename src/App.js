/**
 @name:App
 @type:React Component
 @param:none
 @returns: JSX of App of User details
 @functionality : This Component where With site start.
**/



// Imports
// ====================================
import './style/Blog.css';
import 'prismjs';
import './style/prism.css'
import Button from './Components/MainPageButton'
import HOME from './Components/Home'
// ====================================



function App() {
  return (
    <>
    <Button></Button>
    <HOME></HOME>
    </>
  );
}

export default App;
