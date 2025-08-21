import React from 'react';
import kamu from '../../utils/images/kamulastirmafoto.webp';

function Kamu() {
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
                                src={kamu}
                                alt="kamu Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Kamulaştırma Hizmetleri</h3>

                            <p>   Kamu yararının gerektirdiği hallerde gerçek ve özel hukuk tüzel kişilerinin mülkiyetinde bulunan taşınmazların, kaynakların ve irtifak haklarının bedeli peşin yada bazı hallerde taksitle ödenmek kaydıyla belirli esas ve usuller çerçevesinde anlaşarak yahut zorla alınmasına kamulaştırma (istimlak) denilmektedir.</p>

                            <p>Anayasanın 46 ncı maddesinde; "Devlet ve kamu tüzel kişileri; kamu yararının gerektirdiği hallerde, gerçek karşılıklarını peşin ödemek şartıyla, özel mülkiyette bulunan taşınmazların hepsinı yada bir kısmını, kanunla gösterilen esas ve usullere bakılırsa, kamulaştırmaya ve bunlar üzerinde idarî irtifaklar kurmaya yetkilidir." hükmüne yer verilmiş, müteakip fıkralarında da hangi hallerde ve ne şekilde taksitlendirme yapılabileceği belirtilmiştir. Kamulaştırma işlemleri ile ilgili ayrıntılı hükümler 2942 sayılı Kamulaştırma Kanununda yer verilmiştir.</p>

                            <p> 2942 sayılı Kamulaştırma Kanununun 3. Maddesinde "İdareler, Kanunlarla yapmak yükümlülüğünde bulundukları kamu hizmetlerinin veya teşebbüslerinin yürütülmesi için lüzumlu olan taşınmaz malları, kaynakları ve irtifak haklarını; Bedellerini nakden ve peşin olarak veya aşağıda belirtilen hallerde eşit taksitlerle ödemek suretiyle kamulaştırma yapabilirler" denilmekte ve izleyen fıkrada bu haller belirtilmektedir.</p>
                            <p>
                                Bu yasal düzenlemeler doğrultusunda Kamulaştırma; kamu yararının gerektirdiği hallerde gerçek karşılığının peşin ödenmesi şartıyla bir taşınmaz malın malikinin rızasına bakılmaksızın zorla alınarak kamu mülkiyetine geçirilmesidir.
                            </p>
                            <p>
                                Kamulaştırmada kamu yararı olması,  Kamulaştırmada bedelinin peşin ödenmesi Kamulaştırmada mal sahibinin rızası aranılmaması,unsurları mevcuttur.
                            </p>
                            <p>
                                Kamulaştırmada satın almadan farklı olarak kamulaştırılacak taşınmaz mal malikinin rızası aranmaz. şu demek oluyor ki kamulaştırmada Devlet kamu yararı için cebren taşınmaz mal edinmektedir.
                            </p>
                            <p>
                                Sadece kamulaştırma işleminin 2942 sayılı Kamulaştırma Kanununa uygun şekilde yapılması gerekir. Kamulaştırılacak taşınmaz malın sahibi, zilyedi ve öteki ilgililer kamulaştırma işlemine karşı idari yargıda ve takdir olunan bedeller ile maddi hatalara karşı da adli yargıda dava açabilirler.
                            </p>
                            <p>
                                İdare de takdir olunan karşılık ile maddi hatalara karşı taşınmaz malın bulunduğu yer mahkemesinde dava açabilir.
                            </p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Kamu;
