import{s as e,j as o,a as r}from"./index-94fd6a02.js";import{T as m}from"./Tooltip-65283ad1.js";import"./Button-008fb144.js";import"./useFocusRing-af55b691.js";import"./Hidden-44a7529d.js";import"./useButton-a653791c.js";import"./OverlayArrow-66787c21.js";import"./context-4e2c54df.js";import"./Info-f90779bc.js";import"./palette-97ed00c9.js";const n=e.div`
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
