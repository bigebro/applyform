import React from 'react';

const JobsAwards = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Jobs & Awards</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
                <div className="mb-2">
                    <p className="text-lg font-semibold">Job Title</p>
                    <p className="text-gray-600">Company Name</p>
                    <p className="text-gray-600">Location</p>
                    <p className="text-gray-600">Date</p>
                </div>
                <p className="text-gray-800">
                    Description of work experience. You can add more details here.
                </p>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Awards & Honors</h3>
                <div className="mb-2">
                    <p className="text-lg font-semibold">Award Title</p>
                    <p className="text-gray-600">Organization</p>
                    <p className="text-gray-600">Date</p>
                </div>
                <p className="text-gray-800">
                    Description of the award or honor. You can add more details here.
                </p>
            </div>
            {/* You can continue adding more work experience or awards sections as needed */}
        </div>
    );
};

export default JobsAwards;
