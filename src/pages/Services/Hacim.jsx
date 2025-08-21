import React from 'react';
import kübaj from '../../utils/images/hacimfoto.webp';

function Hacim() {
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
                                src={kübaj}
                                alt="Hacim Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center">Kübaj - Hacim Hesabı</h3>

                            <p>Kübaj; sıkışma, kabarma, depo işlemleri göz önünde tutularak yapılan toprak hesabıdır. öteki bir anlam olarak, bir malzemenin hacmini hesaplama işlemidir.</p>

                            <p>Kübaj hesabı şu şekilde yapılır;</p>

                            <p>Hafriyat işlemlerinde araziden ne kadar malzeme alınacağı yada dolgu işleminde ne kadar malzeme gerekeceği maliyet hesabı açısından büyük önem taşır. Arazinin plankote haritası yapılarak ilk ve son durum arasındaki ne kadar hacim olduğu ve dolayısıyla araç-gereç ve maliyet hesapları yapılır.</p>


                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Hacim;
