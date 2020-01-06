export const getControlStructures = () => {
    const json = 
    {
        topic : "Kontrol Yapilari",
        modules: [
            {
                title: "Boolean",
                questions: [
                    {
                        title : "Boolean",
                        text: "Python’da bulunan String ve İnteger değişken türlerinin dışında bir diğer değişken türümüz boolean’dır. İki adet Boolean değeri vardır: True (Doğru) ve False (Yanlış). Değerleri karşılaştırmak amacıyla kullanılabilirler. Örneğin; bunu eşittir(=) ile yapabiliriz.",
                        code: [
                            ">>> 4==6",
                            "False",
                            ">>> ”merhaba”==”merhaba”",
                            "True",
                        ],
                        note: "İki değeri eşittir(=) işareti ile karşılaştırmak istiyorsak çift eşittir (==) kullanarak yapılması gerektiğini unutmayınız!"
                    },
                ]
            },
            {
                title: "Karşılaştırma",
                questions: [
                    {
                        title : "Karşılaştırma",
                        text: "Birbirine eşit olmayan (!=) iki değer karşılaştırıldığında sonuç True çıkacaktır. Fakat birbirine eşit iki değer eşit değil operatörü ile karşılaştırılırsa sonuç False çıkacaktır.",
                        code: [
                            ">>> 1 ! = 1",
                            "False",
                            ">>> ”altı” != “yedi”",
                            "True",
                            ">>> 3 != 8",
                            "True",
                        ],
                    },
                    {
                        title : "Karşılaştırma",
                        text: "Python’da ayrıca bir sayının (float ya da integer) diğer sayıdan büyük yada küçük olduğunu belirleyen operatörler vardır. Bunlar sırası ile  > (büyüktür)  ve  < (küçüktür) işaretleri kullanılarak yapılır.",
                        code: [
                            ">>> 7 > 3",
                            "True",
                            ">>> 4 > 4",
                            "False",
                            ">>> 3 < 10",
                            "True",
                        ],
                    },
                    {
                        title : "Karşılaştırma",
                        text: "Karşılaştırma sırasında iki tarafın eşit olma veya eşit büyük ve eşit küçük olma ihtimallerini sorgulayabilmek için <= ve >= operatörleri kullanılmaktadır.",
                        code: [
                            ">>> 7 <= 8",
                            "True",
                            ">>> 9 >= 9.0",
                            "False",
                        ],
                        note: "Bu karşılaştırmalar sadece rakamlar değil sözcükler içinde yapılmaktadır. Harflerin alfabetik sıralamasında harf numarasının büyüklüğüne göre bir sıralama yapılabilmektedir. "
                    },
                    {
                        title : "Karşılaştırma",
                        text: "Ayrıca büyük harfler alfabetik olarak küçük harflerden sonra gelmektedir.",
                        code: [
                            ">>> “A” < “a”",
                            "True",
                        ],
                    },
                ]
            },
        ]
    }

    return json
}

