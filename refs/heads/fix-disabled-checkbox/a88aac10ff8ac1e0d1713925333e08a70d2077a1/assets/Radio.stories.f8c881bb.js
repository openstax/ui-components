import{s as n,a as e,F as d,j as o}from"./index.c221f3cc.js";import{R as i}from"./Radio.de2d90ae.js";import"./theme.9307ba9a.js";import"./palette.5e342580.js";import"./Tooltip.08d23daf.js";import"./Button.module.6cab6406.js";import"./useFocusRing.module.9dd2cfd7.js";import"./context.module.757ba2d6.js";import"./useButton.module.cb65f455.js";import"./OverlayArrow.module.720288cc.js";import"./Info.41c0f202.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
