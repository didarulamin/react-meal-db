import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Meal = () => {
  const { id } = useParams();
  let history = useHistory();

  const [meal, setMeal] = useState({});
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((results) => results.json())
      .then((data) => {
        setMeal(data.meals[0]);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const backHandler = () => {
    history.push("/restaurant");
  };
  return (
    <div>
      <h1>Recipe of {meal.strMeal}</h1>
      <p>{meal.strInstructions}</p>

      <Button onClick={backHandler}>Back</Button>
    </div>
  );
};

export default Meal;
