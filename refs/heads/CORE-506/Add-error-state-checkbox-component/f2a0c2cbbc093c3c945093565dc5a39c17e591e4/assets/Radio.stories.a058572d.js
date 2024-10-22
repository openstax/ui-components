import{s as r,a as e,F as i,j as n}from"./index.c1b3aa24.js";import{R as o}from"./Radio.c1f3cb62.js";import"./theme.07cf6cc1.js";import"./palette.15e4d008.js";import"./Tooltip.6012cc5e.js";import"./OverlayArrow.module.fbb5d999.js";import"./focusSafely.module.3764b933.js";import"./context.module.d28ee879.js";import"./Info.118acf49.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
