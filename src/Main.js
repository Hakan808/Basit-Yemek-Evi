import React from 'react'
import Image from './Image'
const Main = () => {
  return (
    <main>
       <h1 className="logo-container">Basit Yemekler Restoranı</h1>
        <p className="info-container">
          Basit insanlar için basit yemekler yapıyoruz. Sandviç ister misiniz?
          Tamamdır. Goralı? Hemen geliyor. Ateşte kavrulmuş kuşkonmaz börekleri
          ile yerel kaynaklı balla sırlanmış haşlanmış somon yumurtası? Hadi
          oradan. Caddenin karşısındaki Fantezi Yemek Kafe'yi deneyin.
        </p>
        <Image/>
    </main>
  )
}

export default Main
