import React from 'react'
import './Success.css'
import pic from '../img/team3.png'
import search from '../img/search.svg'
import Course from './Course'
import Logos from './logos'

const Success = () => {
    return (
        <div className="success">
            <h1 style={{ textAlign: 'center' }}>Success Stories Around the Globe</h1>
            <div className="success__work">
                <div className="success_text"> 
                    <span>
                        Meet isshi Julie
                    </span>
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.  </p>
                </div>
                <div>
                    <img className="success__image" src={pic} alt='' />
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}} className="work2">
            <div className="work__input">
                <input type='text' placeholder="search course" />
                <img  src={search} alt='' />
            </div>
            <input className="int" type='text' placeholder="Alphabetically" />
           </div>
           <div className="component">
           <div className="course">
                <div className="courses">
                    <img src={pic} alt='' />
                    <span>Catogary</span>
                    <h5>I started my own Bussiness</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="courses">
                    <img src={pic} alt='' />
                    <span>Catogary</span>
                    <h5>I started my own Bussiness</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="courses">
                    <img src={pic} alt='' />
                    <span>Catogary</span>
                    <h5>I started my own Bussiness</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
            <div className="course">
                <div className="courses">
                    <img src={pic} alt='' />
                    <span>Catogary</span>
                    <h5>I started my own Bussiness</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="courses">
                    <img src={pic} alt='' />
                    <span>Catogary</span>
                    <h5>I started my own Bussiness</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
                <div className="courses">
                    <img src={pic} alt='' />
                    <span>Catogary</span>
                    <h5>I started my own Bussiness</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                </div>
            </div>
            
            </div>
            <div style={{marginBottom:'90px'}}>
            <Logos/>
            </div>
        </div>
    )
}

export default Success
