import{s as r,a as e,F as i,j as n}from"./index.47fe34cf.js";import{R as o}from"./Radio.1ab1433f.js";import"./theme.73f35048.js";import"./palette.15e4d008.js";import"./Tooltip.39cc37fc.js";import"./OverlayArrow.module.1907772a.js";import"./context.module.246d8d1d.js";import"./useButton.module.4b8ff143.js";import"./Info.4ddf30bd.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
