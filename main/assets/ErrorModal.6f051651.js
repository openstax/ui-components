import{B as i}from"./Button.c8260ad0.js";import{b as t,c as d}from"./Modal.ed9304ee.js";import{E as e}from"./Error.f4eadf5a.js";import{j as l,a as r}from"./index.48e3ec45.js";const f=o=>{const{children:a,heading:n,...s}=o;return l(t,{...s,variant:"error",heading:"Error",children:[r(e,{heading:n,children:a}),r(d,{children:r(i,{onClick:o.onModalClose,children:"OK"})})]})};export{f as E};