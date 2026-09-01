import{s as e,j as o,a as r}from"./index-94c8321c.js";import{T as m}from"./Tooltip-7ce6f874.js";import"./Button-a9c3b10c.js";import"./useFocusRing-ad9c3785.js";import"./Hidden-053f0702.js";import"./useButton-713ae9a7.js";import"./OverlayArrow-a6fd15ec.js";import"./context-743b2c6c.js";import"./Info-31764ab2.js";/* empty css              */const n=e.div`
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
