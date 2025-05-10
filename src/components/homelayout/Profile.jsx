import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Profile = () => {
  const { user, updateUser, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async () => {
    try {
      await updateUser({ displayName: name, photoURL });
      setSuccess('Profile updated successfully!');
      setError('');
    } catch (error) {
      setError('Failed to update profile.');
      setSuccess('');
    }
  };

  return (
    <div className='bg-gradient-to-b from-gray-100 to-green-200 flex justify-center items-center min-h-screen shadow'>
<div className="w-96 h-96 mx-auto my-10 p-6  border rounded-lg shadow-md bg-white ">
      <h2 className="text-2xl font-semibold mb-4 text-center">Your Profile</h2>
      <div className="flex flex-col items-center gap-4">
        <img
          src={photoURL || 'https://i.ibb.co.com/mCtVwWf7/user.png'}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border"
        />

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Enter photo URL"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="input input-bordered w-full"
        />
        <button onClick={handleUpdate} className="btn btn-primary w-full">
          Update Information
        </button>

        {success && <p className="text-green-600 text-sm">{success}</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </div>
    </div>
    </div>
    
  );
};

export default Profile;
