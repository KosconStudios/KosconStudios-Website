import logo from './assets/KosconStudios_logo_1920x1080.png';

function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img 
        src={logo} 
        alt="Koscon Studios Logo" 
        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
      />
    </div>
  )
}

export default App;