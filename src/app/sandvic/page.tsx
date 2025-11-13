'use client'
import React from 'react'

const Page = () => {
    const sandvic = [
        {name:'Köylüm Sandviç' , contains:'Krem peynir, Ev yapımı salçalı sos, Marul, domates, salatalık, Tuzlu mihaliç peyniri, Kapya biber', price:'270 ₺'},
        {name:'Üç Peynirli Sandviç' , contains:'Krem peynir, Marul, domates, salatalık, İzmir tulum süzme peynir, Cheddar Peynir', price:'280 ₺'},
        {name:'Hindi Füme Sandviç' , contains:'Krem peynir, Marul, domates, salatalık, Cheddar Peynir, Hindi Füme (hafif, doyurucu ve protein dolu), Kapya biber', price:'300 ₺'},
        {name:'Macar Usulü Sandviç' , contains:'Krem peynir, Marul, domates, salatalık, Chadder Peynir, Macar Salam, Şerit kapya biber', price:'310 ₺'},
    ]

    return (
        <div className="mt-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Sandviçler</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sandvic.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <p className="text-lg font-semibold text-gray-900 mb-2">{item.name}</p>
                        <p className="text-gray-500 text-sm mb-2">{item.contains}</p>
                        <p className="text-gray-700 font-medium">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page
