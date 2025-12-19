import{s as d,a as e,F as i,j as n}from"./index.2a1aae0e.js";import{R as o}from"./Radio.8c74b5d2.js";import"./theme.6c5d108a.js";import"./palette.15e4d008.js";import"./Tooltip.a62db52c.js";import"./Button.module.19f3fc81.js";import"./useFocusRing.module.452f8111.js";import"./context.module.27f044a2.js";import"./useButton.module.193cc18f.js";import"./OverlayArrow.module.e938e7ed.js";import"./Info.1670fa91.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
