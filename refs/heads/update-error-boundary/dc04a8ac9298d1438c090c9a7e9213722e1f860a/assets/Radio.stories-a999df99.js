import{s as n,j as e,F as d,a as o}from"./index-052b89a7.js";import{R as i}from"./Radio-0554f8a7.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-b122b690.js";import"./Button-80d9571c.js";import"./useFocusRing-0d61779e.js";import"./context-f9473ec8.js";import"./useButton-72db263f.js";import"./OverlayArrow-9247717e.js";import"./Info-1f00fdd5.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
