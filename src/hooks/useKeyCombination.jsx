import { useEffect } from "react";

function useKeyCombination(callback, fallback, targetKey, activeCTRL = false, activeShift = false) {
    useEffect(() => {
        const HandleKeyDown = (event) => {
            // event.preventDefault();

            if (event.key == "Escape") {
                fallback();
            }
            if (event.key == targetKey) {
                event.preventDefault();
                if (activeCTRL && !event.ctrlKey)
                    return;
                if (activeShift && !event.shiftKey)
                    return;

                callback();
            }
        }
        // const HandleKeyUp = (event) => { }

        window.addEventListener("keydown", HandleKeyDown)
        // window.addEventListener("keyup", HandleKeyUp)

        return () => {
            window.removeEventListener("keydown", HandleKeyDown)
            // window.removeEventListener("keyup", HandleKeyUp)
        }
    }, [])
}

export default useKeyCombination
