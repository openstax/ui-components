import{M as t,E as a,b as d,c as s}from"./Error.ffdc6ced.js";import{B as l}from"./Button.4bc9da9e.js";import{j as i,a as e,r as n}from"./index.91fa91fe.js";import"./theme.4a600094.js";import"./palette.15e4d008.js";const c=o=>i(t,{...o,variant:"error",heading:"Error",children:[e(a,{}),e(d,{children:e(l,{onClick:o.onModalClose,children:"OK"})})]}),f=()=>{const[o,r]=n.exports.useState(!0);return e(t,{heading:"test",onModalClose:()=>r(!1),show:o,children:e(s,{children:"Message"})})},p=()=>{const[o,r]=n.exports.useState(!0);return e(c,{onModalClose:()=>r(!1),show:o,children:e(s,{children:"Message"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{f as Default,p as Error};