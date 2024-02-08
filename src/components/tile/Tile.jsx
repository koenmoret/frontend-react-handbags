import "./Tile.css";

// eslint-disable-next-line react/prop-types
function Tile({ children, title, image, imgDescription }) {
    return (
        <section>
            {image && <img src={image} alt={imgDescription}/>}
            {title && <h2>{title}</h2>}
            {children}
        </section>
    );
}

export default Tile;