'use client'
import React from 'react'

const Page = () => {
    const desserts = [
        {name:'Reçelli Dondurma' , price: '150 ₺' , contain:[
            'Sade dondurma üzerine çıtır kabak reçeli veya kuşburnu marmelatı',
            'Çikolatalı dondurma üzerine süt reçeli',
            'Karadutlu dondurma üzerine karadut reçeli',
            'Vişne ve dondurma üzerine vişne reçeli',
            '(Eşleşmeler tavsiye olup diğer seçenekler için lütfen sorunuz)'
        ]},
        {name:'Reçelli San Sebastian', price:'260 ₺' , contain:'(Vişne ya da süt reçeli ile önerilir.)'},
        {name:'Reçelli Tiramisu' , price: '260 ₺' , contain:'(Süt reçeli ile servis edilir.)'},
        {name:'Reçelli Yoğurt' , price: '120 ₺' , contain:'(Üzerine reçel seçiniz.)'},
        {name:'Reçelli Milkshake' , price: '230 ₺' , contain:'(Çilek, vişne, karadut ve süt reçeli ile hazırlanır.)'},
    ]

    return (
        <div className="mt-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Tatlılar</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {desserts.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <p className="text-lg font-semibold text-gray-900 mb-2">{item.name}</p>
                        <p className="text-gray-600 text-sm mb-2">{item.price}</p>
                        
                        {/* İçerik açıklaması */}
                        {Array.isArray(item.contain) ? (
                            <ul className="text-gray-500 text-sm list-disc list-inside">
                                {item.contain.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">{item.contain}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page
