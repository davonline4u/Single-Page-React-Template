import React from "react";
import Products from "../includes/Products";

const Home = () => {
    return (
        
        <div className="container">
            <div>
                
                <div className="card mt-4">
                    <div className="card-body">
                        <h1> Home</h1>
                    </div>
                    
                </div>
                <Products />
            </div>
        </div>
    )
}

export default Home;