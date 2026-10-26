import{s as i,a as o,j as e}from"./index-c1069d6a.js";import{T as m}from"./Tooltip-fb83eba4.js";import"./Button-a6f4b39c.js";import"./useFocusRing-a1c6d300.js";import"./Hidden-ccf3187d.js";import"./useFocusable-3e6d8a10.js";import"./useButton-802c917f.js";import"./OverlayArrow-53e75cf6.js";import"./context-7068b1ed.js";import"./useControlledState-589d7df5.js";import"./Info-8282fa66.js";/* empty css              */const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,a=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,y=()=>o(n,{children:["right","top","bottom"].map((t,r)=>e(a,{children:[o(m,{placement:t,ariaLabel:`More information about ${t} placement`,children:"Tooltip content goes here."}),t]},r))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{y as Default};
