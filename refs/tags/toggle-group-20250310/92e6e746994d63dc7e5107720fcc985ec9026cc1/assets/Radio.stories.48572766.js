import{s as r,a as e,F as i,j as n}from"./index.df4f9f75.js";import{R as o}from"./Radio.101a5fc5.js";import"./theme.a916d9e9.js";import"./palette.15e4d008.js";import"./Tooltip.479f3067.js";import"./OverlayArrow.module.05fb4b93.js";import"./context.module.8b449dcb.js";import"./useButton.module.d2b6cfcd.js";import"./Info.abcd952d.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
