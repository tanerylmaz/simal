import React from 'react';
import taahüt from '../../utils/images/taahhüt-min.webp';

function Taahut() {
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
                                src={taahüt}
                                alt="Taahut Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">İNŞAAT TAAHHÜT HİZMETLERİ</h3>

                            <p>
                                Şirket adına hertürlü inşaat yapmak üzere arsa almak, inşaatları tamamlayıp satmak, arsa sahibi olan gerçek ve tüzel kişilerle anlaşmalar yapıp inşaatları yapıp teslim etmek yine bu kişiler ile mülk(kat) karşılığı inşaatlar yapmak,şirketin çalışma konusu içinde kalan ihale ve taahhüt proje işlerine katılmak,teminatlar yatırıp bu işleri almak ve sonuçlandırmak, inşaat projeleri,tadilat , tamirat,proje ve ihalelerine katılıp neticelendirmek, Şirket amacını ve konusunu gerçekleştirmek için gayrimenkul satın alarak inşa etmek ve pazarlamaktır.
                            </p>
                            <p>
                                Geniş bir yelpazesi bulunan inşaat sektöründe faaliyet veren firmamız kaliteli malzeme ve deneyimli ekip ile sorunsuz çözüm üretip modern dünyanın geleceğine katkı sağlamaktadır. Bu güne kadar sektöre hizmet vermiş olan firmamız kabuğunu kırarak daha büyük sorumlulukları üzerine almayı hedefleyip modern dünyanın geleceğine umutla bakmaktadır. Belirlediğimiz hedeflere ulaşmak arzumuzdan ödün vermeden yolumuza devam etmekteyiz.
                            </p>
                            <p>
                                Amacı modern yerleşim birimlerini hızlı ve kaliteli üretmek olan ŞİMAL HARİTA MÜHENDİSLİK İNŞAAT birinci sınıf malzeme ve yetkin iş gücü kullanarak yüksek kalite standartlarında projeler geliştirmeyi, Dünya Kalite Standartlarına uygun,insan güvenliğine son derece önem veren konforlu konutlar üretmeyi amaçlamaktadır.
                            </p>
                            <p>
                                Sahibi olduğunuz arsanız üzerinde müteahhit firmaya bedelini ödemek koşuluyla bir inşaat yaptırmak amacındaysanız, müteahhit ile inşaat taahhüt sözleşmesi imzalamanız şart.
                            </p>
                            <p>
                                İnşaat taahhüt sözleşmesi, arsa sahibinin arsası üzerinde yapılacak inşaatın maliyetlerini karşılaması yoluyla müteahhitle yapılıyor. Bu durumda müteahhit ile arsa sahibi arasında inşaat taahhüt sözleşmesi imzalanıyor.
                            </p>
                            <p>
                                Bu modelle arsa sahibi müteahhite arsası üzerinde bedelini ödeyerek inşaat yaptırmış oluyor. Müteahhit ise tasarlanan plan ve projeye uygun bir şekilde inşaatı yapmakla yükümlü oluyor. Yani  müteaahittin inşaatı eksiksiz ve kusursuz olarak yapması şart. İnşaat taahhüt sözleşmesiyle müteahhitin uyması gereken diğer bir husus da, söz konusu inşaatı zamanında bitirmek.
                            </p>

                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Arsa sahibinin sorumlulukları nelerdir?</strong>
                            </h5>
                            <p>
                                İnşaat taahhüt sözleşmesine göre arsa sahibinin de yüküm ve borçları bulunuyor. Bunlardan ilki, müteahhit tarafından yapılacak inşaatın bedelini ödemek. Bu arsa sahibinin ödemesi gereken bir yükümlülük olarak karşımıza çıkıyor.
                            </p>
                            <h5 className="text-lg font-bold">
                                <strong className="text-red-500">Bedel nasıl belirlenir?</strong>
                            </h5>
                            <p>
                                Peki arsa sahibi tarafından ödenmesi zorunlu olan bu bedel nasıl hesaplanıyor? Hemen yanıtlayalım, söz konusu bu bedel götürü usulüyle belirlenebileceği gibi, müteahhitin inşaat maliyetine belirli bir oranın uygulanması sonucunda hesaplanacak yüklenici karının eklenmesi ile veya inşaat maliyetine sabit bir yüklenici karının eklenmesi ile de belirlenebiliyor.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Taahut;
