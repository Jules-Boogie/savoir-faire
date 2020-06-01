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
<h4 className="text-center"> Monday </h4>
<div className="container card h-100">
  <div className="row">
  {props.Monday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceUrl}
    
    />
  </CardGroup>
  ))}

   <ul> 
  <h4> Nutrition</h4>
  <p> Calories:{props.calories} </p>
  <p> Protein: {props.protein} </p>
  <p> Fat: {props.fat} </p>
  <p> Carbohydrates: {props.carbohydrates} </p>
  </ul>
  </div>
  </div>




</Row>

<Row>

<h4>Tuesday </h4>
<div className="container card h-100">
  <div className="row">
{props.Tuesday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceUrl}
    
    
    />
 
  </CardGroup>


))}
<ul>
<h4> Nutrition</h4>
  <p> Calories:{props.tcalories} </p>
  <p> Protein: {props.tprotein} </p>
  <p> Fat: {props.tfat} </p>
  <p> Carbohydrates: {props.tcarbohydrates} </p>
  </ul>
  </div>
  </div>

</Row>

<Row>

<h4 className="text-center"> Wednesday </h4>
<div className="container card h-100">
  <div className="row">
{props.Wednesday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceUrl}
    
    
    />
 
  </CardGroup>


))}
<ul>
 <h4> Nutrition</h4>
  <p> Calories:{props.wcalories} </p>
  <p> Protein: {props.wprotein} </p>
  <p> Fat: {props.wfat} </p>
  <p> Carbohydrates: {props.wcarbohydrates} </p>
  </ul>
  </div>
  </div>
</Row>



<Row>

<h4 className="text-center"> Thursday </h4>
<div className="container card h-100">
  <div className="row">
{props.Thursday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceUrl}
    
    
    />
 
  </CardGroup>


))}
<ul>
 <h4> Nutrition</h4>
  <p> Calories:{props.thcalories} </p>
  <p> Protein: {props.thprotein} </p>
  <p> Fat: {props.thfat} </p>
  <p> Carbohydrates: {props.thcarbohydrates} </p>
  </ul>
  </div>
  </div>
</Row>

<Row>
<h4 className="text-center"> Friday </h4>
<div className="container card h-100">
  <div className="row">
    {props.Friday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceUrl}
    
    
    />
 
  </CardGroup>


))}
<ul>
<h4> Nutrition</h4>
  <p> Calories:{props.fcalories} </p>
  <p> Protein: {props.fprotein} </p>
  <p> Fat: {props.ffat} </p>
  <p> Carbohydrates: {props.fcarbohydrates} </p>
  </ul>
  </div>
</div>
</Row>
<Row>

<h4 className="text-center"> Saturday </h4>
<div className="container card h-100">
  <div className="row">
    {props.Saturday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceUrl}
    
    
    />
 
  </CardGroup>


))}
<ul>
 <h4> Nutrition</h4>
  <p> Calories:{props.scalories} </p>
  <p> Protein: {props.sprotein} </p>
  <p> Fat: {props.sfat} </p>
  <p> Carbohydrates: {props.scarbohydrates} </p>
  </ul>
  </div>
  </div>
</Row>

<Row>

<h4 className="text-center"> Sunday </h4>
<div className="container card h-100">
  <div className="row">
    {props.Sunday.map(meal => (
    <CardGroup>
    <BreakFastCard 
    title={meal.title}
    imageID={meal.id}
    imageType={meal.imageType}
    cooktime={meal.readyInMinutes}
    serving={meal.servings}
    sourceURL={meal.sourceUrl}
    
    
    />
 
  </CardGroup>


))}
<ul>
 <h4> Nutrition</h4>
  <p> Calories:{props.sscalories} </p>
  <p> Protein: {props.ssprotein} </p>
  <p> Fat: {props.ssfat} </p>
  <p> Carbohydrates: {props.sscarbohydrates} </p>
  </ul>
  </div>
  </div>
</Row> 


</Container>







)




}

export default mealPlanRender;