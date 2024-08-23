import Animated from "react-native-reanimated";
import {Pressable, Text} from "react-native";
import {styles} from "./styles";
import {useHomeLogic} from "./useHomeLogic";

const AnimatedTouchable = Animated.createAnimatedComponent(Pressable);

export const Home = () => {
    const {handleChangeColor, backgroundColorStyles} = useHomeLogic()

    return (
        <AnimatedTouchable onPress={handleChangeColor} style={[styles.container, backgroundColorStyles]}>
            <Text>Hello there</Text>
        </AnimatedTouchable>
    );
}