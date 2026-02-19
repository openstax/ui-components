import{s as n,a as e,F as d,j as o}from"./index.db687d6f.js";import{R as i}from"./Radio.b6565ade.js";import"./theme.f064affc.js";import"./palette.5e342580.js";import"./Tooltip.3d2217c3.js";import"./Button.module.dafd91c3.js";import"./useFocusRing.module.ee096386.js";import"./context.module.e35bb66b.js";import"./useButton.module.0c0690bc.js";import"./OverlayArrow.module.c52d9f48.js";import"./Info.b8117553.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
