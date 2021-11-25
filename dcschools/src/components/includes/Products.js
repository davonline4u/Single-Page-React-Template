import React from "react";
import img1 from '../images/img1.jpg';

const Products = () => {
    return(
        <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
                <div className="col">
                    <div className="card">
                    <img src={img1} className="card-img-top ,
                     " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                
                <div className="col">
                    <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    </div>
                </div>
                <div className="col">
                    <div className={"card"}>
                    <img src={img1} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    </div>
                </div>
                </div>
                <nav aria-label="...">
                    <ul className="pagination pagination-lg d-flex justify-content-center">
                        <li className="page-item disabled">
                        <a className="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">1</a></li>
                        <li className="page-item active">
                        <a className="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="page-item"><a class="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
        </div>
    )
}
export default Products;