import{b as t,c as a,M as s}from"./Modal.410db234.js";import{B as d}from"./Button.5ec48316.js";import{E as l}from"./Error.4977ddf5.js";import{j as i,a as o,r as n}from"./index.ae591563.js";import"./theme.3bebbd8a.js";import"./palette.15e4d008.js";const c=e=>i(t,{...e,variant:"error",heading:"Error",children:[o(l,{}),o(a,{children:o(d,{onClick:e.onModalClose,children:"OK"})})]}),p=()=>{const[e,r]=n.exports.useState(!0);return o(t,{heading:"test",onModalClose:()=>r(!1),show:e,children:o(s,{children:"Message"})})},E=()=>{const[e,r]=n.exports.useState(!0);return o(c,{onModalClose:()=>r(!1),show:e,children:o(s,{children:"Message"})})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{p as Default,E as Error};
