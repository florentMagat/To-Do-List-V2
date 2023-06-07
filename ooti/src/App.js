import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Form from './Components/Todolist/Form';
import Todochart from './Components/Todochart';

function App() {
  return (
    <>
      <h1 className='title'>Todo List Ooti</h1>
      <div className='main'>
        <Form />
        <Todochart />
      </div>
    </>
  );
}

export default App;