import firebase from "gatsby-plugin-firebase"

const db = firebase.firestore();

const comedyMovies=[];
db.collection("filmovi_komedija").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        comedyMovies.push(doc.data());
        console.log(doc.data().id);
    }); 
});



export default comedyMovies;