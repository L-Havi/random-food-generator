
import { noodles, meats, vegetables, condiments, sauces } from "./data";

import { useState } from "react";
import styles from "./RandomRamen.module.css";

export default function RandomRamen() {

  const [mainChoice, setMainChoice] = useState("");
  const [meatsCount, setMeatsCount] = useState<number>(1);

  const [vegetableChoice, setVegetableChoice] = useState("");
  const [vegetableCount, setVegetableCount] = useState<number>(2);

  const [noodleChoice, setNoodleChoice] = useState("");

  const [sauceChoice, setSauceChoice] = useState("");
  const [sauceCount, setSauceCount] = useState<number>(2);

  const [condimentChoice, setCondimentChoice] = useState("");
  const [condimentCount, setCondimentCount] = useState<number>(2);

  const [showResults, setShowResults] = useState(false);

  function generateNoodle(){
    var noodle : string = noodles[Math.floor(Math.random() * noodles.length)];
    setNoodleChoice(noodle);
  }

  function generateProtein(meatsCount : number){
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
    setVegetableChoice(vegetable);
  }

  function generateCondiments(condimentCount: number){
    var condiment : string = "";
    var allCondiments : string[] = [];

    for(var i = 0; i < condimentCount; i++){

      var newCondiment = condiments[Math.floor(Math.random() * condiments.length)];

      if(allCondiments.includes(newCondiment)){
        i--;
      } else {
        if(i == 0){
          condiment = newCondiment;
        } else if((condimentCount - i) == 1){
          condiment = condiment + " & " + newCondiment;
        } else{
          condiment = `${condiment}, ${newCondiment}`;
        }
        allCondiments.push(newCondiment);
      }
    }
    setCondimentChoice(condiment);
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

  const randomRamen = (meatsCount: number, vegetableCount: number, condimentsCount: number, sauceCount: number) => {

    generateNoodle();
    generateProtein(meatsCount);
    generateVegetables(vegetableCount);
    generateCondiments(condimentsCount);
    generateSauces(sauceCount);


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

    function incrementCondiments() {
        if(condimentCount < 5){
            setCondimentCount(condimentCount + 1);
        }
	}

	function decrementCondiments() {
        if(condimentCount >= 1){
          setCondimentCount(condimentCount - 1);
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
            <p>{vegetableCount}</p>
            <button className={styles.button} onClick={incrementVegetables}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
          <h2>Condiments</h2>
        </div>
        <div className={styles.proteinClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementCondiments}>-</button>
            <p>{condimentCount}</p>
            <button className={styles.button} onClick={incrementCondiments}>+</button>
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
        <div className={styles.generateButtonClass}>
          <button className={styles.goButton}
            onClick={() => randomRamen(meatsCount, vegetableCount, condimentCount, sauceCount)}
            >
              Generate a random ramen
          </button>
        </div>
		  </div>
      <div className={styles.resultsClass}>
        <h1 className={styles.mainTitle}>Results</h1>
        <h2 className={styles.resultsHeader}>Noodles</h2>
        <p className={styles.resultsText}>
          {noodleChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateNoodle()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Meats</h2>
        <p className={styles.resultsText}>
          {mainChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateProtein(meatsCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Vegetables</h2>
        <p className={styles.resultsText}>
          {vegetableChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateVegetables(vegetableCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Condiments</h2>
        <p className={styles.resultsText}>
          {condimentChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateCondiments(condimentCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Condiments</h2>
        <p className={styles.resultsText}>
          {sauceChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateSauces(sauceCount)}>&#8634;</button> : null }
        </p>
      </div>
    </div>
  );
}