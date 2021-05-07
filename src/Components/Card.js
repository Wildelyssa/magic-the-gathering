import './Card.css';

const Card = (props) => {
    return (
        <div className='card'>
            <img
                src={props.imageUrl}
                alt={props.name}
                title={props.name}>
            </img>
        </div>
    )
};

export default Card;