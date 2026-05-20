import{s as n,a as e,F as d,j as o}from"./index.b98655f3.js";import{R as i}from"./Radio.930dbe73.js";import"./theme.cf63f8c7.js";import"./palette.5e342580.js";import"./Tooltip.7b8e19ad.js";import"./Button.module.3b635ed6.js";import"./useFocusRing.module.9a0c50f9.js";import"./context.module.a67b54e9.js";import"./useButton.module.883feff2.js";import"./OverlayArrow.module.99eb36f7.js";import"./Info.d5817f08.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
