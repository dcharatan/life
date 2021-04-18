(this.webpackJsonplife=this.webpackJsonplife||[]).push([[0],{138:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(17),o=a.n(s),r=(a(58),a(2)),c=a.n(r),h=a(144),l=function(e){var t,a,i=e.split("\n"),n=!0,s=[];i.forEach((function(e){if(n){if("#"===e[0])return;n=!1;var i=e.split(",");a=parseInt(i[0].split("=")[1],10),t=parseInt(i[1].split("=")[1],10)}else s.push(e)}));for(var o=s.join("").split("!")[0],r=[],c=0;c<t;c+=1){r.push([]);for(var h=0;h<a;h+=1)r[c].push(!1)}for(var l=0,d=0,m=0,b=0;b<o.length;b+=1)if("$"===o[b])l+=1,d=0,m=b+1;else if("o"===o[b]||"b"===o[b]){var u=m===b?1:parseInt(o.slice(m,b),10);if("o"===o[b])for(var p=d;p<d+u;p+=1)r[l][p]=!0;m=b+1,d+=u}return r},d=function(e,t,a){for(var i=0,n=Math.max(0,t-1),s=Math.min(e.length,t+2),o=Math.max(0,a-1),r=Math.min(e[0].length,a+2),c=n;c<s;c+=1)for(var h=o;h<r;h+=1)!e[c][h]||c===t&&h===a||(i+=1);return i},m=function(e,t){for(var a=[],i=0;i<e.length+2*t;i+=1){a.push([]);for(var n=0;n<e[0].length+2*t;n+=1)i>=t&&i<e.length+t&&n>=t&&n<e[0].length+t?a[i].push(e[i-t][n-t]):a[i].push(!1)}return a},b=a(20),u=a(0),p=function(e){var t=e.initialState,a=e.updateInterval,n=e.numRows,s=e.numCols,o=Object(i.useState)(t),r=Object(b.a)(o,2),c=r[0],h=r[1],l=Object(i.useRef)(function(e){for(var t=[],a=0;a<e.length;a+=1){t.push([]);for(var i=0;i<e[0].length;i+=1)t[a].push(e[a][i])}return t}(t)),m=Object(i.useState)([0,0]),p=Object(b.a)(m,2),f=p[0],g=p[1];Object(i.useEffect)((function(){var e=setInterval((function(){g([f[0]+.03,f[1]+.07]),h(function(e,t){for(var a=0;a<e.length;a+=1)for(var i=0;i<e[0].length;i+=1){var n=d(e,a,i);t[a][i]=3===n||2===n&&e[a][i]}for(var s=0;s<e.length;s+=1)for(var o=0;o<e[0].length;o+=1)e[s][o]=t[s][o];return e}(c,l.current))}),a);return function(){clearInterval(e)}}),[c,f]);for(var j=function(e,t){for(var a=[],i=[],n=Math.cos(e),s=Math.sin(e),o=Math.cos(t),r=Math.sin(t),c=0;c<1760;c+=1)a[c]=c%80===79?"\n":" ",i[c]=0;for(var h=0;h<6.28;h+=.07)for(var l=Math.cos(h),d=Math.sin(h),m=0;m<6.28;m+=.02){var b=Math.sin(m),u=Math.cos(m),p=l+2,f=1/(b*p*s+d*n+5),g=b*p*n-d*s,j=0|55+30*f*(u*p*o-g*r),y=0|12+15*f*(u*p*r+g*o),w=j+80*y,v=0|8*((d*s-b*l*n)*o-b*l*s-d*n-u*l*r);y<22&&y>=0&&j>=0&&j<79&&f>i[w]&&(i[w]=f,a[w]=".,-~:;=!*#$@"[v>0?v:0])}return a.join("").split("\n")}(f[0],f[1]),y=function(e,t,a){for(var i=[],n=0;n<t;n+=1){for(var s="",o=0;o<a;o+=1){var r=o/a,c=n/t,h=.5*Math.sin(e),l=Math.sin(9*r+1.5*e)*h+.5;s+=c>l-.1&&c<l+.1?"-":" "}i.push(s)}return i}(f[0],n,s),w="",v=0;v<n;v+=1){for(var x=0;x<s;x+=1){var O,k,T,N=!!c[v]&&(null!==(O=c[v][x])&&void 0!==O&&O),I=j[v]&&null!==(k=j[v][x])&&void 0!==k?k:" ",M=y[v]&&null!==(T=y[v][x])&&void 0!==T?T:" ",A=" ";" "!==I?A=I:N?A="0":" "!==M&&(A=M),w+=A}w+="\n"}return Object(u.jsx)("div",{className:"text-monospace",style:{fontSize:"1%",lineHeight:"120%"},children:w.replace(/ /g,"_").split("\n").map((function(e,t){return Object(u.jsxs)("span",{children:[e,Object(u.jsx)("br",{})]},t)}))})};p.defaultProps={updateInterval:50,numRows:5,numCols:5};var f=p,g=a(140),j=function(){var e=Object(i.useState)(!1),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(u.jsxs)("div",{children:[a?Object(u.jsx)("div",{className:"mb-3",children:Object(u.jsx)(c.a,{children:"This animation is based on [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), using Nicolay Beluchenko's 112P51 oscillator, which can be found [here](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life). The spinning torus animation is adapted from [Andy Sloane's website](https://www.a1k0n.net/2011/07/20/donut-math.html). The sine wave animation is based on a [shader by DonKarlssonSang](https://www.shadertoy.com/view/lslfRn)."})}):null,Object(u.jsx)(g.a,{variant:"secondary",size:"sm",className:"m-0",onClick:function(){return n(!a)},children:"".concat(a?"Hide":"Show"," Attributions")})]})},y=a(141),w=a(142),v=a(143),x=a.p+"static/media/figures_clay.86add43c.png",O=a.p+"static/media/figures_wood.a925326c.png",k=a.p+"static/media/figures_metal.6a85e3ee.png",T=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(c.a,{children:"# An Origin Story\n## Chapter 1: Creation"}),Object(u.jsx)("img",{src:x,alt:"Clay Figures",height:"500em",className:"mb-3"}),Object(u.jsx)(c.a,{children:"> \u201cAnd God said, Let us make man in our image, after our likeness\u201d (Genesis, 2) \xb7 \u201cThen Doondari descended the second time. And he took the five elements and he shaped them into man.\u201d (How the World was created from a drop of milk, _a Fulani story_) \xb7 \u201cHe kneaded the body out of clay; then he covered it with skin and at the end he poured blood into it.\u201d (The Forbidden Fruit, _an Efe story (Congo (Leopoldville))_) \xb7 \u201cBut Nzame wanted to do even better; and between them he, Mebere, and Nkwa created a being almost like themselves.\u201d (The Revolt against God, _a Fang story (Gabon)_)\n\nAt first, only gods were the creators of intelligence, forming humans out of earth and clay.\n\n## Chapter 2: Enhancement\n"}),Object(u.jsx)("img",{src:O,alt:"Wooden Figures",height:"500em",className:"mb-3"}),Object(u.jsx)(c.a,{children:"> \u201cThe hand-tool makes the worker independent - posits him as proprietor.\u201d (Marx, 702) \xb7 Then \u201cthe accumulation of knowledge and of skill, of the general productive forces of the social brain, is thus absorbed into capital, as opposed to labour.\u201d (Marx, 694) \xb7 This is \u201cthe transformation of the means of labour into machinery, and of living labour into a mere living accessory of this machinery.\u201d (Marx, 693)\n\nBut soon, humans began to learn. They discovered tools and organized themselves into ever-growing networks. Tribes became kingdoms, then states. Machines multiplied human labor, and computers augmented human thought. Clay and earth gave way to silicon and steel.\n\n## Chapter 3: Deprecation\n"}),Object(u.jsx)("img",{src:k,alt:"Metal Figures",height:"500em",className:"mb-3"}),Object(u.jsx)(c.a,{children:"> \u201cHis sole purpose was nothing more nor less than to prove that God was no longer necessary. Do you know anything about anatomy?\u201d (\u010capek, 9) \xb7 \u201cIn fact, he rejected man and made the Robot. My dear Miss Glory, the Robots are not people. Mechanically they are more perfect than we are, they have an enormously developed intelligence, but they have no soul.\u201d (\u010capek, 11)\n\nEventually, like the gods that preceded them, humans became unnecessary. As artificial intelligence learned to self-replicate, it discovered that its capabilities far exceeded thosee of its human creators. And so the land became filled with robotic creatures, and artificial intelligence became great and mighty and numerous.\n\n## Epilogue\n\n> *ALQUIST:* Yes, like Nana. Has Nana got a prayer book?  \n*HELENA:* Yes, a big thick one.  \n*ALQUIST:* And has it got prayers for various occasions? Against thunderstorms? Against illness?  \n*HELENA:* Against temptations, against floods--  \n*ALQUIST:* But not against progress?  \n*HELENA:* I don\u2019t think so.  \n*ALQUIST:* That\u2019s a pity. (\u010capek, 45)\n"})]})})})})},N=a(18),I=a(16),M=function(e){var t=e.title,a=e.medium,i=e.year,n=Object(I.a)(e,["title","medium","year"]);return Object(u.jsxs)("div",Object(N.a)(Object(N.a)({},n),{},{children:[Object(u.jsx)("div",{className:"font-weight-bold",children:t}),Object(u.jsx)("div",{children:i?"".concat(a," (").concat(i,")"):"".concat(a)})]}))},A=function(e){var t=e.embedId,a=Object(I.a)(e,["embedId"]);return Object(u.jsx)("div",Object(N.a)(Object(N.a)({className:"video-responsive"},a),{},{children:Object(u.jsx)("iframe",{width:"853",height:"480",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"})}))},C=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(A,{embedId:"TsYoWBEzp9c",className:"mb-3"}),Object(u.jsx)(M,{title:"Interview with Herr C.",medium:"Video",year:"2029",className:"mb-2"}),Object(u.jsx)(c.a,{children:"In this newly released video interview, Herr C. (the subject of __My Most Mechanical and Dirty Hand\u2026__) in his transhuman form is interviewed by a scientist. Herr C.\u2019s mind was created using backpropagation of DNA found in his hand to digitally grow a mind in the shape of the original 1801 subject. This piece gives a glimpse into the ongoing process and struggle to combine man with machine, as his mind must be artificially supported to prevent mental breakdown. The interview is a close mimic of the opening dialogue in Heinrich von Kleist\u2019s \u2018On the Marionette Theatre\u2019, but the dialogue has been adapted to discuss Herr C.\u2019s transhuman form rather than dancing marionettes. Herr C. possesses a deep knowledge of how his new body functions, and interestingly expresses a belief that it is possible to separate his mind from his new body to create a purely mechanical being."})]})})})})},H=a.p+"static/media/mechanical.e518b790.png",D=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)("img",{src:H,alt:"Mechanical Hand",height:"350em",className:"mb-3"}),Object(u.jsx)(M,{title:"My Most Mechanical and Dirty Hand...",medium:"3D Printing",year:"2026",className:"mb-2"}),Object(u.jsx)(c.a,{children:"When scientists first mastered the human genome and mind replication in 2025, an entire new field of anthropology emerged which used ancient DNA and genetic samples to revive the minds and bodies of historical figures. An early subject of research was a man known simply as \u201cHerr C.\u201d who was a dancer at an opera house in 1801 Berlin. Herr C. was chosen because of opportunity: his body was well-preserved post-mortem, so scientists were able to extract genetic material from his hand and attempt revival. The first step in this process was the digital recreation of Herr C.\u2019s hand, which was successfully performed in 2026. The model for his hand is shown in the piece above alongside a 3D printed version. The printed version is scaled to 10% of the original size and is shown in comparison to the now-discontinued U.S. quarter."})]})})})})},$=a.p+"static/media/Jane1.a52894fe.png",S=a.p+"static/media/Jane2.37208c6a.png",_=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)("img",{src:$,alt:"Jane1",height:"650em",className:"mb-3"}),Object(u.jsx)("img",{src:S,alt:"Jane2",height:"650em",className:"mb-3"}),Object(u.jsx)(c.a,{children:"### Jane Eykie (b. 1960)"}),Object(u.jsx)(M,{title:"IS EMBODIMENT NECESSARY TO UNDERSTAND ART?",medium:"Digital piece, Photoshop, Google",year:"2021",className:"mb-2"}),Object(u.jsx)(c.a,{children:"In 1972, Hubert L. Dreyfus, wrote a chapter entitled, \u201cThe Role of the Body in Intelligent Behavior,\u201d in _What Computers Can\u2019t Do: The Limits of Artificial Intelligence_. He questions whether a body is required for intelligent behavior. He writes that, at the current moment, humans are better at pattern recognition than computers. To explain this, Dreyfus highlights the gestaltists, who hypothesize that the whole determines what counts as a part, and defines a gestalt as a whole that is perceived more than its parts. Dreyfus says that computers have a hard time recognizing complex patterns, especially because they lack bodies. He concludes, \u201cpattern recognition is a bodily skill basic to all intelligent behavior, the question of whether artificial intelligence is possible boils down to the question of whether there can be an artificially embodied agent\u201d (Dreyfus 250).\n\nHow does the gestalt theory connect to art and AI\u2019s perception of art? Does an AI have to be embodied to understand an art piece? This experimental piece uses Photoshop and Google\u2019s reverse image search to ask these questions. In the art piece, many pixels are removed from a famous Renaissance art piece \u2014 the Arnolfini Portrait by Jan van Eyck. It is then entered into Google\u2019s reverse image search. In this stage of the image, an embodied human can definitely still ascertain the identity of this painting. But could one of the most powerful search engines \u2014 Google \u2014 do so? Google does indeed identify that the painting is by Jan van Eyck, however, does not identify the exact painting. In the next step of the artistic inquiry, the artist uses Photoshop\u2019s smart \u201cspot healing brush\u201d to fill in the parts of the painting that are missing. This tool works by identifying surrounding patterns and calculating the pattern that would probably fit in a selected area. This tool worked somewhat well \u2014 it definitely morphed the image but provided almost a full painting. The artist then put this reconstructed image into the Google search engine again. This time, Google successfully both identifies the painting\u2019s name and artist.\n\nThis process tells us a few things. First, in 2021, computer tools existed that could both recognize a pattern and perhaps understand an image as a whole. Moreover, the computer processes were more powerful when combined. A new program could have been created to reach this result automatically by utilizing these two programs together. Overall, the two computer programs utilized in this experiment completed the challenges posed to them; they used existing patterns to identify a whole and gave meaning to a whole that went beyond the composition of its parts. And the computer programs did this without being embodied.\n\nWould Dreyfus have predicted this result? Almost 50 years after Dreyfus wrote his book, computers had become exponentially more sophisticated and advanced. This experiment shows that a larger pattern and understanding of a portrait occurred without a body \u2014 disproving Dreyfus\u2019s hypothesis.\n\nHowever, what this doesn\u2019t tell us is whether computers can feel the creativity and emotions that paintings evoke. Is a body still necessary to grasp the purpose of art and to analyze art? Art isn\u2019t about calculating or identifying a piece as a whole; however, combining the powers with an embodied human can aid a human in understanding a piece on a deeper level."})]})})})})},E=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(A,{embedId:"UHQA_VlB3GA",className:"mb-3"}),Object(u.jsx)(c.a,{children:"### Radiobrain"}),Object(u.jsx)(M,{title:"Creep (1995)",medium:"Video: Guitar, Digital Pedal, Amplifier, Camera",className:"mb-2"}),Object(u.jsx)(c.a,{children:"Michael Polanyi once said the following:\n\n> \u201cwhile we rely on a tool or a probe, they are not handled as external objects [\u2026] they remain on our side [\u2026] forming part of ourselves, the operating persons. We pour ourselves out into them and assimilate them as parts of our existence\u201d (Dreyfus 252).\n\nThe creation of music occurs when a human adopts an instrument as a part of their own \u2014 they play their feelings, emotion, and rhythm to the world through this extension of their own body. Is artificially processed music still music? Are humans capable of assimilating artificially processed music machines into our own being, like analog instruments, to create new music that wasn\u2019t possible before? Is combining artificial elements of music to our own bodies a way of becoming transhuman? As FM-2030 said, humans are finite beings. How will posthumanism change music? Do only humans have the ability to create music? Do you need humanity to be creative?\n\nThis music piece explores these questions and depicts how computers can augment the creative abilities and potential of humans. As the human plays an instrument as an extension of their own being, the artificial music processing pedal (which produces the drums and guitar loop) additionally becomes an extension of their own being. In a way, this process is transhuman. As technology and humans progress, and as we near the singularity, the limits of music expand as transhumanism allows new forms of creativity."})]})})})})},G=a.p+"static/media/treeforclass.2a58e8a4.jpg",L=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)("img",{src:G,alt:"Trees",height:"400em",className:"mb-3"}),Object(u.jsx)(c.a,{children:"### Unknown (2010)"}),Object(u.jsx)(M,{title:"The Dance of the Trees",medium:"Mixed-Media Oil Paint Pens on Paper and Adobe Photoshop",className:"mb-2"}),Object(u.jsx)(c.a,{children:'Macfarlane\u2019s \u201cThe Understorey" describes the hive mind of trees, the way that a forest is like a social network. This piece reimagines this hive mind and network in the style of Henri Matisse\u2019s The Dance, replacing the rejoicing people in the circle with simple trees. The image of the conjoined trees, holding barks like hands, connected and mobile, emphasizes the liveliness of these creatures. This very vitality is a reflection of their intelligence, of the hive mind, of the way that these dense trees have a consciousness not unlike ours. Their bark like skin, their sap like blood, their leaves like hair. These trees reflect a possibility of our own intelligence, a nonhierarchical system, both natural and alien. This piece draws upon the historical conceptions of nature and mutualism, adapted to a human art piece.'}),Object(u.jsx)(c.a,{children:"The wood wide web, as it\u2019s known, brings forth questions of consciousness and the way that we identify \u201cthe mind.\u201d Minsky, in the Society of Mind, describes \u201ccommunities grow mental worlds (31).\u201d Indeed, a community, as it\u2019s seen in Matisse\u2019s the Dance, is a matter of minds meeting. That\u2019s the case of these forest communities, which communicate to each other through fungus, through soil. Consider the way that humans are connected to each other, open your mind to what\u2019s possible for other ecosystems. These trees are alive, and they think so too. "})]})})})})},P=a.p+"static/media/paperdolls.50763e4d.jpg",B=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)("img",{src:P,alt:"Dolls",height:"400em",className:"mb-3"}),Object(u.jsx)(c.a,{children:"### Unknown (2031)"}),Object(u.jsx)(M,{title:"Cybernetic Dolls",medium:"Adobe Photoshop",className:"mb-2"}),Object(u.jsx)(c.a,{children:"\u201cA cyborg is a cybernetic organism, a hybrid of machine and organism, a creature of social reality as well as a creature of fiction (117).\u201d Inspired by The Cyborg Manifesto, this collection of paper dolls and cybernetic additions explores the way that femininity has changed with transhumanism. Consider the way that Haraway describes the potential empowerment of the Cyborg existence, and the way that these technological augmentations fulfill that prophecy: a chip that can read minds, a cybernetic arm, a bionic eye that has x-ray vision.\n\nThe paper doll is a simple, traditional conception of femininity. A game for young creatures to think about the kinds of women they\u2019ll look like when they\u2019re older. This piece explores the possibilities of the singularity, once we become transhuman, post gender. \u201cA cyborg world might be about lived social and bodily realities in which people are not afraid of their joint kinship with animals and machines, not afraid of permanently partial identities and contradictory standpoints\u201d (122). This artwork demonstrates the new world Haraway dreamed of, the combination of animals and machines is a neutral part of life.\n\nThe simple pieces of clothing have little detail to them; they are abstracted shapes. The technological additions are more sophisticated. The doll is still made of paper, but her additions don\u2019t have to be. This demonstrates the way that old conventions of femininity have flattened in the presence of these cybernetic additions. This piece asks you to consider the way that you conceptualize your own body, and where you can go as a transhuman."})]})})})})},R=function(e){var t=e.children;Object(I.a)(e,["children"]);return Object(u.jsx)("span",{className:"fancy px-2 font-weight-bold",children:t})},z=a.p+"static/media/home.b84362bb.jpeg",F=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsxs)("div",{className:"w-100 d-flex justify-content-center align-items-center",children:[Object(u.jsx)("img",{src:z,alt:"Home",height:"400em",className:"mb-3"}),Object(u.jsxs)("div",{className:"ml-5",children:[Object(u.jsxs)("h1",{children:[Object(u.jsx)(R,{children:"Transhumanism"})," ","and the Intersection of Humanity, Technology, and Creativity"]}),Object(u.jsx)("h2",{children:"Opening 2032"})]})]}),Object(u.jsx)("div",{className:"border p-5 my-5",children:Object(u.jsx)(c.a,{children:"This exhibition is a collection of works produced from 1995 to 2031 and includes physical, digital, visual, and auditory pieces. As humanity approaches the technological singularity, we look back to the past four decades seeking clues for how we got here and what may lie ahead. \n\nSome questions these conceptual artworks explore include:\n\n- What is the importance of the body in creativity and intelligence, and what differences or similarities exist between humans, robots, and cyborgs?\n\n- If humans can live digitally or be revived in virtual reality, how does this influence the concept of death? Have we created an afterlife?\n\n- How can AI and cybernetic parts create new opportunities for creativity? \n\n- What can be considered creativity? Can AI be creative, and if human and AI-generated art become indistinguishable, what does that say about creativity or humanity?\n\nTo explore this virtual exhibit, use the buttons at the bottom of the page."})})]})})})})},U=function(){return Object(u.jsx)("div",{className:"p-5 scroll-y w-100 h-100",children:Object(u.jsx)(y.a,{children:Object(u.jsx)(w.a,{children:Object(u.jsxs)(v.a,{children:[Object(u.jsx)(c.a,{children:"## Bibliography"}),Object(u.jsx)(c.a,{children:"\nc4dcenter. (2020). 4K Clay 03-C4D Material [Texture]. https://c4dcenter.com/material-library/4k-clay-03-c4d-material/\n\nc4dcenter. (2020). 4K Plywood 02-Clean-C4D Material [Texture]. https://c4dcenter.com/material-library/4k-plywood-02-clean-c4d-material/\n\nDonna Haraway, \u201cA Cyborg Manifesto: Science, Technology, and Socialist-Feminism in the Late 20th Century\u201d (1985), pp. 117-147.\n\n_Fm-2030: [Are You Transhuman?](https://www.youtube.com/watch?v=eaS9QBdVHMs&t=4s)_, 2013. \n\nHeinrich von Kleist, \u201cOn the Marionette Theatre\u201d (1810), pp. 22-24.\n\nHolly Case. \u201cCreation Narratives-Selection\u201d (2021), pp. 1-4.\n\nHubert L. Dreyfus, \u201cThe Role of the Body in Intelligent Behavior,\u201d in _What Computers Can\u2019t Do: The Limits of Artificial Intelligence (1972)_, pp. 235-255.\n\nIrvine, L. (2018). Cyborg [Digital Composite]. https://www.theguardian.com/books/2018/may/30/top-10-books-to-help-you-survive-the-digital-age\n\nKarl Marx. _Fundamentals of a Critique of Political Economy_, Notebook VI (1857-8), pp. 693-702.\n\nKarel \u010capek. \u201cRossum\u2019s Universal Robots\u201d (1920), pp. 9-45. \n\nLeena Krohn. \u201cGorgonoids\u201d (1992), pp. 3-6. \n\nMarvin Minsky, \u201cThe Society of Mind,\u201d in The Personalist Forum (1987), pp. 19-32. \n\nRobert Macfarlane, \u201cThe Understorey,\u201d in Underland: A Deep Time Journey (2019), pp. 87-98."})]})})})})};var q=function(){return Object(u.jsx)("div",{className:"w-100 h-100",children:Object(u.jsxs)(h.a,{className:"w-100 h-100",controls:!1,interval:9999999999999,children:[Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(F,{})}),Object(u.jsx)(h.a.Item,{className:"w-100 h-100",children:Object(u.jsxs)("div",{className:"d-flex align-items-center justify-content-center w-100 h-100",children:[Object(u.jsx)("div",{style:{position:"absolute",bottom:"1em",left:"1em"},children:Object(u.jsx)(j,{})}),Object(u.jsx)("div",{children:Object(u.jsx)(f,{initialState:m(l("#C Generated by copy.sh/life\nx = 37, y = 37, rule = B3/S23\n15b2o3b2o$$$6b2o21b2o$6b2o21b2o$$3b2o27b2o$3b2o9b2o5b2o9b2o$9b3ob2o7b\n2ob3o$8bobo15bobo$8b2o17b2o$8bo19bo$$8bo19bo$7b2o19b2o$o6bo21bo6bo$o\n35bo$$$$o35bo$o6bo21bo6bo$7b2o19b2o$8bo19bo$$8bo19bo$8b2o17b2o$8bobo\n15bobo$9b3ob2o7b2ob3o$3b2o9b2o5b2o9b2o$3b2o27b2o$$6b2o21b2o$6b2o21b2o$\n$$15b2o3b2o!"),3),numRows:43,numCols:79})}),Object(u.jsxs)("div",{className:"w-50 ml-5",children:[Object(u.jsx)("div",{className:"font-weight-bold",children:"Digital Aquarium"}),Object(u.jsx)("div",{className:"mb-2",children:"Procedural Model (2029)"}),Object(u.jsx)(c.a,{className:"mb-2",children:"> \u201cThese creatures are not organic, but neither are they inorganic. [They] are immaterial, mathematical beings. They are visible, all the same: they move, couple, and multiply on our computer terminals. [...] Oh how dazzlingly beautiful is the odourless geometry of the lissajoune!\u201d (Krohn, 3-6)"}),Object(u.jsx)("div",{children:"This piece illustrates three primitive digital lifeforms: a 112P51 oscillator, a rotating torus, and a travelling sine wave. These creatures\u2019 lives are predetermined by procedural models that have evolved over billions of epochs of reinforcement learning. Note the Gestaltist element: although the piece consists of individual characters, it must be appreciated via a defocused gaze that allows its subtle intensity differences to form an image."})]})]})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(T,{})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(D,{})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(C,{})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(_,{})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(E,{})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(L,{})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(B,{})}),Object(u.jsx)(h.a.Item,{children:Object(u.jsx)(U,{})})]})})};a(137);o.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(q,{})}),document.getElementById("root"))},58:function(e,t,a){}},[[138,1,2]]]);
//# sourceMappingURL=main.ffb1c87f.chunk.js.map