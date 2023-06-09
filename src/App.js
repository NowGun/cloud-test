import logo from './logo.svg';
import './App.css';
import Button from "./components/component/button/Button";
import Avatar from "./components/component/avatar/Avatar";
import Main from "./components/pages/Main";


function App() {
  return (
    <div className="App">
      <Main />



      <Button label={'Назад'} className={'btn outlined'}/>
    </div>
  );
}

export default App;
