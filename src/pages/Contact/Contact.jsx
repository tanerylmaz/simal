import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // <-- ekledik
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Contact() {
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // <-- yönlendirme için

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "f4953aec-f95b-4176-a47d-cf8141499a90");
        formData.append("subject", "Yeni İletişim Formu");
        formData.append("from_name", formData.get("name") + " " + formData.get("surname"));
        formData.append("replyto", formData.get("email"));

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully ✅");
                event.target.reset();

                // 1 saniye bekleyip anasayfaya yönlendir
                setTimeout(() => {
                    navigate('/'); // <-- ana sayfaya yönlendirme
                }, 1000);
            } else {
                console.error("Error", data);
                setResult("Error: " + data.message);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setResult("Server error ❌");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (result) console.log(result);
    }, [result]);

    return (
        <div className='contact-page' style={{ paddingTop: "120px" }}>
            <header style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div className='container text-center text-dark'>
                    <h2 className='fw-semibold'>İLETİŞİM</h2>
                    <p className='text-center'>Bilgi ve randevu taleplerinizi iletebilirsiniz.</p>
                </div>
            </header>

            <div className="container">
                <div className="row g-4">
                    <div className="col-12 col-md-6 d-flex justify-content-center">
                        <Form id="contact-form" onSubmit={onSubmit} className="w-75 w-md-100">
                            <Row className="mb-3">
                                <Col sm={12} md={6} className="mb-3 mb-md-0">
                                    <Form.Label>Adınız</Form.Label>
                                    <Form.Control name="name" placeholder="Adınızı Giriniz" required />
                                </Col>
                                <Col sm={12} md={6}>
                                    <Form.Label>Soyadınız</Form.Label>
                                    <Form.Control name="surname" placeholder="Soyadınızı Giriniz" required />
                                </Col>
                            </Row>

                            <Form.Group className="mb-3">
                                <Form.Label>Email Adresiniz</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="Email Adresinizi Giriniz"
                                    required
                                />
                                <Form.Text className="text-muted">Bilgileriniz paylaşılmayacaktır.</Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Adresiniz</Form.Label>
                                <Form.Control name="adres" placeholder="Adresinizi Giriniz" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Mesajınız</Form.Label>
                                <Form.Control name="message" as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="danger btn-lg" className='mb-5' type="submit" disabled={loading}>
                                {loading ? "Gönderiliyor..." : "GÖNDER"}
                            </Button>
                        </Form>

                    </div>

                    <div className="col-12 col-md-6 d-flex flex-column align-items-center">
                        <h5 className='text-center w-75 mb-5 text-dark-custom'>ADRESİMİZ</h5>
                        <h5 className='text-center w-75'>Merkez Mah. Halitpaşa Cad. Gazi Center İş Merkezi No:29/102 Gaziosmanpaşa/İstanbul PK:34065</h5>
                        <h5 className='text-center w-75'>ŞİMAL HARİTA MÜHENDİSLİK BÜROSU</h5>
                        <h5 className='text-center w-75 mb-5'>TELEFON : 0506 807 12 31</h5>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.548388141456!2d28.911098675516417!3d41.0570041164239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab085b8e69a47%3A0x3b743c4b98e77435!2zR0FaxLAgQ0VOVEVSIMSwxZ4gTUVSS0VaxLA!5e0!3m2!1str!2str!4v1755637453854!5m2!1str!2str"
                            width="400"
                            height="200"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
