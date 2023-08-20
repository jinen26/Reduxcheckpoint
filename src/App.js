import logo from './logo.svg';
import './App.css';
import Tasklist from './components/Tasklist';
import { useSelector } from 'react-redux';

function App() {
  let t=useSelector(state=>state.todo.tasks)
  return (
    <div className="App">
       <Tasklist/>
    </div>
  );
}

export default App;
