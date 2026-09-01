import{s as e,j as o,a as r}from"./index-a38b551c.js";import{T as m}from"./Tooltip-de2779bb.js";import"./Button-8a084f8e.js";import"./useFocusRing-ba8df2bb.js";import"./Hidden-c13db486.js";import"./useButton-eeea7b85.js";import"./OverlayArrow-a5df9f68.js";import"./context-c7fdf9db.js";import"./Info-a89f2477.js";/* empty css              */const n=e.div`
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
