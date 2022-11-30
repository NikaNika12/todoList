import './App.less';
import New from './components/New';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoList/>
      <New/>
    </div>
  );
}

export default App;
