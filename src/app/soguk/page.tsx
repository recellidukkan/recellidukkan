'use client'
import React from 'react'

const Page = () => {
    const coldDrinks = [
        {name:'Ice Americano' , price: '170 ₺'},
        {name:'Ice Filtre' , price: '170 ₺'},
        {name:'Ice Mocha' , price: '210 ₺'},
        {name:'Ice White Mocha' , price: '210 ₺'},
        {name:'Karamel Ice Latte' , price: '210 ₺'},
        {name:'Vanilya Ice Latte' , price: '210 ₺'},
        {name:'Fındık Ice Latte' , price: '210 ₺'},
        {name:'Irish Ice Latte' , price: '210 ₺'},
        {name:'Affogato' , price: '180 ₺'},
        {name:'Frappe' , price: '210 ₺'},
        {name:'Yeşil Elma Frozen' , price: '210 ₺'},
        {name:'Karpuz Frozen' , price: '210 ₺'},
        {name:'Çilek Frozen' , price: '210 ₺'},
        {name:'Mango Frozen' , price: '210 ₺'},
        {name:'Ice Flat White' , price: '190 ₺'},
        {name:'Mikshake' , price: '210 ₺'},
        {name:'Soda' , price: '60 ₺'},
        {name:'Meyveli Soda' , price: '80 ₺'},
        {name:'Su' , price: '30 ₺'},
    ]

    return (
        <div className="mt-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Soğuk İçecekler</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {coldDrinks.map((drink, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <p className="text-lg font-semibold text-gray-900 mb-2">{drink.name}</p>
                        <p className="text-gray-600 text-sm">{drink.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page
