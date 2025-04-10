import{s as r,a as e,F as i,j as n}from"./index.6f16f36e.js";import{R as o}from"./Radio.0a00cabe.js";import"./theme.9399b2b7.js";import"./palette.15e4d008.js";import"./Tooltip.2039db5a.js";import"./OverlayArrow.module.e260f4a2.js";import"./context.module.747874e6.js";import"./useButton.module.993b0ec7.js";import"./Info.1f5bebd3.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
