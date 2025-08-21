import React from 'react';
import cevre from '../../utils/images/cevredizayn.webp'

function Cevre() {
    return (
        <div id="blog" className="container " >
            <div className="row justify-content-center">

                {/* Blog Centered */}
                <div className="col-md-10 col-lg-8 mb-4" style={{ marginTop: '87px' }}>
                    <div className="card shadow-sm border-0">

                        {/* Resim */}
                        <div className="text-center p-4">
                            <img
                                className="img-fluid rounded"
                                style={{ maxHeight: '250px', objectFit: 'cover' }}
                                src={cevre}
                                alt="Cevre Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Çevre Düzenlemeleri</h3>

                            <p>
                                Doğa, planlama ve tasarım ögelerini sistemli bir şekilde analiz yapan peyzaj mimarlığı, sanat, bilim, mühendislik ve teknolojiyi bir araya getirerek alan tasarımı, planlaması ve yönetimi ile uğraşan bir meslek disiplinidir. Her konuda olduğu gibi bahçe düzenleme ve çevre düzenleme konularında da mutlaka uzmanlardan destek alınmalıdır.Bu konunun da uzmanları peyzaj mimarları ve ziraat mühendisleridir. Bu sektörde hizmet veren çok sayıda peyzaj firması bulunmaktadır. Bunun yanında çok daha fazlada vasıfsız çalışana rastlamak mümkündür. Bir bina yaparken mutlaka inşaat mühendisinden yardım alınmasına rağmen çevre düzenlemesi konusunda o kadar titiz davranılmamaktadır. Oysa eğer ekonomik bir alış veriş söz konusu ise ödememizin karşılığını alıp almadığımızı bilmeliyiz.
                            </p>
                            <p>
                                Çevre düzenlemesinde yapılan yanlışlar çok sonra anlaşılacağından maalesef iş bittiğinde düzenlemeyi yapanın sadece düzenlemedeki estetik anlayışı yada çok ciddi mimari hataları ortaya çıkacaktır. Asıl hatalar belki yıllar  sonra çok daha net anlaşılacak ve artık telafi edilemez noktada olacaktır. Yanı sıra günümüzde, eğitimsiz ve tecrübesiz birçok peyzaj uygulayıcısı ekonomik nedenlerle tercih edilmekte ama sonuçta aynı alana birkaç deneme-yanılma yapılarak çevre düzeni kurgulamaktadırlar ki böylece de olayın hiç de ekonomik olmadığı anlaşılmaktadır.
                            </p>
                            <p>
                                Piyasada bir peyzajcı yada bu konuda uzman ziraat mühendisinin yanında bir kez bahçe düzenlemesine katılıp ertesi gün bu işe soyunan bir yığın vasıfsız kişiye rastlamak mümkündür. Oysa yeterli bilgi birikimine sahip olmayan bir kişi ancak gördüğünü uygular fakat hangi bitki neden seçilmiştir çoğunlukla bilmez her yerde aynı uygulamayı yapar ki buda kısa sürede yapılan masrafları ve emeği boşa çıkarır.
                            </p>
                            <p>
                                Bugün yapılan ve uygulamaya başlanan projelerin kısa orta ve uzun ölçekte hangi noktada olacağı elbette değerlendirilmeli ve bu kriterler ışığında çevre düzenlemeleri yapılmalıdır. Bitki seçimleri büyüme hızları, bitki karekterleri, tepe taç mesafeleri, yönleri, dikileceği toprak özelikleri, rüzgarın yönü ve hızı, güneşlenme süresi v.b. birçok faktör çevre düzenlemesine etki edecektir. Maalesef, çevre düzeni herkes tarafından uygulanabilir olduğunu düşünenler iş güçlerini ve paralarını doğru değerlendirememektedirler.
                            </p>
                            <p>
                                Bazı ihtiyaç sahipleri de, bahçesinin yıllar sonra kavuşacağı şekli, kompozisyonu hemen istemektedir ki bu mümkün değildir. Çünkü peyzaj firmaları zaman satabilme özeliğine sahip değildirler. Sonuç itibari ile konunun uzmanı olan profesyonellere güvenmek ve beklemek zorundayız. Aksi halde bugünden zorlama ile ortaya çıkarılmaya çalışılan görüntü şu an için bizi tatmin etse de yakın gelecek de çok pişman olacağımız uyumsuz bir gelişme göstereceğini de ihtimaller arasına koymalıyız.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cevre;
