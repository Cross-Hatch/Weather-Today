import React from "react";
import axios from "axios";


function App() {
  const [data,setData] = useState({})
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=68907bf609585ee2ef82afc4cdc53829`
  const searchLocation = (event) =>{
    if (event.key ==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    } 
  }
  return null
}

export default App;
