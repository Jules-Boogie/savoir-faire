import React, { Component } from "react"
import MealPlanRender from "../components/Lifestyle/MealPlan/MealPlanRender"
import MealPlanForm from "../components/Lifestyle/MealPlan/MealPlanForm"
import API from "../Utils/External/API_external"


class MealPlanPage extends Component {

    state = {
        MondayMeals: [],
        MondayNutrients: {},
        TuesdayNutrients: {},
        WednesdayNutrients: {},
        ThursdayNutrients: {},
        FridayNutrients: {},
        SaturdayNutrients: {},
        SundayNutrients: {},
        TuesdayMeals: [],
        WednesdayMeals: [],
        ThursdayMeals: [],
        FridayMeals: [],
        SaturdayMeals: [],
        SundayMeals: [],
        calories: 1700,
        exclude: [""],
        diet: ""

    }
    componentDidMount() {
        this.createMealPlan(this.state.calories, this.state.exclude, this.state.diet)
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            ...this.state,
            [name]: value
        });
    }

    createMealPlan = (cal, exclude, diet) => {
        API.renderMeal(cal, exclude, diet)

            .then(res =>
                this.setState({
                    MondayMeals: res.data.week.monday.meals,
                    TuesdayMeals: res.data.week.tuesday.meals,
                    WednesdayMeals: res.data.week.wednesday.meals,
                    ThursdayMeals: res.data.week.thursday.meals,
                    FridayMeals: res.data.week.friday.meals,
                    SaturdayMeals: res.data.week.saturday.meals,
                    SundayMeals: res.data.week.sunday.meals,
                    MondayNutrients: res.data.week.monday.nutrients,
                    TuesdayNutrients: res.data.week.tuesday.nutrients,
                    WednesdayNutrients: res.data.week.wednesday.nutrients,
                    ThursdayNutrients: res.data.week.thursday.nutrients,
                    FridayNutrients: res.data.week.friday.nutrients,
                    SaturdayNutrients: res.data.week.saturday.nutrients,
                    SundayNutrients: res.data.week.sunday.nutrients,

                }))

    }

    handleSubmitBtn = (event) => {
        event.preventDefault();
        this.createMealPlan(this.state.calories, this.state.exclude, this.state.diet)
    }
    render() {

        return (
            <div>
                <MealPlanForm
                    handleSubmit={this.handleSubmitBtn}
                    handleChange={this.handleInputChange}
                    rangeValue={this.state.calories}
                    inputValue={this.state.exclude}
                    valueSelect={this.state.diet}

                />
                <MealPlanRender
                    Monday={this.state.MondayMeals}
                    Tuesday={this.state.TuesdayMeals}
                    Wednesday={this.state.WednesdayMeals}
                    Thursday={this.state.ThursdayMeals}
                    Friday={this.state.FridayMeals}
                    Saturday={this.state.SaturdayMeals}
                    Sunday={this.state.SundayMeals}
                    calories={this.state.MondayNutrients.calories}
                    protein={this.state.MondayNutrients.protein}
                    fat={this.state.MondayNutrients.fat}
                    carbohydrates={this.state.MondayNutrients.carbohydrates}
                    tcalories={this.state.TuesdayNutrients.calories}
                    tprotein={this.state.TuesdayNutrients.protein}
                    tfat={this.state.TuesdayNutrients.fat}
                    tcarbohydrates={this.state.TuesdayNutrients.carbohydrates}
                    wcalories={this.state.WednesdayNutrients.calories}
                    wprotein={this.state.WednesdayNutrients.protein}
                    wfat={this.state.WednesdayNutrients.fat}
                    wcarbohydrates={this.state.WednesdayNutrients.carbohydrates}
                    thcalories={this.state.ThursdayNutrients.calories}
                    thprotein={this.state.ThursdayNutrients.protein}
                    thfat={this.state.ThursdayNutrients.fat}
                    thcarbohydrates={this.state.ThursdayNutrients.carbohydrates}
                    fcalories={this.state.FridayNutrients.calories}
                    fprotein={this.state.FridayNutrients.protein}
                    ffat={this.state.FridayNutrients.fat}
                    fcarbohydrates={this.state.FridayNutrients.carbohydrates}
                    scalories={this.state.SaturdayNutrients.calories}
                    sprotein={this.state.SaturdayNutrients.protein}
                    sfat={this.state.SaturdayNutrients.fat}
                    scarbohydrates={this.state.SaturdayNutrients.carbohydrates}
                    sscalories={this.state.SundayNutrients.calories}
                    ssprotein={this.state.SundayNutrients.protein}
                    ssfat={this.state.SundayNutrients.fat}
                    sscarbohydrates={this.state.SundayNutrients.carbohydrates}
                />



            </div>

        )


    }


}
export default MealPlanPage;