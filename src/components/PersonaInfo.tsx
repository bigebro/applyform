import React, { useState } from 'react';

const PersonalInfo = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="fullName" className="block text-lg font-medium text-gray-800 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-lg font-medium text-gray-800 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phoneNumber" className="block text-lg font-medium text-gray-800 mb-2">
                            Phone Number
                        </label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 text-gray-800"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-lg font-medium text-gray-800 mb-2">
                            Address
                        </label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-500 text-gray-800"
                        />
                    </div>
                    {/* Continue adding more fields */}
                </form>
            </div>
        </>
    );
};

export default PersonalInfo;
