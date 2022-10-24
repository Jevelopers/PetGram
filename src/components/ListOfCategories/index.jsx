import React, { useState, useEffect } from "react";
import { Category } from '../Category';
import { List, Item } from './style'

// Importar informacion de Rest
// import { Categories } from '../../.../api/db.json';
import data from '../../api/db.json';

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([]);

   /*  useEffect(function () {
        fetch('https://rickandmortyapi.com/api/character')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
            })
    },[]) */
return (
        <List>
            {
                // data.categories.map(itemCategory => <Item key={itemCategory.id}><Category cover={itemCategory.cover} path={itemCategory.path} emojin={itemCategory.emojin}/></Item>)
                data.categories.map(itemCategory => <Item key={itemCategory.id}><Category {...itemCategory} /></Item>)
            }
        </List>
    )
}