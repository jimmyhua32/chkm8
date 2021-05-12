import React, {useState} from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import WidePillButton from "../ui/custom/WidePillButton";
import OnboardingPart1 from "../ui/onboarding/OnboardingPart1";
import OnboardingPart2 from "../ui/onboarding/OnboardingPart2";
import OnboardingPart3 from "../ui/onboarding/OnboardingPart3";
import OnboardingPart4 from "../ui/onboarding/OnboardingPart4";
import OnboardingPart5 from "../ui/onboarding/OnboardingPart5";

import * as storage from '../../Storage';

export default function OnboardingScreen( {navigation} ) {

    const [screenNumber, setScreenNumber] = useState(1);

    function advanceScreen() {
        setScreenNumber(screenNumber + 1);
    }

    let currentScreen;
    let buttonTitle;

    switch(screenNumber) {
        case 1:
            currentScreen = <OnboardingPart1 />;
            buttonTitle = "Get started"
            break;
        case 2:
            currentScreen = <OnboardingPart2 />;
            buttonTitle = "Next"
            break;
        case 3:
            currentScreen = <OnboardingPart3 />;
            buttonTitle = "Next"
            break;
        case 4:
            currentScreen = <OnboardingPart4 />;
            buttonTitle = "Next"
            break;
        case 5:
            currentScreen = <OnboardingPart5 />;
            buttonTitle = "Start your journey"
            break;
        case 6:
            storage.set('onboarded', true);
            navigation.reset({
                index: 0,
                routes: [{name: "Home"}]
            });
            break;
    }

    return (
        <View style={styles.background}>
            {currentScreen}
            <View style={styles.buttonContainer}>
                <WidePillButton title={buttonTitle} onPress={advanceScreen}></WidePillButton>
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
