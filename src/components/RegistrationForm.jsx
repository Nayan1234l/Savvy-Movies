

import React, { useState } from 'react';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // onRegister(email);
        setEmail('');

    };

    return (
        <div className="flex items-center justify-center h-screen bg-blue-700">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-md ">
                <label htmlFor="email" className="block text-violet-900 mb-4 text-4xl font-bold ">Savvy Movies</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="p-2 border rounded-md mb-4"
                />
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-violet-700 text-white p-2 rounded-md"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default RegistrationForm;
