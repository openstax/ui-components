import{s as n,a as e,F as d,j as o}from"./index.7145ef27.js";import{R as i}from"./Radio.809dbdf2.js";import"./theme.c0e53f9c.js";import"./palette.5e342580.js";import"./Tooltip.9b5ba9f2.js";import"./Button.module.a8908cbb.js";import"./useFocusRing.module.12175647.js";import"./context.module.e7a68a4e.js";import"./useButton.module.9f281b7c.js";import"./OverlayArrow.module.73957525.js";import"./Info.f13302a1.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
