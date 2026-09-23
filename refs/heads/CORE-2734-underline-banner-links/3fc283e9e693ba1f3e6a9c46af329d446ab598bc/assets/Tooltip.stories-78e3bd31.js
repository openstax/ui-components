import{s as e,j as o,a as r}from"./index-ae01532a.js";import{T as m}from"./Tooltip-edfa8116.js";import"./Button-c72c9cfa.js";import"./useFocusRing-65effbdc.js";import"./Hidden-b3231634.js";import"./useButton-e24c8b0f.js";import"./OverlayArrow-05f36e8d.js";import"./context-c5e94f2c.js";import"./Info-1ba444da.js";/* empty css              */const n=e.div`
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
