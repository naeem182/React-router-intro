import { useLoaderData, useNavigate } from "react-router-dom"


const Userdetails = () => {
    const user = useLoaderData();
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1)
    }

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
