import{s as r,a as e,F as i,j as n}from"./index.cdc70e2f.js";import{R as o}from"./Radio.d9cfa194.js";import"./theme.09e6b53e.js";import"./palette.15e4d008.js";import"./Tooltip.7acf64b0.js";import"./OverlayArrow.module.b1455fd9.js";import"./focusSafely.module.8c45bb2f.js";import"./context.module.3b03806b.js";import"./Info.26f1596a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
