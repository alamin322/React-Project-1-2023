import React from "react"
import Navbar from "../Navbar";
import Footer from "../Footer";

const PortfolioItems = () => {
    document.getElementById("body-id").className = "d-flex flex-column h-100";
    return (
        <>
            <main className="flex-shrink-0">
                {/* <!-- Navigation--> */}
                <Navbar />

                {/* <!-- Page Content--> */}
                <section class="py-5">
                    <div class="container px-5 my-5">
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-6">
                                <div class="text-center mb-5">
                                    <h1 class="fw-bolder">Project Title</h1>
                                    <p class="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab similique, ducimus ut alias sit accusamus illum, asperiores deserunt dolorum quaerat qui! Ab, quisquam explicabo magni dolores unde beatae quam a.</p>
                                </div>
                            </div>
                        </div>
                        <div class="row gx-5">
                            <div class="col-12"><img class="img-fluid rounded-3 mb-5" src="https://dummyimage.com/1300x700/343a40/6c757d" alt="..." /></div>
                            <div class="col-lg-6"><img class="img-fluid rounded-3 mb-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                            <div class="col-lg-6"><img class="img-fluid rounded-3 mb-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        </div>
                        <div class="row gx-5 justify-content-center">
                            <div class="col-lg-6">
                                <div class="text-center mb-5">
                                    <p class="lead fw-normal text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam deserunt architecto enim eos accusantium fugit recusandae illo iste dignissimos possimus facere ducimus odit voluptatibus exercitationem, ex laudantium illum voluptatum corporis.</p>
                                    <a class="text-decoration-none" href="#!">
                                        View project
                                        <i class="bi-arrow-right"></i>
                                    </a>
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

export default PortfolioItems;
