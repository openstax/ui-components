import{B as i}from"./Button.8ca9b534.js";import{b as t,c as d}from"./Modal.c5f1728e.js";import{E as e}from"./Error.a21c362f.js";import{j as l,a as r}from"./index.7cd561cc.js";const f=o=>{const{children:a,heading:n,...s}=o;return l(t,{...s,variant:"error",heading:"Error",children:[r(e,{heading:n,children:a}),r(d,{children:r(i,{onClick:o.onModalClose,children:"OK"})})]})};export{f as E};