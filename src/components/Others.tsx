import React from 'react';

const Others = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Others</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Certifications</h3>
                <div className="mb-2">
                    <p className="text-lg font-semibold">Certification Name</p>
                    <p className="text-gray-600">Issuing Organization</p>
                    <p className="text-gray-600">Date</p>
                </div>
                <p className="text-gray-800">
                    Description of the certification. You can add more details here.
                </p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Languages</h3>
                <div className="mb-2">
                    <p className="text-lg font-semibold">Language Name</p>
                    <p className="text-gray-600">Proficiency Level</p>
                </div>
                <p className="text-gray-800">
                    Description of language proficiency. You can add more details here.
                </p>
            </div>
            {/* You can continue adding more certification or language sections as needed */}
        </div>
    );
};

export default Others;
