import React from 'react'

const Dashboard = () => {
    return (
        <div>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="bread"><span><a href="">Admin</a></span> / <span>Dashboard</span></p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="container">
                    <div className="row">
                        <div className='col-lg-12 text-center rounded-pill' style={{ backgroundColor: "#88c8bc" }}>
                            <h1 className='my-auto text-light'>Dashboard</h1>
                        </div>
                    </div>

                    {/* Product Lisst */}
                    <div className='container'>
                        <div className="row mt-4">
                            <div className='col-lg-4'>
                            <div className="jumbotron rounded-5">
                                <h1 className="display-5 fw-bold">Users</h1><hr className="my-4" /><p className="lead">
                                    <a className="btn btn-primary btn-lg" style={{ backgroundColor: "#88c8bc" }} href="#" role="button">Learn more</a>
                                </p>
                            </div>
                            </div>
                            <div className='col-lg-4'>
                            <div className="jumbotron rounded-5">
                                <h1 className="display-5 fw-bold">Products</h1> <hr className="my-4" /><p className="lead">
                                    <a className="btn btn-primary btn-lg" style={{ backgroundColor: "#88c8bc" }} href="#" role="button">Learn more</a>
                                </p>
                            </div>
                            </div>
                            
                            <div className='col-lg-4'>
                            <div className="jumbotron rounded-5">
                                <h1 className="display-5 fw-bold">Hello</h1><hr className="my-4" /> <p className="lead">
                                    <a className="btn btn-primary btn-lg" style={{ backgroundColor: "#88c8bc" }} href="#" role="button">Learn more</a>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;