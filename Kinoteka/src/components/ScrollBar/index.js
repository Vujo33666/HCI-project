import React, { useState } from 'react'

import styles from './style.module.css'
import firebase from "gatsby-plugin-firebase"
const db = firebase.firestore();

/*const myArray=[];

db.collection("banner").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        
        console.log(doc.id, " => ", doc.data());
        myArray.push(doc.data());
    });
});*/


const ScrollBar = (props) => {
    const [isChosen, setChosen] = useState(1);
    return (
        <div className={styles.scrollBar}>

            {[...Array(5)].map((barFromScroll, i) => {
                const chosenValue = i + 1;

                return (
                    <li key={chosenValue}
                        className={chosenValue === isChosen ? styles.active : styles.notActive}
                        onClick={() => props.onChecked(chosenValue)}
                        
                    />
                )
            })}

        </div>
    )
}

export default ScrollBar