import firebase from "gatsby-plugin-firebase"
const db = firebase.firestore();

const movieNames=[];
const moviePictures=[];
const movieRating=[];
const movieImbdRating=[];
const movieObj=[];

db.collection("banner").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        movieNames.push(doc.data().name);
        moviePictures.push(doc.data().image);
        movieRating.push(doc.data().ocjene_korisnika);
        movieImbdRating.push(doc.data().ocjene_imbd);
        movieObj.push(doc.data());
    });

});

export {movieObj,movieNames,moviePictures,movieRating,movieImbdRating};