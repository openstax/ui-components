import{s as d,a as e,F as i,j as n}from"./index.3d937027.js";import{R as o}from"./Radio.fe71fb76.js";import"./theme.faf9aa84.js";import"./palette.15e4d008.js";import"./Tooltip.ed747826.js";import"./Button.module.40eb5513.js";import"./useFocusRing.module.d084052f.js";import"./context.module.0293aa53.js";import"./useButton.module.8eae8f9a.js";import"./OverlayArrow.module.1d2482de.js";import"./Info.34075c4f.js";const a=d.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,r=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),g=()=>e(i,{children:r({name:"default"})}),R=()=>e(i,{children:r({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{g as Default,R as WithTooltip};
