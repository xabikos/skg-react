title: React Server Side Rendering
author: Babis Karypidis (xabikos)
description: An introduction to server side rendering with React.js
date: <%= Date.today %>
% available themes: Default - Sky - Beige - Simple - Serif - Night - Moon - Solarized
theme: simple
% available transitions: // default/cube/page/concave/zoom/linear/fade/none
transition: linear
custom_css: presentation
% code-engine: coderay


!SLIDE
## Server Side Rendering with React
<p>&nbsp;</p>
<p>&nbsp;</p>
An introduction to server side rendering with React.js
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<a href="https://www.meetup.com/Thessaloniki-ReactJS-Meetup/">Thessaloníki ReactJS Meetup </a>

!SLIDE
## Who am I?
<p>&nbsp;</p>
<h3>
  Babis Karypidis (<strong>xabikos</strong>)
</h3>
<p>&nbsp;</p>
<p>
  Freelance Software Engineer
</p>
<p>&nbsp;</p>
<p>
  <a href="http://github.com/xabikos">github.com/xabikos</a>
  <br>
  <a href="http://twitter.com/xabikos">twitter.com/xabikos</a>
  <br>
  <a href="http://xabikos.com">xabikos.com</a>
</p>

!SLIDE
## Agenda

<p>&nbsp;</p>

* Client side rendering explained
* Server side rendering (the not so performant way)
* Server side rendering (the right way)
* Server side rendering with Redux (if time permits)

!SLIDE
## Why to render server side

<p>&nbsp;</p>

* Better SEO - even though Google understands SPA
* Offer a better user experience during initial page load
* Having a working React application - don't begin with SSR in mind

!SLIDE
## Why not to render server side

<p>&nbsp;</p>

* Increases the complexity of the app e.g. "`window`" is not defined on server
* Increases the server load e.g. "`ReactDOMServer.renderToString`" is a synchronous call

!SLIDE
## End of borring slides

<p>&nbsp;</p>
No more slides show us some code...

!SLIDE
## Thank you for your patience
<p>&nbsp;</p>
Code and presentations available at
<a href="https://github.com/xabikos/skg-react">Github</a>