
import { meats, base, cheeses, veganCheeses, vegetables, toppings } from "./data";

import { useState } from "react";
import styles from "./RandomPizza.module.css";

export default function RandomPizza() {

  const [mainChoice, setMainChoice] = useState("");
  const [meatsCount, setMeatsCount] = useState<number>(1);

  const [vegetablesChoice, setVegetablesChoice] = useState("");
  const [vegetablesCount, setVegetablesCount] = useState<number>(2);

  const [cheeseChoice, setCheeseChoice] = useState("");
  const [cheeseCount, setCheeseCount] = useState<number>(1);
  const [cheeseOption, setCheeseOption] = useState<string>("1");

  const [baseChoice, setBaseChoice] = useState("");

  const [toppingsChoice, setToppingsChoice] = useState("");
  const [toppingsCount, setToppingsCount] = useState<number>(2);

  const [showResults, setShowResults] = useState(false);

  const cheeseRadioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheeseOption(event.target.value);
  };

  function generateBase(){
    var choseBase : string = base[Math.floor(Math.random() * base.length)];
    setBaseChoice(choseBase);
  }

  function generateMeat(meatsCount: number){
    var meat : string = "";
    var newMeat : string = ""; 
    var allMeats : string[] = [];

    for(var i = 0; i < meatsCount; i++){
      
      newMeat = meats[Math.floor(Math.random() * meats.length)];

      if(allMeats.includes(newMeat)){
        i--;
      } else {
        if(i == 0){
          meat = newMeat;
        } else if((meatsCount - i) == 1){
          meat = meat + " & " + newMeat;
        } else{
          meat = `${meat}, ${newMeat}`;
        }
        allMeats.push(newMeat);
      }
    }
    
    setMainChoice(meat);
  }

  function generateVegetables(vegetableCount: number){
    var vegetable : string = "";
    var allVegetables : string[] = [];

    for(var i = 0; i < vegetableCount; i++){

      var newVegetable = vegetables[Math.floor(Math.random() * vegetables.length)];

      if(allVegetables.includes(newVegetable)){
        i--;
      } else {
        if(i == 0){
          vegetable = newVegetable;
        } else if((vegetableCount - i) == 1){
          vegetable = vegetable + " & " + newVegetable;
        } else{
          vegetable = `${vegetable}, ${newVegetable}`;
        }
        allVegetables.push(newVegetable);
      }
    }
    setVegetablesChoice(vegetable);
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

  const randomPizza = (meatsCount: number, vegetableCount: number, cheeseCount: number, cheeseOption: string, toppingsCount: number) => {

    generateBase();
    generateMeat(meatsCount);
    generateVegetables(vegetableCount);
    generateCheeses(cheeseCount, cheeseChoice);
    generateToppings(toppingsCount);

    setShowResults(true);
  };
  
	function incrementMeats() {
    if(meatsCount < 2){
      setMeatsCount(meatsCount + 1);
    }
	}

	function decrementMeats() {
    if(meatsCount >= 1){
      setMeatsCount(meatsCount - 1);
    }
	}

	function incrementVegetables() {
    if(vegetablesCount < 5){
      setVegetablesCount(vegetablesCount + 1);
    }
	}

	function decrementVegetables() {
    if(vegetablesCount >= 1){
      setVegetablesCount(vegetablesCount - 1);
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
          <h2>Meats</h2>
        </div>
        <div className={styles.proteinClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementMeats}>-</button>
            <p>{meatsCount}</p>
            <button className={styles.button} onClick={incrementMeats}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
          <h2>Vegetables</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.innerVegetableClass}>
            <button className={styles.button} onClick={decrementVegetables}>-</button>
            <p>{vegetablesCount}</p>
            <button className={styles.button} onClick={incrementVegetables}>+</button>
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
        <div className={styles.vegetableClass}>
          <div className={styles.innerVegetableClass}>
            <button className={styles.button} onClick={decrementToppings}>-</button>
            <p>{toppingsCount}</p>
            <button className={styles.button} onClick={incrementToppings}>+</button>
          </div>
        </div>
        <div className={styles.generateButtonClass}>
          <button className={styles.goButton}
            onClick={() => randomPizza(meatsCount, vegetablesCount, cheeseCount, cheeseOption, toppingsCount)}
            >
              Generate a random pizza
          </button>
        </div>
		  </div>
      <div className={styles.resultsClass}>
        <h1 className={styles.mainTitle}>Results</h1>
        <h2 className={styles.resultsHeader}>Base</h2>
        <p className={styles.resultsText}>
          {baseChoice}  { showResults ? <button className={styles.regenerateButton} onClick={() => generateBase()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Meats</h2>
        <p className={styles.resultsText}>
          {mainChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateMeat(meatsCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Vegetables</h2>
        <p className={styles.resultsText}>
          {vegetablesChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateVegetables(vegetablesCount)}>&#8634;</button> : null }
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