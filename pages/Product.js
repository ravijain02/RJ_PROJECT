import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams } from 'react-router-dom'
import ReactImageMagnify from 'react-image-magnify'
import '../styles/product.css'

const Product = () => {

    const {id} = useParams()
    const [proddata, setProdData] = useState(null)
    const [cartdata, setCartdata] = useState('')
    const [text, settextLenght] = useState('')
    const [showlength, setshowlength] = useState(true)


    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setProdData(res.data)
        })
    }, [])

    const addtocart = (data) => {
        let tempcartdata = {...cartdata}
        setCartdata(tempcartdata, data)
    }

    // const f = document.getElementById("foo")
    // document.addEventListener(
    //     "click",
    //     (e) => {
    //         f.style.transform = `translateY(${e.clientY - 25}px)`
    //         f.style.transform += `translateX(${e.clientX - 25}px)`
    //     },
    //     false
    // )

  return (
    <div className='container max_height'>
        {proddata !== null &&
        <div className='product_container'>
            <div className='img_side'>
                <div className='img'>
                   <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: `${proddata.image}`
                        },
                        largeImage: {
                            src: `${proddata.image}`,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
            </div>
            <div className='content_side'>
                <h2>Category: {proddata.category}</h2>
                <p>&nbsp;</p>
                <h3>Title: {proddata.title}</h3>
                <p>&nbsp;</p>
                <p><b>Description:</b> {proddata.description}</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <h1>Price: {proddata.price}$</h1>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <ul className='btns'>
                    <li><button className='btn' onClick={() => addtocart(proddata)}>Add to Cart</button></li>
                    <li><button className='btn'>Buy Now</button></li>
                </ul>
            </div>
        </div>
        }
            {/* <div id="foo" className="ball"></div> */}
    </div>
  )
}

export default Product