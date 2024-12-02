import{s as d,a as e,F as i,j as n}from"./index.31876e64.js";import{R as o}from"./Radio.895d9381.js";import"./theme.b7c248ed.js";import"./palette.15e4d008.js";import"./Tooltip.b2237fdb.js";import"./Button.module.d9035edb.js";import"./context.module.c5893268.js";import"./focusSafely.module.e2616d0c.js";import"./useFocusRing.module.df443ce5.js";import"./OverlayArrow.module.3bb35114.js";import"./Info.c10f12dc.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
