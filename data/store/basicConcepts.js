export const getBasicConcepts = () => {
    const json = 
    {
        topic : "Temel Konular",
        modules: [
            {
                title: "Python nedir?",
                questions: [
                    {
                        title : "Python ‘a hoş geldiniz",
                        text: "Python web programlama, kodlama ve yapay zeka gibi sayısız uygulamaya sahip üst düzey bir programlama dilidir. Python kişiler arasında çok popüler olmasının yanında Google, Yahoo, IBM, Microsoft, Dropbox gibi çok büyük şirketler tarafından da yaygın olarak kullanılmaktadır. Python çalışma esnasında yorumlayıcı tarafından işlenir. Programınızı çalıştırmadan önce derlemeye gerek yoktur."
                    },
                    {
                        title: "Python ‘a hoş geldiniz",
                        text: "Python'un üç ana versiyonu 1,2,3' tür. Bunlar 2.7 ve 3.3 gibi küçük sürümlere ayrılmıştır. python 3 için yazılmış kodun gelecekteki tüm sürümlerde çalışması garanti edilir. Her iki python sürüm 2 ve 3 şu anda kullanılmaktadır. Bu ders python 3'ü kapsar ancak bir sürümden diğerine geçmek zor değildir. Python'un çeşitli dillerde yazılmış birçok farklı uygulaması vardır."
                    }
                ]
            },
            {
                title: "Ilk Programin",
                questions: [
                    {
                        title: "Metin yazma",
                        text: "“print” ifadesi ister bir satır metin yazdırmak için istersek de birden fazla satır yazdırmak için kullanılabilir.",
                        code: [
                            ">>> print(\"merhaba dünya\")",
                            "merhaba dünya",
                            ">>> print(\"Merhaba dünya!\")",
                            "Merhaba dünya!",
                            ">>> print(\"Global Sınıf\")",
                            "Global Sınıf",
                        ],
                        codeText: "print(\"Merhaba dünya!\")\nprint(\"Merhaba dünya!\")\nprint(\"Global Sınıf\")"
                    }
                ]
            }, 
            {
                title: "Basit Islemler",
                questions: [
                    {
                        title: "Basit Islemler",
                        text: "Python tıpkı bir hesap makinesi gibi hesaplama yapabilme özelliğine sahiptir. Python konsoluna bir hesaplama girildiğinde doğrudan bu cevabın çıktısını bize verecektir.",
                        code: [
                            ">>> 4+7",
                            "11",
                            ">>> 5+4-7",
                            "2"
                        ],
                        note: "Operatörlerin (artı veya eksi) yanındaki boşluk ifadeleri isteğe bağlıdır. Bitişik yazılırsa yada ayrı olarak yazılırsa kod çalışacaktır. Ancak boşluklu olan işlemlerin okunması daha kolay olacaktır."
                    },
                    {
                        title: "Basit Islemler",
                        text: "Pythonda çarpma ve bölme işlemleride yapılabilir. Çarpma işlemi için “yıldız(*)” ifadesi kullanılırken, bölme işlemi için “eğik çizgi(/)” ifadesi kullanılmaktadır. Tıpkı matematik işlemlerinde olduğu gibi işlem önceliğini ayırt etmek için parantez ifadeleri kullanılmaktadır.",
                        code: [
                            ">>> 3*(7+2)",
                            "27",
                            ">>> 15/3",
                            "5.0"
                        ],
                        note: "Bölme işleminin sonucu olarak Float tipinde bir veri elde ederiz. Ancak float tipindeki verinin ne olduğunu daha sonraki derslerde işleyeceğiz"
                    },
                    {
                        title: "Basit Islemler",
                        text: "Eksi işareti negatif bir sayıya işaret eder. İşlemler pozitif olanlarda olduğu gibi negatif sayılar üzerinde de yapılır.",
                        code: [
                            ">>> -15",
                            "-15",
                            ">>> (-15+4)*(-2)",
                            "22"
                        ],
                        note: "Artı işaretleri sayılarının önüne konulabilir ancak bunun bir etkisi olmaz. Çoğu zaman bir kodun okunabilirliğini arttırmak için pozitif olduğunu vurgulamak için kullanılır."
                    },
                    {
                        title: "Basit Islemler",
                        text: "Normal bölme işleminde olduğu gibi python’da da bölen kısım 0 olamaz bu hataya yol açacaktır.",
                        code: [
                            ">>> 11/0",
                            "Traceback (most recent call last):\n File \"<pyshell#4>\", line 1, in <module> 11/0 \nZeroDivisionError: division by zero \n "
                        ],
                        note: "python'da hata mesajının son satırı hatanın türünü gösterir. Hatayı nasıl düzelteceğimizi öğrenmek için hata mesajını dikkatlice okumak gerekir. Çünkü genellikle hatanın nasıl çözüleceği de bu hata mesajında yazar."
                    }
                ]
            },
            {
                title: "Floats?",
                questions: [
                    {
                        title: "Floats",
                        text: "Float değişkenler python'da tamsayı olmayan sayıları temsil etmek için kullanılır. Örnek vermek gerekirse 0.5 yada -3.89347 sayıları birer float tipinde değişkenlerdir. doğrudan ondalık basamaklı bir sayı girerek ya da tam sayılarda bölme gibi işlemleri kullanarak oluşturulabilirler. Virgülden sonra en sonda bulunun fazladan 0’lar dikkate alınmazlar.",
                        code: [
                            ">>> 3/7",
                            "0.42857142857142855",
                            ">>> 12.057480000",
                            "12.05748",
                        ],
                        note: "Bilgisayarlar, devreden sayıları tam olarak 100/3(33.3333333333…) devam eden kısmını yazamadığız için tam olarak depolayamıyor. Bunu unutmayın çünkü sık sık sinir bozucu hatalara sebep olurlar."
                    },
                    {
                        title: "Floats",
                        text: "Tam sayıların bölünmesi bir Float değişken üretir. Bir float aynı zamanda iki float değişken üzerinde yada bir tam sayı bir float üzerinde işlem yapılarak üretilir.",
                        code: [
                            ">>> 10/5",
                            "2.0",
                            ">>> 3*4.0",
                            "12.0",
                            ">>> 5+1.33",
                            "6.33",
                        ],
                        note: "Bir tam sayıya bir float tipi değişken eklenebilir. Çünkü python tam sayıyı kendi içinde float’a dönüştürür. Bu dönüşüm işlemi python da kural dışı bir istisnadır. Genellikle bu işlemleri yapmak istiyorsanız kendiniz dönüştürmeniz gerekebilir."
                    }
                ]
            },
            {
                title: "Diğer sayısal işlemler",
                questions: [
                    {
                        title: "Üst alma",
                        text: "4 işlemin yanı sıra python bir sayının üstünü alma işlemini de destekliyor. Bu işlemi kullanmak için iki yıldız(**) ifadesi kullanılıyor.",
                        code: [
                            ">>> 3**3",
                            "27",
                            ">>> >>> 16**(1/2)",
                            "4.0",
                        ],
                        note: "üst alma işlemini zincirleyebilirsiniz. Bir başka deyişle birden fazla kez üst alma işlemi gerçekleştirebilirsiniz. Örneğin 3 4 3"
                    },
                    {
                        title: "Bölüm ve kalan",
                        text: "Bir bölümün bölümünü ve kalanını belirlemek için sırasıyla normal bölme işlemi ve kalan bulma işlemleri uygulanır. Tam sayı bölünmesini hesaplamak için iki eğik çizgi(//) ve kalanı hesaplamak için yüzde(%) ifadeleri kullanılır. Bu operatörler hem float hem de tam sayı tipi değişkenlerde kullanılabilir.",
                        code: [
                            ">>> 25//3",
                            "8",
                            ">>> 2.5%2",
                            "0.5",
                        ],
                        note: " örnek vermek gerekirse 10%3 ifadesi bize “1”  değerini verir. Çünkü 3*3+1 10’a eşittir.",
                    }
                ]
            },
            {
                title: "Metinler",
                questions: [
                    {
                        title: "Metinler",
                        text: "Python da  metin kullanmak istiyosanız, bir kalıp kullanmanız gerekir. Başta ve sonda tek tırnak arasına metin girilerek yada başta ve sonra çift tırnak arasına metin girilerek bir kalıp oluşturulur.Python konsolu bir kalıp görüntülediğinde, genellikler tek tırnak kullanır. Bir kalıp için kullanılan tırnak ifadesi, herhangi bir şekilde nasıl davrandığını etkilemez",
                        code: [
                            ">>> \"Global sınıf bilim merkezi\"",
                            "'Global sınıf bilim merkezi'",
                            ">>> 'Her zaman bizlere uygun bir eğitimi vardır'",
                            "'Her zaman bizlere uygun bir eğitimi vardır'",
                        ],
                    },
                    {
                        title: "Metinler",
                        text: "Bazı karakterler doğrudan bir kalıba eklenemez. Örneğin çift tırnaklar doğrudan çift tırnakların içine alınamazlar. Çünkü bu kalıbın erken bittiğini anlamına gelir. Bu gibi karakterlerin önüne ters eğik çizgi (\) koyularak programın ondan kaçınması sağlanmalıdır. Yeni bir satıra geçilirken de ters eğik çizgi kullanılır. İki tırnak yada tek tırnak ifadelerinden kaçınma işlemi sadece aynı tipte tırnak kullanılırsa yapılmalıdır.",
                        code: [
                            ">>>  'Global Sınıf\\'ın öğrencileri her zaman çok mutludur'",
                            "\"Global Sınıf'ın öğrencileri her zaman çok mutludur\"",
                        ],
                        note: "Ters eğik çizgiler, sekmelerden, klavyede bulunmayan Unicode karakterlerinde ve güvenilir şekilde yazdırılamayan diğer çeşitli şeylerden kaçınman için kullanılabilir. Bu karakterler kaçış karakterleri olarak bilinir.",
                    }
                ]
            }, 
        ]
    }

    return json
}

