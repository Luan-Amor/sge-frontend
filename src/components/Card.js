import imageEvent from '../assets/images/evento.png'


export const Card = ({item}) => {
    return (
        <div className="card m-2 shadow" style={{"width": "18rem"}}>
            <img src={imageEvent} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
            </div>
        </div>
    )
}