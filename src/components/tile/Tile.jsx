import "./Tile.css";

// eslint-disable-next-line react/prop-types
function Tile({ children, image, imgDescription }) {
    return (
        <section>
            {image && <img src={image} alt={imgDescription}/>}
            {children}
        </section>
    );
}

export default Tile;