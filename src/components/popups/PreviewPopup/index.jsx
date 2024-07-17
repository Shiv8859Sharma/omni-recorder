import PopUp from "..";
import { useScreenRecorderState } from "../../../lib/screenRecorder";

function PreviewPopup() {
    const { screenRecorderState, deletePreviewStream } = useScreenRecorderState();
    let { previewPopup, previewUrl } = screenRecorderState

    return (
        <PopUp
            show={previewPopup}
            className='p-4'
        >
            <div>
                <video
                    src={previewUrl}
                    className='!w-full !h-9/12'
                    controls
                />
            </div>
            <div className="flex justify-end">
                <button onClick={deletePreviewStream} className="outline py-1.5 px-3 rounded-lg">
                    Delete
                </button>
            </div>
        </PopUp>

    );
}

export default PreviewPopup