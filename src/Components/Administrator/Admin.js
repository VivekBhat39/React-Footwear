import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default function Admin() {
    return (

        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <div className='sideBar mt-3'>
                            <ul>
                                <li><Link to="/admin/dashboard">Dashboard</Link></li>
                                <li><Link to="/admin/productcategory">Product Category</Link></li>
                                <li><Link to="/admin/product">Products</Link></li>
                                <li><Link to="/admin/order">Order</Link></li>
                                <li><Link to="/admin/fixedorder">Fixed Order</Link></li>
                                <li><Link to="/">Logout</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <Outlet />
                    </div>
                </div>
            </div>

        </>
    )
}
