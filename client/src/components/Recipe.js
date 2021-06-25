import React, { useState } from 'react';
import Nav from './Nav';
import { Button, CardBody, Card } from 'reactstrap';
import {CardImg,  CardTitle, CardSubtitle} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  '../App.css';
import './Recipe.css'

const Recipe = (props) => {
    const button = {
        color: "#F9A826",
        textAlign: "center",
        marginTop: "1rem",
        margin: "5px",
        background: "#847b6b"
    };

    const name = {
        color: "#847b6b",
        fontSize: "25px",
        textAlign: "center",
        marginTop: "2rem"
    }
    const slogan = {
        color: "#F9A826",
        fontSize: "15px",
        fontFamily: "Parisienne !important",
        textAlign: "center",
        marginTop: "-0.5rem"
      };

    const heading ={
        color: "#F9A826",
        fontSize: "40px",
        fontFamily: "Parisienne !important",
        textAlign: "center",
        marginTop: "1.5rem",
        marginBottom: "1.5rem",
    }

    
// NEEDED FOR ALL VERSIONS :
    const [modal, setModal] = useState(false);
    const [test, setTest] = useState();
    const toggle = () => setModal(!modal);


//   VERSION 2:
    const {
        buttonLabel,
        className
      } = props;

    const [nestedModal, setNestedModal] = useState(false);
    const [closeAll, setCloseAll] = useState(false); 
    
    const toggleNested = () => {
     setNestedModal(!nestedModal);
     setCloseAll(false);
    }

    const toggleAll = () => {
     setNestedModal(!nestedModal);
      setCloseAll(true);
    }

    return (

    <div>
        <div className="row">
        <div className="col">
        </div> 
    </div>
    <div>
    <h3 style={heading}>Welcome and check out those amazing recipes!</h3>
    </div>

    <div className="recipeTable">
        {   
        props.meals1 && 
        props.meals1.map((m) => (
        <Card>
        {/* show the image: */}
        <CardImg src={m.url} 
        />
        <CardBody>
        {/* shoow the title: */}
        <CardTitle tag="h5"  >{m.meal_name} </CardTitle>
        {/* show the additional info: */}
        <CardSubtitle tag="h6" className="mb-2 text-muted"  >{m.mealtype}, {m.meal_time}</CardSubtitle>
        
        {/* Modals: */}
        <div>

        {/* VERSION 2: */}

        <Button style={button} onClick={toggle}>{buttonLabel} Ingredients & Preparation</Button>
        <Modal isOpen={modal} index={m.ingredient1} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Ingredients</ModalHeader>
        <ModalBody index={m.ingredient1} > {m.ingredient1}
          
          <br />
          <Button color="success" onClick={toggleNested}>Preparation {console.log(m.preparation)}</Button>
          <Modal isOpen={nestedModal} index={m.preparation1} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
            <ModalHeader>Preparation</ModalHeader>
            <ModalBody index={m.preparation1} > {m.preparation1} </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
              <Button color="secondary" onClick={toggleAll}>All Done</Button>
            </ModalFooter>
          </Modal>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal> 

        {/* VERSION 3: */}

            {/* <Button style={button} onClick={toggle}>Ingredients & Preparation</Button>
            <Modal isOpen={modal} toggle={toggle} className="ingredients" >
            <ModalHeader toggle={toggle}>Ingredients</ModalHeader>
            <ModalBody > {m.ingredient1} {m.ingredient2}  </ModalBody>
            <ModalBody > {m.preparation1} {m.preparation2}  </ModalBody>
            <ModalFooter>
                <Button color="#F9A826" onClick={toggle}>Close</Button>
            </ModalFooter>
            </Modal> */}

        {/* VERSION 4: */}

            {/* <Button style={button} onClick={toggle}>Ingredients & Preparation</Button>
            <Modal isOpen={modal} toggle={toggle} className="ingredients" >
            <ModalHeader toggle={toggle}>Ingredients</ModalHeader>
            <ModalBody > {m.ingredient1} {m.ingredient2}  </ModalBody>
            <ModalBody > {m.preparation1} {m.preparation2}  </ModalBody>
            <ModalFooter>
                <Button color="#F9A826" onClick={toggle}>Close</Button>
            </ModalFooter>
            </Modal>
            <Button style={button} onClick={toggle}> Preparation</Button>
            <Modal isOpen={modal} toggle={toggle} className="preparation" >
            <ModalHeader toggle={toggle}>Preparation</ModalHeader>
            <ModalBody> {m.preparation1} {m.preparation2}</ModalBody>
            <ModalFooter>
                <Button color="#F9A826" onClick={toggle}>Close</Button>
            </ModalFooter>
            </Modal> */}

        </div>
        </CardBody>
        </Card>
        ))
    }
    </div>
    </div> 
    )
}
export default Recipe;