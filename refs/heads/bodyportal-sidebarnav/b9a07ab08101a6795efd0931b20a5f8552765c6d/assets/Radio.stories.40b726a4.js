import{s as r,a as e,F as i,j as n}from"./index.985764e8.js";import{R as o}from"./Radio.d1857ce9.js";import"./theme.e21feae2.js";import"./palette.15e4d008.js";import"./Tooltip.977e8c4a.js";import"./OverlayArrow.module.06f305ff.js";import"./focusSafely.module.eb838493.js";import"./context.module.b6f63d20.js";import"./Info.b37a5fc9.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
