import React, { useState, useEffect, useRef } from 'react';

const Combobox = ({ label = '', options = [], selectedOption = '', onSelect = () => { } }) => {
    const [isOpen, setIsOpen] = useState(false);
    const comboboxRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (option) => {
        onSelect(option);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (comboboxRef.current && !comboboxRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={comboboxRef} className="relative flex flex-col gap-3">
            <div className="font-bold">{label}</div>
            <div role="listbox" className="relative inline-block w-full">
                <button
                    type="button"
                    role="button"
                    className="flex items-center border border-black w-full h-10 rounded-full justify-between px-4 py-2 bg-white"
                    onClick={toggleDropdown}
                >
                    <span className="flex items-center">
                        {selectedOption?.icon}
                        <span className="">
                            {selectedOption ? selectedOption?.label : 'Select an option'}
                        </span>
                    </span>
                    <span className="em-lns-bkdk6o">
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.29289 9.29289C6.68342 8.90237 7.31658 8.90237 7.70711 9.29289L12 13.5858L16.2929 9.29289C16.6834 8.90237 17.3166 8.90237 17.7071 9.29289C18.0976 9.68342 18.0976 10.3166 17.7071 10.7071L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L6.29289 10.7071C5.90237 10.3166 5.90237 9.68342 6.29289 9.29289Z" fill="currentColor"></path>
                        </svg>
                    </span>
                </button>
                {isOpen && (
                    <ul className="absolute z-10 mt-1 w-full bg-white border rounded-lg border-gray-300 rounded-md shadow">
                        {options.map((option) => (
                            <li
                                key={option?.value}
                                role="option"
                                className="cursor-pointer hover:bg-gray-100 px-4 py-2 flex items-center"
                                onClick={() => handleSelect(option)}
                            >
                                {option?.icon}
                                {option?.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Combobox;
