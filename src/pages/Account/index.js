import Footer from "../../Components/Footer";
import AccountBody from "../../Components/AccountBody";
import Header from "../../Components/Header";
import AccountHeader from "../../Components/AccountHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function AccountPage() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const id = useSelector((state) => state.userId );
    console.log(useSelector((state) => state.userId ));

    useEffect(() => {
        axios({
            method: 'get',
            url: `http://localhost:8080/${id}`,
            responseType: 'json'
        }).then(function (response) {
            const dataArray = response.data;
            const filteredList = dataArray.map(item => ({
                id: item.id,
                name: item.name,
                surname: item.surname,
                email: item.email,
                password: item.password,
                about: item.about
            }));
            console.log(dataArray);
            setUser(filteredList);
            setLoading(false);
        }).catch(function (error) {
            console.error('Error fetching data:', error);
            setError(error);
            setLoading(false);
        });
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <Header />
            {user.length > 0 && (
                <>
                    <AccountHeader name={user[0].name} email={user[0].email} />
                    <AccountBody about={user[0].about} />
                </>
            )}
            <Footer />
        </div>
    );
}

export default AccountPage;
