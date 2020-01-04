export default class DataService {

    getQuestion(dataName, module, question) {
        return {
            "title" : "Python ‘a hoş geldiniz",
            "text": "Python web programlama, kodlama ve yapay zeka gibi sayısız uygulamaya sahip üst düzey bir programlama dilidir. Python kişiler arasında çok popüler olmasının yanında Google, Yahoo, IBM, Microsoft, Dropbox gibi çok büyük şirketler tarafından da yaygın olarak kullanılmaktadır. Python çalışma esnasında yorumlayıcı tarafından işlenir. Programınızı çalıştırmadan önce derlemeye gerek yoktur."
        }
    }

    getTest() {
        return 'test results'
    }

}