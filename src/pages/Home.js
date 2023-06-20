import { useEffect, useState } from 'react'
import '../styles/home.css'
import RandomImage from '../components/RandomImage'
import axios from 'axios'

const Home = () => {

    // const addanimmation = () => {
    //     document.querySelector(".animation").classList.toggle("animation_add")
    // }
    const [imgsearch, setImgSearch] = useState('')
    const [data, setData] = useState(null)
    const [pageload, setPageload] = useState(true)

    useEffect( () => {
        axios("https://fakestoreapi.com/products").then((res) =>
        {
        setData(res.data)
        }) 
        setTimeout(() => {
            setPageload(false)
        }, 1000);
    },[] )


    if (!pageload) {
        return(
            <div className="home min_height">
                {/* <div > 
                    <div className='animation'>
                    </div>
                </div>
                <p className='btns'><button style={{padding:"10px",cursor:"pointer"}} onClick={addanimmation}>Click me for Animation</button></p>
                <div className='circle'></div>
                <p className='line'></p> */}
                <div className="container">
                    <input type='text' value={imgsearch} placeholder='Search for random images' onChange={(e) => setImgSearch(e.target.value)}/>
                </div>
                <div className='img_container'>
                    {imgsearch === "" ? null : <RandomImage name = {imgsearch}/> }
                </div>
                <div className='card_container' >
                    <div className="card">
                        <div className="wrapper">
                            <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" alt='' className="cover-image" />
                        </div>
                        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" alt='' className="title" />
                        <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" alt='' className="character" />
                    </div>
                    <div className="card">
                        <div className="wrapper">
                            <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" alt='' className="cover-image" />
                        </div>
                        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" alt='' className="character" />
                        <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" alt='' className="title" />
                    </div>
                    {data !== null && data.map((item, i) =>
                    <div className="card1" key={i}>
                        <img src={item.image} alt="Avatar"/>
                        <div className="content">
                            <p>{item.title}</p>
                            <div className='price'>
                                <h2>Price:<b>{item.price}Rs.</b></h2> 
                                <button>Buy Now</button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div className="home min_height">
                <hi>Loading..........</hi>
            </div>
        )
    }
}

export default Home