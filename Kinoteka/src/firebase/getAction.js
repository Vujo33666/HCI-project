import firebase from "gatsby-plugin-firebase"
const db = firebase.firestore();

const actionMovies=[];
db.collection("filmovi").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        actionMovies.push(doc.data());
        console.log(doc.data().id);
    }); 
});



export default actionMovies;