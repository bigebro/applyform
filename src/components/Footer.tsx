import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Company Section */}
                <div>
                    <h2 className="text-xl font-semibold">Компани</h2>
                    <ul className="mt-4 space-y-2">
                        <li>Бидний тухай</li>
                        <li>Бидний баг</li>
                        <li>Карер</li>
                    </ul>
                </div>
                {/* Projects Section */}
                <div>
                    <h2 className="text-xl font-semibold">Төслийн жагсаалт</h2>
                    <ul className="mt-4 space-y-2">
                        <li>Онлайн хичээл</li>
                        <li>Вебинар</li>
                        <li>Үйл явдал</li>
                    </ul>
                </div>
                {/* Download App Section */}
                <div>
                    <h2 className="text-xl font-semibold">Апп татаж авах</h2>
                    <ul className="mt-4 space-y-2">
                        <li>iOS</li>
                        <li>Android</li>
                    </ul>
                </div>
                {/* Address and Contact */}
                <div>
                    <h2 className="text-xl font-semibold">Холбоо барих</h2>
                    <ul className="mt-4 space-y-2">
                        <li>1013 тоот, Central tower, Улаанбаатар хот</li>
                        <li>Имэйл: info@meborny.com</li>
                        <li>Утас: +1 (123) 456-7890</li>
                    </ul>
                </div>
            </div>
            {/* Company Name and Founded Years */}
            <div className="text-center mt-8">
                <p>МИБОРНИ ХХК 2014-2023 &copy; </p>
            </div>
        </footer>
    );
};

export default Footer;
