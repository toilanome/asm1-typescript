import React from "react";
import { Link } from "react-router-dom";

const HomePage = ({products}) =>{
    console.log("home data",products);

    return(
        <div>Home page
            {products.map((item,index) =>{
                return(
                    <div>
                        <h3>{item.name}</h3>
                        <h3>{item.price}</h3>
                        <Link to={`/detail/${item.id}`}>
                            <button>Detail</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default HomePage