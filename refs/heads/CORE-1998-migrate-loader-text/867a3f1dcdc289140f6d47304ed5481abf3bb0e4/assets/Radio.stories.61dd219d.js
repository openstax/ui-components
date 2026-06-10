import{s as n,a as e,F as d,j as o}from"./index.08db14f5.js";import{R as i}from"./Radio.f6747b3f.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.4ca63c5e.js";import"./Button.module.436f5140.js";import"./useFocusRing.module.35a4203d.js";import"./context.module.209b2345.js";import"./useButton.module.3a1de91e.js";import"./OverlayArrow.module.a0eee73f.js";import"./Info.8d1a267a.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
