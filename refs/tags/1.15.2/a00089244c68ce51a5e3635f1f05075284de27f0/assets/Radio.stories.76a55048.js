import{s as r,a as e,F as i,j as n}from"./index.7b15cc21.js";import{R as o}from"./Radio.679fe753.js";import"./theme.670e9418.js";import"./palette.15e4d008.js";import"./Tooltip.27e56129.js";import"./OverlayArrow.module.39a84c81.js";import"./context.module.79f29597.js";import"./useButton.module.a78b8d39.js";import"./Info.02e3b7a6.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
