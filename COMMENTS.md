# General Comments
## Components
1. Things which can be component-ed are each of the layout boxes and the text that comes with it.

## CSS Styling
1. Avoid using styling in 2 different places for the same elements
  - this is done for the dragon / flames
  - it makes it difficult to trace and may introduce unnecessary human error
2. Understanding of positioning, grid, flexbox can be better!
3. In responsive design, wherever possible, don't use fixed dimensions for images unless they are icons, especially if the size of the image should change depending on it's parent.
4. Make use of padding to create consistent white spaces.

## Variables
1. Where possible use boolean instead of names like 'default' or 'open'. Especially in cases where there will only be 2 different states.
2. Used together with isIconActive / isDragonActive makes it much more readable / accessible in the future.