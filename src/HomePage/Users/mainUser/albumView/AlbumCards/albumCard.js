 import x from "./albumCards.css";
import { BiHeart } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
 import { Link } from "react-router-dom";
// import Albunes from "../../../adminView/DataAlbun/Albunes.json";
 import { IoTrashOutline } from "react-icons/io5";
 import { FiEdit } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import services from '../../../../services/user.services';
import { useUserContext } from "../../../../contexts/UserContext";

const AlbumCard = () => {
  const [todos, setTodos] = useState([]);
  const auth = useUserContext();
  const {token}= auth;
  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const {data} = await services.getAll(token);
    setTodos(data);
  };
  const likeCard = (key)=>{
  
    const seleccionadoLike=todos.filter((item)=>item._id==key);
//seleccionadoLike.classList.add("megusta")
  }

  const color=()=>{

  }
  return (
    <div className="card-container">
      {todos.map((item) => (
            <div className="container-nodo" key={item._id}>
            <div className="image-album">
              <img src={item.image} alt=""></img>
            </div>
              <div className="info-album">
                  <p><strong> Nombre de álbum:</strong>{item.title}</p>
                  <p><strong> Canciones:</strong>{item.description}</p>
                  <div className="btn-container">
                      <button className="btn-megusta" onClick={()=>likeCard(item._id)}><BiHeart/></button>
                      <button className="btn-favoritos"><BiStar/></button>
                  </div>
              </div>
          </div>
        ))
      }
    </div>
  );
};
export default AlbumCard;
