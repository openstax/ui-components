import{s as n,a as e,F as d,j as o}from"./index.83d388b5.js";import{R as i}from"./Radio.b82869f3.js";import"./theme.469067e1.js";import"./palette.5e342580.js";import"./Tooltip.f0bbf637.js";import"./Button.module.0908c14f.js";import"./useFocusRing.module.a2861dd4.js";import"./context.module.41908bc1.js";import"./useButton.module.2e518242.js";import"./OverlayArrow.module.563762f8.js";import"./Info.fa5cf89d.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
