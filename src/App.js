import logo from './logo.svg';
import React,{useState}from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [response, setResponse] = useState()

  const handleClick = async () => {
    let res = await getAll()
    console.log(res)
    setResponse(res)
  }
  return ( 
    <div style={{width: '80vw'}}>

      <button onClick={handleClick}>hit Api</button>

      <p style={{fontSize: '10px', width: '100%'}}>
        {JSON.stringify(response)}
        {/* check console log ->  network */}
      </p>

    </div>
  );
}
async function getAll() {
  try {
    
    const bodyOptions = {
      "ID":1,
      "AUTH_ID":"000000000000000"
    } // wms api or put body hear

    const requestUrl = `https://dev-fsc.soluix.ai/wms-mobile/main/echo`; // wms api or put your url hear
    // const requestUrl = 'https://pokeapi.co/api/v2/pokemon/1'  // uncomment this try success api and hide another one
    const response = await axios
      // .get(requestUrl) // uncomment this try success api and hide another one
      .post(requestUrl, bodyOptions) // this for wms api 
      .then((response) => {
        if (response?.status === 200) {
          return {
            data: response?.data,
            status: response?.status,
          };
        } else {
          return {
            status: response.status,
          };
        }
      })
      .catch((error) => {
        // Error 😨
        console.log("Error  : ",error);
        return {
          status: error,
        };
      });
    return response;
  } catch (error) {
    return {
      status: error,
      message: error.message,
    };
    console.log("🚀 ~ file: assignedLeads.service.js ~ line 77 ~ getAll ~ error", error);
  }
}

export default App;
