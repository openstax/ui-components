import{s as n,a as e,F as d,j as o}from"./index.e6a06148.js";import{R as i}from"./Radio.0182bce5.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.fc4ba973.js";import"./Button.module.93c80b07.js";import"./useFocusRing.module.08a1326c.js";import"./context.module.e412394c.js";import"./useButton.module.2f5d6ed2.js";import"./OverlayArrow.module.90f28680.js";import"./Info.6affb457.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
