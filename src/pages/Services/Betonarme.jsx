import React from 'react';
import yüksekkatli from '../../utils/images/yuksekkatlifoto.webp'

function Betornarme() {
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
                                src={yüksekkatli}
                                alt="Betonarme Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">YÜKSEK KATLI BETONARME YAPI ÖLÇÜMLERİ</h3>

                            <p>Firmamız, yüksek katlı binalarda betonarme yada çelik yapılarla ilgili akla gelebilecek bütün ölçümleri, projeye uygun ve duyarlı bir şekilde icra etmek, herhangi bir problemle karşılaşılmış olduğunda hızlı çözümler üretmek şeklinde birçok alanda uzman ve hassas çözümler sunmaktadır. Bugüne kadar olan çalışmalarımızda gösterdiğimiz başarılara, sürekli inovasyon ekibimizle katmış olduğumız yeniliklerle her geçen gün yeni bir başarı daha eklemekteyiz.</p>

                            <p> Yüksek katlı betonarme yapıların ölçüm teknikleri standart ölçümlere farklılıklar gösterir. Köprü, bina, viyadük, anten kuleleri, çelik yapılar şeklinde dikey yönlü mimariye sahip yapıların ölçümlerinde Total Station, GPS ve lazer ölçümlerinden faydalanılır.</p>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Betornarme;
