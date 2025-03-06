import{s as r,a as e,F as i,j as n}from"./index.4e803f83.js";import{R as o}from"./Radio.0b285e1f.js";import"./theme.17dcc791.js";import"./palette.15e4d008.js";import"./Tooltip.30765dbb.js";import"./OverlayArrow.module.f3c44a54.js";import"./context.module.c36d2287.js";import"./useButton.module.36485fbc.js";import"./Info.df59c9b5.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
