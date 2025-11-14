import React from 'react'

const page = () => {
     const recel = [
        {name:'Çıtır Kabak Reçeli' , price: '200 ₺'},
        {name:'Vişne Reçeli' , price: '200 ₺'},
        {name:'Böğürtlen Reçeli' , price: '200 ₺'},
        {name:'Ahududu Reçeli' , price: '200 ₺'},
        {name:'Çilek Reçeli' , price: '200 ₺'},
        {name:'Havuç Reçeli' , price: '200 ₺'},
        {name:'Şeftali Reçeli' , price: '200 ₺'},
        {name:'Kayısı Reçeli' , price: '200 ₺'},
        {name:'Kuşburnu Marmelatı' , price: '200 ₺'},
        {name:'Acı Biber reçeli' , price: '200 ₺'},
        {name:'Karadut Reçeli' , price: '200 ₺'},
        {name:'Portakal Reçeli' , price: '200 ₺'},
        {name:'Kahveli Süt Reçeli' , price: '200 ₺'},
        {name:'Süt Reçeli' , price: '200 ₺'},
        {name:'Ayva Reçeli' , price: '200 ₺'},
        {name:'Limon Reçeli' , price: '200 ₺'},
        {name:'Erik Reçeli' , price: '200 ₺'},
        {name:'Zeytin Reçeli' , price: '200 ₺'},
        {name:'Yaban Mersini Reçeli' , price: '200 ₺'},
        {name:'Frenk Üzümü Reçeli' , price: '200 ₺'},
        {name:'Ballı Yer Fıstığı Ezmesi' , price: '250 ₺'},
        
        
       
    ]
  return (
    <div className="mt-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Reçeller</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recel.map((recell, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <p className="text-lg font-semibold text-gray-900 mb-2">{recell.name}</p>
                        <p className="text-gray-600 text-sm">{recell.price}</p>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default page