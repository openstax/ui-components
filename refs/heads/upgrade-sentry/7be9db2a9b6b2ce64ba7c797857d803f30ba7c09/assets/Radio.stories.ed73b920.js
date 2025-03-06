import{s as r,a as e,F as i,j as n}from"./index.d322d4ae.js";import{R as o}from"./Radio.b14497e1.js";import"./theme.5f10927e.js";import"./palette.15e4d008.js";import"./Tooltip.c0319024.js";import"./OverlayArrow.module.3a6cbaed.js";import"./context.module.c5bed6c7.js";import"./useButton.module.e7a4a6c5.js";import"./Info.a41c5f52.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
