import{s as n,a as e,F as d,j as o}from"./index.a9467b83.js";import{R as i}from"./Radio.095f83ea.js";import"./theme.af2d03ac.js";import"./palette.5e342580.js";import"./Tooltip.14848a54.js";import"./Button.module.75356183.js";import"./useFocusRing.module.9d8a2ae0.js";import"./context.module.225b5bda.js";import"./useButton.module.736605a9.js";import"./OverlayArrow.module.f1d52674.js";import"./Info.3c98d314.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
