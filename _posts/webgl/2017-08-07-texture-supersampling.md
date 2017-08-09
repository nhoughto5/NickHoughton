---
layout: Day
title: WebGL Anti-Aliasing & Texture Super-Sampling
category: webgl
meta: An old method for improving texture resolution
---

WebGL is a fascinating subset of the OpenGL API.
It is subject to a variety of issues that other platforms are not. 
Browser versions, cross origin errors and security issues all add an additional level of complexity.

Recently, we were rendering faces onto old music videos.
We found that the faces came out fairly jagged and blurry.

The natural train of thought is that jagged edges can be cleaned up by enabling anti-aliasing.
This is where it gets a bit tricky with WebGL.
Unlike it's older brother OpenGL, WebGL is bound by the browser is is run in. 
Each browser.... and even each version of each browser it seems, has different opinions on what is safe and what is efficient.

Anti-Aliasing (AA) is a the process of removing artifacts caused by low resolution rendering.
There is a fantastic discussion of it [here](https://learnopengl.com/#!Advanced-OpenGL/Anti-Aliasing).

AA is enabled by default in WebGL however control still lies firmly with the browser.
Many older GPU drivers crash with anti-aliasing under specific conditions.
In OpenGL this is left to the developer to deal with however browsers may disable AA to prevent crashing the entire web experience.

With this in mind we are still able to take advantage of the benefits of AA in most modern scenarios.
**As long as we are rendering to the stage.......**

It is not uncommon for pipelines to perform rendering steps which are never shown to the user; we refer to this as off-screen rendering.
This technique is used for several purposes however one common need is for to composite multiple images together.

There is a great intro to it [here](http://ake.in.th/2013/04/02/offscreening-and-multisampling-with-opengl/), though this author is discussing OpenGL, not WebGL.

In our current pipeline we are using off-screen rendering to render multiple heads in each frame according to JSON position data.
This rendering step results in aliasing artifacts that were not be cleaned up.
We originally assumed that, since AA is enabled it would be taken care of.
We then came across [this](http://codeflow.org/entries/2013/feb/22/how-to-write-portable-webgl/#antialiasing) excellent discussion on making WebGL portable which mentioned that AA is only available to drawing directly to canvas.
In other words it would not take care of the artifacts generated in the 'off-screen' render.

