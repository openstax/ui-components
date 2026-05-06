import{s as n,a as e,F as d,j as o}from"./index.b41e8d47.js";import{R as i}from"./Radio.f1656623.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.1ba73bff.js";import"./Button.module.b64dbec1.js";import"./useFocusRing.module.9986dd22.js";import"./context.module.1a7095af.js";import"./useButton.module.6873715b.js";import"./OverlayArrow.module.a33c3f3e.js";import"./Info.cd157609.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
