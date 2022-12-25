import React,{useEffect, useState} from 'react';
import styles from './styles.module.css'

const RandomDog = () =>{

    const [dogs,setDogs] = useState({});

    useEffect(()=>{
        getDogs();
    },[])

    const getDogs = async()=>{
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogs(data);
    }

    return(
        <>
        <div className = {styles.img}>
            <img src = {dogs.message} alt = {'Cute dogg'}></img>
        </div>
        <div>
            <button  className ={styles.button} onClick={getDogs}>New Doggo</button>
        </div>
        </>
    )

}

export default RandomDog;