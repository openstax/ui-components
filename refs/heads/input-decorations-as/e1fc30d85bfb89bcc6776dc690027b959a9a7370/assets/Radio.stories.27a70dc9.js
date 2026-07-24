import{s as n,a as e,F as d,j as o}from"./index.53907b3b.js";import{R as i}from"./Radio.fc7ab5ac.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.1601474e.js";import"./Button.module.6a1e331b.js";import"./useFocusRing.module.27e7a86b.js";import"./context.module.6c716e6b.js";import"./useButton.module.678283a6.js";import"./OverlayArrow.module.f22fc3ca.js";import"./Info.b27f2613.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
