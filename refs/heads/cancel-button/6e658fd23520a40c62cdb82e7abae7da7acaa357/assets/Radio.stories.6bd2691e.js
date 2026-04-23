import{s as n,a as e,F as d,j as o}from"./index.e1c8d601.js";import{R as i}from"./Radio.59c0c2b4.js";import"./theme.d8d45c04.js";import"./palette.5e342580.js";import"./Tooltip.be2980bc.js";import"./Button.module.35838380.js";import"./useFocusRing.module.5cb20062.js";import"./context.module.a6c381cc.js";import"./useButton.module.46381871.js";import"./OverlayArrow.module.9ccd21cd.js";import"./Info.9013d59f.js";const a=n.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>o(a,{children:[e(i,{...t,children:"Label"}),e(i,{...t,defaultChecked:!0,children:"Label"}),e(i,{...t,children:"Label"}),e(i,{disabled:!0,...t,children:"Disabled label"})]}),D=()=>e(d,{children:r({name:"default"})}),R=()=>e(d,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),l=t=>o(a,{children:[e(i,{disabled:!0,...t,children:"Disabled label"}),e(i,{disabled:!0,defaultChecked:!0,...t,children:"Disabled label"})]}),g=()=>o(d,{children:[l({name:"disabled"}),l({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{D as Default,g as Disabled,R as WithTooltip};
