import{s as r,a as e,F as i,j as n}from"./index.2c8eae54.js";import{R as o}from"./Radio.bf754c59.js";import"./theme.06c06756.js";import"./palette.15e4d008.js";import"./Tooltip.59bdfb25.js";import"./OverlayArrow.module.10a99003.js";import"./context.module.8669ac12.js";import"./useButton.module.fe8e7a6e.js";import"./Info.ec802df7.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
