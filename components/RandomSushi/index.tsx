
import { meats, shape, condiments, sauces } from "./data";

import { useState } from "react";
import styles from "./RandomSushi.module.css";

export default function RandomSushi() {

  const [mainChoice, setMainChoice] = useState("");
  const [meatsCount, setMeatsCount] = useState<number>(1);

  const [condimentsChoice, setCondimentsChoice] = useState("");
  const [condimentsCount, setCondimentsCount] = useState<number>(2);

  const [shapeChoice, setShapeChoice] = useState("");

  const [sauceChoice, setSauceChoice] = useState("");
  const [sauceCount, setSauceCount] = useState<number>(2);

  const [showResults, setShowResults] = useState(false);

  function generateShape(){
    var chosenShape : string = shape[Math.floor(Math.random() * shape.length)];
    setShapeChoice(chosenShape);
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

  function generateCondiment(condimentsCount: number){
    var condiment : string = "";
    var allCondiments : string[] = [];

    for(var i = 0; i < condimentsCount; i++){

      var newCondiment = condiments[Math.floor(Math.random() * condiments.length)];

      if(allCondiments.includes(newCondiment)){
        i--;
      } else {
        if(i == 0){
          condiment = newCondiment;
        } else if((condimentsCount - i) == 1){
          condiment = condiment + " & " + newCondiment;
        } else{
          condiment = `${condiment}, ${newCondiment}`;
        }
        allCondiments.push(newCondiment);
      }
    }
    setCondimentsChoice(condiment);
  }

  function generateSauce(sauceCount: number){
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

  const randomSushi = (meatsCount: number, condimentsCount: number, sauceCount: number) => {

    generateShape();
    generateMeat(meatsCount);
    generateCondiment(condimentsCount);
    generateSauce(sauceCount);

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

	function incrementCondiments() {
    if(condimentsCount < 5){
      setCondimentsCount(condimentsCount + 1);
    }
	}

	function decrementCondiments() {
    if(condimentsCount >= 1){
      setCondimentsCount(condimentsCount - 1);
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
        </div>
        <div className={styles.optionTitle}>
          <h2>Condiments</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.innerVegetableClass}>
            <button className={styles.button} onClick={decrementCondiments}>-</button>
            <p>{condimentsCount}</p>
            <button className={styles.button} onClick={incrementCondiments}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
         <h2>Sauces</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.innerVegetableClass}>
            <button className={styles.button} onClick={decrementSauces}>-</button>
            <p>{sauceCount}</p>
            <button className={styles.button} onClick={incrementSauces}>+</button>
          </div>
        </div>
        <div className={styles.generateButtonClass}>
          <button className={styles.goButton}
            onClick={() => randomSushi(meatsCount, condimentsCount, sauceCount)}
            >
              Generate a random sushi
          </button>
        </div>
		  </div>
      <div className={styles.resultsClass}>
        <h1 className={styles.mainTitle}>Results</h1>
        <h2 className={styles.resultsHeader}>Shape</h2>
        <p className={styles.resultsText}>
          {shapeChoice}  { showResults ? <button className={styles.regenerateButton} onClick={() => generateShape()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Protein</h2>
        <p className={styles.resultsText}>
          {mainChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateMeat(meatsCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Condiments</h2>
        <p className={styles.resultsText}>
          {condimentsChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateCondiment(condimentsCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Sauce</h2>
        <p className={styles.resultsText}>
          {sauceChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateSauce(sauceCount)}>&#8634;</button> : null }
        </p>
      </div>
    </div>
  );
}