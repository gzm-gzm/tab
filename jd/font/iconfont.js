(function(window){var svgSprite='<svg><symbol id="icon-gouwuchekong" viewBox="0 0 1028 1024"><path d="M332.8 790.528q19.456 0 36.864 7.168t30.208 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.208 20.48-36.864 7.68q-20.48 0-37.888-7.68t-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 37.888-7.168zM758.784 792.576q19.456 0 37.376 7.168t30.72 19.968 20.48 30.208 7.68 36.864-7.68 36.864-20.48 30.208-30.72 20.48-37.376 7.68-36.864-7.68-30.208-20.48-20.48-30.208-7.68-36.864 7.68-36.864 20.48-30.208 30.208-19.968 36.864-7.168zM930.816 210.944q28.672 0 44.544 7.68t22.528 18.944 6.144 24.064-3.584 22.016-13.312 37.888-22.016 62.976-23.552 68.096-18.944 53.248q-13.312 40.96-33.28 56.832t-49.664 15.872l-35.84 0-65.536 0-86.016 0-96.256 0-253.952 0 14.336 92.16 517.12 0q49.152 0 49.152 41.984 0 20.48-9.728 35.84t-38.4 14.336l-49.152 0-94.208 0-118.784 0-119.808 0-99.328 0-55.296 0q-20.48 0-34.304-9.216t-23.04-24.064-14.848-32.256-8.704-32.768q-1.024-6.144-5.632-29.696t-11.264-58.88-14.848-78.848-16.384-87.552q-19.456-103.424-44.032-230.4l-76.8 0q-15.36 0-25.6-7.68t-16.896-18.432-9.216-23.04-2.56-22.528q0-20.48 13.824-33.792t37.376-12.288l103.424 0q20.48 0 32.768 6.144t19.456 15.36 10.24 18.944 5.12 16.896q2.048 8.192 4.096 23.04t4.096 30.208q3.072 18.432 6.144 38.912l700.416 0zM892.928 302.08l-641.024-2.048 35.84 185.344 535.552 1.024z"  ></path></symbol><symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024"><path d="M897.138688 264.650752 109.338624 264.650752c-41.85088 0-75.776 33.92512-75.776 75.776l0 491.52c0 41.85088 33.92512 75.776 75.776 75.776l787.800064 0c41.85088 0 75.776-33.92512 75.776-75.776l0-491.52C972.914688 298.575872 938.98752 264.650752 897.138688 264.650752zM503.236608 812.832768c-125.17376 0-226.646016-101.474304-226.646016-226.646016 0-125.17376 101.472256-226.646016 226.646016-226.646016 125.175808 0 226.646016 101.472256 226.646016 226.646016C729.884672 711.358464 628.412416 812.832768 503.236608 812.832768z"  ></path><path d="M503.238656 586.186752m-157.507584 0a76.908 76.908 0 1 0 315.015168 0 76.908 76.908 0 1 0-315.015168 0Z"  ></path><path d="M633.673728 196.614144c-4.907008-10.139648-18.13504-18.434048-29.39904-18.434048l-202.072064 0c-11.264 0-24.49408 8.296448-29.39904 18.434048L329.201664 286.72c-4.907008 10.139648 0.29696 18.434048 11.56096 18.434048l324.952064 0c11.264 0 16.46592-8.296448 11.56096-18.434048L633.673728 196.614144zM585.158656 222.554112c0 2.627584-9.216 4.777984-20.48 4.777984l-122.88 0c-11.264 0-20.48-2.1504-20.48-4.777984 0-2.629632 9.216-4.777984 20.48-4.777984l122.88 0C575.942656 217.77408 585.158656 219.92448 585.158656 222.554112z"  ></path></symbol><symbol id="icon-fangdajing" viewBox="0 0 1024 1024"><path d="M889.6 838.4l-192-192C742.4 595.2 768 524.8 768 448c0-179.2-140.8-320-320-320S128 268.8 128 448s140.8 320 320 320c76.8 0 147.2-25.6 198.4-70.4l192 192c12.8 12.8 32 12.8 44.8 0C896 876.8 896 851.2 889.6 838.4zM192 448c0-140.8 115.2-256 256-256s256 115.2 256 256c0 140.8-115.2 256-256 256S192 588.8 192 448z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)