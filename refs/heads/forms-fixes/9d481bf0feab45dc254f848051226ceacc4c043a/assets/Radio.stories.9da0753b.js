import{s as r,a as e,F as i,j as n}from"./index.f9db6b46.js";import{R as o}from"./Radio.6553cfb6.js";import"./theme.ba986330.js";import"./palette.15e4d008.js";import"./Tooltip.34eb1422.js";import"./OverlayArrow.module.0b434592.js";import"./context.module.5e11cc9b.js";import"./useButton.module.b59b9e37.js";import"./Info.03fe7f23.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
