// preventDefault 
// Bazı etiketlerin varsayılan davranışları vardır. Örneğin bir a etiketine basınca ilgili linke yönlendirilirsiniz, ya da form içinde tipi submit olan bir button a basınca formu gönderir vs. Bu gibi varsayılan davranışları engellemek için preventDefault kullanabilirsiniz. Örneğin;

/*<a href="about.html">Hakkimda</a>
<a href="https://prototurk.com">prototurk.com</a>
<script>
	const aTags = document.querySelectorAll('a')
	aTags.forEach(a => {
		a.addEventListener('click', e => {
			// eger link dis bir baglanti iceriyorsa
			// varsayilan davranisi engelle
			if (e.target.getAttribute('href').includes('http')) {
				if (!confirm('Guvenli olmayan bir siteye gitmeye calisiyorsunuz?')) {
					e.preventDefault()
				}
			}
		})
	})
</script>*/


// stopPropagation = Varsayılan yayılmayı engellemek içinse bu özellik kullanılır.


//CSSStyleDeclaration = Javascript'de css özellikleri eklemek için style objesi içinde tanımlamayı öğrenmiştik. document.styleSheet objesi içindeki stilleri değiştirmek, güncellemek, kaldırmak ya da değerini çekmek içinse kullanabileceğimiz bazı metodlar mevcut.

//setProperty()= Belirtilen css özelliği tanımlamamızı sağlar. 3. parametre olarak important olup olmadığını belirtebiliriz.

//removeProperty()=Seçilen css özelliğini kaldırır.

// getPropertyValue()=Seçilen css özelliğinin değerini döndürür.
/*
<h1>prototurk.com</h1>
<style>
    h1 {
        color: red !important;
    }
</style>
<script>
    console.log(
      document.styleSheets[0].cssRules[0].style.getPropertyValue('color')
    )
</script>
*/
//getPropertyPriority()=Seçilen css özelliğinin important olup olmadığını döndürür.
/*
<h1>prototurk.com</h1>
<style>
    h1 {
        color: red !important;
    }
</style>
<script>
    console.log(
      document.styleSheets[0].cssRules[0].style.getPropertyPriority('color') === 'important' ? 'important kullanilmis' : 'cokta onemli degil!'
    )
</script>
*/

// MediaQueryList
//Medya sorguları css'de responsive tasarım yaparken kullandığımız sorgulardır. Bunu javascript tarafında da kullanmak istediğimizde bize birkaç yararlı metod vermekte


//window.matchMedia()
//Bir medya sorgusu yazmamıza sağlar. Örneğin sayfa genişliğimiz 480px altında mı değil mi onu kontrol edelim.
/*
const mq = window.matchMedia('(max-width: 480px)')
console.log(mq.matches) // true ya da false
console.log(mq.media) // sorgumuzun değeri
*/
//Eğer bu değişikliği sürekli takip etmek istersek change olayını dinleyebiliriz. Yani;
/*
const mq = window.matchMedia('(max-width: 480px)')

mq.addEventListener('change', e => {
  console.log(e.matches) // eşleşip eşleşmediğini döndürür
})
*/
//designMode=Bir belgenin tasarım modunda olup olmadığını belirlememizi sağlar.
//document.designMode = 'on'


//selectionStart ve selectionEnd 
//kullanicidan bilgi aldigimiz  input ve textarea elemanlarinda secilen yazinin baslangic ve bitis indis degerini dondurur . 


//setRangeText()= baslangic ve bitis indislerine gore secilen deger ile degistirir.
