import React, { useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Black Clover']);

    // const handleAdd = () => setCategories( cats => [...cats, 'Boku no Hero']);

    return (
        <>
            <h1> Gif Expert App</h1>
            <AddCategory setCategories={ setCategories }/>

            <hr/>

            <ul>
                {
                    categories.map( category => (
                        <GifGrid key={ category } category={ category } />
                    ))
                }
            </ul>
        </>
    );
}

export default GifExpertApp;
