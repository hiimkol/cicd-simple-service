import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [simpleMsg, setSimpleMsg] = useState('Loading simple...')
  const [inventoryMsg, setInventoryMsg] = useState('Loading inventory...')

  useEffect(() => {
    // Fetch from Simple Service via Gateway (relative path)
    fetch('/simple/')
      .then(res => res.text())
      .then(data => setSimpleMsg(data))
      .catch(err => setSimpleMsg('Error fetching simple: ' + err))

    // Fetch from Inventory Service via Gateway
    fetch('/inventory/')
      .then(res => res.text())
      .then(data => setInventoryMsg(data))
      .catch(err => setInventoryMsg('Error fetching inventory: ' + err))
  }, [])

  return (
    <div className="card">
      <h1>Frontend Dashboard 🚀</h1>

      <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
        <h2>Simple Service</h2>
        <p>{simpleMsg}</p>
      </div>

      <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem' }}>
        <h2>Inventory Service</h2>
        <p>{inventoryMsg}</p>
      </div>

      <p style={{ color: '#888' }}>
        Served from Staging/Prod successfully!
      </p>
    </div>
  )
}

export default App
