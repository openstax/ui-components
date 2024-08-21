import{s as r,a as e,F as i,j as n}from"./index.e4480ff8.js";import{R as o}from"./Radio.1fa65b83.js";import"./theme.5bd51325.js";import"./palette.15e4d008.js";import"./Tooltip.29367180.js";import"./OverlayArrow.module.84b1aa93.js";import"./focusSafely.module.838d93e1.js";import"./context.module.8697e9b1.js";import"./Info.2d35da7a.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
