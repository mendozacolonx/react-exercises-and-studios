import oceans from './oceans.json';
import './styles.css';
import Button from './Button';

function Profile() {

   const listItem = oceans.map(ocean =>
      <div key={ocean.id}
         className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}>

         <h1>{ocean.name}</h1>

         <img src={ocean.image}
            alt={ocean.name}
            className="img" />


         <h3>Fun Facts</h3>

         <ul>
            <li>{ocean.fact1}</li>
            <li>{ocean.fact2}</li>
            <li>{ocean.fact3}</li>
         </ul>

      </div>
   );





   return (
      <>
         <ul>
            {listItem}
         </ul>
         <Button />
      </>
   );
}


export default Profile;