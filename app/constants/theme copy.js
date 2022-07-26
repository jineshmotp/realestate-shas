import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


const PRIMARY_COLOR = '#831a01';
const SECONDARY_COLOR = '#414757';
const THIRD_COLOR = "#FF615F";

export const COLORS = {
    // base colors
    
    primary: "#194868", // Dark Blue
    secondary: "#FF615F",   // peach

    firsttheme : PRIMARY_COLOR,
    secondtheme: SECONDARY_COLOR,
    thiredtheme: THIRD_COLOR,

    // colors
    black: "#1E1F20",
    white: "#FFFFFF",
    surface: "#FFFFFF",
    
    darkgray: '#898C95',
    lightGray: "#F5F7F9",
    lightGray2: '#FAFBFD',
    gray: "#BEC1D2",

    blue: '#42B0FF',    

    yellow: '#FFD573',

    lightBlue: '#95A9B8',
    darkBlue:'#1b669e',

    darkgreen: '#008159',
    lightgreen: '#4acfa6',
    darkolivegreen : '#556B2F',
    mediumspringgreen :'#00FA9A',
    palegreen :'#98FB98',

    peach: '#FF615F',
    purple: '#8e44ad',

    red: '#FF0000', 


    text: '#000000',
    link: '#3584CA',
    error: '#f13a59',

    activecolor:SECONDARY_COLOR,
    inactivecolor:'#2e0a02',
    activesignout:'#2e0a02',
    inactivesignout:"#FFFFFF",
};


export const SIZES = {
    // global sizes
    base: 8,
    base1: 5,
    font: 14,
    radius: 12,
    radius1: 3,
    padding: 10,
    padding2: 36,
    padding3: 3,

    IconSize:25,
    Iconflat:17,
    Iconflat1:12,

    // font sizes
    largeTitle: 50,
    h1: 30,
    h2: 22,
    h3: 16,
    h4: 14,
    h5: 12,
    h6: 10,
    body1: 30,
    body2: 20,
    body3: 16,
    body4: 14,

    // app dimensions
    width,
    height
};

/*

export const FONTS = {
    largeTitle: { fontFamily: "Roboto-regular", fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontFamily: "Roboto-Black", fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontFamily: "Roboto-Bold", fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontFamily: "Roboto-Bold", fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontFamily: "Roboto-Bold", fontSize: SIZES.h4, lineHeight: 20 },
    h5: { fontFamily: "Roboto-Bold", fontSize: SIZES.h5, lineHeight: 18 },
    h6: { fontFamily: "Roboto-Bold", fontSize: SIZES.h6, lineHeight: 16 },
    body1: { fontFamily: "Roboto-Regular", fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontFamily: "Roboto-Regular", fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontFamily: "Roboto-Regular", fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontFamily: "Roboto-Regular", fontSize: SIZES.body4, lineHeight: 22 },
};
*/

export const FONTS = {
    largeTitle: {  fontSize: SIZES.largeTitle, lineHeight: 55 },
    h1: { fontSize: SIZES.h1, lineHeight: 36 },
    h2: { fontSize: SIZES.h2, lineHeight: 30 },
    h3: { fontSize: SIZES.h3, lineHeight: 22 },
    h4: { fontSize: SIZES.h4, lineHeight: 20, fontWeight:'bold' },
    h5: { fontSize: SIZES.h5, lineHeight: 18, },
    h6: { fontSize: SIZES.h6, lineHeight: 16 },
    body1: { fontSize: SIZES.body1, lineHeight: 36 },
    body2: { fontSize: SIZES.body2, lineHeight: 30 },
    body3: { fontSize: SIZES.body3, lineHeight: 22 },
    body4: { fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES, FONTS };

export default appTheme;