
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { getUsers } from './redux/users.action';

function App(props) {
  console.log(props);

  const dispatch = useDispatch()
  useEffect(() => {
     const ch =  dispatch(getUsers());
     console.log(ch);
  }, [])

  return (
    <div className="App">
      <h1>home</h1>
    </div>
  );
}

export default App;
