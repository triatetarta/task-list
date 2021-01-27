import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='container'>
      <h1>Three Quarters Tasks</h1>
      <div className='todo-app'>
        <TaskList />
      </div>
    </div>
  );
}

export default App;
