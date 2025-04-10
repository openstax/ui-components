import{s as r,a as e,F as i,j as n}from"./index.aa197b2c.js";import{R as o}from"./Radio.2fb3b608.js";import"./theme.3d7efd7e.js";import"./palette.15e4d008.js";import"./Tooltip.e17f23e3.js";import"./OverlayArrow.module.229435cc.js";import"./context.module.f2474b39.js";import"./useButton.module.a3059e59.js";import"./Info.85d19483.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
