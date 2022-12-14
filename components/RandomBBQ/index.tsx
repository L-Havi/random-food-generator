
import { meat, binders, cheeses, veganCheeses, wildMagic } from "./data";

import { useState } from "react";
import styles from "./RandomBBQ.module.css";

export default function RandomBBQ() {

  const [binderChoice, setBinderChoice] = useState("");
  const [binderCount, setBinderCount] = useState<number>(1);

  const [cheeseChoice, setCheeseChoice] = useState("");
  const [cheeseCount, setCheeseCount] = useState<number>(1);
  const [cheeseOption, setCheeseOption] = useState<string>("1");

  const [meatChoice, setMeatChoice] = useState("");

  const [wildMagicChoice, setWildMagicChoice] = useState("");
  const [wildMagicCount, setWildMagicCount] = useState<number>(2);

  const [showResults, setShowResults] = useState(false);

  const cheeseRadioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheeseOption(event.target.value);
  };

  function generateMeat(){
    var choseBase : string = meat[Math.floor(Math.random() * meat.length)];
    setMeatChoice(choseBase);
  }

  function generateBinder(binderCount: number){
    var binder : string = "";
    var newBinder : string = ""; 
    var allBinders : string[] = [];

    for(var i = 0; i < binderCount; i++){
      
      newBinder = binders[Math.floor(Math.random() * binders.length)];

      if(allBinders.includes(newBinder)){
        i--;
      } else {
        if(i == 0){
          binder = newBinder;
        } else if((binderCount - i) == 1){
          binder = binder + " & " + newBinder;
        } else{
          binder = `${binder}, ${newBinder}`;
        }
        allBinders.push(newBinder);
      }
    }
    
    setBinderChoice(binder);
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

  function generateWildMagic(wildMagicCount: number){
    var wild : string = "";
    var allWild : string[] = [];

    for(var i = 0; i < wildMagicCount; i++){

      var newWild = wildMagic[Math.floor(Math.random() * wildMagic.length)];

      if(allWild.includes(newWild)){
        i--;
      } else {
        if(i == 0){
          wild = newWild;
        } else if((wildMagicCount - i) == 1){
          wild = wild + " & " + newWild;
        } else{
          wild = `${wild}, ${newWild}`;
        }
        allWild.push(newWild);
      }
    }
    setWildMagicChoice(wild);
  }

  const randomBBQ = (binderCount: number, cheeseCount: number, cheeseOption: string, wildMagicCount: number) => {

    generateMeat();
    generateBinder(binderCount);
    generateCheeses(cheeseCount, cheeseChoice);
    generateWildMagic(wildMagicCount);

    setShowResults(true);
  };
  
	function incrementBinders() {
    if(binderCount < 2){
      setBinderCount(binderCount + 1);
    }
	}

	function decrementBinders() {
    if(binderCount >= 1){
      setBinderCount(binderCount - 1);
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

  function incrementWildMagic() {
    if(wildMagicCount < 5){
      setWildMagicCount(wildMagicCount + 1);
    }
	}

	function decrementWildMagic() {
    if(wildMagicCount >= 1){
      setWildMagicCount(wildMagicCount - 1);
    }
	}

  return (
    <div className={styles.containerClass}>
		  <div className={styles.optionsClass}>
        <h1 className={styles.mainTitle}>Ingredient Options</h1>
        <div className={styles.optionTitle}>
          <h2>Binder</h2>
        </div>
        <div className={styles.proteinClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementBinders}>-</button>
            <p>{binderCount}</p>
            <button className={styles.button} onClick={incrementBinders}>+</button>
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
          <h2>Wild Magic</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementWildMagic}>-</button>
            <p>{wildMagicCount}</p>
            <button className={styles.button} onClick={incrementWildMagic}>+</button>
          </div>
        </div>
        <div className={styles.generateButtonClass}>
          <button className={styles.goButton}
            onClick={() => randomBBQ(binderCount, cheeseCount, cheeseOption, wildMagicCount)}
            >
              Generate a random BBQ
          </button>
        </div>
		  </div>
      <div className={styles.resultsClass}>
        <h1 className={styles.mainTitle}>Results</h1>
        <h2 className={styles.resultsHeader}>Meat</h2>
        <p className={styles.resultsText}>
          {meatChoice}  { showResults ? <button className={styles.regenerateButton} onClick={() => generateMeat()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Binder</h2>
        <p className={styles.resultsText}>
          {binderChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateBinder(binderCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Cheeses</h2>
        <p className={styles.resultsText}>
          {cheeseChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateCheeses(cheeseCount, cheeseChoice)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Wild Magic</h2>
        <p className={styles.resultsText}>
          {wildMagicChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateWildMagic(wildMagicCount)}>&#8634;</button> : null }
        </p>
      </div>
    </div>
  );
}