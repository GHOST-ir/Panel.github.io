import React from 'react'
import './product0.css'
import { Link , useParams} from 'react-router-dom'
import Chart from '../../Components/chart/Chart'
import { productsChartData } from '../../datas'
import Avatar from '@mui/material/Avatar'
import { products } from '../../datas'
import Publish from '@mui/icons-material/Publish'

export default function Product() {

    const SearchParameter = useParams()

    const MainParameter = products[SearchParameter.id - 1]
    
    

  return (

    <>
    <div className="product">
        <div className="productTitleContainer">
            <h1>Product</h1>
            <Link to='/newProduct'>
                <button className="productAddButton">Create</button>            
            </Link>
        </div>

        <div className="productTop">
            <div className="productTopLeft"><Chart title='Sale In Months' data={productsChartData} dataKey='Sale'/></div>
            <div className="productTopRight">
                <div className="productInfoTop">
                    <Avatar sx={{backgroundColor:'violet'}}>{MainParameter.avatar}</Avatar>
                    <span className="productName">{MainParameter.title}</span>
                </div>

                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <div className="productInfoKey">ID:</div>
                        <div className="productInfoValue">{Math.floor(Math.random() * 999)}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Name:</div>
                        <div className="productInfoValue">{MainParameter.title}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Sales:</div>
                        <div className="productInfoValue">{MainParameter.price}</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">Active:</div>
                        <div className="productInfoValue">Yes</div>
                    </div>
                    <div className="productInfoItem">
                        <div className="productInfoKey">In Stock:</div>
                        <div className="productInfoValue">No</div>
                    </div>
                </div>
            </div>
        </div>

        <div className="productBottom">
            <form className="productForm">

                <div className="productFormLeft">
                    <label>Product Name</label>
                    <input type="text" placeholder='MSI' />

                    <label>In Stock</label>
                    <select id="inStock">
                        <option value="yse">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Active</label>
                    <select id="inStock">
                        <option value="yse">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="productFormRight">

                    <div className="productUploader">
                        <input type="file"/>
                    </div>
                        <button className="productButton">Upload (Edit)</button>
                </div>
            </form>
        </div>
    </div>
    </>

  )
}
