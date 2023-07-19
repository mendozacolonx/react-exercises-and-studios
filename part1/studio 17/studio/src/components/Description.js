import styles from './Description.module.css';
import React from 'react';




function RecipeAuthor(){
    const authorLink = "https://https://vancouverwithlove.com/cookie-dough-overnight-oats/.com/wp-content/uploads/2022/11/elizabeth-emery-vancouver-with-love-in-kitchen-6.jpg.webp";
    const authorPhoto = "https://vancouverwithlove.com/wp-content/uploads/2022/11/elizabeth-emery-vancouver-with-love-in-kitchen-6.jpg.webp";
    const authorName = "Cookie Dough Overnight Oats";
    
    return (
        <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt = "Elizabeth, authour of 'Vancouver With Love'" className={styles.imageUpdates} />
        <div>
           <h3>{authorName}</h3>
           <a href={authorLink}>Vancouver With Love</a> 
        </div>
     </div>
         );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <h1>Cookie Dough Overnight Oats</h1>
                <p>This is an easy, fast, and yummy breakfast recipe!</p>
            </div>
        );
    }
}
export default RecipeDescription;
