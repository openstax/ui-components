import{s as d,a as e,F as i,j as n}from"./index.122b7736.js";import{R as o}from"./Radio.9e97cee3.js";import"./theme.21ddec2f.js";import"./palette.15e4d008.js";import"./Tooltip.b4c5cc68.js";import"./Button.module.f4860166.js";import"./useFocusRing.module.29723948.js";import"./context.module.1f1a841a.js";import"./useButton.module.641a53a9.js";import"./OverlayArrow.module.f88da5b6.js";import"./Info.fa68d689.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
