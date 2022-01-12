import { UserContext } from "../App.js";
import "./OrderItem.css";

import { useState, useEffect, useContext } from "react";

function OrderItem() {
  const [posts, setPosts] = useState([]);

  const username = useContext(UserContext);

  useEffect(() => {
    async function getState() {
      const response = await fetch(
        "http://localhost:8000/api/order/" + username
      );
      //const response = await fetch('http://localhost:8000/api/order/guYHX-mhBTPWAVuk2DgM2')

      const data = await response.json();

      setPosts(data);
    }
    getState();
  }, [username]);

  return (
    <ul className="order-wrap">
      {posts.map((post) => {
        return (
          <div>
            <li className="history-list" key={`index-${ post.id }`}>#{post.id}
            </li>
            <li className="history-list">{post.orderTime}</li>
            <li className="history-list">Total {post.price} kr</li>
            <hr></hr>
          </div>
        );
      })}
    </ul>
  );
}

export default OrderItem;
