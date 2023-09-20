import { useLoaderData, useNavigate, useParams } from "react-router-dom"


const Userdetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const { userId } = useParams()
    const handleGoBack = () => {
        navigate(-1)
    }
    console.log(userId)
    const { name, website } = user;
    return (
        <div>
            <h2>Details about user: {name}</h2>
            <p>Website: {website}</p>
            <button onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default Userdetails
