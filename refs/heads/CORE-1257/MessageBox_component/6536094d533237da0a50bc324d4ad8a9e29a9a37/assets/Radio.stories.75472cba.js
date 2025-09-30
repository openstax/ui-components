import{s as d,a as e,F as i,j as n}from"./index.86b5046c.js";import{R as o}from"./Radio.f4c118ae.js";import"./theme.1c05b18b.js";import"./palette.15e4d008.js";import"./Tooltip.7048cab6.js";import"./Button.module.b1ab226b.js";import"./useFocusRing.module.461411b9.js";import"./context.module.08071df4.js";import"./useButton.module.85de3ebf.js";import"./OverlayArrow.module.9483e51a.js";import"./Info.85da32b0.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
