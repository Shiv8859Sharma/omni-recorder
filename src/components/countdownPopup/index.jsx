import { useScreenRecorderState } from "../../lib/screenRecorder";
import PopUp from "../popups"

const CountdownPopup = () => {
    const { screenRecorderState } = useScreenRecorderState();
    let { countdown } = screenRecorderState
    return (
        <PopUp
            show={countdown > 0}
            className='bg-transparent border-none'
        >
            <div className="flex items-center justify-center">
                <div className="h-52 w-52 rounded-full bg-blue-900 flex items-center justify-center">
                    <h1 className="text-[6rem] text-white text-center">{countdown || 0}</h1>
                </div>
            </div>
        </PopUp>
    )
}

export default CountdownPopup;