'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Options = () => {

    interface Food {
        name: string
        photo: string
        url: string
    }

    const foods: Food[] = [
        { name: 'Sıcak İçecekler', photo: '/sicak1.jpg', url: '/sicak' },
        { name: 'Soğuk İçecekler', photo: '/soguk1.jpg', url: '/soguk' },
        { name: 'Reçelli Dükkan Special', photo: '/special.jpg', url: '/tatli' },
        { name: 'Sandviçler', photo: '/sandvic1.jpg', url: '/sandvic' },
        { name: 'Reçeller', photo: '/recel.jpg', url: '/recel' },
        { name: 'Kahvaltılar', photo: '/kahvalti.jpg', url: '/kahvalti' },
    ]

    return (
        <div className='mt-16' style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
            {foods.map((food, index) => (
                <Link key={index} href={food.url} style={{ textAlign: 'center', textDecoration: 'none', color: '#333' }}>
                   <div
  style={{
    width: '150px',
    height: '230px',
    cursor: 'pointer',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}
>
    <Image
      src={food.photo}
      alt={food.name}
      width={200}
      height={150}
      style={{ objectFit: 'cover', height: 150, width: '100%' }}
    />
    <div
      style={{
        padding: '10px',
        fontWeight: 'bold',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      {food.name}
    </div>
</div>

                </Link>
            ))}
        </div>
    )
}

export default Options
