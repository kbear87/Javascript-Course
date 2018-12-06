import React from 'react';

import classes from './burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  const keys = Object.keys(props.ingredients);
  const arrayOfArrays = keys.map(ingredientKey => {
     const ret = [...Array(props.ingredients[ingredientKey])].map((_,index) => {
       return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
     });

     return ret;
   });

  let transformedIngredients = arrayOfArrays.reduce((previous, burgerIngredients) => {
     const newArray = previous.concat(burgerIngredients);
     return newArray;
   }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
       <BurgerIngredient type="bread-top"/>
       {transformedIngredients}
       <BurgerIngredient type="bread-bottom"/>
    </div>
  );
};

export default burger;
