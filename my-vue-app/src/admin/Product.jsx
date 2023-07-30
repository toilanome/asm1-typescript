import React from "react";
import { Link } from "react-router-dom";

const ProductPage = () =>{
    return(
        <div>
            <Link to={`/admin/product/add`}>
                <button>Thêm mới sản phẩm</button>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
        </div>
    )
}
export default ProductPage