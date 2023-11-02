"use client"

import React, { useState, useEffect } from 'react'
import { useTrail, a } from '@react-spring/web'
import styles from './styles.module.css'

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({ open, children }) => {
  const items = React.Children.toArray(children)
const trail = useTrail(items.length, {
  config: { mass: 7, tension: 800, friction: 500 },
  opacity: open ? 1 : 0,
  x: open ? 23 : 12,
  height: open ? 300 : 0,
  from: { opacity: 0, x: 10, height: 2 }, 
});


  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)

  // Use useEffect to set the initial state when the component is loaded
  useEffect(() => {
    setOpen(true)
  }, [])

  return (
    <main className='p-12'>
    <div className={styles.container}>
      <Trail open={true}>
        <span className='mahdi text-8xl'>Mahdi <span className='block'>Daldawala</span></span>
      </Trail>
      </div>
      </main>
  )
}
