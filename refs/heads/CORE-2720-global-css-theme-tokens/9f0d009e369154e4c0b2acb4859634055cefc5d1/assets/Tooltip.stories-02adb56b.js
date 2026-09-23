import{s as e,j as o,a as r}from"./index-30ec2440.js";import{T as m}from"./Tooltip-3073ba05.js";import"./Button-84873d39.js";import"./useFocusRing-6a2c78a6.js";import"./Hidden-9f990655.js";import"./useButton-f9bd4bca.js";import"./OverlayArrow-e04ee756.js";import"./context-ed1de401.js";import"./Info-61989b65.js";/* empty css              */const n=e.div`
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
