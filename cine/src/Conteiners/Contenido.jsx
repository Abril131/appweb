import Card from "./Card";
import '../Styles/Contenido.css'

function Contenido() {

    const data = [
        {
            dt: "Nombre:",
            tipo: "text"
        }, {
            dt: "Apellido:",
            tipo: "text"
        }, {
            dt: "Edad: ",
            tipo: "number"
        }, {
            dt: "Area de trabajo:",
            tipo: "text"
        },
        {
            dt: "Fecha de nacimiento:",
            tipo: "date"
        }, {
            dt: "Numero de telefono:",
            tipo: "numbber"
        },
        {
            dt: "Correo:",
            tipo: "email"
        },
        {
            dt: "Contraseña:",
            tipo: "password"
        }
    ];

    return (
        <div className="conteiner">
            <div className='bote'>
            {data.map((item) => {
                return (<Card dt={item.dt} tipo={item.tipo} />)
            })}
            <input type="button" value="GUARDAR" className="boton"/>
            </div>
        </div>
    );
}

export default Contenido;