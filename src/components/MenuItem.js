import add from "../assets/add.png";
import actions from "../actions/orderAction";
import { useDispatch } from "react-redux";
import "./MenuItem.css";

function MenuItem({ task }) {
  console.log("task:", task);
  const dispatch = useDispatch();

  var number = 0;

  function countClick() {
    number++;
    document.getElementById("number").innerHTML = number;
    dispatch(actions.addOrder(task));
  }

  return (
    <div>
      <div id="one-row">
        <img
          role="button"
          onClick={() => {
            countClick(task);
          }}
          id="add"
          src={add}
          alt="Lägg till produkt"
        />
        <div className="start"> 
        <li className="title">{task.title} ... </li>
        <li id="desc">{task.desc}</li>
        </div>
        <div> 
        <li className="price">{task.price} kr</li>
        </div>
      </div>
      
    </div>
  );
}

export default MenuItem;
