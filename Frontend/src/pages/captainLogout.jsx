import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

const CaptainLogout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logoutCaptain = async () => {
            const token = localStorage.getItem('token');
            
            if (!token) {
                navigate('/captain-login');
                return;
            }


            try {
                await axios.get(
                    `${import.meta.env.VITE_BASE_URL}/captains/logout`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
            } catch (err) {
                // Even if token is invalid, still log out on frontend
                console.error(err.response?.data || err.message);
            } finally {
                localStorage.removeItem('token');
                navigate('/captain-login');
            }
        };

        logoutCaptain();
    }, [navigate]);

    return (
        <div className="h-screen flex items-center justify-center">
            Logging out...
        </div>
    );
};

export default CaptainLogout;
