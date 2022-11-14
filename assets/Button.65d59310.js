import{s as l,j as u}from"./index.c4e32060.js";const r={red:"#ca2026",danger:"#c2002f",darkRed:"#c22032",lightRed:"#e298a0",paleRed:"#FBE7EA",green:"#77af42",lightGreen:"#8bc753",darkGreen:"#63a524",paleYellow:"#ffffbb",teal:"#0dc0de",blue:"#007da4",mediumBlue:"#026AA1",lightBlue:"#34bdd8",neutralLightBlue:"#0dc0dc",tangerine:"#ffbd3e",gray:"#5e5e5e",darkGray:"#757575",pale:"#d5d5d5",light:"#e4e4e4",white:"#ffffff",neutralLightest:"#f9f9f9",neutralCool:"#f6f7f8",neutralBright:"#f5f5f5",neutralLighter:"#f1f1f1",neutralLight:"#e5e5e5",neutralMedium:"#a0a0a0",neutral:"#818181",neutralThin:"#6f6f6f",neutralDark:"#5f6163",neutralFeedback:"#555",neutralDarker:"#424242",black:"#000000",orange:"#D4450C"},e={palette:r,button:{background:r.orange,backgroundHover:"#E74B0D",backgroundActive:"#C5400B"}};var c="/home/runner/work/ui-components/ui-components/src/components/Button.tsx";const f=l.button`
  background-color: ${e.button.background};
  color: ${e.palette.white};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${e.button.backgroundHover}
    }
    &:active {
      background: ${e.button.backgroundActive}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`,b=a=>{const{disabled:n,isWaiting:t,waitingText:o,children:d,...i}=a;return u(f,{...i,disabled:t||n,children:t&&o||d},void 0,!1,{fileName:c,lineNumber:47,columnNumber:5},void 0)};export{b as B,e as c};
