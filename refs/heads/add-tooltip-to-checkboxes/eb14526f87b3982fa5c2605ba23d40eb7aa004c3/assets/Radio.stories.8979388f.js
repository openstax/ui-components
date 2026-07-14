import{s as l,a as t,j as r,F as d}from"./index.244dd005.js";import{c as a}from"./theme.469067e1.js";import{u as w}from"./Tooltip.d3adbb9a.js";import"./palette.5e342580.js";import"./Button.module.1764719c.js";import"./useFocusRing.module.4e35c6bc.js";import"./context.module.3d64a1f7.js";import"./useButton.module.625f8887.js";import"./OverlayArrow.module.01e62d1e.js";import"./Info.0060f7a4.js";import"./VisuallyHidden.module.8943f7b5.js";const m=l.label`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?a.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,p=l.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${a.palette.white};
  opacity: ${e=>e.isDisabled?"0.4":"1"};
  font: inherit;
  color: ${a.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${a.palette.neutralThin};
  border-radius: 50%;
  transform: translateY(-0.075em);
  margin: 0 1.6rem 0 0;
  display: grid;
  place-content: center;

  &::before {
    content: "";
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    opacity: 0;
    box-shadow: inset 1em 1em ${a.palette.mediumBlue};
  }

  &:checked::before {
    opacity: ${e=>e.isDisabled?0:1};
  }
`,x=l.div`
  display: inline-block;
  position: relative;
  font-size: 1.6rem;
`,o=({children:e,disabled:i,labelAs:n,tooltipText:s,...c})=>{const{triggerRef:f,triggerProps:g,labelDescription:D,tooltip:y}=w(s);return s?t("div",{children:r(x,{children:[r(m,{ref:f,as:n,isDisabled:i,...g,children:[t(p,{...c,type:"radio",isDisabled:i,disabled:i}),e,D]}),y]})}):r(m,{isDisabled:i,as:n,children:[t(p,{type:"radio",isDisabled:i,disabled:i,...c}),e]})},b=l.div`
  & + & {
    margin-top: 3.2rem;
  }
  > * + * {
    margin-top: 0.5rem;
  }
`,u=e=>r(b,{children:[t(o,{...e,children:"Label"}),t(o,{...e,defaultChecked:!0,children:"Label"}),t(o,{...e,children:"Label"}),t(o,{disabled:!0,...e,children:"Disabled label"})]}),C=()=>t(d,{children:u({name:"default"})}),E=()=>t(d,{children:u({name:"withTooltip",tooltipText:"Tooltip text for radio input goes here"})}),h=e=>r(b,{children:[t(o,{disabled:!0,...e,children:"Disabled label"}),t(o,{disabled:!0,defaultChecked:!0,...e,children:"Disabled label"})]}),B=()=>r(d,{children:[h({name:"disabled"}),h({name:"disabledWithTooltip",tooltipText:"Tooltip text for disabled radio"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{C as Default,B as Disabled,E as WithTooltip};
