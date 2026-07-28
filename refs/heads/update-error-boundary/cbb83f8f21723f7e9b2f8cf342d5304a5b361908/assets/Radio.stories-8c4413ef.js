import{s as n,j as e,F as d,a as o}from"./index-3ade00d8.js";import{R as i}from"./Radio-bb79bf00.js";import"./theme-e8c258fa.js";import"./palette-f868513b.js";import"./Tooltip-8a5d399d.js";import"./Button-653aa58a.js";import"./useFocusRing-e0b32113.js";import"./context-a481f6ae.js";import"./useButton-f643d012.js";import"./OverlayArrow-77a21ad4.js";import"./Info-ca4c2d8e.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
