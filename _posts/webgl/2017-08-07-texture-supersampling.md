---
title: WebGL Anti-Aliasing & Mip Maps
category: webgl
meta: An old method for improving texture resolution
layout: Post
---

WebGL is a fascinating subset of the OpenGL API.
It is subject to a variety of issues that other platforms are not. 
Browser versions, cross origin errors and security issues all add an additional level of complexity.

Recently, we were rendering faces onto old music videos.
We found that the faces came out fairly jagged and blurry.

The natural train of thought is that jagged edges can be cleaned up by enabling anti-aliasing.
This is where it gets a bit tricky with WebGL.
Unlike it's older brother OpenGL, WebGL is bound by the browser it is run in. 
Each browser.... and even each version of each browser it seems, has different opinions on what is safe and what is efficient.

### Anti-Aliasing
----------


Anti-Aliasing (AA) is the process of removing artifacts caused by low resolution rendering.
There is a fantastic discussion of it [here](https://learnopengl.com/#!Advanced-OpenGL/Anti-Aliasing).

AA is enabled by default in WebGL however control still lies firmly with the browser.
Many older GPU drivers crash with anti-aliasing under specific conditions.
In OpenGL this is left to the developer to deal with however browsers may disable AA to prevent crashing the entire web experience.

With this in mind we are still able to take advantage of the benefits of AA in most modern scenarios.

**As long as we are rendering to the stage.......**

It is not uncommon for pipelines to perform rendering steps which are never shown to the user; we refer to this as off-screen rendering.
This technique is used for several purposes however one common need is to composite multiple images together.

There is a great intro to it [here](http://ake.in.th/2013/04/02/offscreening-and-multisampling-with-opengl/)... though this author is discussing OpenGL, not WebGL, the idea is the same.

### Off-Screen Rendering
----------


In our current pipeline we are using off-screen rendering to render multiple heads in each frame according to JSON position data.
This rendering step results in aliasing artifacts that were not being cleaned up.
We originally assumed that, since AA is enabled it would be taken care of.
We then came across [this](http://codeflow.org/entries/2013/feb/22/how-to-write-portable-webgl/#antialiasing) excellent discussion on making WebGL portable which mentioned that AA is only available to drawing directly to canvas.
In other words it would not take care of the artifacts generated in the 'off-screen' render.

We played around with forcing the final render to take place on a strictly-power of two buffer in the hopes that it would improve the GPU's AA performance.
This showed a slight improvement however the artifacts from the off-screen render were still quite evident.

Though this is far from a universal solution to this problem, in our case the solution ended up being activating mip mapping. 
There is an excellent explanation of the principle [here](https://webglfundamentals.org/webgl/lessons/webgl-3d-textures.html).
For those unfamiliar, the idea is that the WebGL takes your texture and creates a series of smaller versions of it at high quality.
Then, as the texture is rendered at different depths (a.k.a scale) it has a much cleaner asset to render.

### The Fix
----------


For us, we were lucky that mip-mapping helped for our particular needs.
I can imagine many situations where this WebGL difficulty is a real show stopper.
In the end it's just one of the many things that web developers will need to swallow.
For now.... 
