import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointermove
  useEffect(() => {
    console.log('efecto', { enabled });

    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }
    // depende de la dependencia
    if (enabled) {
      //La suscripción sigue vigente
      window.addEventListener('pointermove', handleMove)
    }
    //Cuando el componente se desmonta
    //O cuando cambian las dependencias
    //Remover la suscripción de eventos
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  // change bodyClassName
  useEffect(()=>{
    document.body.classList.toggle('no-cursor',enabled)
    return ()=>{
      document.body.classList.remove('no-cursor')
    }
  })
  return (
    <>
      <div style={{
        position: 'absolute',
        background: '#00000050',
        borderRadius: '50%',
        border: '1px solid #fff ',
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px,  ${position.y}px)`

      }}></div>
      <h3>Proyecto 3</h3>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'}
      </button>
    </>
  )
}
function App() {
  const [mounted,setMounted] =useState(true)
  
  return (
    //Al desaparecer el componente se hace un cleanup
    <main>
      {/* Si mounted y el componente son true se renderiza */}
      {mounted && <FollowMouse></FollowMouse>}
      <button onClick={()=>setMounted(!mounted)}>
        Toggle mounted
      </button>
    </main>
  )
}

export default App
