import{s as n,a as e,F as d,j as o}from"./index.7077b1b4.js";import{R as i}from"./Radio.a11aa8f5.js";import"./theme.f04239ea.js";import"./palette.5e342580.js";import"./Tooltip.5d9a744d.js";import"./Button.module.55ea42fb.js";import"./useFocusRing.module.a4bc068f.js";import"./context.module.9bdb695b.js";import"./useButton.module.aed693ff.js";import"./OverlayArrow.module.eee37901.js";import"./Info.16582cf9.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
