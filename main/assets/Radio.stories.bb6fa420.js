import{s as n,a as e,F as d,j as o}from"./index.a9b1d3d0.js";import{R as i}from"./Radio.885e131d.js";import"./theme.8b1d995e.js";import"./palette.5e342580.js";import"./Tooltip.f0b00a21.js";import"./Button.module.8600e24a.js";import"./useFocusRing.module.c4072514.js";import"./context.module.fa53bf9c.js";import"./useButton.module.b1314b4c.js";import"./OverlayArrow.module.f12520ed.js";import"./Info.b98a3355.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
