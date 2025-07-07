import{s as d,a as e,F as i,j as n}from"./index.155b178b.js";import{R as o}from"./Radio.e4ebbfef.js";import"./theme.f7dcf2c3.js";import"./palette.15e4d008.js";import"./Tooltip.5895fb2a.js";import"./Button.module.2d779ce3.js";import"./useFocusRing.module.070d5b70.js";import"./context.module.be7c8198.js";import"./useButton.module.e7976186.js";import"./OverlayArrow.module.10b58ab8.js";import"./Info.5370c200.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
