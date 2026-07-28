import{s as n,j as e,F as d,a as o}from"./index-4d5f071c.js";import{R as i}from"./Radio-b1a8dcc4.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-0d824417.js";import"./Button-e6758852.js";import"./useFocusRing-ed504e30.js";import"./context-303e5aef.js";import"./useButton-ef08d7ba.js";import"./OverlayArrow-18ae2c13.js";import"./Info-b5b89ad2.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
