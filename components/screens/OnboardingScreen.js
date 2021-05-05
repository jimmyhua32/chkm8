import React, {useState} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import OnboardingPart1 from "../ui/onboarding/OnboardingPart1";
import OnboardingPart2 from "../ui/onboarding/OnboardingPart2";
import OnboardingPart3 from "../ui/onboarding/OnboardingPart3";
import WidePillButton from "../ui/custom/WidePillButton";

export default function OnboardingScreen() {

    const [screenNumber, setScreenNumber] = useState(0);

    return (
        <View style={styles.background}>
            <OnboardingPart3 />

            <View style={styles.buttonContainer}>
                <WidePillButton title={"Get started"}></WidePillButton>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    background: {
        backgroundColor: '#DEEFFF',
        height: '100%'
    },
    buttonContainer: {
        flex: 1,
        flexWrap: 'nowrap',
        alignItems: 'center',
        width: '100%',
        margin: 'auto'
    },
});
