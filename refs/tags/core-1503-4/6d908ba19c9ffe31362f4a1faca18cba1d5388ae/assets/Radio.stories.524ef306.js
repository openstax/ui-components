import{s as n,a as e,F as d,j as o}from"./index.867606f6.js";import{R as i}from"./Radio.8bef5695.js";import"./theme.d71eb643.js";import"./palette.5e342580.js";import"./Tooltip.1c91a54e.js";import"./Button.module.ddb5f1ec.js";import"./useFocusRing.module.a853279f.js";import"./context.module.73ebd558.js";import"./useButton.module.0364b7a9.js";import"./OverlayArrow.module.da1cd654.js";import"./Info.94c2f6bf.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
