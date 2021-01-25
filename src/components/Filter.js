import React from 'react'
import { Accordion, Card } from 'react-bootstrap'
import './Filter.css'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
const Filter = () => {
    return (
        <div className="filter">

            <Accordion defaultActiveKey="0">
                <Card style={{ backgroundColor: ' #E5E5E5' }}>

                    <Accordion.Toggle as={Card.Header} style={{ backgroundColor: '#CECECE' }} activeColor="#dddddd" eventKey="0">
                        <div className="toggler">
                            Type
                            <ArrowDropDownIcon />
                        </div>

                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="filter1">
                                <input type="checkbox" />
                                <p>Courses</p>
                            </div>
                            <div className="filter1">
                                <input type="checkbox" />
                                <p>Vides</p>
                            </div>
                            <div className="filter1">
                                <input type="checkbox" />
                                <p>Learning Path</p>
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
            <Accordion defaultActiveKey="0">
                <Card style={{ backgroundColor: '#E5E5E5' }}>
                    <Accordion.Toggle as={Card.Header} style={{ backgroundColor: '   #CECECE' }} activeColor="#dddddd" eventKey="0">
                        <div className="toggler">
                            Level
                            <ArrowDropDownIcon />
                        </div>

                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <div className="filter1">
                                <input type="checkbox" />
                                <p>Beginner</p>
                            </div>
                            <div className="filter1">
                                <input type="checkbox" />
                                <p>Intermidiate</p>
                            </div>
                            <div className="filter1">
                                <input type="checkbox" />
                                <p>Advance</p>
                            </div>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>



            <Card style={{ backgroundColor: '#E5E5E5' }}>
                <Accordion.Toggle as={Card.Header} style={{ backgroundColor: '   #CECECE' }} activeColor="#dddddd" eventKey="0">
                    <div className="toggler">
                        Duration
                            <ArrowDropDownIcon />
                    </div>

                </Accordion.Toggle>
                
            </Card>
            <Card style={{ backgroundColor: '#E5E5E5' }}>
                <Accordion.Toggle as={Card.Header} style={{ backgroundColor: '   #CECECE' }} activeColor="#dddddd" eventKey="0">
                    <div className="toggler">
                        Subjects
                            <ArrowDropDownIcon />
                    </div>

                </Accordion.Toggle>
                
            </Card>




        </div >
    )
}

export default Filter

{/* <Accordion defaultActiveKey="0">
<Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
        <ArrowDropDownIcon />
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
        <Card.Body> <p className="filter__text">Type</p>
            <div className="filter1">
                <input type="checkbox" />
                <p>Courses</p>
            </div>
            <div className="filter1">
                <input type="checkbox" />
                <p>Vides</p>
            </div>
            <div className="filter1">
                <input type="checkbox" />
                <p>Learning Path</p>
            </div>
        </Card.Body>
    </Accordion.Collapse>
</Card>

</Accordion> */}