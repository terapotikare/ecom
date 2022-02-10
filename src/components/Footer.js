import React from "react";
import SimpleReactFooter from "simple-react-footer";
import  "./Footer.css";
const Footer = () => {
  const description = " 2017 yılında kurulan MyLove, kadınların kısa sürede vazgeçilmezi haline gelen bir online hazır giyim markasıdır. Kaliteli ve yerli ürünleri, ulaşılabilir fiyatları ve evrensel moda yaklaşımı Türkiye ve dış pazarlarda yoğun ilgi görmesini ve kategorisinde sektörün liderleri arasında yer almasını sağlamıştır. Kurulduğu günden bu yana hedeflerini her zaman bir üst seviyeye taşıyan MyLove, yılların tecrübesi ve sadık müşteri kitlesinin talepleri doğrultusundan kendi tasarımlarını üretmeye ve müşteriyle buluşturmaya başlamıştır. Jean modellerinden elbise çeşitlerine, dış giyimden ev şıklığına, pijama modellerinden spor kıyafetlerine uzanan geniş ürün yelpazesiyle MyLove, sezonlardan bağımsız, hem trend hem de fonksiyonel parçalar sunarak her genç kadının gardrobunda yer edinmeyi hedefliyor.";
  const columns = [
    {
      title: "Kurumsal",
      resources: [
        {
          name: "KVKK",
          link: "/Kvkk",
        },
        {
          name: "iletişim",
          link: "/contact",
        },
      ],
    },
    {
      title: "Hesabım",
      resources: [
        {
          name: "Yeni Üye",
          link: "/Hesap",
        },
        {
          name: "Sepetim",
          link: "/Sepet",
        },
        {
          name: "Sipariş Takip",
          link: "/contact",
        },
        
      ],
    },
    {
      title: "Hizmet Bildirim",
      resources: [
        {
          name: "Çerez Politikamız",
          link: "/Cerez",
        },
        {
          name: "Mesafeli Satış Sözleşmesi",
          link: "/Mesafe",
        },
        
        {
          name: "Sıkça Sorulan Sorular ",
          link: "/Sorular",
        },
        
      ],
    },
    
  ];
  return (
    <SimpleReactFooter
      description={description}
      columns={columns}
      linkedin="fluffy_cat_on_linkedin"
      facebook="fluffy_cat_on_fb"
      twitter="fluffy_cat_on_twitter"
      instagram="fluffy_cat_live"
      youtube="UCFt6TSF464J8K82xeA?"
      pinterest="fluffy_cats_collections"
      copyright="Merve Kömeç"
      iconColor="black"
      backgroundColor="white"
      fontColor="black"
      copyrightColor="darkgrey"
    />
  );
};

export default Footer;
