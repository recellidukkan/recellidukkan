'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [open, setOpen] = useState(false)
     const foods = [
        { name: 'Reçeller', photo: '/recel.jpg', url: '/recel' },
        { name: 'Sıcak İçecekler', photo: '/sicak.jpg', url: '/sicak' },
        { name: 'Soğuk İçecekler', photo: '/soguk.jpg', url: '/soguk' },
        { name: 'Reçelli Dükkan Spesiyel', photo: '/tatli.jpg', url: '/tatli' },
        { name: 'Sandviçler', photo: '/sandvic.jpg', url: '/sandvic' },
    ]

  return (
    <nav style={{ width: '100%', position: 'fixed', top: 0, left: 0, backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', zIndex: 50 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
        
        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <Image className='rounded-2xl' src="/recellilogo.jpg" alt="Logo" width={40} height={40} />
          <div className='flex flex-col '>

          <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>Reçelli</span>
          <span style={{ fontSize: '15px', fontWeight: 'bold', color: '#333' }}>Dükkan</span>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="desktop-menu" style={{ display: 'none', gap: '20px' }}>
            {
                foods.map((food)=>(
                    <Link key={food.name} style={{ textDecoration: 'none', color: '#333' }} href={food.url}>{food.name}</Link>
                ))
            }
        
        </div>

        {/* MOBILE BUTTON */}
        <button onClick={() => setOpen(!open)} className="mobile-button" style={{ background: 'none', color:'black', border: 'none', cursor: 'pointer', fontSize: '24px' }}>
          {open ? '✖' : '☰'}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu" style={{ display: 'flex', flexDirection: 'column', padding: '10px 20px', gap: '10px', backgroundColor: 'white' }}>
             {
                foods.map((food)=>(
                    <Link key={food.name}  onClick={() => setOpen(false)} style={{ textDecoration: 'none', color: '#333' }} href={food.url}>{food.name}</Link>
                ))
            }
         
        </div>
      )}

      <style jsx>{`
        @media(min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-button { display: none; }
          .mobile-menu { display: none !important; }
        }

        a:hover { color: #0070f3; }
      `}</style>
    </nav>
  )
}

export default Navbar
