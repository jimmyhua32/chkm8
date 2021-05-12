import React from "react";

const assetsRoot = "./assets/";

export const accessories = {
    0 : require(assetsRoot + "leafy/blob-front.png"),
    1 : require(assetsRoot + "accessories/01.png"),
    2 : require(assetsRoot + "accessories/02.png"),
    3 : require(assetsRoot + "accessories/03.png"),
    4 : require(assetsRoot + "accessories/04.png"),
    5 : require(assetsRoot + "accessories/05.png"),
}

export const reflectCloud = {
    "day": require(assetsRoot + "test/day-cloud.png"),
    "sunrise" : require(assetsRoot + "test/sunrise-cloud.png"),
    "sunset" : require(assetsRoot + "test/sunset-cloud.png"),
    "night" : require(assetsRoot + "test/night-cloud.png")
}

export const reflectBackground = {
    "day" : require(assetsRoot + "day.png"),
    "sunrise" : require(assetsRoot + "sunrise.png"),
    "sunset" : require(assetsRoot + "sunset.png"),
    "night" : require(assetsRoot + "night.png")
}

export const reflectCampBackground = {
    "day-camp" : require(assetsRoot + "day-camp.png"),
    "sunrise-camp" : require(assetsRoot + "sunrise-camp.png"),
    "sunset-camp" : require(assetsRoot + "sunset-camp.png"),
    "night-camp" : require(assetsRoot + "night-camp.png")
}

export const onboarding = {
    "mountains" : require(assetsRoot + "mountains.png")
}

export const leafy = {
    "leafy-0f" : require(assetsRoot + "leafy/blob-front.png"),
    "leafy-0b" : require(assetsRoot + "leafy/blob-back.gif"),
    "leafy-1f" : require(assetsRoot + "leafy/tophat-front.png"),
    "leafy-1b" : require(assetsRoot + "leafy/tophat-back.gif"),
    "leafy-2f" : require(assetsRoot + "leafy/party-front.png"),
    "leafy-2b" : require(assetsRoot + "leafy/party-back.gif"),
    "leafy-3f" : require(assetsRoot + "leafy/beanie-front.png"),
    "leafy-3b" : require(assetsRoot + "leafy/beanie-back.gif"),
    "leafy-4f" : require(assetsRoot + "leafy/headband-front.png"),
    "leafy-4b" : require(assetsRoot + "leafy/headband-back.gif"),
    "leafy-5f" : require(assetsRoot + "leafy/flower-front.png"),
    "leafy-5b" : require(assetsRoot + "leafy/flower-back.gif")
}

export const icons = {
    "profile" : require(assetsRoot + "profile.png"),
    "reflect" : require(assetsRoot + "reflect.png"),
    "reflect-grey" : require(assetsRoot + "reflect-off.png"),
    "rest" : require(assetsRoot + "rest.png"),
    "journey" : require(assetsRoot + "journey.png"),
    "customize" : require(assetsRoot + "customize.png"),
    "profile-no-shadow" : require(assetsRoot + "profile-no-shadow.png"),
    "reflect-no-shadow" : require(assetsRoot + "reflect-no-shadow.png"),
    "rest-no-shadow" : require(assetsRoot + "rest-no-shadow.png"),
}
