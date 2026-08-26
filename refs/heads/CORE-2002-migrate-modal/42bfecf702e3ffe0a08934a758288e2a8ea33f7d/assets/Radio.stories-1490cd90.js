import{s as n,j as e,F as d,a as o}from"./index-ae123110.js";import{R as i}from"./Radio-d56a685f.js";import"./theme-bed77ad0.js";import"./palette-12edeb86.js";import"./Tooltip-52139119.js";import"./Button-c42b5d57.js";import"./useFocusRing-a45bc7ce.js";import"./context-a4655308.js";import"./useButton-7a0acea8.js";import"./OverlayArrow-da3207a3.js";import"./Info-d087f34f.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
