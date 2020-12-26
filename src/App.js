import logo from './logo.svg';
import './App.css';
import Adress from "./Profile/Adress"
import FullName from "./Profile/FullName"
import ProfilPhoto from "./Profile/ProfilPhoto"
const App=() =>{
  return(
    <div>
      <ProfilPhoto/>
      <FullName/>
      <Adress/>
    </div>
  );
}


export default App;
