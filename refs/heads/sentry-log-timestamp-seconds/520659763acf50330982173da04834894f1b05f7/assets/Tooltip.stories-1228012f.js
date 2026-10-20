import{s as i,a as o,j as e}from"./index-dcb7161c.js";import{T as m}from"./Tooltip-2112353b.js";import"./Button-f41097e4.js";import"./useFocusRing-c5cc554f.js";import"./Hidden-78ed1664.js";import"./useFocusable-9dc6fe45.js";import"./useButton-b62555d9.js";import"./OverlayArrow-b4528707.js";import"./context-5f7d93fb.js";import"./useControlledState-9848b075.js";import"./Info-408d1551.js";/* empty css              */const n=i.div`
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
