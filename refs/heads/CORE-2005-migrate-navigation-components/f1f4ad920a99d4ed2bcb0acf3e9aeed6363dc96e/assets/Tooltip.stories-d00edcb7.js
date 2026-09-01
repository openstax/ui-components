import{s as e,j as o,a as r}from"./index-3c59772b.js";import{T as m}from"./Tooltip-8c958f7c.js";import"./Button-21ed15cb.js";import"./useFocusRing-f7356f72.js";import"./Hidden-b104849d.js";import"./useButton-4e2f3433.js";import"./OverlayArrow-b5f09f7b.js";import"./context-e79f4aba.js";import"./Info-3491722c.js";/* empty css              */const n=e.div`
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
