import { useEffect, useRef } from "react";

function CameraPreview({ stream , className}) {
    let videoPreviewRef = useRef();

    useEffect(() => {
        if (videoPreviewRef.current && stream) {
            videoPreviewRef.current.srcObject = stream;
        }
    }, [stream]);

    if (!stream) {
        return null;
    }

    return (
        <video className={className} ref={videoPreviewRef} autoPlay />
    )
}

export default CameraPreview;