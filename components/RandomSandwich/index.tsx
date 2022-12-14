
import { breads, meats, veganMeats, vegetables, cheeses, veganCheeses, sauces, spices } from "./data";

import { useState } from "react";
import styles from "./RandomSandwich.module.css";

export default function RandomSandwich() {

  const [mainChoice, setMainChoice] = useState("");
  const [meatsCount, setMeatsCount] = useState<number>(1);
  const [meatOption, setMeatOption] = useState<string>("1");

  const [vegetableChoice, setVegetableChoice] = useState("");
  const [vegetableCount, setVegetableCount] = useState<number>(2);

  const [breadChoice, setBreadChoice] = useState("");

  const [cheeseChoice, setCheeseChoice] = useState("");
  const [cheeseCount, setCheeseCount] = useState<number>(1);
  const [cheeseOption, setCheeseOption] = useState<string>("1");

  const [sauceChoice, setSauceChoice] = useState("");
  const [sauceCount, setSauceCount] = useState<number>(2);

  const [spiceChoice, setSpiceChoice] = useState("");
  const [spiceCount, setSpiceCount] = useState<number>(2);

  const [showResults, setShowResults] = useState(false);

  const radioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMeatOption(event.target.value);
  };

  const cheeseRadioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheeseOption(event.target.value);
  };

  function generateBread(){
    var bread : string = breads[Math.floor(Math.random() * breads.length)];
    setBreadChoice(bread);
  }

  function generateProtein(meatsCount : number, meatOption: string){
    var meat : string = "";
    var newMeat : string = ""; 
    var allMeats : string[] = [];

    for(var i = 0; i < meatsCount; i++){

      if(meatOption === "1"){
        var random = Math.floor(Math.random() * 2);
        if(random == 0){
          newMeat = meats[Math.floor(Math.random() * meats.length)];
        } else {
          newMeat = veganMeats[Math.floor(Math.random() * veganMeats.length)];
        }
      } else if(meatOption === "2"){
        newMeat = veganMeats[Math.floor(Math.random() * veganMeats.length)];
      } else{
        newMeat = meats[Math.floor(Math.random() * meats.length)];
      }

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
    setVegetableChoice(vegetable);
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

  function generateSauces(sauceCount: number){
    var sauce : string = "";
    var allSauces : string[] = [];

    for(var i = 0; i < sauceCount; i++){

      var newSauce = sauces[Math.floor(Math.random() * sauces.length)];

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

  function generateSpices(spiceCount : number){
    var spice : string = "";
    var allSpices : string[] = [];

    for(var i = 0; i < spiceCount; i++){

      var newSpice = spices[Math.floor(Math.random() * spices.length)];

      if(allSpices.includes(newSpice)){
        i--;
      } else {
        if(i == 0){
          spice = newSpice;
        } else if((spiceCount - i) == 1){
          spice = spice + " & " + newSpice;
        } else{
          spice = `${spice}, ${newSpice}`;
        }
        allSpices.push(newSpice);
      }
    }
    setSpiceChoice(spice);
  }

  const randomSandwich = (meatsCount: number, meatOption: string , vegetableCount: number, cheeseCount: number, cheeseOption: string, sauceCount: number, spiceCount : number) => {

    generateBread();
    generateProtein(meatsCount, meatOption);
    generateVegetables(vegetableCount);
    generateCheeses(cheeseCount, cheeseOption);
    generateSauces(sauceCount);
    generateSpices(spiceCount);

    setShowResults(true);

  };
  
	function incrementMeats() {
        if(meatsCount < 5){
            setMeatsCount(meatsCount + 1);
        }
	}

	function decrementMeats() {
        if(meatsCount >= 1){
            setMeatsCount(meatsCount - 1);
        }
	}

	function incrementVegetables() {
        if(vegetableCount < 5){
            setVegetableCount(vegetableCount + 1);
        }
	}

	function decrementVegetables() {
        if(vegetableCount >= 1){
            setVegetableCount(vegetableCount - 1);
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

    function incrementSauces() {
        if(sauceCount < 5){
            setSauceCount(sauceCount + 1);
        }
	}

	function decrementSauces() {
        if(sauceCount >= 1){
            setSauceCount(sauceCount - 1);
        }
	}

    function incrementSpices() {
        if(spiceCount < 5){
            setSpiceCount(spiceCount + 1);
        }
	}

	function decrementSpices() {
        if(spiceCount >= 1){
            setSpiceCount(spiceCount - 1);
        }
	}

  return (
    <div className={styles.containerClass}>
		  <div className={styles.optionsClass}>
        <h1 className={styles.mainTitle}>Ingredient Options</h1>
        <div className={styles.optionTitle}>
          <h2>Proteins</h2>
        </div>
        <div className={styles.proteinClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementMeats}>-</button>
            <p>{meatsCount}</p>
            <button className={styles.button} onClick={incrementMeats}>+</button>
          </div>
          <div className={styles.proteinChoice}>
            <fieldset>
              <legend>Protein choice</legend>
              <p>
                <input
                  type="radio"
                  name="meatoptionchoice"
                  value="1"
                  id="all"
                  checked
                  onChange={radioHandler}
                />
                <label htmlFor="all">All options</label>
              </p>
              <p>
                <input
                  type="radio"
                  name="meatoptionchoice"
                  value="2"
                  id="onlyvegan"
                  onChange={radioHandler}
                />
                <label htmlFor="onlyvegan">Only vegan options</label>
              </p>
              <p>
                <input
                  type="radio"
                  name="meatoptionchoice"
                  value="3"
                  id="onlymeat"
                  onChange={radioHandler}
                />
                <label htmlFor="onlymeat">Only non vegan options</label>
              </p>
            </fieldset>
          </div>
        </div>
        <div className={styles.optionTitle}>
          <h2>Vegetables</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.innerVegetableClass}>
            <button className={styles.button} onClick={decrementVegetables}>-</button>
            <p>{vegetableCount}</p>
            <button className={styles.button} onClick={incrementVegetables}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
          <h2>Cheese</h2>
        </div>
        <div className={styles.proteinClass}>
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
                  checked
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
         <h2>Condiments</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.innerVegetableClass}>
            <button className={styles.button} onClick={decrementSauces}>-</button>
            <p>{sauceCount}</p>
            <button className={styles.button} onClick={incrementSauces}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
          <h2>Herbs & Spices</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.innerVegetableClass}>
            <button className={styles.button} onClick={decrementSpices}>-</button>
            <p>{spiceCount}</p>
            <button className={styles.button} onClick={incrementSpices}>+</button>
          </div>
        </div>
        <div className={styles.generateButtonClass}>
          <button className={styles.goButton}
            onClick={() => randomSandwich(meatsCount, meatOption, vegetableCount, cheeseCount, cheeseOption, sauceCount, spiceCount)}
            >
              Generate a random sandwich
          </button>
        </div>
		  </div>
      <div className={styles.resultsClass}>
        <h1 className={styles.mainTitle}>Results</h1>
        <h2 className={styles.resultsHeader}>Bread</h2>
        <p className={styles.resultsText}>
          {breadChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateBread()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Protein</h2>
        <p className={styles.resultsText}>
          {mainChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateProtein(meatsCount, meatOption)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Vegetables</h2>
        <p className={styles.resultsText}>
          {vegetableChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateVegetables(vegetableCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Cheese</h2>
        <p className={styles.resultsText}>
          {cheeseChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateCheeses(cheeseCount, cheeseOption)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Condiments</h2>
        <p className={styles.resultsText}>
          {sauceChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateSauces(sauceCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Herbs & Spices</h2>
        <p className={styles.resultsText}>
          {spiceChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateSpices(spiceCount)}>&#8634;</button> : null }
        </p>
      </div>
    </div>
  );
}