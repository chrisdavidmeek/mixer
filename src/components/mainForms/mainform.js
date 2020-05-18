import React from "react";
import "../../../src/App.css";
import { useSelector, useDispatch } from "react-redux";
import { checkChange } from "../../redux/actions/actions";

const MainForm = () => {
  const [shown, setShown] = React.useState("none");
  const trigger = useSelector((state) => state.trigger);
  const list = useSelector((state) => state.list);
  const dispatch = useDispatch();

  function Drink(name, abv) {
    this.name = name;
    this.abv = abv;
  }
  const added = (e, abv) => {
    //check if value is already in array. then run push
    let truth = list.includes(e.target.innerHTML);
    if (truth) {
      console.log("exists already");
    } else {
      console.log("it doesn't");
      let newDrink = new Drink(e.target.innerHTML, abv);
      list.push(newDrink);
      console.log(list);
    }
  };

  React.useEffect(() => {
    if (trigger) {
      setShown("inline-block");
    } else {
      setShown("none");
    }
    console.log(trigger);
  }, [trigger]);

  return (
    <div>
      <div>
        <button id="drinkMenu" onClick={() => dispatch(checkChange())}>
          DRINKS
        </button>
      </div>
      <div className="spirits">
        <h3>Spirits</h3>
        <ul style={{ display: shown }}>
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
        <h3>Soda</h3>
        <ul style={{ display: shown }}>
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
        <h3>Juice</h3>
        <ul style={{ display: shown }}>
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
