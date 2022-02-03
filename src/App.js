import React, { useState, useEffect } from 'react';
import axios from 'axios';
const url = `https://randomuser.me/api?page=1`;
function App() {
  const [userData, setUserData] = useState([]);
  const getMoreUsers = () => {
    axios
      .get(url)
      .then((response) => {
        setUserData([...userData, ...response.data.results]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMoreUsers();
  }, []);
  console.log(userData);

  return (
    <div className='App'>
      <button onClick={getMoreUsers}>Generate More </button>
      <div>
        {userData.map((data, idx) => {
          return (
            <div key={idx}>
              <p>{data.gender}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
