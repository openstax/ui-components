import{s as n,a as e,F as d,j as o}from"./index.d84dcec4.js";import{R as i}from"./Radio.9510ad20.js";import"./theme.b4e37fba.js";import"./palette.5e342580.js";import"./Tooltip.15c5291a.js";import"./Button.module.7bff40bd.js";import"./useFocusRing.module.3b645c77.js";import"./context.module.1dd84072.js";import"./useButton.module.f3046c9c.js";import"./OverlayArrow.module.e0c66066.js";import"./Info.97da1966.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
