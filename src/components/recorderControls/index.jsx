import React from 'react';
import { useScreenRecorderState } from '../../lib/screenRecorder';

const RecorderControls = () => {
    const { screenRecorderState, stopRecording, togglePauseResumeRecording, formatTime, } = useScreenRecorderState();
    const recordingState = screenRecorderState?.recorder?.state || ''
    const handleStopRecording = () => {
        stopRecording();
    };
    let isDisabled = ['', 'inactive'].includes(recordingState)
    return (
        <div className="py-3 px-4 bg-gray-800 rounded-md w-full" aria-label="Recorder controls - play pause">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <div tabIndex="0" className="flex rounded-md focus:outline-none">
                            {
                                !isDisabled && <button aria-label="End Recording" data-testid="start-finish-button" className={`rounded-full ${recordingState === 'recording' ? 'p-1 bg-red-600' : 'p-1'}`} onClick={handleStopRecording}>
                                    <span className="text-white">
                                        {/* End Recording SVG icon */}
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor"></rect></svg>
                                    </span>
                                </button>
                            }

                        </div>
                        <div tabIndex="0" className="flex rounded-md focus:outline-none">
                            <button disabled={isDisabled} aria-label="Play Recording" className={`rounded-full ${recordingState === 'recording' ? 'p-0.5' : 'bg-blue-600 p-0.5'}`} onClick={togglePauseResumeRecording}>
                                <span className="text-white">
                                    {
                                        recordingState === 'recording' ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6" strokeWidth="4" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                        </svg>
                                            :
                                            <svg className="h-6 w-6" viewBox="6 0 11.999750137329102 24" fill="none"><path d="M6 6.134v11.732c0 .895 1.03 1.438 1.822.951l9.628-5.866c.733-.441.733-1.46 0-1.914L7.822 5.183C7.029 4.696 6 5.239 6 6.134z" fill="currentColor"></path></svg>
                                    }
                                </span>
                                <span className="sr-only">Play</span>
                            </button>
                        </div>
                        <div className="flex items-center space-x-2 timer">
                            <span className="text-gray-400 font-bold">{formatTime(screenRecorderState?.elapsedTime)}</span>
                        </div>
                    </div>
                </div>
                {/* <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                        <div tabIndex="0" className="flex rounded-md focus:outline-none">
                            <button aria-label="Cancel Recording" data-testid="cancel-button" className="rounded-full">
                                <span className="text-white">
                                    Cancel Recording SVG icon
                                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M4 7.2a1 1 0 011-1h14.4a1 1 0 110 2H5a1 1 0 01-1-1z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.6 5a.6.6 0 00-.6.6v.6h4.4v-.6a.6.6 0 00-.6-.6h-3.2zm5.8 1.2v-.6A2.6 2.6 0 0013.8 3h-3.2A2.6 2.6 0 008 5.6v.6H6.6a1 1 0 00-1 1v11.2A2.6 2.6 0 008.2 21h8a2.6 2.6 0 002.6-2.6V7.2a1 1 0 00-1-1h-1.4zm-8.8 2v10.2a.6.6 0 00.6.6h8a.6.6 0 00.6-.6V8.2H7.6z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M10.6 10.2a1 1 0 011 1V16a1 1 0 11-2 0v-4.8a1 1 0 011-1zM13.8 10.2a1 1 0 011 1V16a1 1 0 01-2 0v-4.8a1 1 0 011-1z" fill="currentColor"></path></svg>
                                </span>
                            </button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default RecorderControls;
