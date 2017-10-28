---
layout: Post
title: Going in Circles
category: ShaderToy
meta: Taking my first stab at shader
---

To start, I'll remind you, there is a great introduction to working with ShaderToy [here](https://gamedevelopment.tutsplus.com/tutorials/a-beginners-guide-to-coding-graphics-shaders--cms-23313).
If you haven't gone through it I highly recommend it.

The first time you try to tackle a fragment shader you realize that it is quite a different mindset then most programming.
To recap, the program executes for every pixel that appears on your screen (... sort of, but it's an easy way to think of it).
In other words, for each execution you are looking at a single pixel.
In order to paint the entire frame the program needs to perform the task at hand for every pixel.
So, you can think of it as an excel spread sheet that it iterates through.
For each cell of the spread sheet you have to decide what color to paint it.

When deciding what color your current pixel should be you need to think about its position in the frame.
How does this pixel relate to the entire image?
To practice this I decided to first render a simple circle.
The thought process is 'if the pixel is inside the circle, it's one color, if not, use the other color'.

<iframe width="640" height="360" frameborder="0" src="https://www.shadertoy.com/embed/ltjcWR?gui=true&t=10&paused=true&muted=false" allowfullscreen></iframe>

This could be done with if-statements however there is a cool GLSL method called [Mix](https://thebookofshaders.com/glossary/?search=mix).
Mix linearly interpolates between two values based on a third value.
We can use this to make our decision as to which color the fragment should be based on the formula for a circle.

### The Code
Here it is in its simple glory.
Sixteen lines is all it takes, and I'm sure someone could [code golf](https://en.wikipedia.org/wiki/Code_golf) this down to nothing but that's not the goal.
<hr>

    // Is the pixel in the circle?
    vec4 circle(vec2 uv, vec2 pos, float rad, vec3 color){
        float d = length(pos - uv) - rad;
        float t = clamp(d, 0.0, 1.0);
        return vec4(color, 1.0-t);
    }

    void mainImage( out vec4 fragColor, in vec2 fragCoord )
    {
    	vec2 uv = fragCoord.xy; // Get the xy pos of the pixel

    	// Choose the two colors to use
    	vec4 backGround = vec4(0.9, 0.8, 0.7, 1.0);
    	vec3 shapeColor = vec3(0.3, 0.73, 0.14);

        vec2 center = iResolution.xy * 0.5;
        float radius = iResolution.y * 0.25;

        vec4 shape = circle(uv, center, radius, shapeColor);
        fragColor = mix(backGround, shape, shape.a);
    }

<hr>
The first step of the program is to get a short-hand for the position of the current pixel.
When talking about 2D it is common to refer to XY as UV.
Accept this as common practice.
There is a reason for it but we won't dive in there right now.

From there we pick two colors to make up both our background, and the color of the shape (in this case a circle).
The property 'iResolution' is a value passed into the shader from the operating system which gives information regarding the current size of the display area.
We can get the dimensions of the display area and use them to calculate the center and radius of our circle.
By using 'iResolution' it will maintain the center and proportional radius when we go full screen.

Next we use a helper method to determine whether the current pixel is within our circle.
We pass the method the color of the circle, the position of the pixel and the dimensions of the circle.
There is some confusing math going on here, so lets try to break it down the best we can.

First, we subtract the position of the pixel from the center of the circle. Remember, this is 2D vector math so it will do:

    (x,y) = (pos.x-uv.x, pos.y-uv.y)

The result of this subtraction represents a vector from the center of circle to the pixel.
Think of it as drawing a line from one to the other.
Next we take the length of this vector, this tells us the distance between the two.
Next we subtract the radius.
This gives us the value d.
'd' will greater than 1 if the pixel is further away from the center then the radius is long; less than 1 when inside the circle.
This is a nice, compact scalar representation of whether the pixel should be the color of the circle, or of the background.

Next, we use the clamp method to constrain d to be between 0 and 1.
We subtract this value from one and set it to the alpha channel of the returned color.
If the pixel was outside the circle 'd' will be one.
This, in turn will result in an alpha value of zero; alpha of zero means 'do not display'! Perfect!

Finally, we get back to our mix function.
We blend between the background and shape color based on the alpha channel of the result of our helper function.
If the pixel was outside the circle, the alpha channel tells the mix function to return the background color.

### Conclusion

This is a simple fragment shader compared to what you see on the home page of ShaderToy.
But, you can see how the very nature of dealing with specific pixels can quickly complicate things.
The only way to get better is to practice.