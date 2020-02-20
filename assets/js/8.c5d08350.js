(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{288:function(s,a,t){"use strict";t.r(a);var e=t(38),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"part1-序列化-serialization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part1-序列化-serialization","aria-hidden":"true"}},[s._v("#")]),s._v(" part1 序列化 Serialization")]),s._v(" "),t("p",[s._v("##创建一个Model类")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("根据model类同步数据库")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("python manage.py createsuperuser --email admin@example.com --username admin\n\npython manage.py makemigrations snippets\npython manage.py migrate\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"创建序列化-serializer-类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建序列化-serializer-类","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建序列化(Serializer)类")]),s._v(" "),t("p",[s._v("ModelSerializer类并没有做什么有魔力的事情，它们仅仅是一个创建序列话类的快捷方式。")]),s._v(" "),t("ul",[t("li",[s._v("一个自动决定的字段集合。")]),s._v(" "),t("li",[s._v("简单的默认create()和update()方法的实现。")])]),s._v(" "),t("h1",{attrs:{id:"part2-请求-request-与响应-reponse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part2-请求-request-与响应-reponse","aria-hidden":"true"}},[s._v("#")]),s._v(" part2 请求(Request)与响应(Reponse)")]),s._v(" "),t("h2",{attrs:{id:"请求对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求对象","aria-hidden":"true"}},[s._v("#")]),s._v(" 请求对象")]),s._v(" "),t("p",[s._v("请求(Request)对象的核心功能是request.data属性，这个属性与request.POST相似，但是它对Web APIs更加有用。")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token constant"}},[s._v("POST")]),s._v(" # 只处理表单数据。只对"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v("方法起作用。\nrequest"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data # 可以处理任意数据。对"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'POST'")]),s._v("，"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PUT'")]),s._v("和"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'PATCH'")]),s._v("方法起作用。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"响应对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#响应对象","aria-hidden":"true"}},[s._v("#")]),s._v(" 响应对象")]),s._v(" "),t("p",[s._v("REST 框架也介绍了Response对象，它是一类用未渲染内容和内容协商来决定正确的内容类型并把它返回给客户端的模板响应(TemplateResponse)。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("return Response(data) # 根据客户端的请求来渲染成指定的内容类型。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态码","aria-hidden":"true"}},[s._v("#")]),s._v(" 状态码")]),s._v(" "),t("p",[s._v("REST框架为每个状态码(status code)提供更明确的标识符，例如在状态(status)模型中的HTTP_400_BAD_REQUEST。")]),s._v(" "),t("h2",{attrs:{id:"装饰api视图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#装饰api视图","aria-hidden":"true"}},[s._v("#")]),s._v(" 装饰API视图")]),s._v(" "),t("ul",[t("li",[s._v("@api_view装饰器用在基于视图的方法上。")]),s._v(" "),t("li",[s._v("@APIView类用在基于视图的类上。")])]),s._v(" "),t("p",[s._v("这些装饰器提供一些功能，例如在你的视图中接收Request对象，例如在你的Response对象中添加上下文，这样我们就能实现内容通信。")]),s._v(" "),t("p",[s._v("这里装饰器也提供了一些行为，例如在合适的时候返回405 Method Not Allowed响应，例如处理任何在访问错误输入的request.data时出现的解析错误(ParseError)异常。")]),s._v(" "),t("h2",{attrs:{id:"可选格式后缀"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可选格式后缀","aria-hidden":"true"}},[s._v("#")]),s._v(" 可选格式后缀")]),s._v(" "),t("p",[s._v("现在可一很快更新urls.py文件，在已经存在的URL中添加一个格式后缀模式(format_suffix_patterns)。")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("urlpatterns "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" format_suffix_patterns\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nurlpatterns "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" format_suffix_patterns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("urlpatterns"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h1",{attrs:{id:"part3-视图-view-类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#part3-视图-view-类","aria-hidden":"true"}},[s._v("#")]),s._v(" part3 视图(View)类")]),s._v(" "),t("h2",{attrs:{id:"基于视图类重写api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基于视图类重写api","aria-hidden":"true"}},[s._v("#")]),s._v(" 基于视图类重写api")]),s._v(" "),t("p",[s._v("我们用GenericAPIView类提供核心功能，添加混合(mixin)，.list(), .create()动作, .retrieve()，.update()和.destroy()动作")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("mixins.ListModelMixin\nmixins.CreateModelMixin\nmixins.RetrieveModelMixin\nmixins.UpdateModelMixin\nmixins.DestroyModelMixin\n\ngenerics.GenericAPIView\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h2",{attrs:{id:"使用混合-mixins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用混合-mixins","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用混合(mixins)")]),s._v(" "),t("p",[s._v("通过不同的HTTP方法区分")]),s._v(" "),t("div",{staticClass:"language-py line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-py"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" snippets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Snippet\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" snippets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("serializers "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" SnippetSerializer\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("http "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Http404\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("views "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" APIView\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("response "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Response\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" status\n\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("SnippetList")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("APIView"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[s._v('"""\n    List all snippets, or create a new snippet.\n    """')]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("get")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        snippets "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Snippet"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("all")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        serializer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SnippetSerializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("snippets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" many"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("post")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("format")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        serializer "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" SnippetSerializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("request"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" serializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("is_valid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            serializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HTTP_201_CREATED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" Response"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serializer"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("errors"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" status"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("status"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("HTTP_400_BAD_REQUEST"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br")])]),t("h2",{attrs:{id:"使用基于视图的一般类-generic-class"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用基于视图的一般类-generic-class","aria-hidden":"true"}},[s._v("#")]),s._v(" 使用基于视图的一般类(generic class)")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("from snippets.models import Snippet\nfrom snippets.serializers import SnippetSerializer\nfrom rest_framework import generics\n\n\nclass SnippetList(generics.ListCreateAPIView):\n    queryset = Snippet.objects.all()\n    serializer_class = SnippetSerializer\n\n\nclass SnippetDetail(generics.RetrieveUpdateDestroyAPIView):\n    queryset = Snippet.objects.all()\n    serializer_class = SnippetSerializer\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("p",[s._v("参考:")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://legacy.gitbook.com/book/whatwewant/django-rest-framework-tutorial-cn/details",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://legacy.gitbook.com/book/whatwewant/django-rest-framework-tutorial-cn/details"),t("OutboundLink")],1)])])},[],!1,null,null,null);a.default=n.exports}}]);