import React from 'react'

const page = () => {
    const breakfast=[
        {
            name:'Bir Kişilik Kahvaltı', contains:'Domates,salatalık,zeytin,haşlanmış yumurta,ezine peyniri,tulum peyniri,doğal Karadeniz yayla peyniri,Karadeniz yayla tereyağı(Doğal),Hindi füme,doğal reçellerimiz,2 bardak çay,1 adet kahve ', price:'500 ₺',
                     
            
        },
        {
            name:'İki Kişilik Kahvaltı', contains:'Domates,salatalık,zeytin,haşlanmış yumurta,ezine peyniri,tulum peyniri,doğal Karadeniz yayla peyniri,Karadeniz yayla tereyağı(Doğal),Hindi füme,doğal reçellerimiz,kişi başı 2 bardak çay,kişi başı 1 adet kahve ', price:'1000 ₺'
        }
    ]
  return (
      <div className="mt-16 px-4 md:px-8 lg:px-16">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">Kahvaltılar</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {breakfast.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <p className="text-lg font-semibold text-gray-900 mb-2">{item.name}</p>
                        <p className="text-gray-600 text-sm mb-2">{item.price}</p>
                        
                        {/* İçerik açıklaması */}
                        {Array.isArray(item.contains) ? (
                            <ul className="text-gray-500 text-sm list-disc list-inside">
                                {item.contains.map((c, i) => <li key={i}>{c}</li>)}
                            </ul>
                        ) : (
                            <p className="text-gray-500 text-sm">{item.contains}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
  )
}

export default page