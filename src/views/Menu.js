import "../css/Menu.css";
import bag from "../assets/bag.png";
import { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import MenuItem from "../components/MenuItem";
import AddOrder from "../components/AddOrder";
import actions from "../actions/orderAction";
import { UserContext } from "../App.js";
const DUMMY = [
  {
    id: 1,
    title: "Bryggkaffe",
    desc: "Bryggd på månadens bönor.",
    price: 40,
  },
  {
    id: 2,
    title: "Caffè Doppio",
    desc: "Bryggd på månadens bönor.",
    price: 45,
  },
  {
    id: 3,
    title: "Cappuccino",
    desc: "Bryggd på månadens bönor.",
    price: 43,
  },
  {
    id: 4,
    title: "Latte Macchiato",
    desc: "Bryggd på månadens bönor.",
    price: 49,
  },
  {
    id: 5,
    title: "Kaffe Latte",
    desc: "Bryggd på månadens bönor.",
    price: 54,
  },
  {
    id: 6,
    title: "Cortado",
    desc: "Bryggd på månadens bönor.",
    price: 39,
  },
];
function Menu() {
  
  const username = useContext(UserContext);
  const menu = useSelector((state) => {
    return state.menu;
  });
  const orders = useSelector((state) => {
    return state.orders;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    async function getMenu() {
      dispatch(actions.getMenu(DUMMY));
    }

    getMenu();
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);

  const history = useHistory();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function getCost() {
    let total=0;
    orders.forEach((order) => {
        total += order.task.price;
    });
    return total ? total : 0;
  }

  function handlePay() {
    fetch("http://localhost:8000/api/order/", {
      body: JSON.stringify({ username: username, orders }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        console.log("postOrder:", orders);

        const status = {
          id: result.id,
          eta: result.eta,
        };

        dispatch(actions.postOrder(status));
        history.push("/Orderstatus");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div id="menu">
      <Header />
      <div>
        <div id="circle">
          <img
            id="bag"
            src={bag}
            alt="Varukorg"
            role="button"
            onClick={toggleModal}
          />

          <Modal
            appElement={document.getElementById("menu")}
            isOpen={isOpen}
            onRequestClose={toggleModal}
            className="mymodal"
            overlayClassName="myoverlay"
          >
            <h2 id="title-overlay">Din beställning</h2>

            <ul className="order-list">
              {orders &&
                orders.map((menu1) => {
                  return <AddOrder task={menu1} key={`index-${menu1.id}`} />;
                })}
            </ul>
            <p id="total">Total: {getCost()}kr</p>
            <p id="moms">Inkl moms + drönarleverans</p>

            <button id="pay" onClick={handlePay}>
              Take my money!
            </button>
          </Modal>

          <div id="small-circle">
            <p id="number">{orders.length}</p>
          </div>
        </div>

        <h2 id="title-menu">Meny</h2>

        <ul className="menu-list">
          {menu.map((menu1) => {
            return <MenuItem task={menu1} key={menu1.id} />;
          })}
        </ul>
      </div>

      <Footer />
    </div>
  );
}

export default Menu;
