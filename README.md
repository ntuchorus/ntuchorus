
# NTUChorus

This is the source code for [NTU Chorus](ntuchorus.github.io).

## Overview

The project is powered by [jekyll](jekyllrb.com).  You can find all the partial HTML templates inside `_includes`.
These partial templates are included by `./index.html` or `./**/index.html` to form complete pages.

The content of all HTML, ( for example, the header image, hero text, 
teacher's information, past performances information
) can all be found in `./_data`.  They are then pushed into HTML page by `liquid templates`.  
An example [here](https://github.com/yunchih/ntuchorus/blob/master/_includes/team.html#L13-L21), which includes its content from [`./_data/about.yml`](https://github.com/ntuchorus/ntuchorus/blob/master/_data/about.yml).

All CSS stylesheeets can be found in `./_includes/stylesheets/`.  They're Sass files that will be compiled into CSS 
( the outputing CSS will be placed in `./css` )
when site is being generated.

The CSS framework is [Bootstrap](http://getbootstrap.com).


The final output of the whole site would be placed in `_site`.

#### Relevent files

- `config.rb`: configuration files for compass.
- `_config.yml`: configuration files for jekyll.
- `gulpfile.js`: the site is built by this script.  Activate it by `gulp`.


#### Build

This will build the site and start the jekyll server.
See the generated site in your browser at `localhost:4444/`
```
gulp
```
