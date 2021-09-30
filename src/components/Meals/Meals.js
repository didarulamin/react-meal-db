import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Meals = () => {
  const [searchText, setSearchText] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((results) => results.json())
      .then((data) => {
        if (data.meals == null) {
          return;
        }
        setMeals(data.meals);
      })
      .catch((err) => console.log(err));
  }, [searchText]);

  const searchHandler = (event) => {
    setSearchText(event.target.value);
  };
  if (meals == null) return;
  return (
    <div className="container">
      <input
        className="w-75 p-3 m-3 rounded-3 pill"
        onChange={searchHandler}
        type="text"
        placeholder="Search Meal"
      />
      <div className=" row row justify-contents-center align-items-center  ">
        {meals.map((me) => (
          <div className="col-4 g-3">
            <Card>
              <Card.Img variant="top" src={me.strMealThumb} />
              <Card.Body>
                <Card.Title>{me.strMeal}</Card.Title>
                <Card.Text>{me.strInstructions.slice(0, 100)}</Card.Text>
                <Link to={`/meal/${me.idMeal}`}>
                  <Button variant="primary">Recipe</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
