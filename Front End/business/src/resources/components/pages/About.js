import Navbar from "../Navbar";
import Footer from "../Footer";
import fund from "../../../images/funding.jpg";
import growth from "../../../images/growth-agencies.jpg";
import aveter from "../../../images/aveter.png";

const About = () => {
    // for apply some class in body tag in index.html
    document.getElementById("body-id").className = "d-flex flex-column";
    
    return (
        <>
            <main className="flex-shrink-0">
                {/* <!-- Navigation--> */}
                <Navbar />
                {/* <!-- Header--> */}
                {/* <!-- Header--> */}
                <header className="py-5">
                    <div className="container px-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-xxl-6">
                                <div className="text-center my-5">
                                    <h1 className="fw-bolder mb-3">Our mission is to make building AI soluation for everyone.</h1>
                                    <p className="lead fw-normal text-muted mb-4">Our mission is to make building AI solutions accessible and achievable for everyone. We believe that artificial intelligence has the power to revolutionize industries and improve lives, and we aim to remove barriers and empower individuals and organizations to harness its potential. By providing user-friendly tools, comprehensive resources, and a supportive community, we strive to democratize AI development and enable individuals from all backgrounds to create innovative and impactful solutions. Together, we can unlock the transformative capabilities of AI and shape a future where its benefits are accessible to all.</p>
                                    <a className="btn btn-primary btn-lg" href="#scroll-target">Read our story</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- About section one--> */}
                <section className="py-5 bg-light" id="scroll-target">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src={fund} alt="..." /></div>
                            <div className="col-lg-6">
                                <h2 className="fw-bolder">Our founding</h2>
                                <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- About section two--> */}
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src={growth} alt="..." /></div>
                            <div className="col-lg-6">
                                <h2 className="fw-bolder">Growth &amp; beyond</h2>
                                <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- Team members section--> */}
                <section className="py-5 bg-light">
                    <div className="container px-5 my-5">
                        <div className="text-center">
                            <h2 className="fw-bolder">Our team</h2>
                            <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                        </div>
                        <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center">
                            <div className="col mb-5 mb-5 mb-xl-0">
                                <div className="text-center">
                                    <img className="img-fluid rounded-circle mb-4 px-4" src={aveter} alt="..." />
                                    <h5 className="fw-bolder">Ibbie Eckart</h5>
                                    <div className="fst-italic text-muted">Founder &amp; CEO</div>
                                </div>
                            </div>
                            <div className="col mb-5 mb-5 mb-xl-0">
                                <div className="text-center">
                                    <img className="img-fluid rounded-circle mb-4 px-4" src={aveter} alt="..." />
                                    <h5 className="fw-bolder">Arden Vasek</h5>
                                    <div className="fst-italic text-muted">CFO</div>
                                </div>
                            </div>
                            <div className="col mb-5 mb-5 mb-sm-0">
                                <div className="text-center">
                                    <img className="img-fluid rounded-circle mb-4 px-4" src={aveter} alt="..." />
                                    <h5 className="fw-bolder">Toribio Nerthus</h5>
                                    <div className="fst-italic text-muted">Operations Manager</div>
                                </div>
                            </div>
                            <div className="col mb-5">
                                <div className="text-center">
                                    <img className="img-fluid rounded-circle mb-4 px-4" src={aveter} alt="..." />
                                    <h5 className="fw-bolder">Malvina Cilla</h5>
                                    <div className="fst-italic text-muted">CTO</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
};

export default About;
