import{s as r,a as e,F as i,j as n}from"./index.e2c08fa7.js";import{R as o}from"./Radio.b4c44843.js";import"./theme.b9535cc3.js";import"./palette.15e4d008.js";import"./Tooltip.cf5e4a0c.js";import"./OverlayArrow.module.593e7fbf.js";import"./focusSafely.module.61bf43db.js";import"./context.module.9a4dbe5e.js";import"./Info.d7b9a859.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
