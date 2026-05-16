import Navbar from "./components/Navbar";

interface MenuItem {
        name: string;
        price: string;
        desc?: string; // desc (açıklama) her üründe olmadığı için "?" ile opsiyonel yaptık
    }

    interface MenuSectionProps {
        title: string;
        items: MenuItem[];
    }

export default function Home() {
  const today = new Date().toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
const receller = [
        { name: 'Çıtır Kabak Reçeli', price: '250 ₺' },
        { name: 'Vişne Reçeli', price: '250 ₺' },
        { name: 'Böğürtlen Reçeli', price: '250 ₺' },
        { name: 'Ahududu Reçeli', price: '250 ₺' },
        { name: 'Çilek Reçeli', price: '250 ₺' },
        { name: 'Havuç Reçeli', price: '250 ₺' },
        { name: 'Şeftali Reçeli', price: '250 ₺' },
        { name: 'Kayısı Reçeli', price: '250 ₺' },
        { name: 'Kuşburnu Marmelatı', price: '250 ₺' },
        { name: 'Acı Biber Reçeli', price: '250 ₺' },
        { name: 'Karadut Reçeli', price: '250 ₺' },
        { name: 'Portakal Reçeli', price: '250 ₺' },
        { name: 'Kahveli Süt Reçeli', price: '250 ₺' },
        { name: 'Süt Reçeli', price: '250 ₺' },
        { name: 'Ayva Reçeli', price: '250 ₺' },
        { name: 'Limon Reçeli', price: '250 ₺' },
        { name: 'Erik Reçeli', price: '250 ₺' },
        { name: 'Zeytin Reçeli', price: '250 ₺' },
        { name: 'Yaban Mersini Reçeli', price: '250 ₺' },
        { name: 'Frenk Üzümü Reçeli', price: '250 ₺' },
        { name: 'Ballı Yer Fıstığı Ezmesi', price: '250 ₺' },
    ];

    // 2. Sıcak İçecekler (Yeni fiyatlar eklendi, Aromalı Latte altında birleştirildi)
    const hotDrinks = [
        { name: 'Espresso', price: '140 ₺' },
        { name: 'Double Espresso', price: '160 ₺' },
        { name: 'Cortado', price: '200 ₺' },
        { name: 'Flat White', price: '200 ₺' },
        { name: 'Cappuccino', price: '200 ₺' },
        { name: 'Latte', price: '200 ₺' },
        { name: 'Aromalı Latte', price: '230 ₺', desc: '(Karamel, Vanilya, Fındık, Toffeenut, Irish vb.)' },
        { name: 'Americano', price: '190 ₺' },
        { name: 'Long Black', price: '190 ₺' },
        { name: 'Filtre Kahve', price: '200 ₺' },
        { name: 'Türk Kahvesi', price: '150 ₺' },
        { name: 'Double Türk Kahvesi', price: '190 ₺' },
        { name: 'Sıcak Çikolata', price: '220 ₺' },
        { name: 'Beyaz Çikolata', price: '220 ₺' },
        { name: 'Salep', price: '150 ₺' },
    ];

    // 3. Çaylar (Klasik çaylar hariç bitki çayları 180 ₺ oldu)
    const teas = [
        { name: 'Çay', price: '60 ₺' },
        { name: 'Fincan Çay', price: '120 ₺' },
        { name: 'Therapie', desc: 'Beyaz Çay, Çilek, Isparta Gülü, Yeşil Çay, Elma', price: '180 ₺' },
        { name: 'Green Mango', desc: 'Mango, Yeşil Çay, Elma, Ananas, Doğal Aroma', price: '180 ₺' },
        { name: 'Purple Berry Tea', desc: 'Mavi Sarmaşık Çiçeği, Lemongrass, Böğürtlen, Elma, Lime, Doğal Aroma', price: '180 ₺' },
        { name: 'Marrakech Mint Tea', desc: 'Yeşil Çay, Elma, Nane, Nane Yağı, Doğal Aroma', price: '180 ₺' },
        { name: 'Ihlamur', price: '180 ₺' },
        { name: 'Kış Çayı', price: '180 ₺' },
        { name: 'Karadeniz Yayla Çayı', price: '180 ₺' },
    ];

    // 4. Soğuk İçecekler (Yeni fiyatlar eklendi, Frozen/Milkshake vb. birleştirildi)
    const coldDrinks = [
        { name: 'Soğuk Türk Kahvesi', price: '250 ₺' },
        { name: 'Ice Americano', price: '210 ₺' },
        { name: 'Ice Filtre', price: '220 ₺' },
        { name: 'Ice Mocha', price: '250 ₺' },
        { name: 'Ice Latte', price: '230 ₺' },
        { name: 'Aromalı Ice Latte', price: '250 ₺', desc: '(Karamel, Vanilya, Fındık, Irish)' },
        { name: 'Ice Flat White', price: '230 ₺' },
      
        { name: 'Affogato', price: '230 ₺' },
       
        { name: 'Frappe', price: '250 ₺' },
        { name: 'Frozen Çeşitleri', price: '250 ₺', desc: '(Yeşil Elma, Karpuz, Çilek, Mango)' },
    
        { name: 'Meyveli Soda', price: '100 ₺' },
        { name: 'Su', price: '50 ₺' },
    ];

    // 5. Tatlılar (Yeni fiyatlar, 300 ₺ ve üzeri korundu, Reçelli Sorbe eklendi)
    const desserts = [
        { 
            name: 'Reçelli Dondurma', 
            price: '200 ₺', 
            desc: 'Sade dondurma üzerine çıtır kabak reçeli veya kuşburnu marmelatı, Çikolatalı dondurma üzerine süt reçeli vb. (Eşleşmeler tavsiye olup diğer seçenekler için lütfen sorunuz)' 
        },
       
        { name: 'Reçelli Brownie', price: '250 ₺', desc: '(Vişne reçeli ya da süt reçeli ile servis edilir.)' },
          { name: 'Reçelli Sorbe', price: '240 ₺', desc: '(Limon, çilek veya karadut)' }, // Yeni Eklend
          { name: 'Reçelli Milkshake', price: '250 ₺', desc: '(Çilek, vişne, karadut ve süt reçeli ile hazırlanır.)' },
            { name: 'Süt Reçelli Soğuk Türk Kahvesi', price: '260 ₺' },
       
       
        { name: 'Reçelli Tiramisu', price: '300 ₺', desc: '(Süt reçeli ile ya da sade servis edilir.)' },
        { name: 'Çikolatalı San Sebastian', price: '320 ₺', desc: '(Vişne reçeli ya da süt reçeli ile servis edilir.)' },
        { name: 'Lotuslu San Sebastian', price: '340 ₺', desc: '(Süt reçeli ile önerilir.)' },
    ];

    // Yardımcı Bileşen: Kategori Başlığı ve Liste Düzeni
    // Tip tanımlamaları
    interface MenuItem {
        name: string;
        price: string;
        desc?: string; // desc (açıklama) her üründe olmadığı için "?" ile opsiyonel yaptık
    }

    interface MenuSectionProps {
        title: string;
        items: MenuItem[];
    }

    // Yardımcı Bileşen: Kategori Başlığı ve Liste Düzeni
    const MenuSection = ({ title, items }: MenuSectionProps) => (
        <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 border-b-2 border-amber-500 pb-2 mb-6 inline-block">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col justify-between hover:shadow-md transition-all duration-300"
                    >
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.name}</h3>
                            <span className="text-lg font-bold text-amber-600 whitespace-nowrap">{item.price}</span>
                        </div>
                        {item.desc && (
                            <p className="text-gray-500 text-sm leading-relaxed mt-1">
                                {item.desc}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-16 font-sans mt-10">
            <div className="max-w-7xl mx-auto">
                {/* Menü Başlığı */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Menü
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        Özenle hazırladığımız reçellerimiz, sıcacık kahvelerimiz ve enfes tatlılarımızla hizmetinizdeyiz.
                    </p>
                </div>

                {/* Kategoriler */}
                <MenuSection title="Reçelli Spesiyel" items={desserts} />
                <MenuSection title="Soğuk İçecekler" items={coldDrinks} />
                <MenuSection title="Sıcak İçecekler" items={hotDrinks} />
                <MenuSection title="Çaylar" items={teas} />
                <MenuSection title="Kavanoz Reçeller" items={receller} />
                
            </div>
        </div>
    );
}
