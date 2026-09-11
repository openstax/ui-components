import{s as e,j as o,a as r}from"./index-c8b0928f.js";import{T as m}from"./Tooltip-e61c74ff.js";import"./Button-33225b9c.js";import"./useFocusRing-babefe4a.js";import"./Hidden-6a7e7389.js";import"./useButton-2b1d783a.js";import"./OverlayArrow-57bce45d.js";import"./context-e663dca2.js";import"./Info-aab887ac.js";/* empty css              */const n=e.div`
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
