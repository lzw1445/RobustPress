(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{287:function(s,e,a){"use strict";a.r(e);var n=a(38),t=Object(n.a)({},function(){var s=this,e=s.$createElement,a=s._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("尝试在虚拟环境下通过 pip 安装：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install mysqlclient\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后报错：OSError: mysql_config not found")]),s._v(" "),a("p",[s._v("找到官方文档 https://github.com/PyMySQL/mysqlclient-python，解释说安装前需安装另一个模块：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew install mysql-connector-c\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是报错：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/RobustPress/pipMysqlClient/1.png",alt:"Image from alias"}})]),s._v(" "),a("p",[s._v("查看报错信息，在安装 mysql-connector-c 前先")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("brew unlink mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("但是继续安装还是报错：")]),s._v(" "),a("p",[a("img",{attrs:{src:"/RobustPress/pipMysqlClient/2.png",alt:"Image from alias"}})]),s._v(" "),a("p",[s._v("查看官方说明，原来在 macOS 下需将 mysql_config 中的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# on macOS, on or about line 112:\n# Create options \nlibs="-L$pkglibdir"\nlibs="$libs -l "\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("改为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# Create options \nlibs="-L$pkglibdir"\nlibs="$libs -lmysqlclient -lssl -lcrypto"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("接下来好办了，直接")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("which mysql_config\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("找到文件路径，移动到该路径下，用 vim 修改下内容，退出重新执行")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("pip install mysqlclient\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("便成功了。")]),s._v(" "),a("p",[s._v("其实 Python 下还有其他连接 MySQL 的模块，比如 pymysql 等")])])},[],!1,null,null,null);e.default=t.exports}}]);