import{s as i,j as o,a as r}from"./index-ca130553.js";import{T as m}from"./Tooltip-9e689023.js";import"./Button-9e6b4983.js";import"./useFocusRing-1bfe340b.js";import"./Hidden-75806909.js";import"./useFocusable-4c549905.js";import"./useButton-c7a7e3df.js";import"./OverlayArrow-aadf3c4a.js";import"./context-08ebc9d2.js";import"./Info-52780cbf.js";import"./palette-97ed00c9.js";const n=i.div`
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
