import{s as r,a as e,F as i,j as n}from"./index.707a9320.js";import{R as o}from"./Radio.cf5b520c.js";import"./theme.d04dcb0d.js";import"./palette.15e4d008.js";import"./Tooltip.b8a4414a.js";import"./OverlayArrow.module.aacf4626.js";import"./focusSafely.module.9c0a03c2.js";import"./context.module.dda96eab.js";import"./Info.e603b73b.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
