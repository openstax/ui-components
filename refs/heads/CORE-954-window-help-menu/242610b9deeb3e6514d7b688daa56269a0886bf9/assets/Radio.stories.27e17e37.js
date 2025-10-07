import{s as d,a as e,F as i,j as n}from"./index.a3efb7d3.js";import{R as o}from"./Radio.6f4d81c9.js";import"./theme.651ccb6e.js";import"./palette.15e4d008.js";import"./Tooltip.aafd8192.js";import"./Button.module.bb38a1eb.js";import"./useFocusRing.module.7877cdca.js";import"./context.module.efdc0192.js";import"./useButton.module.6b63b0df.js";import"./OverlayArrow.module.7fa64f51.js";import"./Info.e10b5d22.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
