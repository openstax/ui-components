import{s as n,a as e,F as d,j as o}from"./index.118ac4e9.js";import{R as i}from"./Radio.8aa5f47f.js";import"./theme.f0b3ac83.js";import"./palette.5e342580.js";import"./Tooltip.ad0b6b3f.js";import"./Button.module.46cb57bd.js";import"./useFocusRing.module.f76eeae9.js";import"./context.module.86e907c3.js";import"./useButton.module.0f6c3104.js";import"./OverlayArrow.module.cf185531.js";import"./Info.00548bf7.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
