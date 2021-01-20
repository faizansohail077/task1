import React from 'react'
import './Mentor.css'
import team1 from '../img/team1.png'
import team2 from '../img/team2.png'
import team3 from '../img/team3.png'
import { Card, Container } from 'react-bootstrap'


const Mentors = () => {
    return (
        <div>
            <h1 className='mentors__heading'>Mentors & Instructors</h1>
            <Container className='card-group d-flex space-between ' >
                <Card style={{ width: '1rem' }}>
                    <Card.Img variant="top" src={team1} />

                </Card>
                <Card style={{ width: '13rem' }}>
                    <Card.Img variant="top" src={team2} />

                </Card>
                <Card style={{ width: '13rem' }}>
                    <Card.Img variant="top" src={team3} />

                </Card>
            </Container>
        </div>
    )
}

export default Mentors




// <div >
// <div className="mentors">
// <div >
//     <img className='mentors__img' src={team1} alt=''/>
// </div>
// <div >
//     <img className='mentors__img' src={team2} alt=''/>
// </div>
// <div >
//     <img className='mentors__img' src={team3} alt=''/>
// </div>
// </div>
// </div>