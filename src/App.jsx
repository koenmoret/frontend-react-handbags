import './App.css'
import Button from "./components/button/Button.jsx";
import bag1 from './assets/bag_1.png'
import bag2 from './assets/bag_2.png'
import bag3 from './assets/bag_3.png'
import bag4 from './assets/bag_4.png'
import brand from './assets/brand.png'
import our_story from './assets/our_story.png'
import Product from "./components/product/Product.jsx";
import Tile from "./components/tile/Tile.jsx";

function App() {
    return (<>
    <h1>Handbags & Purses</h1>
            <nav>
                {/*<button onClick={() => console.log("to the collection")}>to the collection</button>*/}
                {/*<button onClick={() => console.log("shop all bags")}>shop all bags</button>*/}
                {/*<button disabled onClick={() => console.log("pre-orders")}>pre-orders</button>*/}
                <Button buttonType="button" handleClick={()=>{}}>to the collection</Button>
                <Button buttonType="button" handleClick={()=>{}}>shop all bags</Button>
                <Button buttonType="button" handleClick={()=>{}} disabled>pre-orders</Button>
            </nav>
            <main>
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag1} alt="The handy bag"/>*/}
                {/*    <p>The handy bag</p>*/}
                {/*    <h4>€400,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag2} alt="The stylish bag"/>*/}
                {/*    <p>The stylish bag</p>*/}
                {/*    <h4>€250,</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag3} alt="The simple bag"/>*/}
                {/*    <p>The simple bag</p>*/}
                {/*    <h4>€300,-</h4>*/}
                {/*</article>*/}
                {/*<article>*/}
                {/*    <span>Best seller</span>*/}
                {/*    <img src={bag4} alt="The trendy bag"/>*/}
                {/*    <p>The trendy bag</p>*/}
                {/*    <h4>€150,-</h4>*/}
                {/*</article>*/}
                <Product label="Best seller" image={bag1} imageAlt="bag1" nameOfBag="The handy bag" price="400" />
                <Product label="Best seller" image={bag2} imageAlt="bag2" nameOfBag="The stylish bag" price="250"/>
                <Product label="New collection" image={bag3} imageAlt="bag3" nameOfBag="The simple bag" price="300"/>
                <Product label="New collection" image={bag4} imageAlt="bag4" nameOfBag="The trendy bag" price="150"/>
            </main>
            <footer>
                {/*<section>*/}
                {/*    <h2>The Brand</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,*/}
                {/*        fuga pariatur praesentium quia sequi similique sunt.</p>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,*/}
                {/*        fuga pariatur praesentium quia sequi similique sunt.</p>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src={brand} alt="Our Brand"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <img src={our_story} alt="Our Story"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <h2>Our story</h2>*/}
                {/*    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem*/}
                {/*        illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque,*/}
                {/*        laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>*/}
                {/*</section>*/}
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum enim excepturi,
                        fuga pariatur praesentium quia sequi similique sunt.</p>
                </Tile>
                <Tile image={brand} imageDescription="Our Brand" />
                <Tile image={our_story} imageDescription="Our Story" />
                <Tile title="Our story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis eligendi exercitationem illo, labore laboriosam nihil omnis praesentium. Aspernatur cum deleniti excepturi itaque, laboriosam nisi rerum sunt. At repellendus tenetur veniam!</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
