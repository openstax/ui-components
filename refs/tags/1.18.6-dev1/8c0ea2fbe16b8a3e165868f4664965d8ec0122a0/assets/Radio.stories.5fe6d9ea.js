import{s as d,a as e,F as i,j as n}from"./index.2b29e577.js";import{R as o}from"./Radio.6baf421d.js";import"./theme.50e01b74.js";import"./palette.15e4d008.js";import"./Tooltip.d9a26ece.js";import"./Button.module.1c66fcdc.js";import"./useFocusRing.module.a989acc4.js";import"./context.module.777c8a6f.js";import"./useButton.module.3445bb3e.js";import"./OverlayArrow.module.7334cdeb.js";import"./Info.d272f12d.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
