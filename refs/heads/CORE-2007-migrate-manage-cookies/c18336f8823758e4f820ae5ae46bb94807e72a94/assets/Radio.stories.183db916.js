import{s as n,a as e,F as d,j as o}from"./index.66ccc16b.js";import{R as i}from"./Radio.f119ccaf.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.c1fa650c.js";import"./Button.module.2a86ed5b.js";import"./useFocusRing.module.b925221d.js";import"./context.module.6b3312c2.js";import"./useButton.module.5b96224e.js";import"./OverlayArrow.module.ba08d96b.js";import"./Info.abcd2087.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
