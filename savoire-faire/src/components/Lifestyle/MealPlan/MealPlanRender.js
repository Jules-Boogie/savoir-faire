import React from "react"
import MealPlanCard from "../MealPlan/MealPlanCard"
import { Row, Container, Col} from "react-bootstrap"
import { CardGroup, Button, Card } from "react-bootstrap"
import BreakFastCard from './BreakfastCard'
import LunchCard from "./LunchCard"
import DinnerCard from "./DinnerCard"


function mealPlanRender(props){
return (
<Container>
    
<Row>
monday
  {props.Monday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceURL}
    
    />
  </CardGroup>
  ))}
  <div>
      
  <h4> Nutrition</h4>
  <p> Calories:{props.calories} </p>
  <p> Protein: {props.protein} </p>
  <p> Fat: {props.fat} </p>
  <p> Carbohydrates: {props.carbohydrates} </p>
</div>





</Row>

<Row>

tuesday
{props.Tuesday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceURL}
    
    
    />
 
  </CardGroup>


))}
<div>
<h4> Nutrition</h4>
  <p> Calories:{props.tcalories} </p>
  <p> Protein: {props.tprotein} </p>
  <p> Fat: {props.tfat} </p>
  <p> Carbohydrates: {props.tcarbohydrates} </p>
  </div>

</Row>

<Row>

wednesday
{props.Wednesday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceURL}
    
    
    />
 
  </CardGroup>


))}
<div>
 <h4> Nutrition</h4>
  <p> Calories:{props.wcalories} </p>
  <p> Protein: {props.wprotein} </p>
  <p> Fat: {props.wfat} </p>
  <p> Carbohydrates: {props.wcarbohydrates} </p>
  </div>
</Row>



<Row>

thursday
{props.Thursday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceURL}
    
    
    />
 
  </CardGroup>


))}
<div>
 <h4> Nutrition</h4>
  <p> Calories:{props.thcalories} </p>
  <p> Protein: {props.thprotein} </p>
  <p> Fat: {props.thfat} </p>
  <p> Carbohydrates: {props.thcarbohydrates} </p>
  </div>
</Row>

<Row>

    Friday
    {props.Friday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceURL}
    
    
    />
 
  </CardGroup>


))}
<div>
<h4> Nutrition</h4>
  <p> Calories:{props.fcalories} </p>
  <p> Protein: {props.fprotein} </p>
  <p> Fat: {props.ffat} </p>
  <p> Carbohydrates: {props.fcarbohydrates} </p>


</div>
</Row>
<Row>

    Saturday
    {props.Saturday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceURL}
    
    
    />
 
  </CardGroup>


))}
<div>
 <h4> Nutrition</h4>
  <p> Calories:{props.scalories} </p>
  <p> Protein: {props.sprotein} </p>
  <p> Fat: {props.sfat} </p>
  <p> Carbohydrates: {props.scarbohydrates} </p>
  </div>
</Row>

<Row>

    Sunday
    {props.Sunday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceURL}
    
    
    />
 
  </CardGroup>


))}
<div>
 <h4> Nutrition</h4>
  <p> Calories:{props.sscalories} </p>
  <p> Protein: {props.ssprotein} </p>
  <p> Fat: {props.ssfat} </p>
  <p> Carbohydrates: {props.sscarbohydrates} </p>
  </div>
</Row> 


</Container>







)




}

export default mealPlanRender;