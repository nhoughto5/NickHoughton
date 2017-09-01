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

