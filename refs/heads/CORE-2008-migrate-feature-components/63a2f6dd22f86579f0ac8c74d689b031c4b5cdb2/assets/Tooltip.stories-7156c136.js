import{s as e,j as o,a as r}from"./index-e5acf2d5.js";import{T as m}from"./Tooltip-5a619cf5.js";import"./Button-907db088.js";import"./useFocusRing-ff91b0cd.js";import"./Hidden-09dad554.js";import"./useButton-e421f43f.js";import"./OverlayArrow-41cffa36.js";import"./context-20c6547d.js";import"./Info-b024380a.js";/* empty css              */const n=e.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,d=e.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,x=()=>o(n,{children:["right","top","bottom"].map((t,i)=>r(d,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},i))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default};
