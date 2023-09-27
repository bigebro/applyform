// application-form-page.js
import React from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import ApplicationForm from '../src/components/ApplicationForm';


const ApplicationFormPage = () => {
    return (
        <div className="bg-custom-blue ">
            <Header />
            <main className="mx-auto p-4 container">
                <ApplicationForm />
            </main>
            <Footer />
        </div>
    );
};

export default ApplicationFormPage