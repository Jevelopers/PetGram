import React, { useState, useEffect, Fragment } from "react";
import { Category } from '../Category';
import { List, Item } from './style'

// Importar informacion de Rest
// import { Categories } from '../../.../api/db.json';
// import data from '../../api/db.json';

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([]);
    const [showFixed, setShowFixed] = useState(false);


    // Hacemos un feching(peticiones de datos)
    useEffect(function () {
        fetch('https://petgram-server-24iykciv5.now.sh/categories')
            .then(res => res.json())
            .then(response => {
                setCategories(response)
            })
    }, [])

    // Efecto que renderiza componente listCategorie al hacer scroll
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(function () {
        const onScroll = e => {
            const newShowCategorie = window.scrollY > 200;
            // Cuando no esta fijo
            showFixed !== newShowCategorie && setShowFixed(newShowCategorie);
        }
        // Escucha del evento al hacer scroll
        document.addEventListener('scroll', onScroll);

        // Limpiar, detener la escuha del evento al no estar renderizando el componente
        return () => document.removeEventListener('scroll', onScroll);


    }[showFixed])
    

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed': ''} >
            {
                // data.categories.map(itemCategory => <Item key={itemCategory.id}><Category cover={itemCategory.cover} path={itemCategory.path} emojin={itemCategory.emojin}/></Item>)
                categories.map(itemCategory => <Item key={itemCategory.id}><Category {...itemCategory} /></Item>)
            }
        </List>
    )

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
            
        </>

    )
}