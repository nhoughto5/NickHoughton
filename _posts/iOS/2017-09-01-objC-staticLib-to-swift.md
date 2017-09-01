---
layout: Day
title: Converting an Obj-C Static Library to Swift
category: iOS
meta: Going from old to new with minimal hair loss
layout: Post
---

It's not an uncommon phenomenon to feel a sense of exasperation when attempting to deal with legacy code.
The easy part is translating code from old to new.
The difficulty often lies in getting is plugging the new into the old's place.

For our mobile apps we have developed a bundle of doo-dads known as our RenderLibrary.
It's a fairly beastly static library written in objective-c.
For various reasons we decided that it would be a good idea to bring this old beast into the modern era via Swift.

### Swift? Obj-C? 
When I was assigned this task I had never touched either swift or objective-c.
To anyone who has taken their first look at Obj-C years into their career, let me say... I feel your pain.
For those who haven't yet it's a strange language which does not follow a lot of the common language paradigms.
Swift seemed to have considerable more common sense put into it.
Aside from development of ease, the claim is that swift is both more efficient and more secure than Obj-C. 
I still don't have the experience with either yet to say for sure but this is all beside the point.

From what I understood, Obj-C and Swift work really well together.
I did a bit of research and came across [this great video](https://youtu.be/OvDk5zXCFe8) describing how to set up communication between the two.
'Excellent!' I found myself saying.
'This should be a smooth transition'.
I'll just slowly replace a file (well two, one for the header and one for implementation) until the whole thing is in swift.
I came across an excellent guide on a best practice for [translating Obj-C into Swift](https://www.oreilly.com/ideas/translating-your-objective-c-project-to-swift).
Following the guide was easy and before I knew it I had the first class in swift.
**Compile Time!**

### The Roadblock
Wham!
Face-plant right into a doozy.

    Dependency Analysis Error: Swift is not supported for static libraries.

Ouch.
As it turns out, Apple has not [yet](https://lists.swift.org/pipermail/swift-evolution/Week-of-Mon-20170213/032160.html) implemented a means to compile swift into static libraries. 
This is a real bummer as it means we are not able to modernize out static library.

### Th Solution
After milling about for a while I started to look more into the possibilities of frameworks. 
I didn't know much about them but, hey... don't fish, don't eat.
I found a great video demonstrating how to create a framework [here](https://youtu.be/Bl_mUj_ONHo).

This example uses a really simple swift class, compiles it into a framework, then creates a demo application to test it.
I followed what he did and it worked, no problem.
For my goal, I wanted to be able to import all of the Objective-C from our render library static library.
This required not only being able to compile the obj-C into the swift framework, but being able to call obj-c methods from it too directly.
I began to follow the instructions from the instructional video regarding interoperability but hit a snag.
Looking at the Build settings of my framework, there was no option to link a build header.
This meant that the Obj-C files couldn't be linked.
Fortunately I found a work around.
This first step is to make the header file of your Obj-C class public. 
Do so in X-code by highlighting it and finsind the 'Target Membership' dialog in the inspector.
Here you can make it public.
The framework project comes with a header file of the same name by default.
Now, all you have to do is import your Obj-C header files here.

#### Voilla!

Press build and you have a framework which can run all of your old Obj-C code AND new Swift code side by side. 
You can now progressively begin to translate your Obj-C to swift without totally destroying the applications which use it!