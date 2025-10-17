import{s as d,a as e,F as i,j as n}from"./index.03d519e8.js";import{R as o}from"./Radio.31839163.js";import"./theme.26768929.js";import"./palette.15e4d008.js";import"./Tooltip.b9727ab2.js";import"./Button.module.f7c982d8.js";import"./useFocusRing.module.9993e2ac.js";import"./context.module.65e0d974.js";import"./useButton.module.4f744438.js";import"./OverlayArrow.module.185b538e.js";import"./Info.32d55c0a.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
