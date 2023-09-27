import React from 'react';

const Skills = () => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Technical Skills</h3>
                <ul className="list-disc pl-6">
                    <li>Technical Skill 1</li>
                    <li>Technical Skill 2</li>
                    {/* Add more technical skills as needed */}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                <ul className="list-disc pl-6">
                    <li>Soft Skill 1</li>
                    <li>Soft Skill 2</li>
                    {/* Add more soft skills as needed */}
                </ul>
            </div>
            {/* You can continue adding more content as needed */}
        </div>
    );
};

export default Skills;
