import { useScreenRecorderState } from "../../lib/screenRecorder";
import CameraPreview from "../cameraPreview";
import RecorderControls from "../recorderControls";

const WebCamWithControls = (props) => {
    let { position = 'top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]', className = '' } = props
    let { screenRecorderState } = useScreenRecorderState()
    let { screenControlsButtons, webCamera, cameraStream } = screenRecorderState
    if (!screenControlsButtons) return;

    return (
        <div className={`absolute ${position} modal z-[99999] w-[18rem] h-[18rem] `} >
            <div className="flex flex-col justify-between items-center gap-2 h-full">
                <div>
                    {
                        webCamera &&
                        <div className={`relative w-[15rem] h-[15rem] !rounded-full bg-black overflow-hidden ${className}`}>
                            <CameraPreview stream={cameraStream} className='rounded-full h-full scale-[1.32]'/>
                        </div>
                    }
                </div>
                <div className="relative bottom-0 w-full">
                <RecorderControls />
                </div>
            </div>
        </div>
    )
}

export default WebCamWithControls;