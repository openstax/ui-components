import{B as i}from"./Button.e4428ca2.js";import{b as t,c as d}from"./Modal.c92d2d99.js";import{E as e}from"./Error.0a49d2bf.js";import{j as l,a as r}from"./index.b1ce302f.js";const f=o=>{const{children:a,heading:n,...s}=o;return l(t,{...s,variant:"error",heading:"Error",children:[r(e,{heading:n,children:a}),r(d,{children:r(i,{onClick:o.onModalClose,children:"OK"})})]})};export{f as E};