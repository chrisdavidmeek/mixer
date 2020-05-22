import React from "react";
import "../../../src/App.css";
import { useSelector, useDispatch } from "react-redux";
import {  setSpirits, setSoda, setJuice} from "../../redux/actions/actions";

const MainForm = () => {

  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();
  const spirits = useSelector((state)=> state.spirits);
  const soda = useSelector((state) => state.soda);
  const juice = useSelector((state) => state.juice);
  const [showSpirit, setShowSpirit] = React.useState("none");
  const [showSoda, setShowSoda] = React.useState("none");
  const [showJuice, setShowJuice] = React.useState("none");

  function Drink(name, abv) {
    this.name = name;
    this.abv = abv;
  }

  

  const added = (e, abv) => {
    //check if value is already in array. then run push
    let truth = list.includes();
    if (truth) {
      console.log("exists already");
    } else {
      console.log("it doesn't");
      let newDrink = new Drink(e.target.innerHTML, abv);
      list.push(newDrink);
      
      // console.log(list);
     
    }
  };

  React.useEffect(() => {
 if (spirits){
   setShowSpirit("inline-block");
 }
 else if (soda){
   setShowSoda("inline-block");
 }
 else if (juice){
   setShowJuice("inline-blocK");
 }
 else{
   setShowJuice("none");
   setShowSoda("none");
   setShowSpirit("none");
 }

  }, [spirits, soda, juice]);
  
  return (
    <div>
      <div className="spirits">
        <h3 onClick={() => dispatch(setSpirits())}>Spirits </h3>
        <ul style={{ display: showSpirit}}>
          <li id="one">
            <button onClick={(e) => added(e, 1)}>Whiskey</button>
          </li>
          <li id="two">
            <button onClick={(e) => added(e, 2)}>Vodka</button>
          </li>
          <li id="three">
            <button onClick={(e) => added(e, 3)}>Tequila</button>
          </li>
        </ul>
      </div>
      <div className="soda">
        <h3 onClick={() => dispatch(setSoda())}>Soda</h3>
        <ul style={{ display: showSoda }}>
          <li id="four">
            <button onClick={(e) => added(e, 0)}>Coke</button>
          </li>
          <li id="five">
            <button onClick={(e) => added(e, 0)}>Sprite</button>
          </li>
          <li id="six">
            <button onClick={(e) => added(e, 0)}>Root Beer</button>
          </li>
        </ul>
      </div>
      <div className="juice">
        <h3 onClick={() => dispatch(setJuice())}>Juice</h3>
        <ul style={{ display: showJuice }}>
          <li id="seven">
            <button onClick={(e) => added(e, 0)}>Orange</button>
          </li>
          <li id="Eight">
            <button onClick={(e) => added(e, 0)}>Cranberry</button>
          </li>
          <li id="Nine">
            <button onClick={(e) => added(e, 0)}>Lemon</button>
          </li>
        </ul>
      </div>
      <p>Main forms will go here</p>
    </div>
  );
};

export default MainForm;
