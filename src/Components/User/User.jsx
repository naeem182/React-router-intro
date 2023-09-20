import { Link, useNavigate } from "react-router-dom"


const User = ({ user }) => {

    const { id, name, email, phone } = user;
    const navigate = useNavigate();
    const handleToShowUser = () => {
        navigate(`./${id}`)
    }

    const userStyle = {
        border: '2px solid yellow',
        padding: '5px',
        borderRadius: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>email:{email}</p>
            <p>phone:{phone}</p>


            <Link to={`/user/${id}`}><button>Click Me</button></Link>
            <button onClick={handleToShowUser}>show user details</button>
        </div>
    )
}

export default User
