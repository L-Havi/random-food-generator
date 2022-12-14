
import { alcohols, mixers, ices, glasses, mixings, toppings, wildMagics } from "./data";

import { useState } from "react";
import styles from "./RandomCocktail.module.css";

export default function RandomCocktail() {

  const [alcoholChoice, setAlcoholChoice] = useState("");
  const [alcoholCount, setAlcoholCount] = useState<number>(1);

  const [mixerChoice, setMixerChoice] = useState("");
  const [mixerCount, setMixerCount] = useState<number>(1);

  const [iceChoice, setIceChoice] = useState("");
  const [iceCount, setIceCount] = useState<number>(1);

  const [glassChoice, setGlassChoice] = useState("");

  const [mixingChoice, setMixingChoice] = useState("");

  const [toppingChoice, setToppingChoice] = useState("");
  const [toppingCount, setToppingCount] = useState<number>(1);

  const [wildMagicChoice, setWildMagicChoice] = useState("");
  const [wildMagicCount, setWildMagicCount] = useState<number>(1);

  const [showResults, setShowResults] = useState(false);

  function generateGlass(){
    var glass : string = glasses[Math.floor(Math.random() * glasses.length)];
    setGlassChoice(glass);
  }

  function generateAlcohol(alcoholCount: number){
    var alcohol : string = "";
    var newAlcohol : string = ""; 
    var allAlcohols : string[] = [];

    for(var i = 0; i < alcoholCount; i++){
      
      newAlcohol = alcohols[Math.floor(Math.random() * alcohols.length)];

      if(allAlcohols.includes(newAlcohol)){
        i--;
      } else {
        if(i == 0){
          alcohol = newAlcohol;
        } else if((alcoholCount - i) == 1){
          alcohol = alcohol + " & " + newAlcohol;
        } else{
          alcohol = `${alcohol}, ${newAlcohol}`;
        }
        allAlcohols.push(newAlcohol);
      }
    }
    
    setAlcoholChoice(alcohol);
  }

  function generateMixer(mixerCount: number){
    var mixer : string = "";
    var newMixer : string = ""; 
    var allMixers : string[] = [];

    for(var i = 0; i < mixerCount; i++){
      
      newMixer = mixers[Math.floor(Math.random() * mixers.length)];

      if(allMixers.includes(newMixer)){
        i--;
      } else {
        if(i == 0){
          mixer = newMixer;
        } else if((mixerCount - i) == 1){
          mixer = mixer + " & " + newMixer;
        } else{
          mixer = `${mixer}, ${newMixer}`;
        }
        allMixers.push(newMixer);
      }
    }
    
    setMixerChoice(mixer);
  }

  function generateIce(iceCount: number){
    var ice : string = "";
    var newIce : string = ""; 
    var allIces : string[] = [];

    for(var i = 0; i < iceCount; i++){
      
      newIce = ices[Math.floor(Math.random() * ices.length)];

      if(allIces.includes(newIce)){
        i--;
      } else {
        if(i == 0){
          ice = newIce;
        } else if((iceCount - i) == 1){
          ice = ice + " & " + newIce;
        } else{
          ice = `${ice}, ${newIce}`;
        }
        allIces.push(newIce);
      }
    }
    
    setIceChoice(ice);
  }

  function generateMixing(){
    var mixing : string = mixings[Math.floor(Math.random() * mixings.length)];
    setMixingChoice(mixing);
  }

  function generateToppings(toppingCount: number){
    var topping : string = "";
    var newTopping : string = ""; 
    var allToppings : string[] = [];

    for(var i = 0; i < toppingCount; i++){
      
      newTopping = toppings[Math.floor(Math.random() * toppings.length)];

      if(allToppings.includes(newTopping)){
        i--;
      } else {
        if(i == 0){
          topping = newTopping;
        } else if((toppingCount - i) == 1){
          topping = topping + " & " + newTopping;
        } else{
          topping = `${topping}, ${newTopping}`;
        }
        allToppings.push(newTopping);
      }
    }
    
    setToppingChoice(topping);
  }

  function generateWildMagic(wildMagicCount: number){
    var wild : string = "";
    var allWild : string[] = [];

    for(var i = 0; i < wildMagicCount; i++){

      var newWild = wildMagics[Math.floor(Math.random() * wildMagics.length)];

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

  const randomCocktail = (alcoholCount: number, mixerCount: number, iceCount: number, toppingCount: number, wildMagicCount: number) => {

    generateAlcohol(alcoholCount);
    generateGlass();
    generateMixing();
    generateMixer(mixerCount);
    generateIce(iceCount);
    generateToppings(toppingCount);
    generateWildMagic(wildMagicCount);

    setShowResults(true);
  };
  
	function incrementAlcohols() {
    if(alcoholCount < 5){
      setAlcoholCount(alcoholCount + 1);
    }
	}

	function decrementAlcohols() {
    if(alcoholCount >= 1){
      setAlcoholCount(alcoholCount - 1);
    }
	}

  function incrementMixers() {
    if(mixerCount < 5){
      setMixerCount(mixerCount + 1);
    }
	}

	function decrementMixers() {
    if(mixerCount >= 1){
      setMixerCount(mixerCount - 1);
    }
	}

  function incrementIces() {
    if(iceCount < 1){
      setIceCount(iceCount + 1);
    }
	}

	function decrementIces() {
    if(iceCount >= 1){
      setIceCount(iceCount - 1);
    }
	}

  function incrementToppings() {
    if(toppingCount < 1){
      setToppingCount(toppingCount + 1);
    }
	}

	function decrementToppings() {
    if(toppingCount >= 1){
      setToppingCount(toppingCount - 1);
    }
	}

  function incrementWildMagic() {
    if(wildMagicCount < 1){
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
          <h2>Alcohol</h2>
        </div>
        <div className={styles.proteinClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementAlcohols}>-</button>
            <p>{alcoholCount}</p>
            <button className={styles.button} onClick={incrementAlcohols}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
         <h2>Mixers</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementMixers}>-</button>
            <p>{mixerCount}</p>
            <button className={styles.button} onClick={incrementMixers}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
         <h2>Ice</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementIces}>-</button>
            <p>{iceCount}</p>
            <button className={styles.button} onClick={incrementIces}>+</button>
          </div>
        </div>
        <div className={styles.optionTitle}>
         <h2>Toppings</h2>
        </div>
        <div className={styles.vegetableClass}>
          <div className={styles.proteinButtons}>
            <button className={styles.button} onClick={decrementToppings}>-</button>
            <p>{toppingCount}</p>
            <button className={styles.button} onClick={incrementToppings}>+</button>
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
            onClick={() => randomCocktail(alcoholCount, mixerCount, iceCount, toppingCount, wildMagicCount)}
            >
              Generate a random Cocktail
          </button>
        </div>
		  </div>
      <div className={styles.resultsClass}>
        <h1 className={styles.mainTitle}>Results</h1>
        <h2 className={styles.resultsHeader}>Alcohol</h2>
        <p className={styles.resultsText}>
          {alcoholChoice}  { showResults ? <button className={styles.regenerateButton} onClick={() => generateAlcohol(alcoholCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Mixers</h2>
        <p className={styles.resultsText}>
          {mixerChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateMixer(mixerCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Ice</h2>
        <p className={styles.resultsText}>
          {iceChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateIce(iceCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Glass</h2>
        <p className={styles.resultsText}>
          {glassChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateGlass()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Mixing Style</h2>
        <p className={styles.resultsText}>
          {mixingChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateMixing()}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Toppings</h2>
        <p className={styles.resultsText}>
          {toppingChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateToppings(toppingCount)}>&#8634;</button> : null }
        </p>
        <h2 className={styles.resultsHeader}>Wild Magic</h2>
        <p className={styles.resultsText}>
          {wildMagicChoice} { showResults ? <button className={styles.regenerateButton} onClick={() => generateWildMagic(wildMagicCount)}>&#8634;</button> : null }
        </p>
      </div>
    </div>
  );
}