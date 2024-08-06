import{s as d,a as e,F as i,j as n}from"./index.952a733a.js";import{R as o}from"./Radio.7f3cca3a.js";import"./theme.080edf1d.js";import"./palette.15e4d008.js";import"./Tooltip.bd6cf8ba.js";import"./Button.module.da3f7263.js";import"./context.module.b8eba57f.js";import"./useFocusRing.module.4b50e563.js";import"./OverlayArrow.module.5064af75.js";import"./Info.2e557cf6.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
