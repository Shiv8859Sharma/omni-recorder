import GredientButton from "../components/button/gradientButton"
import Combobox from "../components/comboBox"
import PopUp from "../components/popups"
import { useScreenRecorderState } from "../lib/screenRecorder"

const options = [
    {
        value: 'screen_camera', label: 'Screen and Camera', icon: <svg viewBox="0 0 24 24" className='h-6 w-6 mr-2' fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.749 15.85h-3.41v2.196h2.603a.407.407 0 110 .814h-6.02a.407.407 0 110-.814h2.603v-2.197H2.912A1.912 1.912 0 011 13.937V6.412C1 5.356 1.856 4.5 2.912 4.5h12.04c1.057 0 1.912.856 1.912 1.912v1.88c-.279.062-.55.143-.813.244V6.412c0-.607-.492-1.098-1.098-1.098H2.912c-.607 0-1.098.491-1.098 1.098v7.525c0 .607.491 1.099 1.098 1.099h9.601c.059.279.138.55.236.813z" fill="currentColor"></path>
            <path d="M9.339 15.85v-.5a.5.5 0 00-.5.5h.5zm3.41 0v.5a.5.5 0 00.468-.676l-.468.175zm-3.41 2.196h-.5a.5.5 0 00.5.5v-.5zm-.814 0v.5a.5.5 0 00.5-.5h-.5zm0-2.197h.5a.5.5 0 00-.5-.5v.5zm8.34-7.556l.106.488a.5.5 0 00.393-.488h-.5zm-.814.243h-.5a.5.5 0 00.679.467l-.18-.467zm-7.124 6.5v.5h.003l-.003-.5zm.005 0l.004-.5h-.007l.003.5zm.006 0l-.003.5h.003v-.5zm3.575 0l.49-.103a.5.5 0 00-.49-.397v.5zm-3.174 1.313h3.41v-1h-3.41v1zm.5 1.697v-2.197h-1v2.197h1zm2.103-.5H9.34v1h2.603v-1zm.907.907c0-.501-.406-.907-.907-.907v1a.093.093 0 01-.093-.093h1zm-.907.907c.501 0 .907-.407.907-.907h-1c0-.052.042-.093.093-.093v1zm-6.02 0h6.02v-1h-6.02v1zm-.907-.907c0 .5.406.907.907.907v-1c.051 0 .093.041.093.093h-1zm.907-.907c-.5 0-.907.406-.907.907h1a.093.093 0 01-.093.093v-1zm2.603 0H5.922v1h2.603v-1zm-.5-1.697v2.197h1v-2.197h-1zm-5.113.5h5.613v-1H2.912v1zM.5 13.937a2.412 2.412 0 002.412 2.412v-1c-.78 0-1.412-.632-1.412-1.412h-1zm0-7.525v7.525h1V6.412h-1zM2.912 4A2.412 2.412 0 00.5 6.412h1C1.5 5.632 2.132 5 2.912 5V4zm12.04 0H2.913v1h12.04V4zm2.412 2.412A2.412 2.412 0 0014.954 4v1c.78 0 1.412.632 1.412 1.412h1zm0 1.88v-1.88h-1v1.88h1zm-1.134.71c.239-.09.486-.165.741-.22l-.213-.978a6.15 6.15 0 00-.886.265l.358.934zm.32-.466V6.412h-1v2.124h1zm0-2.124c0-.883-.715-1.598-1.597-1.598v1c.33 0 .598.267.598.598h1zm-1.597-1.598H2.912v1h12.04v-1zm-12.041 0c-.883 0-1.598.715-1.598 1.598h1c0-.33.267-.598.598-.598v-1zM1.314 6.412v7.525h1V6.412h-1zm0 7.525c0 .883.715 1.599 1.598 1.599v-1a.598.598 0 01-.598-.599h-1zm1.598 1.599h6.014v-1H2.913v1zm6.018 0h.006l-.007-1h-.006l.007 1zm-.001 0h.006l.006-1h-.005l-.007 1zm.009 0h3.575v-1H8.938v1zm4.28.138a5.163 5.163 0 01-.216-.741l-.978.206c.064.304.15.6.257.885l.936-.35z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M19 11.75a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm-4.5 2.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z" fill="currentColor"></path>
        </svg>
    },
    { value: 'screen_only', label: 'Screen Only', icon: <svg viewBox="0 0 24 24" className='h-6 w-6 mr-2' fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M9.589 16.104a1 1 0 01.868-.504h3.086a1 1 0 01.868.504l2.057 3.6A1 1 0 0115.6 21.2H8.4a1 1 0 01-.868-1.496l2.057-3.6zm1.448 1.496l-.914 1.6h3.754l-.915-1.6h-1.925z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M2 6a3 3 0 013-3h14a3 3 0 013 3v8.6a3 3 0 01-3 3H5a3 3 0 01-3-3V6zm3-1a1 1 0 00-1 1v8.6a1 1 0 001 1h14a1 1 0 001-1V6a1 1 0 00-1-1H5z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M21 14H3v-2h18v2z" fill="currentColor"></path></svg> },
    {
        value: 'camera_only', label: 'Camera Only', icon: <svg viewBox="0 0 24 24" className='h-6 w-6 mr-2' fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M7.85625 15.9409C8.41314 15.3469 9.18276 15 10 15H14C14.8172 15 15.5869 15.3469 16.1438 15.9409C16.6986 16.5327 17 17.3224 17 18.1333V18.4C17 18.9523 16.5523 19.4 16 19.4C15.4477 19.4 15 18.9523 15 18.4V18.1333C15 17.8127 14.88 17.5171 14.6847 17.3088C14.4914 17.1026 14.2436 17 14 17H10C9.75637 17 9.50858 17.1026 9.31532 17.3088C9.12002 17.5171 9 17.8127 9 18.1333V18.4C9 18.9523 8.55228 19.4 8 19.4C7.44772 19.4 7 18.9523 7 18.4V18.1333C7 17.3224 7.30141 16.5327 7.85625 15.9409Z" fill="currentColor"></path>
            <path fillRule="evenodd" clipRule="evenodd" d="M11.9997 9C11.2265 9 10.5997 9.6268 10.5997 10.4C10.5997 11.1732 11.2265 11.8 11.9997 11.8C12.7729 11.8 13.3997 11.1732 13.3997 10.4C13.3997 9.6268 12.7729 9 11.9997 9ZM8.59972 10.4C8.59972 8.52223 10.122 7 11.9997 7C13.8775 7 15.3997 8.52223 15.3997 10.4C15.3997 12.2778 13.8775 13.8 11.9997 13.8C10.122 13.8 8.59972 12.2778 8.59972 10.4Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"></path>
        </svg>
    },
];

let microPhoneOptions = [
    {
        value: 'on',
        label: 'On',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g id="Microphone_On"><g><path d="M11.989,2.065a4.507,4.507,0,0,0-4.5,4.5v5.76a4.5,4.5,0,0,0,9,0V6.565A4.507,4.507,0,0,0,11.989,2.065Zm0,13.76a3.5,3.5,0,0,1-3.5-3.5V6.565a3.5,3.5,0,0,1,6.94-.62h-1.87a.5.5,0,0,0-.5.5.5.5,0,0,0,.5.5h1.93v2h-1.93a.5.5,0,0,0-.5.5.508.508,0,0,0,.5.5h1.93v2h-1.94a.508.508,0,0,0-.5.5.515.515,0,0,0,.5.5h1.88A3.492,3.492,0,0,1,11.989,15.825Z"></path><path d="M12.489,18.925v2.01h3.5a.5.5,0,0,1,0,1h-8a.5.5,0,0,1,0-1h3.5v-1.99a6.055,6.055,0,0,1-2.74-.88,6.291,6.291,0,0,1-2.97-5.14c-.03-1.04,0-2.09,0-3.13a.5.5,0,0,1,1,0c0,1.04-.03,2.09,0,3.13A5.212,5.212,0,0,0,17.2,12.7c.01-.96,0-1.93,0-2.9a.5.5,0,0,1,1,0,26.322,26.322,0,0,1-.08,3.97A6.235,6.235,0,0,1,12.489,18.925Z"></path></g></g></svg>
    },
    {
        value: 'off',
        label: 'Off',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0.5" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><g id="Microphone_Off"><g><path d="M16.5,7.046v4.72a.5.5,0,0,1-1,0V9.946H14a.5.5,0,0,1,0-1h1.5v-2H13.57a.5.5,0,0,1,0-1h1.87a3.23,3.23,0,0,0-.2-.72,3.533,3.533,0,0,0-6.16-.59c-.36.53-1.23.03-.87-.5a4.509,4.509,0,0,1,7.71.21A5.255,5.255,0,0,1,16.5,7.046Z"></path><path d="M20.14,19.436q-2.625-2.64-5.27-5.28Q10.685,9.986,6.51,5.8c-.65-.64-1.3-1.29-1.94-1.94a.5.5,0,0,0-.71.71Q5.69,6.381,7.5,8.206v3.92a4.591,4.591,0,0,0,3.59,4.61,4.629,4.629,0,0,0,3.9-1.04c.24.24.48.47.71.71a5.252,5.252,0,0,1-6.62.67,5.2,5.2,0,0,1-2.05-2.76,7.608,7.608,0,0,1-.24-2.33v-2.2a.5.5,0,0,0-1,0,15.463,15.463,0,0,0,.34,4.99,6.276,6.276,0,0,0,5.37,4.17v1.99H8a.5.5,0,0,0,0,1h8a.5.5,0,0,0,0-1H12.5v-2a6.118,6.118,0,0,0,3.91-1.82l1.08,1.08c.65.65,1.3,1.3,1.95,1.94A.5.5,0,0,0,20.14,19.436Zm-11.2-5.42a3.991,3.991,0,0,1-.44-2.03V9.206l5.77,5.77A3.521,3.521,0,0,1,8.94,14.016Z"></path></g></g></svg>
    }
]

const PermisionPopup = () => {
    let { screenRecorderState, setScreenRecorderState, startRecording } = useScreenRecorderState()
    let { permisionPopup } = screenRecorderState

    const handleStartRecording = async () => {
        await startRecording();
        setScreenRecorderState((prev) => ({
            ...prev,
            permisionPopup: false
        }))
    };



    const handleSelect = (option, type) => {
        if (type === 'microphoneSetting') {
            setScreenRecorderState(prev => ({
                ...prev,
                microPhone: option.value,
                selectedMicroPhoneOption: option
            }));
        } else {
            setScreenRecorderState(prev => ({
                ...prev,
                recordingType: option.value,
                SelectionrecordingType: option,
                webCamera: ['screen_camera', 'camera_only'].includes(option.value)
            }));
        }
    };

    return (
        <PopUp
            show={permisionPopup}
            position='top-2 right-2'
            className='w-[30rem] z-10'
        >
            <div className='flex flex-col gap-3'>
                <header className='logo flex items-end'>
                    <img src="/logo.png" className="w-[3rem] " />
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" version="1.1" viewBox="0 0 740.49 366.41" className="-ms-2">
                        <g>
                            <path d="m373.93 137.86c10.364 0 18.802-8.4375 18.802-18.854 0-10.417-8.4376-18.802-18.802-18.802-10.417 0-18.854 8.3854-18.854 18.802 0 10.417 8.4375 18.854 18.854 18.854" fill="#202066" />
                            <path d="m359.82 187.03c-0.781-6.0417-2.9166-8.4375-7.6042-8.4375-5.052 0-10.208 4.7917-17.031 13.646-8.073 10.469-7.2396 12.865-10.886 12.865-1.4061 0-3.1249-1.9791-3.3853-4.0104-0.208-1.6146-0.156-2.8125 7.1874-12.865 14.115-19.688 27.708-29.375 39.688-29.375 10.833 0 17.812 6.0417 19.219 17.292 1.3541 10.469-1.6667 23.333-5.6251 40.26l-20.364 89.271c-1.8749 7.6563-2.6563 12.865-2.3437 15.312 0.677 5.2084 4.0104 8.8542 7.6562 8.8542 7.6042 0 14.896-8.0729 23.281-24.167 5.7814-11.25 7.5522-17.292 10.104-17.292 1.7709 0 2.6042 0.833 2.8646 2.8125 0.521 4.0104-3.3854 12.864-11.615 27.76-11.771 20.938-25.573 31.771-38.594 31.771-12.292 0-19.375-6.8229-21.094-20.521-1.5625-12.031 3.0208-32.552 10.677-62.76l12.24-48.229c3.9584-14.479 6.5625-24.948 5.625-32.188" fill="#202066" />
                            <path d="m445.7 277.55c-4.2187 18.073-6.5624 30.573-5.5208 38.594 1.7708 14.062 9.6354 21.719 23.073 21.719 11.562 0 31.354-12.083 47.604-37.812 21.354-33.802 29.063-66.354 26.406-86.875-1.9792-15.677-13.75-25.364-15.364-37.812-1.3543-10.469 2.8645-16.927 10.104-16.927 9.0625 0 16.51 10.104 18.854 28.177 3.698 28.542-3.2812 61.562-22.031 98.542-22.135 44.271-52.24 66.406-80.469 66.406-17.76 0-31.198-11.667-33.906-32.604-1.1974-9.2709-0.107-20.521 2.6562-32.604l18.386-82.031c1.5625-7.6563 2.7604-12.448 2.3437-15.677-0.625-4.8438-3.125-7.2396-6.4062-7.2396-5.4167 0-10.417 6.0417-17.656 17.292-5.7292 8.8541-4.2708 8.75-9.3229 8.75-1.4583 0-2.2916-0.833-2.6042-3.2292-0.416-3.2292 1.3542-5.9375 11.823-20.417 11.667-16.094 22.969-24.114 33.437-24.114 10.156 0 16.719 5.9895 18.229 17.656 0.885 6.875-1.2493 18.542-5.1562 35.833l-14.479 64.375" fill="#202066" />
                            <path d="m291.64 311.88c-15.052 25.104-18.333 24.323-29.636 38.49-11.406 14.271-23.021 19.01-30.781 14.271-5.6772-3.5417-6.9272-12.812 0.156-19.688 11.406-11.094 13.49 5.625 25.052-8.6459 10.99-13.49 17.604-30 21.875-43.906 11.146-36.667 11.406-68.385 9.2187-85.26-2.3438-18.49-12.031-28.958-24.375-28.958-23.125 0-48.281 32.552-71.667 98.125-16.25 45.052-13.906 68.802-23.333 68.802-2.9166 0-5.7292 0.417-8.6458 0.417-5.0522 0-7.7604-1.1979-8.4375-6.4584-0.208-1.6145 0.208-4.0104 0.573-6.8229l36.25-226.87c0.989-6.4583 1.4062-11.667 0.885-15.677-0.521-4.0104-4.5834-7.2396-10.729-7.2396-1.8228 0-3.5416 0.3645-5.7291 0.3645-4.3751 0-6.7188-1.5625-7.0313-4.0104-0.468-3.5938 2.5521-5.2083 9.1146-5.2083 27.135 0 37.865-12.083 42.604-12.083 1.0413 0 2.3437 1.6146 2.6041 3.6458 0.156 1.1979-0.364 2.8125-0.521 4.4271l-29.74 181.82c27.24-61.146 53.698-91.719 81.927-91.719 22.083 0 39.74 18.906 43.854 50.677 3.6458 28.125-2.6562 63.542-19.115 93.333l-4.3749 8.1771" fill="#202066" />
                        </g>
                    </svg>
                </header>
                <section>
                    <div className="flex flex-col gap-4">
                        <Combobox
                            label="Video settings"
                            options={options}
                            onSelect={(value) => handleSelect(value, 'videoSetting')}
                            selectedOption={screenRecorderState?.SelectionrecordingType}
                        />
                        <Combobox
                            label="Microphone settings"
                            options={microPhoneOptions}
                            onSelect={(value) => handleSelect(value, 'microphoneSetting')}
                            selectedOption={screenRecorderState?.selectedMicroPhoneOption}
                        />
                    </div>
                </section>
                <div className='flex items-center justify-center w-full'>
                    <GredientButton className='w-full' onClick={handleStartRecording}>
                        Start Recording!
                    </GredientButton>
                </div>
            </div>
        </PopUp>
    )
}

export default PermisionPopup