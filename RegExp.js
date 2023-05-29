// duzenli ifadeler : 
// Regex tanimi
// 1- RegExp constructor
// 'ben 23 yasindayim ve 1999 yilinda dogudum '

// let pattern = 'love'
// let flag = 'gi'
// let regEx = new RegExp (pattern,flag) //regex tanimlama 
// //let regEx = new regExp ('love','gi') // farkli regex tanimlama 

// let regex = /love/gi


let word = /salak/
let comment = prompt('yorumunu yaz! ama yazarken dikkatli ol!')
if (word.test(comment)) {
    alert('hayir sen salak misin ?')
}

console.log(
    word.test(comment)
)//true var 

let string ='I love you me love'

console.log(
    // string.match(/love/ig)); //gecen kelimeyi bulma   
    string.search(/love/ig));//index bulma

    // | kullanimi python | Pytohn iki yazim sekli de olabilir demek  /(P|p)ython de oluyor.
     
const txt = 'Python is the most  beatiful language that a human python first'
let matchcReplaced = txt.replace(/Python/gi,'JavaScript')
console.log(matchcReplaced);

/*

\	çeşitli kullanımları olan genel önceleme karakteri
^	konu başlangıcıyla eşleşme işleci (satır kipinde veya çok satırlı kipte)
$	konu sonuyla eşleşme işleci (satır kipinde veya çok satırlı kipte)
.	(öntanımlı olarak) satırsonu hariç herhangi bir karakterle eşleşme işleci
[	Karakter sınıfı tanımı başlatma işleci
]	Karakter sınıfı tanımı bitirme işleci
|	VEYA işleci
(	Alt kalıp başlatma işleci
)	Alt kalıp bitirme işleci
?	"(" işlecinin anlamını genişletir; 0 veya 1 kere eşleşir, ayrıca açgözlülüğe son verilir. (bkz. Yineleme)
*	0 veya daha fazlasıyla eşleşme işleci
+	1 veya daha fazlasıyla eşleşme işleci
{	En küçük/En büyük ile eşleşme başlatma işleci
}	En küçük/En büyük ile eşleşme bitirme işleci



[abc]	A, b veya c karakterlerinden herhangi biriyle eşleşir.
[^abc]	A, b veya c dışında herhangi bir karakterle eşleşir.
[a-z]	Küçük harfli a'dan küçük z'ye kadar herhangi bir karakterle eşleşir.
[A-Z]	Büyük harften büyük z harfine kadar herhangi bir karakterle eşleşir.
[a-Z]	Küçük a'dan büyük Z'ye kadar herhangi bir karakterle eşleşir.
[0-9]	0 ile 9 arasında tek bir rakamla eşleşir.
[a-z0-9]	A ve z arasında veya 0 ile 9 arasında tek bir karakterle eşleşir.


\	genel önceleme karakteri
^	sınıfın ilk karakteri olduğu takdirde sınıfla eşleşmeme işleci
-	karakter aralığı işleci



.	Yeni satır dışında herhangi bir tek karakterle eşleşir \n.
\d	herhangi bir rakam karakteriyle eşleşir. [0-9] aynı.
\D	Rakam olmayan herhangi bir karakterle eşleşir. [^0-9] aynı.
\s	Herhangi bir boşluk karakteriyle (boşluk, sekme, yeni satır veya satır başı karakteri) eşleşir. [\t\n\r] aynı
\S	Boşluk olmayan herhangi bir karakterle eşleşir. [^\t\n\r] aynı.
\w	Herhangi bir kelime karakteriyle eşleşir (a'dan z'ye, A'dan Z'ye, 0'dan 9'a ve alt çizgi olarak tanımlanır). [a-zA-Z_0-9] aynı
\W	Sözcük olmayan herhangi bir karakterle eşleşir. İle aynı[^a-zA-Z_0-9]
\pL	u değiştiricisini kullanırken UTF-8'de kodlanmış bir harf


p+	P harfinin bir veya daha fazla oluşumuyla eşleşir.
p*	P harfinin sıfır veya daha fazla oluşumuyla eşleşir.
p?	P harfinin sıfır veya bir oluşumuyla eşleşir.
p{2}	P harfinin tam olarak iki oluşumuyla eşleşir.
p{2,3}	P harfinin en az iki oluşumuyla eşleşir, ancak p harfinin üçten fazla tekrarlanmamasıyla eşleşir.
p{2,}	P harfinin iki veya daha fazla oluşumuyla eşleşir.
p{,3}	P harfinin en fazla üç geçtiği yerde eşleşir



^p	Satırın başındaki p harfiyle eşleşir.
p$	Satırın sonundaki p harfiyle eşleşir.
\B	Kelime sınırı haricinde eşleşir. / \Ba\B /-> aaa
\b	kelime sınırı, baştan ve sondan / a\b / -> aaa / \ba /->aaa


i	Eşleşmeyi büyük/küçük harf duyarlı olmayan bir şekilde yapar.
m	^ ve $ davranışını, dize sınırı yerine yeni satır sınırıyla (örneğin, çok satırlı bir dize içindeki her satırın başlangıcı veya sonu) eşleşecek şekilde değiştirir.
g	Global bir eşleşme gerçekleştirin, yani tüm oluşumları bulur.
o	İfadeyi yalnızca bir kez değerlendirir.
s	Satır başı hariç her şeyi ifade eden nokta karakterinin satır başını da ifade etmesini sağlar
x	Netlik sağlamak için Düzenli ifadede (desendeki) boşlukları ve yorumları kullanmanıza izin verir.
u	UTF-8 kodlaması kullanılır. (Türkçe karekterler için gerekli)*/