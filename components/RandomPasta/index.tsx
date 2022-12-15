
import { shapes, sauces, cheeses, veganCheeses, toppings } from "./data";

import { useState } from "react";
import styles from "./RandomPasta.module.css";

export default function RandomPasta() {

  const [sauceChoice, setSauceChoice] = useState("");
  const [sauceCount, setSauceCount] = useState<number>(1);

  const [cheeseChoice, setCheeseChoice] = useState("");
  const [cheeseCount, setCheeseCount] = useState<number>(1);
  const [cheeseOption, setCheeseOption] = useState<string>("1");

  const [shapeChoice, setShapeChoice] = useState("");

  const [toppingsChoice, setToppingsChoice] = useState("");
  const [toppingsCount, setToppingsCount] = useState<number>(2);

  const [showResults, setShowResults] = useState(false);

  const cheeseRadioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheeseOption(event.target.value);
  };

  function generateShape(){
    var choseBase : string = shapes[Math.floor(Math.random() * shapes.length)];
    setShapeChoice(choseBase);
  }

  function generateSauce(sauceCount: number){
    var sauce : string = "";
    var newSauce : string = ""; 
    var allSauces : string[] = [];

    for(var i = 0; i < sauceCount; i++){
      
      newSauce = sauces[Math.floor(Math.random() * sauces.length)];

      if(allSauces.includes(newSauce)){
        i--;
      } else {
        if(i == 0){
          sauce = newSauce;
        } else if((sauceCount - i) == 1){
          sauce = sauce + " & " + newSauce;
        } else{
          sauce = `${sauce}, ${newSauce}`;
        }
        allSauces.push(newSauce);
      }
    }
    
    setSauceChoice(sauce);
  }

  function generateCheeses(cheeseCount: number, cheeseOption: string){
    var cheese : string = "";
    var newCheese : string = ""; 
    var allCheeses : string[] = [];

    for(var i = 0; i < cheeseCount; i++){

      if(cheeseOption === "1"){
        var random = Math.floor(Math.random() * 2);
        if(random == 0){
          newCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
        } else {
          newCheese = veganCheeses[Math.floor(Math.random() * veganCheeses.length)];
        }

      } else if(cheeseOption === "2"){
        newCheese = veganCheeses[Math.floor(Math.random() * veganCheeses.length)];
      } else{
        newCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
      }

      if(allCheeses.includes(newCheese)){
        i--;
      } else {
        if(i == 0){
          cheese = newCheese;
        } else if((cheeseCount - i) == 1){
          cheese = cheese + " & " + newCheese;
        } else{
          cheese = `${cheese}, ${newCheese}`;
        }
        allCheeses.push(newCheese);
      }
    }
    setCheeseChoice(cheese);
  }

  function generateToppings(toppingsCount: number){
    var topping : string = "";
    var allToppings : string[] = [];

    for(var i = 0; i < toppingsCount; i++){

      var newTopping = toppings[Math.floor(Math.random() * toppings.length)];

      if(allToppings.includes(newTopping)){
        i--;
      } else {
        if(i == 0){
          topping = newTopping;
        } else if((toppingsCount - i) == 1){
          topping = topping + " & " + newTopping;
        } else{
          topping = `${topping}, ${newTopping}`;
        }
        allToppings.push(newTopping);
      }
    }
    setToppingsChoice(topping);
  }

  const randomPasta = (sauceCount: number, cheeseCount: number, cheeseOption: string, toppingsCount: number) => {

    generateShape();
    generateSauce(sauceCount);
    generateCheeses(cheeseCount, cheeseChoice);
    generateToppings(toppingsCount);

    setShowResults(true);
  };
  
	function incrementSauces() {
    if(sauceCount < 2){
      setSauceCount(sauceCount + 1);
    }
	}

	function decrementSauces() {
    if(sauceCount >= 1){
      setSauceCount(sauceCount - 1);
    }
	}

  function incrementCheeses() {
    if(cheeseCount < 5){
      setCheeseCount(cheeseCount + 1);
    }
	}

	function decrementCheeses() {
    if(cheeseCount >= 1){
      setCheeseCount(cheeseCount - 1);
    }
	}

  function incrementToppings() {
    if(toppingsCount < 5){
      setToppingsCount(toppingsCount + 1);
    }
	}

	function decrementToppings() {
    if(toppingsCount >= 1){
      setToppingsCount(toppingsCount - 1);
    }
	}

  return (
    <div className={styles.containerClass}>
		  <div className={styles.optionsClass}>
        <h1 className={styles.mainTitle}>Ingredient Options</h1>
        <div className={styles.optionTitle}>
          <h2>Sauce</h2>
        </div>
        <div className={styles.proteinClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementSauces}>-</button>
            <p>{sauceCount}</p>
            <button className={styles.button} onClick={incrementSauces}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
         <h2>Cheeses</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementCheeses}>-</button>
            <p>{cheeseCount}</p>
            <button className={styles.button} onClick={incrementCheeses}>+</button>
          </div>
          <div className={styles.proteinChoice}>
            <fieldset>
              <legend>Cheese choice</legend>
              <p>
                <input
                  type="radio"
                  name="cheeseoptionchoice"
                  value="1"
                  id="allcheeses"
                  defaultChecked
                  onChange={cheeseRadioHandler}
                />
                <label htmlFor="allcheeses">All options</label>
              </p>
              <p>
                <input
                  type="radio"
                  name="cheeseoptionchoice"
                  value="2"
                  id="onlyvegan"
                  onChange={cheeseRadioHandler}
                />
                <label htmlFor="onlyvegan">Only vegan options</label>
              </p>
              <p>
                <input
                  type="radio"
                  name="cheeseoptionchoice"
                  value="3"
                  id="onlynonvegan"
                  onChange={cheeseRadioHandler}
                />
                <label htmlFor="onlynonvegan">Only non vegan options</label>
              </p>
            </fieldset>
          </div>
        </div>
        <div className={styles.optionTitle}>
          <h2>Toppings</h2>
        </div>
        <div className={styles.proteinClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementToppings}>-</button>
            <p>{toppingsCount}</p>
            <button className={styles.button} onClick={incrementToppings}>+</button>
          </div>
        </div>
        <div className={styles.generateButtonClass}>
          <button className={styles.goButton}
            onClick={() => randomPasta(sauceCount, cheeseCount, cheeseOption, toppingsCount)}
            >
              Generate a random pasta
          </button>
          </div>
		  </div>
      <div className={styles.resultsClass}>
        <h1 className={styles.mainTitle}>Results</h1>
        <h2 className={styles.resultsHeader}>Pasta Shape</h2>
        <p className={styles.resultsText}>
          {shapeChoice}  { showResults ? <button className={styles.regenerateButton} onClick={() => generateShape()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Sauce</h2>
        <p className={styles.resultsText}>
          {sauceChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateSauce(sauceCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Cheeses</h2>
        <p className={styles.resultsText}>
          {cheeseChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateCheeses(cheeseCount, cheeseChoice)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Toppings</h2>
        <p className={styles.resultsText}>
          {toppingsChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateToppings(toppingsCount)}>&#8634;</button> : null }
        </p>
      </div>
    </div>
  );
}