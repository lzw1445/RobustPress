(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{273:function(s,t,a){"use strict";a.r(t);var n=a(38),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"location-匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-匹配规则","aria-hidden":"true"}},[s._v("#")]),s._v(" location 匹配规则")]),s._v(" "),a("h2",{attrs:{id:"语法规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法规则","aria-hidden":"true"}},[s._v("#")]),s._v(" 语法规则")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("location "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("~"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("~*"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("^~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" /uri/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" … "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("table",[a("thead",[a("tr",[a("th",[s._v("模式")]),s._v(" "),a("th",[s._v("含义")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("location = /uri")]),s._v(" "),a("td",[s._v("= 表示精确匹配，只有完全匹配上才能生效")])]),s._v(" "),a("tr",[a("td",[s._v("location ^~ /uri")]),s._v(" "),a("td",[s._v("^~ 开头对URL路径进行前缀匹配，并且在正则之前。")])]),s._v(" "),a("tr",[a("td",[s._v("location ~ pattern")]),s._v(" "),a("td",[s._v("开头表示区分大小写的正则匹配")])]),s._v(" "),a("tr",[a("td",[s._v("location ~* pattern")]),s._v(" "),a("td",[s._v("开头表示不区分大小写的正则匹配")])]),s._v(" "),a("tr",[a("td",[s._v("location /uri")]),s._v(" "),a("td",[s._v("不带任何修饰符，也表示前缀匹配，但是在正则匹配之后")])]),s._v(" "),a("tr",[a("td",[s._v("location /")]),s._v(" "),a("td",[s._v("通用匹配，任何未匹配到其它location的请求都会匹配到，相当于switch中的default")])])])]),s._v(" "),a("h2",{attrs:{id:"匹配规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配规则","aria-hidden":"true"}},[s._v("#")]),s._v(" 匹配规则")]),s._v(" "),a("h3",{attrs:{id:"前缀匹配时，nginx-不对-url-做编码，因此请求为-static-20-aa，可以被规则-static-aa-匹配到（注意是空格）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前缀匹配时，nginx-不对-url-做编码，因此请求为-static-20-aa，可以被规则-static-aa-匹配到（注意是空格）","aria-hidden":"true"}},[s._v("#")]),s._v(" 前缀匹配时，Nginx 不对 url 做编码，因此请求为 /static/20%/aa，可以被规则 ^~ /static/ /aa 匹配到（注意是空格）")]),s._v(" "),a("p",[s._v("多个 location 配置的情况下匹配顺序为 :")]),s._v(" "),a("ul",[a("li",[s._v("首先精确匹配 =")]),s._v(" "),a("li",[s._v("其次前缀匹配 ^~")]),s._v(" "),a("li",[s._v("其次是按文件中顺序的正则匹配")]),s._v(" "),a("li",[s._v("然后匹配不带任何修饰的前缀匹配。")]),s._v(" "),a("li",[s._v("最后是交给 / 通用匹配")]),s._v(" "),a("li",[s._v("当有匹配成功时候，停止匹配，按当前匹配规则处理请求")]),s._v(" "),a("li",[s._v("注意：前缀匹配，如果有包含关系时，按最大匹配原则进行匹配。比如在前缀匹配：location /dir01 与location /dir01/dir02，如有请求 http://localhost/dir01/dir02/file 将最终匹配到 location /dir01/dir02")])]),s._v(" "),a("p",[s._v("例子，有如下匹配规则：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /login "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation ^~ /static/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则C"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation ^~ /static/files "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则X"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation ~ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则D"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".png$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则E"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation /img "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则Y"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"规则F"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("那么产生的效果如下：")]),s._v(" "),a("ul",[a("li",[s._v("访问根目录 /，比如 http://localhost/ 将匹配 规则A")]),s._v(" "),a("li",[s._v("访问 http://localhost/login 将匹配 规则B，http://localhost/register 则匹配 规则F")]),s._v(" "),a("li",[s._v("访问 http://localhost/static/a.html 将匹配 规则C")]),s._v(" "),a("li",[s._v("访问 http://localhost/static/files/a.exe 将匹配 规则X，虽然 规则C 也能匹配到，但因为最大匹配原则，最终选中了 规则X。你可以测试下，去掉规则 X ，则当前 URL 会匹配上 规则C。")]),s._v(" "),a("li",[s._v("访问 http://localhost/a.gif, http://localhost/b.jpg 将匹配 规则D 和 规则 E ，但是 规则 D 顺序优先，规则 E 不起作用，而 http://localhost/static/c.png 则优先匹配到 规则 C")]),s._v(" "),a("li",[s._v("访问 http://localhost/a.PNG 则匹配 规则 E ，而不会匹配 规则 D ，因为 规则 E 不区分大小写。")]),s._v(" "),a("li",[s._v("访问 http://localhost/img/a.gif 会匹配上 规则D,虽然 规则Y 也可以匹配上，但是因为正则匹配优先，而忽略了 规则Y。")]),s._v(" "),a("li",[s._v("访问 http://localhost/img/a.tiff 会匹配上 规则Y。")]),s._v(" "),a("li",[s._v("访问 http://localhost/category/id/1111 则最终匹配到规则 F ，因为以上规则都不匹配，这个时候应该是 Nginx 转发请求给后端应用服务器，比如 FastCGI（php），tomcat（jsp），Nginx 作为反向代理服务器存在。")])]),s._v(" "),a("p",[s._v("所以实际使用中，笔者觉得至少有三个匹配规则定义，如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接匹配网站根，通过域名访问网站首页比较频繁，使用这个会加速处理，官网如是说。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里是直接转发给后端应用服务器了，也可以是一个静态首页")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第一个必选规则")]),s._v("\nlocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http://tomcat:8080/index\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第二个必选规则是处理静态文件请求，这是 nginx 作为 http 服务器的强项")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有两种配置模式，目录匹配或后缀匹配，任选其一或搭配使用")]),s._v("\nlocation ^~ /static/ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root /webroot/static/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\nlocation ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("ico"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root /webroot/res/"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 第三个规则就是通用规则，用来转发动态请求到后端应用服务器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 非静态文件请求就默认是动态请求，自己根据实际把握")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 毕竟目前的一些框架的流行，带.php、.jsp后缀的情况很少了")]),s._v("\nlocation / "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    proxy_pass http://tomcat:8080/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("h2",{attrs:{id:"rewrite-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rewrite-语法","aria-hidden":"true"}},[s._v("#")]),s._v(" rewrite 语法")]),s._v(" "),a("p",[s._v("last – 基本上都用这个 Flag\nbreak – 中止 Rewirte，不再继续匹配\nredirect – 返回临时重定向的 HTTP 状态 302\npermanent – 返回永久重定向的 HTTP 状态 301")]),s._v(" "),a("ol",[a("li",[s._v("下面是可以用来判断的表达式：")])]),s._v(" "),a("ul",[a("li",[s._v("-f 和 !-f 用来判断是否存在文件")]),s._v(" "),a("li",[s._v("-d 和 !-d 用来判断是否存在目录")]),s._v(" "),a("li",[s._v("-e 和 !-e 用来判断是否存在文件或目录")]),s._v(" "),a("li",[s._v("-x 和 !-x 用来判断文件是否可执行")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("下面是可以用作判断的全局变量")])]),s._v(" "),a("p",[s._v("例：http://localhost:88/test1/test2/test.php?k=v")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v("：localhost\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$server_port")]),s._v("：88\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_uri")]),s._v("：/test1/test2/test.php?k"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("v\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_uri")]),s._v("：/test1/test2/test.php\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),s._v("：D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx/html\n\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),s._v("：D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("nginx/html/test1/test2/test.php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h2",{attrs:{id:"redirect-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirect-语法","aria-hidden":"true"}},[s._v("#")]),s._v(" redirect 语法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    listen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    server_name start.igrow.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html index.php"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    root html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$http_host")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("~ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^star\\.igrow\\.cn$"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        rewrite ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(".*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" http://star.igrow.cn"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" redirect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"防盗链"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防盗链","aria-hidden":"true"}},[s._v("#")]),s._v(" 防盗链")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("location ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("swf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    valid_referers none blocked start.igrow.cn sta.igrow.cn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$invalid_referer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       rewrite ^/ http://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$host")]),s._v("/logo.png"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"根据文件类型设置过期时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#根据文件类型设置过期时间","aria-hidden":"true"}},[s._v("#")]),s._v(" 根据文件类型设置过期时间")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("location ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("js"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpeg"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("swf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("-f "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$request_filename")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        expires 1h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"禁止访问某个目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁止访问某个目录","aria-hidden":"true"}},[s._v("#")]),s._v(" 禁止访问某个目录")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("location ~* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("txt"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("doc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${\n    root "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("wwwroot"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("linuxtone"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("test;\n    deny all;\n}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])},[],!1,null,null,null);t.default=e.exports}}]);