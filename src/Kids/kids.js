import '../App.css';

function Kids() {
    return (
        <div class="wrapper">
            <h1 class="centerText">Help your garden friends!</h1>

            <div class="kidGrid">
                <div class="box-1"><img src="images/hedgehog.jpg" alt="thumbnail"></img></div>
                <div class="box-2">
                    <h3 class="subHead">Hedgehog Haven</h3>
                    <p>
                        it is as simple as creating little nooks in the corners of your garden for animals such as hedgehogs to build nests or homes, leave any leafs or loose
                        sticks in your garden as hedgehogs can use these to build a cosy nest whilst they get ready to hibernate over the winter.
                </p>

                </div>

                <div class="box-4">
                    <h3 class="subHead">Feed the birds!</h3>
                    <p> If you have bird feeders or baths keeping these clean and full will help to encourage wild birds to come into your garden. You can feed them foods such as peanuts,
                    cheese, raisins and sultanas, apples, pears or even rice or boiled potatoes. Make sure you keep your feeding areas clean to limit any transmission of disease where
                    possible.
                </p>
                </div>
                <div class="box-3"><img src="images/birds.jpg" alt="thumbnail"></img></div>
            </div>

            <div class="grid">
                <div class="gridSection">
                    <h3> Games </h3>
                    <img src="images/kidgame.jpg" alt="thumbnail"></img>
                    <p>some of the animals have escaped their enclosures! you have to find them and get them back home safely! </p>
                </div>
                <article class="gridSection">
                    <h3> Crafty things to do </h3>
                    <img src="images/kidcraft.jpg" alt="thumbnail"></img>
                    <p>Crafty activities for kids to learn about zoo animals and have fun too!</p>

                </article>

                <article class="gridSection">
                    <h3> Education Downloads </h3>
                    <img src="images/kidactivity.jpg" alt="thumbnail"></img>
                    <p>Educate the kids from home with printable colouring in pages and fun activties to teach kids about conservation</p>
                    <p>Click Here for more info!</p>
                </article>
            </div>
        </div>

    );
}

export default Kids;