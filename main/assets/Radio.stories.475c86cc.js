import{s as n,a as e,F as d,j as o}from"./index.91e13256.js";import{R as i}from"./Radio.7e7f4d7a.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.b1bdffc6.js";import"./Button.module.f2b1a1d0.js";import"./useFocusRing.module.b2f86799.js";import"./context.module.d6cc850e.js";import"./useButton.module.fc7f7ac7.js";import"./OverlayArrow.module.d4f11db0.js";import"./Info.fdb017d0.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
