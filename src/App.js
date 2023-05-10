
import './App.css';
import Header from './Component/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

function App() {
  const navigation = useNavigation();
  return (
    <div className="App">
      <Header></Header>
      <div>
        {
          navigation.state === "loading" ? "Loading..." : ""
        }
      </div>
      {/* <Shop></Shop> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
