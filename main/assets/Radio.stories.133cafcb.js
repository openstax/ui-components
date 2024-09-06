import{s as r,a as e,F as i,j as n}from"./index.06bd856d.js";import{R as o}from"./Radio.144713b2.js";import"./theme.be7e82d2.js";import"./palette.15e4d008.js";import"./Tooltip.69b7711c.js";import"./OverlayArrow.module.4d1f3241.js";import"./focusSafely.module.1a87d2d4.js";import"./context.module.732664c8.js";import"./Info.173fde48.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
