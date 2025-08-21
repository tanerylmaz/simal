import React from 'react';
import anahtar from '../../utils/images/anahtarteslim.webp'

function Anahtar() {
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
                                src={anahtar}
                                alt="Anahtar Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Anahtar Teslim İnşaat</h3>
                            <p>
                                Gerek uzun vadeli yatırımlar, gerekse krediler aracılığıyla ev satın almak, her ne olursa olsun, dikkat ve özen gerektiren bir süreci ifade ederken; en güvenli konut seçeneğine ulaşmak için çeşitli alternatiflerin değerlendirilmesi söz konusudur.
                            </p>
                            <p>
                                Anahtar teslim proje, adından da anlaşılacağı üzere, inşa edilen konut ya da binaya dair tüm masraf ve işlerin eksiksiz olarak tamamlanarak alıcıya teslim edilmesidir. Diğer bir deyişle, anahtar teslim konut, tamamlanmış oturuma hazır konut anlamına gelir. Anahtar teslim konutlarda yapının tüm işçiliği yüklenici firma tarafından tamamlanmış olup, satın alan kişiye anahtarı teslim edilecek duruma getirilmiştir.

                                Bu doğrultuda, ödemenin yapılması ve tapu işlemlerinin tamamlanması durumunda, alıcının konutun anahtarını alması eş zamanlı olarak gerçekleşir. Bu sayede, ev alma süreci hızlı ve sorunsuz bir şekilde tamamlanır.
                            </p>
                            <p>
                                Konut alımları sırasında alıcılar için farklı seçenekler söz konusudur. Topraktan ya da maketten ev satın almak mümkün olurken, bu yolla yapılan satın alımlar bazı dezavantajları da beraberinde getirebilir. Bu tür satışlarda projenin bitişi için belirli bir süre öngörülür ve alıcılara bu doğrultuda bir teslim tarihi verilir.
                            </p>
                            <p>
                                Projenin zamanında bitirilememesi ya da beklenen niteliklerde olmaması gibi durumlar, özelikle bu iki seçenek için sıkça karşılaşılan sorunlardır. Bu sorunlar genelinde, pek çok kişi ciddi mağduriyetlerle karşı karşıya kalabilmektedir. Diğer yandan, anahtar teslim konut alımları, her yönüyle tamamlanmış bir konutu ifade ettiğinden hem güvenli, hem de beklentilere yönelik bir satın alıma olanak tanır.


                            </p>
                            <p>
                                Anahtar teslim projelerden yapılan alımlar en güvenilir konut alım seçeneğidir. Güvenilir olmasının temeli, ödeme ve teslim tarihinin aynı olmasından kaynaklanır. Bu doğrultuda, bu projelerin sunduğu en önemli avantaj, satın alınan konuta dair bir gecikme yaşanmadan, hemen taşınmanın mümkün olmasıdır.


                            </p>
                            <p>
                                Yanı sıra, diğer seçeneklerde konut bitene kadar devam eden kira ödeme durumu, anahtar teslim konutlarda yaşanmadığından, bu açıdan da alıcılara yüklenen ek kira maliyeti de ortadan kalkar. Ayrıca, bu seçenek dâhilinde, kişiler konutu tüm detaylarıyla görebilme olanağına sahip olduklarından, beklentilerini karşılayacak en uygun seçeneğe ulaşma imkânına sahip olurlar.
                            </p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Anahtar;
