const Card = ({ title, content, linc }) => (

    // make the card clickable
    // and open a new tab when clicked where linc is the link
    // also add a hover effect


    <div className="cartao"
        onClick={() => {
            window.open(linc)
        }}
    >
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
);
export default Card;