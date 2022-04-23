
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import './App.css';
import { getUsers } from './redux/users.action';

function App({users}) {

  const dispatch = useDispatch()
  useEffect(() => {
     dispatch(getUsers())
  }, [dispatch]);



  return (
    <div className="App">
      {
        users?.loading && <h1>Loading</h1>
      }
       {
        users?.errMessage && <h1>{users?.errMessage}</h1>
      }
      {
        users?.data?.slice(0,5).map((dt,index) => {
          return(
            <div key={index}style={{display:'flex',justifyContent: 'center'}} >
              <div style={{height:'300px',width:'500px',margin:'10px',border:'1px solid lightgray'}}>
                <h1>{dt.title}</h1>
              </div>
            </div>
          )
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users:state
  }
}

export default connect(mapStateToProps)(App);
