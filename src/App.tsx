import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QRCodeSVG } from 'qrcode.react'

function App() {
  const [texto, textoState] = useState('')

  useEffect(() => {



  }, [texto])

  return (
    <>
      <div style={{"flex": "1", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignItems": "center"}}>
        <h2>Generador de Codigo QR :</h2>
        <input type="text" onChange={(e) => textoState(e.target.value)} />
        <br />
          <QRCodeSVG value={texto} />
      </div>
    </>
  )
}

export default App
