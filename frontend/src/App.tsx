import { useState, useEffect } from "react"

function App() {
  const [ip, setIp] = useState();

  useEffect(() => {
    fetch('/ip')
      .then(response => response.json())
      .then(data => {
        setIp(data.ip)})
      .catch(err => console.log('err', err))
  }, [])
  

  return (
    <div className="App">
      <h1>Hello World</h1>
      <p>This is Vite/React frontend served by Node/Express api</p>
      <p>Your ip is:<span style={{color: 'green'}}>{ip}</span></p>
      
    </div>
  )
}

export default App
