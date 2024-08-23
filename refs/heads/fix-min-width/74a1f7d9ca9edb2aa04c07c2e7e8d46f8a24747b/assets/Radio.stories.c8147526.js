import{s as r,a as e,F as i,j as n}from"./index.8e51a9b6.js";import{R as o}from"./Radio.24211142.js";import"./theme.325a8038.js";import"./palette.15e4d008.js";import"./Tooltip.0ce4a97f.js";import"./OverlayArrow.module.043ffa7b.js";import"./focusSafely.module.1dcc0622.js";import"./context.module.bd30ec64.js";import"./Info.71bb94fe.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
