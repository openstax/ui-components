import{s as d,a as e,F as i,j as n}from"./index.dbff1511.js";import{R as o}from"./Radio.1275715a.js";import"./theme.7a5a8684.js";import"./palette.15e4d008.js";import"./Tooltip.bfee7fbb.js";import"./Button.module.f776f56a.js";import"./useFocusRing.module.adbe0f5c.js";import"./useButton.module.a9be1933.js";import"./OverlayArrow.module.effbeacc.js";import"./Info.bd7d3080.js";import"./focusSafely.module.677af064.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
