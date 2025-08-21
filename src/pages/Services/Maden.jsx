import React from 'react';
import maden from '../../utils/images/maden-min.webp';

function Maden() {
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
                                src={maden}
                                alt="Maden Hizmetleri"
                            />
                        </div>

                        {/* İçerik */}
                        <div className="card-body">
                            <h3 className="card-title fw-bold mb-3 text-center"> MADEN VE OCAK UYGULAMA HİZMETLERİ</h3>

                            <p>
                                Endüstrinin en önemli ayaklarından birisi olan maden sahası denetimleri ve ölçümleri Şimal Harita firmasının hizmet yelpazesi içinde yer alan mevzudur.Bilindiği gibi madenlerin stok ölçümleri özellikle spot alım ve satımlarda her iki taraf içinde çok önemli bir yer tutmaktadır. Yığın ölçüm hizmetlerinde kullanılan klasik metodlar ise günümüz teknolojisine kıyasla hem çok maliyetli hem de çok süre alıcıdır.  Dökme yük ve mineral stoklarının ölçümü mevzularında sizlere pratik ve kaliteli bir hizmet anlayışı ile size çözümler sunmaktayız.
                            </p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Maden;
