import{s as d,a as e,F as i,j as n}from"./index.b1ce302f.js";import{R as o}from"./Radio.2b2b2d23.js";import"./theme.4be312e4.js";import"./palette.15e4d008.js";import"./Tooltip.7fb1bd2a.js";import"./Button.module.72614b73.js";import"./context.module.b283bb4b.js";import"./useFocusRing.module.91363007.js";import"./OverlayArrow.module.91ae96fe.js";import"./Info.4a4b98dc.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),x=()=>e(i,{children:r({name:"default"})}),g=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{x as Default,g as WithTooltip};
