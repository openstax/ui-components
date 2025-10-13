import{s as t,j as l,a as s,R as d}from"./index.d7c45636.js";import{D as m}from"./DismissIcon.ba297110.js";import{H as c}from"./Html.827dedbb.js";import{a as g,B as u}from"./Button.cc85c590.js";import{c as i}from"./theme.83f6fe53.js";import"./buttons.c69a41e5.js";import"./palette.15e4d008.js";const f=t.span`
  font-weight: bold;
  text-transform: uppercase;
`,h=t.div`
  position: relative;
  background: ${({severity:e})=>e==="error"?"#F8E8EA":"#fff5e0"};
  color: ${({severity:e})=>e==="error"?i.palette.darkRed:"#976502"};
  border: ${({severity:e})=>e==="error"?`1px solid ${i.palette.lightRed}`:"1px solid #fdbd3e"};
  padding: .6rem 1.6rem;
  margin: 0 0 1.6rem 0;
  line-height: 2rem;
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: ${i.palette.mediumBlue};
  
    &:hover {
      text-decoration: underline;
      color: ${i.link.hover}
    }
  }

  ${g} {
    font-size: 1.6rem;
  }
`,v=t(u)`
  color: ${({severity:e})=>e==="error"?i.palette.darkRed:"#976502"};
  overflow: visible;
  background: none;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
  box-shadow: none;
  margin-left: 2.4rem;

  &:not([disabled]):hover,
  &:not([disabled]):active {
    background: none;
  }
`,n=e=>{const r=e.messages.length;return l(h,{severity:e.severity,children:[l("div",{children:[e.severity!=="error"?s(f,{children:e.severity==="note"?"Note: ":"Warning: "}):null,e.messages.map((o,a)=>s(c,{block:r>1,children:r>1?`[${a+1} of ${r}]: ${o}`:o},a))]}),e.onDismiss?s(v,{severity:e.severity,onClick:e.onDismiss,"aria-label":"dismiss",children:s(m,{"aria-hidden":"true",focusable:"false"})}):null]})},B=()=>s(n,{messages:["This is an error message"],severity:"error"}),D=()=>s(n,{messages:["This is a warning message"],severity:"warning"}),E=()=>s(n,{messages:["This is a note message"],severity:"note"}),R=()=>s(n,{messages:["First message","Second message","Third message"],severity:"warning"}),T=()=>{const[e,r]=d.useState(!0);return e?s(n,{messages:["This is a dismissible warning message"],severity:"warning",onDismiss:()=>r(!1)}):null};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{T as Dismissible,B as Error,R as MultipleMessages,E as Note,D as Warning};
