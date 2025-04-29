import { View, Text, Pressable, ScrollView, StyleSheet, Dimensions, NativeScrollEvent, NativeSyntheticEvent } from 'react-native'
import React, { useRef, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { OnboardingScreenData, OnboardingScreenDataType } from '@/constants/data'
import { StatusBar } from 'expo-status-bar'
import { AntDesign } from '@expo/vector-icons'
import { scale, verticalScale } from 'react-native-size-matters'
import { useFonts } from 'expo-font'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

const OnBoardingScreen = () => {

    let [fontsLoaded, fontError] = useFonts({
        SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const scrollViewRef = useRef<ScrollView>(null);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(
            contentOffsetX / event.nativeEvent.layoutMeasurement.width
        );
        setActiveIndex(currentIndex);
    };


    const handleSkip = async () => {
        const nextIndex = activeIndex + 1;

        if (nextIndex < OnboardingScreenData.length) {
            scrollViewRef.current?.scrollTo({
                x: Dimensions.get("window").width * nextIndex,
                animated: true,
            });
            setActiveIndex(nextIndex);
        } else {
            await AsyncStorage.setItem('onboarding', 'true');
            router.push('/(routes)/auth')
        }
    }

    return (
        <LinearGradient
            colors={["#250152", "#000000"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.container}
        >
            <StatusBar style='auto' />
            <Pressable
                style={styles.skipContainer}
                onPress={handleSkip}
            >
                <Text style={styles.skipText}>
                    {activeIndex === OnboardingScreenData.length - 1 ? "Get Started" : "Skip"}
                </Text>

                <AntDesign name="arrowright" size={scale(18)} color="white" />
            </Pressable>
            {/* <Pressable
                style={styles.skipContainer}
                onPress={handleSkip}
            >
                <Text style={styles.skipText}>Skip 2</Text>

                <AntDesign name="arrowright" size={scale(18)} color="white" />
            </Pressable> */}
            <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
                ref={scrollViewRef}
            >
                {OnboardingScreenData.map((item: OnboardingScreenDataType, index: number) => (
                    <View key={index} style={styles.slide}>
                        {/* {item.image} */}
                        <Text style={styles.title}>{item.title}</Text>
                        {/* <Text style={styles.subtitle}>{item.subtitle}</Text> */}
                    </View>
                ))}
            </ScrollView>
            <View style={styles.paginationContainer}>
                {OnboardingScreenData.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            {
                                opacity: activeIndex === index ? 1 : 0.3,
                            },
                        ]}
                    />
                ))}
            </View>
        </LinearGradient>
    )
}

export default OnBoardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    slide: {
        width: Dimensions.get("window").width,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: "#fff",
        fontSize: scale(23),
        fontFamily: "SegoeUI",
        textAlign: "center",
        fontWeight: "500",
    },
    subtitle: {
        width: scale(290),
        marginHorizontal: "auto",
        color: "#9A9999",
        fontSize: scale(14),
        fontFamily: "SegoeUI",
        textAlign: "center",
        fontWeight: "400",
        paddingTop: verticalScale(10),
    },
    paginationContainer: {
        position: "absolute",
        bottom: verticalScale(70),
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: scale(8),
    },
    dot: {
        width: scale(8),
        height: scale(8),
        borderRadius: 100,
        backgroundColor: "#fff",
        marginHorizontal: scale(2),
    },
    skipContainer: {
        position: "absolute",
        top: verticalScale(45),
        right: scale(30),
        flexDirection: "row",
        alignItems: "center",
        gap: scale(5),
        zIndex: 100,
    },
    skipText: {
        color: "#fff",
        fontSize: scale(16),
        fontFamily: "SegoeUI",
        fontWeight: "400",
    },
});