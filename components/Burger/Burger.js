import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
    let temp = [];
    const x = props.ingredients[igKey];
    for(var i = 0; i < x; i++){
      temp.push(<BurgerIngredient key={igKey + i} type={igKey}/>);
    }
    return temp;
  }).reduce((arr,el) => {
    return arr.concat(el);
  },[]);
  if(transformedIngredients.length === 0){
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
