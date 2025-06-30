import{s as d,a as e,F as i,j as n}from"./index.3a0fffde.js";import{R as o}from"./Radio.9a04797c.js";import"./theme.4a8164a7.js";import"./palette.15e4d008.js";import"./Tooltip.e93774b3.js";import"./Button.module.24c23c43.js";import"./useFocusRing.module.af70b7f2.js";import"./context.module.1251d844.js";import"./useButton.module.afb0a005.js";import"./OverlayArrow.module.c806ba33.js";import"./Info.7b871bcd.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
