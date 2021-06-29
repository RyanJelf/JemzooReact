import '../App.css';

function Events () {
    return (      
        <div>         
            <div className="grid">

                <div className="wrapper">
                    <header>Adults</header>
                    <h3>Photography Workshops</h3>
                    Why not sign up to one of our spectacular photography workshops and take advantage of the beautiful surroundings our Zoo has to offer. whether you are a beginner or not, these workshops will show you how to take advantage of different environments and lighting with the most interesting subjects to photograph.
                    <h3>Overnight Pod Stays</h3>
                    Our overnight pod stays are an adults only experience which boast an evening of fine dining with the grid as your evening entertainment. You’ll also get to experience an evening in nature as the pods are situated in the middle of the Zoo so you will be able to wake the next morning and view all the grid having their morning feeds.
                </div>
                <div className="wrapper">
                    <header>Families</header>
                    <h3>Camping with Nature</h3>

                    the perfect family activity, here at Jems you can bring your own tent and pitch up in the middle of the zoo allowing you to hear, see and smell all the different grid in their habitats. you can also embark on a torchlight expedition to explore who is awake. you’ll also get first access to the grid before the Zoo opens the next morning.
                    <h3>Zoo Academy </h3>
                    The academy will allow you the opportunity to get some real practical Zoo experience as a keeper. The academy lasts one week and will teach you all about the different skills you need to work in the zoo and look after the grid.
                </div>
                <div className="wrapper">
                    <header className ="title">Children</header>
                    <h3>Keeper for a day</h3>
                    Why not take up the opportunity to work as one of the team and spend the day as a keeper looking after the grid, you’ll get to feed them, clean them and play with them all day long.
                    <h3> Zoo Explorers </h3>
                    These sessions are specifically for children aimed ages 5-10, the sessions allow children to learn more about specific grid of interest and to make friends who want to learn more about the zoo too!
                </div>

                <section className="wrapper">
                    <header>Costing</header>
                    <table>
                        <tc>
                            <tr>
                                <td>Photography Workshop (1 hour session)</td>
                                <td>£45</td>
                            </tr>
                            <tr>
                                <td>Overnight Pod Stays (per night)</td>
                                <td>£75 (contact for more details)</td>
                            </tr>
                            <tr>
                                <td>Camping with Nature</td>
                                <td>£50</td>
                            </tr>
                            <tr>
                                <td>Zoo Academy </td>
                                <td>£20</td>

                            </tr>
                            <tr>
                                <td>Keeper for a day</td>
                                <td>£39.99</td>

                            </tr>
                            <tr>
                                <td>Zoo Explorers</td>
                                <td>£10</td>

                            </tr>

                        </tc>

                    </table>
                    <p>Please contact us for more details and availability.</p>
                    </section>
            </div>
        </div>
    );
}

export default Events;