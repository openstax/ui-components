import{s as r,a as e,F as i,j as n}from"./index.3ca53d7c.js";import{R as o}from"./Radio.392b8f83.js";import"./theme.6648c6ca.js";import"./palette.15e4d008.js";import"./Tooltip.7303ff82.js";import"./OverlayArrow.module.32cc63f7.js";import"./focusSafely.module.6a0810d6.js";import"./context.module.e746dfd4.js";import"./Info.bddd3592.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
