import React, { useState } from 'react';
import { data } from '../../Data/Data';
import '../ItemListContainer/ItemListContainer.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const [items, setItems] = useState([]); 
  const parametros = useParams();
  console.log(parametros)
    
  return (
    <div className='message-greeting-container'>
      

   
        
    </div>
  )
}

export default ItemListContainer