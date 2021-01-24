import React from 'react'
import './Success.css'
import pic from '../img/team3.png'
import search from '../img/search.svg'
import Course from './Course'
import Logos from './logos'

const Success = () => {
    const data = [{
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }, {
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },{
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },{
        catagory: 'catagory',
        heading: 'I started my own Bussiness',
        paragraph: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },]
    return (
        <div className="success">
            <div className='backColor'>
                <h1 style={{ textAlign: 'center', marginTop: '5px', paddingTop: '30px', fontWeight: 'bold', marginBottom: '-40px' }}>Success Stories Around the Globe</h1>
                <div className="success__work">
                    <div className="success_text">
                        <span>
                            Meet Ishi Julie ...
                    </span>
                        <div className="name">
                            <h3  >Lorem Ipsum is simply dummy text of the printing and typesetting industry.and typesetting industry. </h3>
                            <p style={{ opacity: 0.4 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p></div>
                    </div>
                    <div>
                        <img className="success__image" src={pic} alt='' />
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} className="work2">
                <div className="work__input">
                    <input type='text' placeholder="search course" />
                    <img src={search} alt='' />
                </div>
                <div className="input">
                    <input style={{ paddingLeft: '10px', height: '50px' }} className="int" type='text' placeholder="Recency" />
                    <input style={{ paddingLeft: '10px', height: '50px' }} className="int" type='text' placeholder="Alphabetically" />
                </div>
            </div>


            <div className="main_div">
            {data.map(datas => (
                <div   >
                        <div className="course">
                            <img src={pic} alt='' />
                            <span>
                            {datas.catagory}
                        </span>
                        <h5> {datas.heading}</h5>
                        <p>
                            {datas.paragraph}</p>
                        </div>
                        
                </div>
            ))}
            </div>



            <div style={{ marginBottom: '90px' }}>
                <Logos />
            </div>
        </div>
    )
}

export default Success
{/* <div className="component">
                <div className="course">
                    <div className="courses">
                        // <img src={pic} alt='' />
                        <span>Catogary</span>
                        <h5 style={{ marginTop: '10px', marginBottom: '10px' }}>I started my own Bussiness</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="courses">
                        <img src={pic} alt='' />
                        <span>Catogary</span>
                        <h5 style={{ marginTop: '10px', marginBottom: '10px' }}>I started my own Bussiness</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="courses">
                        <img src={pic} alt='' />
                        <span>Catogary</span>
                        <h5 style={{ marginTop: '10px', marginBottom: '10px' }}>I started my own Bussiness</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>
                <div className="course">
                    <div className="courses">
                        <img src={pic} alt='' />
                        <span>Catogary</span>
                        <h5 style={{ marginTop: '10px', marginBottom: '10px' }}>I started my own Bussiness</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="courses">
                        <img src={pic} alt='' />
                        <span>Catogary</span>
                        <h5 style={{ marginTop: '10px', marginBottom: '10px' }}>I started my own Bussiness</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                    <div className="courses">
                        <img src={pic} alt='' />
                        <span>Catogary</span>
                        <h5 style={{ marginTop: '10px', marginBottom: '10px' }}>I started my own Bussiness</h5>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                </div>

            </div> */}