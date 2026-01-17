import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const UserLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutUser = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                navigate('/captain-login');
                return;
            }


            try {
                await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/users/logout`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } catch (err) {
                // Even if token is invalid/expired, log out locally
                console.error(err.response?.data || err.message);
            } finally {
                localStorage.removeItem('token');
                navigate('/login');
            }
        };

        logoutUser();
    }, [navigate]);

    return (
        <div className="h-screen flex items-center justify-center">
            Logging out...
        </div>
    );
};

export default UserLogout;
