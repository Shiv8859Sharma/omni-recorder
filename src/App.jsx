import './App.css';
import GredientButton from './components/button/gradientButton';
import CountdownPopup from './components/countdownPopup';
import PreviewPopup from './components/popups/PreviewPopup';
import WebCamWithControl from './components/popups/webCamWithControlsPopup';
import { useScreenRecorderState } from './lib/screenRecorder';
import PermisionPopup from './pages/permisionPopup';

export default function App() {
    const { setScreenRecorderState, screenRecorderState } = useScreenRecorderState();
    let { recorder } = screenRecorderState
    const handleTypeScreenRecordPopup = async () => {
        if (!recorder) {
            setScreenRecorderState(prev => ({
                ...prev,
                permisionPopup: true,
                screenControlsButtons: true,
                webCamera: true
            }));
        }
    };



    return (
        <>
            <div className='flex items-center justify-center h-full w-full'>
                <GredientButton disabled={recorder !== null} onClick={handleTypeScreenRecordPopup}>
                    Do you want to screen record!
                </GredientButton>
                <WebCamWithControl position='bottom-6 left-2' />
                <CountdownPopup />
                <PermisionPopup />
                <PreviewPopup />
            </div>
        </>
    );
}
