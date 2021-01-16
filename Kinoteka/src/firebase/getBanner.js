import firebase from "gatsby-plugin-firebase"
const db = firebase.firestore();

const movieNames=[];
const moviePictures=[];

db.collection("banner").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        movieNames.push(doc.data().name);
        moviePictures.push(doc.data().image);
    });

});

export {movieNames,moviePictures};