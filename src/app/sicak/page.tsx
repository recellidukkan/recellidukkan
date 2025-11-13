'use client'
import React from 'react'

const Page = () => {
    const hotDrinks = [
        {name:'Espresso' , price:'120 ₺'},
        {name:'Double Espresso' , price:'140 ₺'},
        {name:'Cortado' , price:'160 ₺'},
        {name:'Flat White' , price:'170 ₺'},
        {name:'Cappuccino' , price:'170 ₺'},
        {name:'Latte' , price:'170 ₺'},
        {name:'Karamel Latte' , price:'190 ₺'},
        {name:'Vanilyalı Latte' , price:'190 ₺'},
        {name:'Fındıklı Latte' , price:'190 ₺'},
        {name:'Toffeenut Latte' , price:'190 ₺'},
        {name:'Irish Latte' , price:'190 ₺'},
        {name:'Balkabaklı Latte' , price:'190 ₺'},
        {name:'Chai Tea Latte' , price:'190 ₺'},
        {name:'Mocha' , price:'190 ₺'},
        {name:'White Mocha' , price:'190 ₺'},
        {name:'Americano' , price:'160 ₺'},
        {name:'Filtre Kahve' , price:'160 ₺'},
        {name:'Türk Kahvesi' , price:'120 ₺'},
        {name:'Double Türk Kahvesi' , price:'150 ₺'},
        {name:'Çay' , price:'50 ₺'},
        {name:'Fincan Çay' , price:'70 ₺'},
        {name:'Bitki Çayları' , price:'150 ₺'},
        {name:'Sıcak Çikolata' , price:'170 ₺'},
        {name:'Beyaz Çikolata' , price:'170 ₺'},
        {name:'Salep' , price:'170 ₺'},
    ]

    return (
        <div className="mt-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Sıcak İçecekler</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {hotDrinks.map((drink, index) => (
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
