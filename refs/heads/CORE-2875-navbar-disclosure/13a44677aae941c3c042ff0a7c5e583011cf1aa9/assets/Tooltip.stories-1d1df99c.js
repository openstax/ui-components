import{s as i,j as o,a as r}from"./index-5a01020d.js";import{T as m}from"./Tooltip-378d2df8.js";import"./Button-ca93341a.js";import"./useFocusRing-491fec9b.js";import"./Hidden-8420d453.js";import"./useFocusable-bdbce92b.js";import"./useButton-0ccf2193.js";import"./OverlayArrow-63df6f6e.js";import"./context-8fa83c5a.js";import"./useControlledState-90b361a9.js";import"./Info-a4b5af19.js";import"./palette-97ed00c9.js";const n=i.div`
  width: 50%;
  margin: 0 auto;
  font-size: 1.6rem;
  position: relative;

  > * {
    margin-bottom: 1rem;
  }
`,p=i.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: 1rem;
  }
`,b=()=>o(n,{children:["right","top","bottom"].map((t,e)=>r(p,{children:[o(m,{placement:t,children:"Tooltip content goes here."}),t]},e))});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{b as Default};
