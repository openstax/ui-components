import{s as n,a as e,F as d,j as o}from"./index.5571ca31.js";import{R as i}from"./Radio.2b7c0f69.js";import"./theme.e119d586.js";import"./palette.5e342580.js";import"./Tooltip.8d6ce5ce.js";import"./Button.module.8c9b331d.js";import"./useFocusRing.module.8840545a.js";import"./context.module.33c2349f.js";import"./useButton.module.065546c3.js";import"./OverlayArrow.module.96c506f1.js";import"./Info.3fa432a6.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
