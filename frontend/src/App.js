 
import './App.css';
// import { Button } from '@chakra-ui/react'
import {Route} from "react-router-dom";
import HomePage from './Pages/HomePage';
import ChatPage from './Pages/ChatPage';
function App() {
  return (
    <div className="App">
     <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
     <Route path="/" component={HomePage } exact />
     <Route path="/chats" component={ChatPage } />


    </div>
  );
}

export default App;


