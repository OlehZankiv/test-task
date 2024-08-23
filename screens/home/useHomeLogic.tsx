import {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";
import {useRef, useState} from "react";
import {interpolateColor} from "react-native-reanimated/src";
import {generateRandomColor} from "@/utils/colors";

const ANIMATION_DURATION = 500

export const useHomeLogic = () => {
    const timeoutDelay = useRef<NodeJS.Timeout>()
    const progress = useSharedValue(-1);

    const [prevColor, setPrevColor] = useState('#ffffff')
    const [nextColor, setNextColor] = useState('#ffffff')


    const backgroundColorStyles = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(
            progress.value,
            [-1, 1],
            [prevColor, nextColor]
        )
    }));

    const handleChangeColor = () => {
        if (timeoutDelay.current) return;

        timeoutDelay.current = setTimeout(() => {
            clearTimeout(timeoutDelay.current)
            timeoutDelay.current = undefined;
        }, ANIMATION_DURATION)

        ;(progress.value >= 0 ? setPrevColor : setNextColor)(generateRandomColor())

        progress.value = withTiming(-progress.value, {duration: ANIMATION_DURATION});
    }

    return {
        handleChangeColor,
        backgroundColorStyles
    }
}