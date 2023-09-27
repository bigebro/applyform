import React from 'react';

const Header = () => {
    return (<>
        <header className="bg-blue-900 text-red py-4">
        {/*    <div className="flex items-center space-x-4">*/}
        {/*    /!* Contact and Sign In *!/*/}
        {/*    <div>*/}
        {/*        <a href="#">Холбоо барих</a>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <a href="#">Нэвтрэх</a>*/}
        {/*    </div>*/}
        {/*    /!* Social Icons *!/*/}
        {/*    <div className="flex space-x-2">*/}
        {/*        <a href="#">*/}
        {/*            <i className="fab fa-facebook"></i>*/}
        {/*        </a>*/}
        {/*        <a href="#">*/}
        {/*            <i className="fab fa-twitter"></i>*/}
        {/*        </a>*/}
        {/*        <a href="#">*/}
        {/*            <i className="fab fa-linkedin"></i>*/}
        {/*        </a>*/}
        {/*    </div>*/}
        {/*</div>*/}
            <div className="container mx-auto flex justify-between items-center">
                {/* Upper section */}
                <div className="flex items-center space-x-4 ">
                    {/* Logo */}
                    <div>
                        <img src="https://meborny.mn/static/black.png" alt="MeBorny Education" className="w-[137px] h-[40px]" />
                    </div>
                    <div className="flex space-x-2">
                        <a href="#">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
                {/* Lower section */}
                <div className="flex items-center space-x-6 text-[15px] uppercase text-white">

                    {/* Navigation */}
                    <nav className="space-x-6">
                        <a href="#">Нүүр</a>
                        <a href="#">Бидний тухай</a>
                        <a href="#">Хичээлүүд</a>
                        <a href="#">Холбоо барих</a>
                    </nav>
                    {/* Toggle Background Color */}
                    {/*<div className="bg-blue-500 w-8 h-8 rounded-full cursor-pointer"></div>*/}
                </div>
            </div>
        </header></>
    );
};

export default Header;