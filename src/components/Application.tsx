// application-form-page.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ApplicationForm from './ApplicationForm';


const ApplicationFormPage = () => {
    return (
        <div>
            <Header />
            <main className="container mx-auto p-4">
                <ApplicationForm />
            </main>
            <Footer />
        </div>
    );
};

export default ApplicationFormPage