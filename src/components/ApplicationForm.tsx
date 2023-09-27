import React, { useState } from 'react';
import PersonalInfo from './PersonaInfo';
import FamilyEducation from './FamilyEducation';
import Skills from './Skills';
import JobsAwards from './JobsAwards';
import Others from './Others';


const steps = [
    { component: PersonalInfo, label: 'Үндсэн ба хувийн мэдээлэл' },
    { component: FamilyEducation, label: 'Гэр бүл ба боловсрол' },
    { component: Skills, label: 'Ур чадвар' },
    { component: JobsAwards, label: 'Ажил эрхлэлт болон шагналууд' },
    { component: Others, label: 'Бусад' },
];

const ApplicationForm = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        // Add your form submission logic here
    };

    return (
        <div className={"container"}>
            <h1 className="text-2xl font-bold mb-4 text-white ">Ажлын анкет</h1>

            <div className="flex space-x-4 mb-4 text-white">
                {steps.map((step, index) => (
                    <>
                    <div
                        key={step.label}
                        className={`${
                            currentStep === index
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-300 text-gray-700'
                        } rounded-full w-8 h-8 flex items-center justify-center cursor-pointer`}
                        onClick={() => setCurrentStep(index)}
                    >
                        {index + 1}
                    </div>
                    <div className="flex items-center">{step.label}</div></>
                    ))}
            </div>


            <div>
                {React.createElement(steps[currentStep].component)}

                <div className="mt-4 mx-auto flex justify-between ">
                    {currentStep > 0 && (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handlePrev}
                        >
                         Дараагийн алхам
                        </button>
                    )}
                    {currentStep < steps.length - 1 && (
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={handleNext}
                        >
                            Өмнөх алхам
                        </button>
                    )}
                    {currentStep === steps.length - 1 && (
                        <button
                            className="bg-green-500 text-white px-4 py-2 rounded"
                            onClick={handleSubmit}
                        >
                            анкет илгээх
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ApplicationForm;