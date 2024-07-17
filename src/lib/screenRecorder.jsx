import { createContext, useContext, useEffect, useState } from 'react';

const ScreenRecorderContext = createContext();

export const useScreenRecorderState = () => useContext(ScreenRecorderContext);
export const ScreenRecorderConsumer = ScreenRecorderContext.Consumer;

export const ScreenRecorderProvider = ({ children }) => {
    const [screenRecorderState, setScreenRecorderState] = useState({
        microPhone: 'on',
        recordingType: 'screen_camera',
        permisionPopup: false,
        screenControlsButtons: false,
        webCamera: false,
        cameraStream: null,
        screenStream: null,
        combinedStream: null,
        recorder: null,
        recordingChunks: [],
        countdown: 0,
        elapsedTime: 0,
        previewPopup: false,
        blob: ''
    });

    useEffect(() => {
        let timerInterval;
        if (screenRecorderState?.recorder && screenRecorderState.recorder.state === 'recording') {
            timerInterval = setInterval(() => {
                setScreenRecorderState(prevState => ({
                    ...prevState,
                    elapsedTime: prevState.elapsedTime + 1
                }));
            }, 1000);
        } else {
            clearInterval(timerInterval);
        }
        return () => clearInterval(timerInterval);
    }, [screenRecorderState?.recorder?.state]);

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours}:${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
        } else {
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }
    };


    const getCameraStream = async () => {
        try {
            return await navigator.mediaDevices.getUserMedia({
                audio: screenRecorderState.microPhone === 'on',
                video: true,
            });
        } catch (error) {
            console.error(`${error.name}: ${error.message}`);
            alert('Error accessing camera. Please check if your camera is connected and permissions are granted.');
            return await navigator.mediaDevices.getUserMedia({
                audio: false,
                video: true,
            })
        }
    };

    const getScreenStream = async () => {
        try {
            return await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: screenRecorderState.microPhone === 'on'
            });
        } catch (error) {
            console.error(`${error.name}: ${error.message}`);
            alert('Error accessing screen. Please check if permissions are granted.');
            return await navigator.mediaDevices.getDisplayMedia({
                video: true,
                audio: false
            });
        }
    };
    useEffect(() => {
        checkMicrophonePermission();
    }, []);

    const checkMicrophonePermission = async () => {
        try {
            const result = await navigator.permissions.query({ name: 'microphone' });
            const cameraresult = await navigator.permissions.query({ name: 'camera' });
            setScreenRecorderState((prevState) => ({
                ...prevState,
                microphonePermission: result.state,
                cameraPermission: cameraresult?.state
            }))

            result.onchange = () => {
                setScreenRecorderState(prevState => ({
                    ...prevState,
                    microphonePermission: result.state
                }));
            };

            cameraresult.onchange = () => {
                setScreenRecorderState(prevState => ({
                    ...prevState,
                    cameraPermission: cameraresult.state
                }));
            };
        } catch (error) {
            console.error('Error checking microphone permission: ', error);
        }
    };

    const startRecording = async () => {
        let { recordingType } = screenRecorderState;
        let cameraStream = recordingType.includes('camera') ? await getCameraStream() : null;
        let screenStream = recordingType.includes('screen') ? await getScreenStream() : null;

        let combinedStream = new MediaStream();

        if (!cameraStream && !screenStream) {
            alert('Unable to access any media devices.');
            return;
        }

        if (screenStream) {
            screenStream.getTracks().forEach(track => combinedStream.addTrack(track));
        }
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => combinedStream.addTrack(track));
        }

        let recorder = new MediaRecorder(combinedStream);
        let recordingChunks = [];

        recorder.ondataavailable = event => {
            if (event.data.size > 0) {
                recordingChunks.push(event.data);
            }
        };

        recorder.onstop = () => {
            const blob = new Blob(recordingChunks, { type: 'video/webm' });
            const url = URL.createObjectURL(blob);
            cleanupStreams(cameraStream, screenStream, combinedStream, url, blob); // Clean up after recording stops
        };

        setScreenRecorderState(prevState => ({
            ...prevState,
            cameraStream,
            screenStream,
            combinedStream,
            recorder,
            recordingChunks,
            countdown: 3,
            elapsedTime: 0,
        }));

        // Countdown logic
        let countdown = 3;
        const countdownInterval = setInterval(() => {
            countdown -= 1;
            setScreenRecorderState(prevState => ({ ...prevState, countdown }));
            if (countdown === 0) {
                clearInterval(countdownInterval);
                recorder.start();
            }
        }, 1000);
    };

    const stopRecording = () => {
        let { recorder } = screenRecorderState;
        if (recorder) {
            recorder.stop();
        } else {
            cleanupStreams(); // Ensure cleanup if recorder is null
        }
    };


    const togglePauseResumeRecording = () => {
        let { recorder, isPaused } = screenRecorderState;
        if (recorder) {
            if (isPaused) {
                recorder.resume();
            } else if (recorder.state === 'recording') {
                recorder.pause();
            }
            setScreenRecorderState(prevState => ({
                ...prevState,
                isPaused: !isPaused
            }));
        }
    };


    const cleanupStreams = (...rest) => {
        let [cameraStream, screenStream, combinedStream, url, blob] = rest;
        if (cameraStream) {
            cameraStream.getTracks().forEach(track => track.stop());
        }
        if (screenStream) {
            screenStream.getTracks().forEach(track => track.stop());
        }
        if (combinedStream) {
            combinedStream.getTracks().forEach(track => track.stop());
        }

        setScreenRecorderState(prevState => ({
            ...prevState,
            cameraStream: null,
            screenStream: null,
            combinedStream: null,
            recorder: null,
            recordingChunks: [],
            webCamera: false,
            screenControlsButtons: false,
            permisionPopup: false, // Reset permission popup state
            elapsedTime: 0,
            countdown: 0,
            blob,
            previewPopup: true,
            previewUrl: url,
            SelectionrecordingType: '',
            selectedMicroPhoneOption:'',
            microPhone:'',
            recordingType:''
        }));
    };

    const deletePreviewStream = () => {
        setScreenRecorderState(prevState => ({
            ...prevState,
            cameraStream: null,
            screenStream: null,
            combinedStream: null,
            recorder: null,
            recordingChunks: [],
            webCamera: false,
            screenControlsButtons: false,
            permisionPopup: false, // Reset permission popup state
            elapsedTime: 0,
            countdown: 0,
            blob: '',
            previewPopup: false,
            previewUrl: '',
            SelectionrecordingType: '',
            selectedMicroPhoneOption:'',
            microPhone:'',
            recordingType:''
        }));
    }

    return (
        <ScreenRecorderContext.Provider value={{ screenRecorderState, setScreenRecorderState, startRecording, stopRecording, togglePauseResumeRecording, formatTime, deletePreviewStream }}>
            {children}
        </ScreenRecorderContext.Provider>
    );
};
