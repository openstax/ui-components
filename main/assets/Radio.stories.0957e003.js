import{s as r,a as e,F as i,j as n}from"./index.a1f82bcb.js";import{R as o}from"./Radio.9520543f.js";import"./theme.12d25bef.js";import"./palette.15e4d008.js";import"./Tooltip.60721934.js";import"./OverlayArrow.module.d9745d05.js";import"./context.module.4ef7588e.js";import"./useButton.module.b3c93051.js";import"./Info.f1946886.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
