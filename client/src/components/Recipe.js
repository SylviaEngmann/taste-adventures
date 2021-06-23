import React, { useState } from 'react';
import Nav from './Nav';
import { Button, CardBody, Card } from 'reactstrap';
import {CardImg,  CardTitle, CardSubtitle} from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import  '../App.css';
import './Recipe.css'

const Recipe = (props) => {
    // lines 10-114 test data for the display purposes
const meals1 =
    [
        {
            mid: 1,
meal_name: 'Homemade Pierogi- Polish Dumplings', 
country_name: 'Poland',
mealtype: 'Dinner',
ingredient1: 'Dough: 241g Flour',
ingredient2: '1/2 tsp salt',
ingredient3: '1 large egg',
ingredient4: '113g sour cream',
ingredient5: '57g butter, room temperature', 
ingredient6: 'Filling: 227g warm mashed potatoes',
ingredient7: '113g sharp cheddar cheese, shredded',
ingredient8: 'To Finish: 57g butter, cold',
ingredient9: '156g shallot or onion, sliced',

preparation1: 'To make the dough: Mix together the flour and salt. Add the egg to the flour and combine. The dough will be quite clumpy at this stage.',
preparation2: 'Work in the sour cream and soft butter until the dough comes together in a slightly rough, slightly sticky ball.',
preparation3: 'Using just your fingertips, knead and fold the dough without adding additional flour until the dough becomes less sticky but still quite moist.',
preparation4: 'Wrap the dough well in plastic wrap and refrigerate for 30 to 60 minutes, or up to 48 hours.',
preparation5: 'To make the filling: Combine the warm mashed potato and cheese. Stir and mash until the cheese is melted and the filling is cool to the touch. Taste and adjust the seasonings with salt and pepper.',
preparation6: 'To fill the pierogi: Roll half the dough 3mm thick. Use a 50 mm round cutter to cut circles of dough. Repeat with the other half of the dough. Save the scraps; these can be snipped into small pieces and added to simmering soups.',
preparation7: 'Place 1 1/2 teaspoons of filling on each round of dough. Gently fold the dough over, forming a pocket around the filling. Pinch the edges of the pierogi to seal, then seal again with the tines of a fork.',
preparation8: 'At this point the pierogi can be frozen for up to 4 weeks, or refrigerated overnight, or cooked in a large stockpot of boiling salted water. Only cook about 10 pierogi at a time, so that they have room to float without sticking. When the pierogi float, they are done. The time will vary depending on if they are fresh or frozen.',
preparation9: 'Sauté the shallots or onion in the butter in a large skillet until the onion begins to brown. Add the drained pierogi and cook until browned and crisped. Serve hot with additional sour cream, applesauce, or other condiments.',

meal_time: '1 hr 45 min',

url: 'https://www.kingarthurbaking.com/sites/default/files/styles/featured_image_2x/public/recipe_legacy/1750-3-large.jpg?itok=MwEaAU-G',
        },
        {

mid: 2,
meal_name: 'Gulasz- polish stew',
country_name:  'Poland',
mealtype: 'Lunch',
ingredient1: '110g bacon',
ingredient2: '1kg beef chunk',
ingredient3: 'salt and pepper to taste',
ingredient4: '1 tbsp vegetable oil',
ingredient5: '1 large onion',
ingredient6: '2 medium red bell peppers',
ingredient7: '230g mushrooms',
ingredient8: '3 cloves garlic',
ingredient9: '2 tbsp tomato paste',
ingredient10: '2 tbsp smoked paprika',
ingredient11: '1/4 tsp allspice',
ingredient12: '700ml beef brooth',
ingredient13: '1 tbsp cornstarch',
ingredient14: '2 tbsp water',
ingredient15: 'sour cream for serving',

preparation1: 'Cut the speck into small cubes and fry in a large pot over medium heat. If using bacon, you can fry the slices and then crumble them after they cool. Set aside.',
preparation2: 'Cut the beef into large cubes and generously season with salt and pepper.',
preparation3: 'Add a little oil to the pot along with the fat rendered from the speck or bacon. Working in batches, brown the beef on all sides. Remove and set aside.',
preparation4: 'Roughly chop the onion, thinly slice the red bell peppers and quarter the mushrooms. Add the onion, bell peppers and mushrooms to the pot and saute for 10-12 minutes over medium heat. You can add a bit more vegetable oil if needed.',
preparation5: 'Add the minced garlic and cook an additional minute.',
preparation6: 'Return the beef and speck (or bacon) to the pot.',
preparation7: 'Stir in the tomato paste, paprika and allspice.',
preparation8: 'Add the beef broth. Bring the stew to a slight boil, reduce heat and cover. Simmer for 1.5 to 2 hours or until the meat can be easily shredded with a fork. If the stew looks like it is getting too thick, you can add additional broth or water as necessary.',
preparation9: 'Mix together the cornstarch and water in a small bowl. Stir until smooth.',
preparation10: 'Stir the cornstarch mixture into the stew until fully incorporated. Simmer for an additional 10 minutes or until the stew has thickened.',

meal_time: '2 hrs',

url: 'https://i.pinimg.com/originals/47/66/88/4766880735ac3e8214a2f3b9865bc718.jpg'
        },
        {
            mid: 3,
meal_name: 'Grochowka: Split Pea Soup with Ham Hock',
country_name: 'Poland',
mealtype: 'Lunch',
ingredient1: '500g ham hock, fresh or smoked',
ingredient2: '3-4 bay leaves, optional',
ingredient3: '4-5 allspice berries, optional ',
ingredient4: '280-300 g smoked bacon in a slab, unsliced ',
ingredient5: '300 g split peas, dried, yellow ',
ingredient6: '300 g whole peas, dried, yellow',
ingredient7: '2 medium carrots',
ingredient8: '1 parsley root',
ingredient9: '100g celery',
ingredient10: '2 medium potatoes',
ingredient11: '1 tsp marjoram',
ingredient12: 'salt and pepper to taste',

preparation1: 'Place the ham hock in a large cooking pot. Pour in enough water to cover the knuckle completely. ',
preparation2: 'Add in a few bay leaves and allspice berries. Cook on a low-medium heat, partially covering with a lid. If the water evaporates too quickly in the process, and it does not cover the meat anymore - pour in some H2O. Cook until the meat is soft and falls off the bone. The exact cooking time will depend on the size of the hock, meat-to-bone ratio, the size of the pot… so you’ll have to test its doneness empirically,just poke it with a fork. In my case, it took 2.5 hours. ',
preparation3: 'Fish the ham hock out, leave it on a plate to chill. Once the hock is cool enough to handle, remove the meat from the bones, shred, and set aside to stir back into the soup at the very end, discard the bones and any skin.',
preparation4: 'Peel the carrots, parsley and celery root, chop them into small cubes. Add the chopped veggies into the broth.',
preparation5: 'Optional- Cut the smoked skin off the bacon slab and add it into the cooking pot. ',
preparation6: 'Chop the bacon slab into cubes and fry them in a frying pan. There is no need to add any more fat for frying - enough should render from the bacon itself. When the bacon cubes turn lightly golden, add them into the cooking pot, laving the excess fat behind.',
preparation7: 'Add split peas and whole peas to the broth. Cook for 40-60 minutes on medium-low, stirring occasionally. If you feel like the soup gets too thick, add some water or chicken broth.',
preparation8: 'When the time is up, add the potatoes: peel them, chop into cubes and drop into the soup. ',
preparation9: 'Season with marjoram, salt and pepper. Check the flavour, add more seasoning if needed. Cook for another 20 minutes, until potatoes turn soft.',
preparation10: 'We are nearly done. Split peas turned mushy, thickening the soup. Whole peas softened, but remained whole. ',
preparation11: 'Retrieve the bacon skin from the pot, discard it. Add in shredded ham hock meat and cook the soup for another 3-5 minutes to warm the meat up.',
preparation12: 'Serve hot with a slice of rye bread.',

meal_time: '4hrs 20min',

url:  'https://www.polonist.com/wp-content/uploads/2021/02/Grochowka-1-1600x2400-1.jpg', 
        }
    ]

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
        background: "#847b6b"
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
                <h1 style={name}>TASTE ADVENTURE</h1>
                <p style={slogan}>Foodies around the world</p>
            </div>
        <div className="col">
            <Nav />
        </div> 
    </div>
    <div>
    <h2 style={heading}>Welcome and check out those amazing recipes!</h2>
    </div>

    <div className="recipeTable">
        {   
        meals1 && 
        meals1.map((m) => (
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