// pages/application-form/index.tsx
import React from 'react';
import PersonaInfo from '../../src/components/PersonaInfo';
import FamilyEducation from '../../src/components/FamilyEducation';
import Skills from '../../src/components/Skills';
import JobsAwards from '../../src/components/JobsAwards';
import Others from '../../src/components/Others';

const ApplicationFormPage = () => {
    // Form submission and validation logic here

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Application Form</h1>
            <PersonaInfo />
            <FamilyEducation />
            <Skills />
            <JobsAwards />
            <Others />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
            >
                Send Application
            </button>
        </div>
    );
};

export default ApplicationFormPage;
