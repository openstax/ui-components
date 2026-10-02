import{s as i,j as o,a as r}from"./index-4653a083.js";import{T as m}from"./Tooltip-3cb86bfa.js";import"./Button-3318b3a1.js";import"./useFocusRing-7995adfb.js";import"./Hidden-0425e482.js";import"./useFocusable-470de539.js";import"./useButton-e82ffc7f.js";import"./OverlayArrow-b4e1f368.js";import"./context-7ce95b15.js";import"./Info-2e0eca27.js";import"./palette-97ed00c9.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
