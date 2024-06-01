// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const AdminUser = () => {
//     const [userDetails, setUserDetails] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const token = localStorage.getItem('token');
//         if (token) {
//             fetchUserDetails(token);
//         } else {
//             console.log("No token found in localStorage");
//             setLoading(false);
//         }
//     }, []);

//     const fetchUserDetails = (token) => {
//         axios.get("https://ecommerce-ryoy.onrender.com/getuser", {
//             headers: {
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//         .then((res) => {
//             console.log("API Response:", res);
//             if (res.data) {
//                 setUserDetails(res.data);
//                 console.log("User details:", res.data);
//             } else {
//                 console.log("Response data is missing user details:", res.data);
//                 setUserDetails([]);
//             }
//             setLoading(false);
//         })
//         .catch((error) => {
//             console.log("Error fetching user details:", error);
//             setLoading(false);
//         });
//     };

//     // const deleteUser = async (userId) => {
//     //     console.log("Attempting to delete user with ID:", userId);
//     //     try {
//     //         const token = localStorage.getItem('token');
//     //         if (!token) {
//     //             throw new Error('Authentication token not found');
//     //         }
    
//     //         const response = await axios.delete(`https://ecommerce-ryoy.onrender.com/deleteuser/${userId}`, {
//     //             headers: {
//     //                 'Authorization': `Bearer ${token}`
//     //             }
//     //         });
    
//     //         console.log("Delete response:", response);
    
//     //         if (response.status === 200 || response.status === 204) { // Check for 204 No Content as well
//     //             // Remove the deleted user from state
//     //             setUserDetails(prevUserDetails => prevUserDetails.filter(user => user._id !== userId));
//     //             alert('User deleted successfully.');
//     //         } else {
//     //             console.error('Error deleting user:', response);
//     //             alert('An error occurred while deleting the user. Please try again later.');
//     //         }
//     //     } catch (error) {
//     //         console.error('Error deleting user:', error.response.data.message || error.message);
//     //         alert('An error occurred while deleting the user. Please try again later.');
//     //     }
//     // };
    
//     const deleteUser = async (userId) => {
//         console.log("Attempting to delete user with ID:", userId);
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 throw new Error('Authentication token not found');
//             }
    
//             const response = await axios.delete(`https://ecommerce-ryoy.onrender.com/deleteuser/${userId}`, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });
    
//             console.log("Delete response:", response);
    
//             if (response.status === 200 || response.status === 204) {
//                 setUserDetails(prevUserDetails => prevUserDetails.filter(user => user._id !== userId));
//                 alert('User deleted successfully.');
//             } else {
//                 console.error('Error deleting user:', response);
//                 if (response.status === 404 && response.data && response.data.message) {
//                     alert(response.data.message);
//                 } else {
//                     alert('An error occurred while deleting the user. Please try again later.');
//                 }
//             }
//         } catch (error) {
//             console.error('Error deleting user:', error);
//             alert('An error occurred while deleting the user. Please try again later.');
//         }
//     };
    
    

//     return (
//         <div className="container">
//             <h2 className="mt-5">User Details</h2>
//             {loading ? (
//                 <p>Loading user details...</p>
//             ) : (
//                 <table className="table table-bordered mt-3">
//                     <thead>
//                         <tr>
//                             <th>User Name</th>
//                             <th>Password</th>
//                             <th>Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userDetails.length > 0 ? (
//                             userDetails.map((user, index) => (
//                                 <tr key={index}>
//                                     <td>{user.username}</td>
//                                     <td>{user.password}</td>
//                                     <td>
//                                         <button 
//                                             className="btn btn-danger"
//                                             onClick={() => deleteUser(user._id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         ) : (
//                             <tr>
//                                 <td colSpan="3">No user details found.</td>
//                             </tr>
//                         )}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default AdminUser;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminUser = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserDetails(token);
        } else {
            console.log("No token found in localStorage");
            setLoading(false);
        }
    }, []);

    const fetchUserDetails = (token) => {
        axios.get("https://ecommerce-ryoy.onrender.com/getuser", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log("API Response:", res);
            if (res.data) {
                setUserDetails(res.data);
                console.log("User details:", res.data);
            } else {
                console.log("Response data is missing user details:", res.data);
                setUserDetails([]);
            }
            setLoading(false);
        })
        .catch((error) => {
            console.log("Error fetching user details:", error);
            setLoading(false);
        });
    };

    const deleteUser = async (userId) => {
        console.log("Attempting to delete user with ID:", userId);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Authentication token not found');
            }
    
            const response = await axios.delete(`https://ecommerce-ryoy.onrender.com/deleteuser/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            console.log("Delete response:", response);
    
            if (response.status === 200 || response.status === 204) {
                setUserDetails(prevUserDetails => prevUserDetails.filter(user => user._id !== userId));
                alert('User deleted successfully.');
            } else {
                console.error('Error deleting user:', response);
                if (response.status === 404 && response.data && response.data.message) {
                    alert(response.data.message);
                } else {
                    alert('An error occurred while deleting the user. Please try again later.');
                }
            }
        } catch (error) {
            console.error('Error deleting user:', error);
            alert('An error occurred while deleting the user. Please try again later.');
        }
    };

    return (
        <div className="container">
            <h2 className="mt-5">User Details</h2>
            {loading ? (
                <p>Loading user details...</p>
            ) : (
                <div className="table-responsive">
                    <table className="table table-bordered mt-3">
                        <thead>
                            <tr>
                                <th>User Name</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.length > 0 ? (
                                userDetails.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td>
                                            <button 
                                                className="btn btn-danger"
                                                onClick={() => deleteUser(user._id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="3">No user details found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default AdminUser;


