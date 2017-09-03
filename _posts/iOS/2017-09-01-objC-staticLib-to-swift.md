---
layout: Day
title: Converting an Objective-C Static Library to Swift
category: iOS
meta: Going from old to new with minimal hair loss
layout: Post
---

It's not an uncommon phenomenon to feel a sense of exasperation when attempting to deal with legacy code.
For the  most part, the fun and the easy part is translating code from old to new.
The difficulty often lies in plugging the new into the place of the old.

Working with libraries can often cause these sorts of headaches
For our mobile apps we have developed an Objective-C based static library.
For various reasons we decided that it would be a good idea to bring this old beast into the modern era via Swift.

### Swift? Obj-C? 
When I was assigned this task I had never touched either Swift or Objective-C.
To anyone who has taken their first look at Objective-C years into their career, let me say... I feel your pain.
For those who haven't yet, it's a strange language which does not follow a lot of common language paradigms.
Swift seemed to have considerable more common sense put into it.
Aside from development of ease, the claim is that swift is both more efficient and more secure than Obj-C. 
I still don't have the experience with either yet to say for sure but this is all beside the point.

From what I understood, Objective-C and Swift work really well together.
I did a bit of research and came across [this great video](https://youtu.be/OvDk5zXCFe8) describing how to set up communication between the two.
'Excellent!' I found myself saying. 'This should be a smooth transition'.
My plan was to slowly replace Objective-C files with their a Swift translations until the whole thing is in Swift.
I came across an excellent guide on a best practice for this [here](https://www.oreilly.com/ideas/translating-your-objective-c-project-to-swift).
Following the guide was easy and before I knew it I had the first class in swift.
**Compile Time!**

### The Roadblock
Wham!
Face-plant right into a doozy.

    Dependency Analysis Error: Swift is not supported for static libraries.

Ouch.
As it turns out, Apple has not [yet](https://lists.swift.org/pipermail/swift-evolution/Week-of-Mon-20170213/032160.html) implemented a means to compile Swift into static libraries. 
This is a real bummer as it means we can't modernize our static library following my brilliant plan.

### The Solution
After milling about for a while I started to look more into the possibilities of frameworks. 
I didn't know much about them but, hey... you don't fish, you don't eat.
I found a great video demonstrating how to create a framework [here](https://youtu.be/Bl_mUj_ONHo).

This example uses a really simple Swift class, compiles it into a framework, then creates a demo application to test it.
I followed what he did and it worked, great.
I was hoping to be able to import all of the Objective-C from our static library.
This required not only being able to compile the Objective-C into the Swift framework, but being able to call Objective-C methods from it directly aswell.
I began to follow the instructions from the video regarding interoperability but hit a snag.
Looking at the build settings of my framework, there was no option to link a build header.
This meant that the Objective-C files couldn't be linked.
Fortunately I found a work around.
First, make the header file of your Objective-C class public. 
You can do this in X-Code by highlighting it and finding the 'Target Membership' dialog in the inspector.
Here you can make it public.
The framework project comes with a header file of the same name by default.
Now, all you have to do is import your Objective-C header files here.

### Voila!

Press build and you have a framework which can run all of your old Objective-C code AND new your new Swift code side by side. 
You can now progressively begin to translate your Objective-C to Swift without totally destroying the applications which use it!