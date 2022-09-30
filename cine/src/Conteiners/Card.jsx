import '../Styles/Card.css'

function Card(props) {
    return (
        <>
        <p className='name'>{props.dt}</p>
        <input type={props.tipo} className='datos'/>
        </>
     );
}

export default Card;