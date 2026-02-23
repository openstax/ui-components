import{s as n,a as e,F as d,j as o}from"./index.ec4976af.js";import{R as i}from"./Radio.15e3556e.js";import"./theme.8fcd051d.js";import"./palette.5e342580.js";import"./Tooltip.3b2ebda6.js";import"./Button.module.734cfed6.js";import"./useFocusRing.module.84a5b5bd.js";import"./context.module.50f863a4.js";import"./useButton.module.7278c0c5.js";import"./OverlayArrow.module.f4af96c7.js";import"./Info.8b0a9e20.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
