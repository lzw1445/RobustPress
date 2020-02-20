(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{266:function(s,a,t){"use strict";t.r(a);var e=t(38),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex","aria-hidden":"true"}},[s._v("#")]),s._v(" flex")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 设置 Flex 模式 */")]),s._v("\ndisplay"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 决定元素是横排还是竖着排，要不要倒序 */")]),s._v("\nflex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("direction"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" column"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 决定元素换行格式，一行排不下的时候如何排 */")]),s._v("\nflex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* flex-flow = flex-direction + flex-wrap */")]),s._v("\nflex"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("flow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" column wrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 同一排下对齐方式，空格如何隔开各个元素 */")]),s._v("\njustify"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" space"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("between"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 同一排下元素如何对齐，顶部对齐、中部对齐还是其他 */")]),s._v("\nalign"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("items"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" center"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 多行对齐方式 */")]),s._v("\nalign"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("content"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" space"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("between"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("h2",{attrs:{id:"flex-direction：决定主轴的方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction：决定主轴的方向","aria-hidden":"true"}},[s._v("#")]),s._v(" flex-direction：决定主轴的方向")]),s._v(" "),t("ul",[t("li",[s._v("row - （默认）水平方向，起点在左端")]),s._v(" "),t("li",[s._v("row-reverse - 水平方向，起点在右端")]),s._v(" "),t("li",[s._v("column - 垂直方向，起点在上沿")]),s._v(" "),t("li",[s._v("column-reverse - 垂直方向，起点在下沿")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/25/1674a6fb8083d3d9?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"flex-wrap：一条轴线（一行）排不下时如何解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap：一条轴线（一行）排不下时如何解决","aria-hidden":"true"}},[s._v("#")]),s._v(" flex-wrap：一条轴线（一行）排不下时如何解决")]),s._v(" "),t("ul",[t("li",[s._v("nowrap - （默认）不换行")]),s._v(" "),t("li",[s._v("wrap - 换行，第一行在上方")]),s._v(" "),t("li",[s._v("wrap-reverse - 换行，第一行在下方")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap | wrap | wrap-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/25/1674a6fe4ba62938?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"flex-flow：flex-flow-flex-direction-flex-wrap。即-flex-flow-是这两个属性的合集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow：flex-flow-flex-direction-flex-wrap。即-flex-flow-是这两个属性的合集","aria-hidden":"true"}},[s._v("#")]),s._v(" flex-flow：flex-flow = flex-direction + flex-wrap。即 flex-flow 是这两个属性的合集")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <flex-direction> || <flex-wrap>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"justify-content：定义项目在主轴上的对齐方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#justify-content：定义项目在主轴上的对齐方式","aria-hidden":"true"}},[s._v("#")]),s._v(" justify-content：定义项目在主轴上的对齐方式")]),s._v(" "),t("ul",[t("li",[s._v("flex-start - 左边对齐")]),s._v(" "),t("li",[s._v("flex-end - 右边对齐")]),s._v(" "),t("li",[s._v("center - 居中对齐")]),s._v(" "),t("li",[s._v("space-between - 两端对齐，空格在中间")]),s._v(" "),t("li",[s._v("space-around - 空格环绕")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/25/1674a7033c5d8bd4?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"align-items：定义项目在交叉轴上如何对齐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-items：定义项目在交叉轴上如何对齐","aria-hidden":"true"}},[s._v("#")]),s._v(" align-items：定义项目在交叉轴上如何对齐")]),s._v(" "),t("ul",[t("li",[s._v("flex-start - 顶部对齐，即文字图片等顶部同一条线上")]),s._v(" "),t("li",[s._v("flex-end - 底部对其，即文字图片等底部在同一条线上")]),s._v(" "),t("li",[s._v("center - 中间对其，即文字图片不管多高，都拿它们的中间放在同一条线上")]),s._v(" "),t("li",[s._v("stretch - 将文字图片充满整个容器的高度，强制统一")]),s._v(" "),t("li",[s._v("baseline - 将每项的第一行文字做统一在一条线上对齐")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | stretch | baseline"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/25/1674a705ee10f66a?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})]),s._v(" "),t("h2",{attrs:{id:"align-content：定义多根轴线的对齐方式。如果只有一根轴线（只有一行），该属性不起作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-content：定义多根轴线的对齐方式。如果只有一根轴线（只有一行），该属性不起作用","aria-hidden":"true"}},[s._v("#")]),s._v(" align-content：定义多根轴线的对齐方式。如果只有一根轴线（只有一行），该属性不起作用")]),s._v(" "),t("ul",[t("li",[s._v("flex-start - 这几行顶部对齐")]),s._v(" "),t("li",[s._v("flex-end - 这几行底部对齐")]),s._v(" "),t("li",[s._v("center - 这几行居中对齐")]),s._v(" "),t("li",[s._v("stretch - 这几行进行扩展或者缩放，从而填满容器高")]),s._v(" "),t("li",[s._v("space-between - 这几行中间使用空格进行填充")]),s._v(" "),t("li",[s._v("space-around - 这几行两边及中间进行填充")])]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around | stretch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/11/25/1674a7093a06c6cd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"image"}})])])},[],!1,null,null,null);a.default=n.exports}}]);