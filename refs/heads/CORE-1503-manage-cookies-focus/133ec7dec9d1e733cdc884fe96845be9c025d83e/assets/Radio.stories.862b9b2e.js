import{s as n,a as e,F as d,j as o}from"./index.e7e4f3ae.js";import{R as i}from"./Radio.a7811f40.js";import"./theme.30358d9f.js";import"./palette.5e342580.js";import"./Tooltip.37f60f12.js";import"./Button.module.e0d473aa.js";import"./useFocusRing.module.50c850ae.js";import"./context.module.e20d7a6a.js";import"./useButton.module.3ea3c50f.js";import"./OverlayArrow.module.326f9da7.js";import"./Info.81a0b3ab.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
