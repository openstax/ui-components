import{C as o}from"./index.16832db0.js";const e={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",paleRed:"#FBE7EA",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},t={orange:{background:e.orange,backgroundActive:"#b03808",backgroundHover:"#be3c08",color:e.white},light:{background:e.white,backgroundActive:"#e5e5e5",backgroundHover:"#f1f1f1",color:e.neutralDarker},gray:{background:"#757575",backgroundActive:"#4c4c4c",backgroundHover:"#646464",color:e.white}},d={palette:e,button:{...t,default:t.orange}},c={button:{default:{fontWeight:700},light:{fontWeight:400}}},l=["navbar"].reduce((a,r,n)=>(a[r]=(n+1)*10,a),{}),f={navbar:{desktop:3.2,mobile:1.6}},u=75,g=u+.0625,i={desktop:a=>o`
    @media screen and (min-width: ${g}em) {
      ${a}
    }
  `},k={colors:d,typography:c,zIndex:l,padding:f,breakpoints:i};export{k as a,d as c,c as t};
