import{s as n,a as e,F as d,j as o}from"./index.b59d52da.js";import{R as i}from"./Radio.a15b39d6.js";import"./theme.5b7d07ee.js";import"./palette.5e342580.js";import"./Tooltip.a3d6965c.js";import"./Button.module.7074e1c0.js";import"./useFocusRing.module.17b33b36.js";import"./context.module.cd354128.js";import"./useButton.module.8ed0f2e6.js";import"./OverlayArrow.module.ebb67ecd.js";import"./Info.201af3d4.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
