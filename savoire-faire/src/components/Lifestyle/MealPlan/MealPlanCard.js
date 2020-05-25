import React from "react"
import { CardGroup, Button, Card } from "react-bootstrap"
import BreakFastCard from './BreakfastCard'
import LunchCard from "./LunchCard"
import DinnerCard from "./DinnerCard"


function mealPlanCard(props){
return(


<CardGroup>
  <BreakFastCard/>
  <LunchCard/>
  <DinnerCard/>
</CardGroup>

)










}

export default mealPlanCard;
