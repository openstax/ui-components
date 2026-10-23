import{s as i,a as o,j as e}from"./index-5dad55cf.js";import{T as m}from"./Tooltip-257683d0.js";import"./Button-c544bff8.js";import"./useFocusRing-0187669a.js";import"./Hidden-894c3afe.js";import"./useFocusable-2066db17.js";import"./useButton-8937e8e9.js";import"./OverlayArrow-eecc1dd8.js";import"./context-ddc8e597.js";import"./useControlledState-6aacb797.js";import"./Info-9d148834.js";/* empty css              */const n=i.div`
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
