import{s as r,a as e,F as i,j as n}from"./index.eb958383.js";import{R as o}from"./Radio.909812ee.js";import"./theme.27d25ff7.js";import"./palette.15e4d008.js";import"./Tooltip.97d6204a.js";import"./OverlayArrow.module.8e0bb7ce.js";import"./context.module.9550536c.js";import"./useButton.module.ea060109.js";import"./Info.ac53a983.js";const a=r.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,d=t=>n(a,{children:[e(o,{...t,children:"Label"}),e(o,{...t,defaultChecked:!0,children:"Label"}),e(o,{...t,children:"Label"}),e(o,{disabled:!0,...t,children:"Disabled label"})]}),w=()=>e(i,{children:d({name:"default"})}),x=()=>e(i,{children:d({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{w as Default,x as WithTooltip};
