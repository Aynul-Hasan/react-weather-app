import React from 'react'
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


export const Home = () => {
    return (
        <>
         <div className="container">
             <div className="row mt-5">
                 <div className="col-lg-6 my-auto">
                          <h4 class="my-5">Welcome to weather app </h4>
                          <h1> Get the Latest  weather <br/> Info Your City</h1>
                          <Link to="/weather" class="btn btn-outline-warning ">Click now </Link>
                 </div>
                 <div className="col-lg-6 mt-5">
                   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active"  data-interval="2000">
                        <img src="/img/home-1.svg" class=" w-100" alt="..."/>
                        </div>
                        <div class="carousel-item"  data-interval="2000">
                        <img src="/img/home-1.svg" class=" w-100" alt="..."/>
                        </div>
                        <div class="carousel-item"  data-interval="2000">
                        <img src="/img/home-1.svg" class=" w-100" alt="..."/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                 </div>
             </div>
         </div>
        </>
    )
}
