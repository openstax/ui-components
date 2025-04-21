import{s as r,a as e,F as i,j as n}from"./index.e1121c41.js";import{R as o}from"./Radio.34f0bca1.js";import"./theme.e60eabc0.js";import"./palette.15e4d008.js";import"./Tooltip.4a44624f.js";import"./OverlayArrow.module.16c3a204.js";import"./context.module.ed0f9249.js";import"./useButton.module.07883b15.js";import"./Info.e6239522.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
