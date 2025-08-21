import React from 'react';
import terk from '../../utils/images/yolaterkfoto.webp';

function Terk() {
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
                                src={terk}
                                alt="terk Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">YOLA TERK HİZMETLERİ</h3>

                            <p>Kamuya (yola) terk işlemi; bayındır planlarının gerçekleştirilmesi esnasında taşınmazın mal sahipleri tarafınca, bedelli veya bedelsiz olarak, taşınmazın bütününün ya da bir kısmınün imar planına uygun olarak kamu yararına( yol, yeşil alan, park vs.) bırakılması işlemidir. Mal sahibinin talebi belirttiğimiz şekilde tescil edilir. Yola terk işlemi, belli bir maddi karşılık sonucu yapılsa da resmi senet düzenlemeye gerek yoktur. Ancak bir karşılık ödenmekle birlikte terk edilecek kısmın belediye adına tescili ve bu tescilden sonra sicilden terki isteniyorsa resmi senet düzenlenmelidir (Satış hükümleri uygulanır).</p>

                            <p> Konuyla ilgili bazı durumları ilgili kanunla söyleyelim:</p>

                            <p>Özel mülkiyete tabi olmayan ve kamunun yararlanmasına ayrılan taşınmazlar, bunlara ilişkin tescili lüzumlu bir ayni hakkın kurulması söz mevzusu olmadıkça kütüğe kaydolunmaz (MK.999.). Tapuya kayıtlı bir taşınmaz, kayda tabi olmayan bir taşınmaza dönüşürse, tapu sicilinden çıkarılır (MK.999).
                            </p>

                            <p>
                                Yola terk işlemi için istenen belgeler:
                            </p>
                            <p>
                                Belediye encümeni yada il özel idaresinin olumlu kararı,<br /> Serbest harita mühendisi tarafınca düzenlenmiş ve kadastro müdürlüğü tarafınca düzenlenmiş tescil bildirimi istenir.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Terk;
