import{s as n,a as e,F as d,j as o}from"./index.f92b82b4.js";import{R as i}from"./Radio.e6720707.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.f3a30b65.js";import"./Button.module.7f2d611f.js";import"./useFocusRing.module.c058884f.js";import"./context.module.44ca5129.js";import"./useButton.module.4f2251da.js";import"./OverlayArrow.module.e0d39c73.js";import"./Info.a4cef04c.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
