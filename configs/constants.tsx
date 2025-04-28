

import { IsIPAD } from "@/themes/app.constant";
import { Dimensions, Image } from "react-native";
import One from "@/assets/images/one.png";
import { verticalScale } from "react-native-size-matters"



export const onBoardingSlides: onBoardingSlidesTypes[] = [
    {
      color: "#f6d8d8",
      title: "Bienvenue dans l'application",
      image: (
        <Image
          source={One}
          style={{
            width: IsIPAD ? verticalScale(300) : verticalScale(200),
            height: IsIPAD ? verticalScale(300) : verticalScale(200),
          }}
        />
      ),
      description:
        "Cette application est conçue pour vous aider à gérer vos tâches quotidiennes de manière efficace et organisée.",
    },
    
  ];
  


        // onboarding variables
        export enum Side {
            LEFT,
            RIGHT,
            NONE,
        }
        export const MIN_LEDGE = 25;
        export const { width: WIDTH, height: HEIGHT } = Dimensions.get("screen");
        export const MARGIN_WIDTH = MIN_LEDGE + 50;
        export const PREV = WIDTH;
        export const NEXT = 0;
        export const LEFT_SNAP_POINTS = [MARGIN_WIDTH, PREV];
        export const RIGHT_SNAP_POINTS = [NEXT, WIDTH - MARGIN_WIDTH];
  