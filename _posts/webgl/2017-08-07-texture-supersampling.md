---
layout: Day
title: Texture Super-Sampling
category: webgl
meta: An old method for improving texture resolution
---

WebGL is a fascinating subset of the OpenGL API.
It is subject to a variety of issues that other platforms are not. 
Browser versions, cross origin errors and security issues all add an additional level of complexity.

Currently, the majority if modern browsers support WebGL 1; WebGL 2 is still fairly experimental.
Being stuck with WebGL 1 comes with some reduced features. 

One such we faced recently was 'off-screen' anti-aliasing.
It is not uncommon for pipelines to perform rendering steps which are never shown to the user; we refer to this as off-screen rendering.
This technique is used for several purposes however one common need is for to composite multiple images together.

