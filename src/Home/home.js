import '../App.css';
import React, {useState, useEffect} from 'react';
import AnimalGrid from '../AnimalGrid/AnimalGrid';

const Home = () => {
    const [animals, setAnimals] = useState([]);
    useEffect(() => {
      fetch("./animals.json").then(function(jresponse) {
          if (jresponse.ok) {
              jresponse.json().then(function(json) {
                setAnimals(json);
              });
          } else {
              console.log("Error getting file " + jresponse.status + ": " + jresponse.statusText);
          }
      });
  },[])
    return (
        <div>
            <section className="centerText">
                <p>At Jem zoo, we are dedicated to conserving endangered animals and providing a fun environment for families to come for a day out
                with the kids! You can learn all about the animals and engage in fun workshops and activities including a treasure hunt to find
                the fairy helpers houses who are hidden all around the zoo! </p>

                <p> There are a wide range of animals to look at ranging from Lions to Flamingos. There is plenty of interesting information about each
                animal around where they reside on the park, the foods they eat, and where they live around the world.
            </p>
            </section>

            <div>
                <h1 className="centerText">Meet the Animals!</h1>
                <AnimalGrid animals={animals} />
            </div>

            <section className="wrapper">
                <header>Cost of Admission</header>
                <p className="centerText">if you like to know about the costing of our various events and activites please visit the <a class="link" href="events.html">Events</a> page</p>
                <table>
                    <tc>

                        <tr>
                            <td>Adults</td>
                            <td>£20</td>
                        </tr>
                        <tr>
                            <td>Children</td>
                            <td>£10</td>

                        </tr>
                        <tr>
                            <td>Children under 2</td>
                            <td>FREE</td>
                        </tr>
                        <tr>
                            <td>Family (2 Adults 2 Kids)</td>
                            <td>£40</td>

                        </tr>
                        <tr>
                            <td>Concessions (OAP,Student)</td>
                            <td>£15</td>

                        </tr>
                        <tr>
                            <td>Carers</td>
                            <td>FREE</td>

                        </tr>

                    </tc>

                </table>
            </section>
        </div>
    )
}

export default Home
