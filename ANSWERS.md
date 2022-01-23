# 1. Layout Fix

The float property was set on the section (title boxes) and aside (red module box) elements, which made the display property be set to block on both elements, thus they couldn't be placed next to each other.

# 3. Image replacement

- One way of achieving this is by adding the image to the static directory and setting the background-image property of the anchor tag. All files from the static folder will be automatically served by nuxt and can be referenced relative to the root (/).

- Another way would be to place the image inside the assets directory, and webpack will take care of serving all files from this directory. Because .png is not JavaScript file, nuxt will use webpack's `file-loader` and `url-loader` to handle it.
