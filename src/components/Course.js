import React from 'react'
import './Course.css'
import pic from '../img/Layer 63.png'


const Course = () => {
    const datas = [{
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    }, {
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    },{
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    },{
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    }, {
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    }, {
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    }, {
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    }, {
        catagory: 'Catagory',
        heading: 'Foundation Course For Online Learning',
        text: " Some quick example text to build on the card title and make up the bulk othe card content."
    }]
    return (
        <div>
            <div className="main_div2">
            {datas.map(data => (
                <div   >
                        <div className="course">
                            <img src={pic} alt='' />
                            <span>
                            {data.catagory}
                        </span>
                        <h5> {data.heading}</h5>
                        <p>
                            {data.text}</p>
                        </div>
                        
                </div>
            ))}
            </div>
        </div>
    )
}

export default Course
{/* <div className="course">
<div className="courses">
    
    <img src={pic} alt='' />
    <span>Catogary</span>
    <h5>Foundation course for online</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className="courses">
    <img src={pic} alt='' />
    <span>Catogary</span>
    <h5>Foundation course for online</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className="courses">
    <img src={pic} alt='' />
    <span>Catogary</span>
    <h5>Foundation course for online</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
</div>
<div className="course">
<div className="courses">
    <img src={pic} alt='' />
    <span>Catogary</span>
    <h5>Foundation course for online</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className="courses">
    <img src={pic} alt='' />
    <span>Catogary</span>
    <h5>Foundation course for online</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
<div className="courses">
    <img src={pic} alt='' />
    <span>Catogary</span>
    <h5>Foundation course for online</h5>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
</div>
</div> */}
