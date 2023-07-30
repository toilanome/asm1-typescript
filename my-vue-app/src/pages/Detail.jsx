import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = ({products}) =>{
    const {id} = useParams()
    const currentProduct = products.find((item) => item.id ===Number(id))

    console.log(currentProduct);

    return(
        <div>
            <h2>{currentProduct?.name}</h2>
            <h2>{currentProduct?.price}</h2>
        </div>
    )
}

export default DetailPage;