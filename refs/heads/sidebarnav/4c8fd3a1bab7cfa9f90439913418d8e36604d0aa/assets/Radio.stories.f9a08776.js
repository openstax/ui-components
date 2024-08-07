import{s as d,a as e,F as i,j as n}from"./index.f30ca328.js";import{R as o}from"./Radio.65c77f1b.js";import"./theme.41a5e6b1.js";import"./palette.15e4d008.js";import"./Tooltip.db6bff7d.js";import"./Button.module.1e213f96.js";import"./context.module.6724ca8c.js";import"./useFocusRing.module.6e2f22d0.js";import"./OverlayArrow.module.d9eb8713.js";import"./Info.b20bc117.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
