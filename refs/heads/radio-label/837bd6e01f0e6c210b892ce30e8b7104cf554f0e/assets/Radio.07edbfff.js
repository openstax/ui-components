import{s,R as b,a as r,j as n}from"./index.08426613.js";import{c as a}from"./theme.a8483983.js";import{C as f}from"./Tooltip.7c38b78a.js";import{a as h,b as u}from"./module.e0675674.js";const c=s.label`
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  color: ${e=>e.isDisabled?a.palette.pale:"inherit"};
  width: 100%;
  position: relative;
`,d=s.input`
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: ${e=>e.isDisabled?"#f7f7f7":"#fff"};
  font: inherit;
  color: ${a.palette.pale};
  width: 2rem;
  height: 2rem;
  border: 1px solid ${e=>e.isDisabled?"#e6e6e6":"currentColor"};
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
`,y=s.div`
  display: inline-flex;
`,R=({children:e,disabled:t,...i})=>{const o=h({delay:0}),l=b.useRef(null),{triggerProps:p,tooltipProps:m}=u({delay:0},o,l);return i.tooltipText?r(y,{children:n(c,{ref:l,isDisabled:t,"aria-disabled":t,...p,children:[r(d,{type:"radio",onFocus:()=>o.open(),isDisabled:t,"aria-disabled":t,...i}),e,o.isOpen&&r(f,{state:o,...m,placement:"right",children:i.tooltipText})]})}):n(c,{isDisabled:t,"aria-disabled":t,children:[r(d,{type:"radio",isDisabled:t,"aria-disabled":t,...i}),e]})};export{R};
