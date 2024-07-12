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
//                 <div className="table-responsive">
//                     <table className="table table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th>User Name</th>
//                                 <th>Password</th>
//                                 <th>Action</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {userDetails.length > 0 ? (
//                                 userDetails.map((user, index) => (
//                                     <tr key={index}>
//                                         <td>{user.username}</td>
//                                         <td>{user.password}</td>
//                                         <td>
//                                             <button 
//                                                 className="btn btn-danger"
//                                                 onClick={() => deleteUser(user._id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="3">No user details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminUser;

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

//     const forgetPassword = async (userId) => {
//         console.log("Attempting to send forget password request for user with ID:", userId);
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 throw new Error('Authentication token not found');
//             }

//             const response = await axios.put(`https://ecommerce-ryoy.onrender.com/forgetpassword/${userId}`, {}, {
//                 headers: {
//                     'Authorization': `Bearer ${token}`
//                 }
//             });

//             console.log("Forget password response:", response);

//             if (response.status === 200) {
//                 alert('Password reset link sent successfully.');
//             } else {
//                 console.error('Error sending password reset link:', response);
//                 alert('An error occurred while sending the password reset link. Please try again later.');
//             }
//         } catch (error) {
//             console.error('Error sending password reset link:', error);
//             if (error.response) {
//                 console.error('Server responded with:', error.response.data);
//                 alert(`Error: ${error.response.data.message || 'An error occurred while sending the password reset link. Please try again later.'}`);
//             } else {
//                 alert('An error occurred while sending the password reset link. Please try again later.');
//             }
//         }
//     };

//     return (
//         <div className="container">
//             <h2 className="mt-5">User Details</h2>
//             {loading ? (
//                 <p>Loading user details...</p>
//             ) : (
//                 <div className="table-responsive">
//                     <table className="table table-bordered mt-3">
//                         <thead>
//                             <tr>
//                                 <th>User Name</th>
//                                 <th>Password</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {userDetails.length > 0 ? (
//                                 userDetails.map((user, index) => (
//                                     <tr key={index}>
//                                         <td>{user.username}</td>
//                                         <td>{user.password}</td>
//                                         <td>
//                                             <button 
//                                                 className="btn btn-danger"
//                                                 onClick={() => deleteUser(user._id)}
//                                             >
//                                                 Delete
//                                             </button>
//                                             <button 
//                                                 className="btn btn-warning ms-2"
//                                                 onClick={() => forgetPassword(user._id)}
//                                             >
//                                                 Forget Password
//                                             </button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ) : (
//                                 <tr>
//                                     <td colSpan="3">No user details found.</td>
//                                 </tr>
//                             )}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AdminUser;

import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "../component/forgetPassword.css"

const AdminUser = () => {
    const [userDetails, setUserDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [userIdForReset, setUserIdForReset] = useState(null);
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
        axios.get("https://ecommerce-vyte.onrender.com/getuser", {
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
    
            const response = await axios.delete(`https://ecommerce-vyte.onrender.com/deleteuser/${userId}`, {
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

    const forgetPassword = (userId) => {
        console.log("Attempting to send forget password request for user with ID:", userId);
        setUserIdForReset(userId);
        setShowPopup(true);
    };

    const handleResetPassword = async () => {
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Authentication token not found');
            }

            const response = await axios.put(`https://ecommerce-vyte.onrender.com/forgetpassword/${userIdForReset}`, {
                newPassword,
                confirmPassword
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log("Forget password response:", response);

            if (response.status === 200) {
                alert('Password reset link sent successfully.');
                setShowPopup(false); // Hide the popup after successful reset
                setNewPassword(""); // Clear newPassword field
                setConfirmPassword(""); // Clear confirmPassword field
            } else {
                console.error('Error sending password reset link:', response);
                alert('An error occurred while sending the password reset link. Please try again later.');
            }
        } catch (error) {
            console.error('Error sending password reset link:', error);
            if (error.response) {
                console.error('Server responded with:', error.response.data);
                alert(`Error: ${error.response.data.message || 'An error occurred while sending the password reset link. Please try again later.'}`);
            } else {
                alert('An error occurred while sending the password reset link. Please try again later.');
            }
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
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userDetails.length > 0 ? (
                                userDetails.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.username}</td>
                                        <td>{user.password}</td>
                                        <td className=''>
                                            <button 
                                                className="btn btn-danger ms-2 my-2 "
                                                onClick={() => deleteUser(user._id)}
                                            >
                                                Delete
                                            </button>
                                           <div>
                                           <button 
                                                className="btn btn-warning ms-2 text-white"
                                                onClick={() => forgetPassword(user._id)}
                                            >
                                                Forget Password
                                            </button>
                                           </div>
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
            {showPopup && (
                <div className="popup">
                    <div className="popup-inner">
                        <h3>Reset Password</h3>
                        <input 
                            type="password" 
                            placeholder="New Password" 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            placeholder="Confirm Password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                        <button onClick={handleResetPassword} className='mt-3 btn-buy-now'>Reset Password</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminUser;






