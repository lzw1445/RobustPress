(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{281:function(e,n,t){"use strict";t.r(n);var i=t(38),a=Object(i.a)({},function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"集群分片设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集群分片设置","aria-hidden":"true"}},[e._v("#")]),e._v(" 集群分片设置")]),e._v(" "),t("p",[e._v("ES一旦创建好索引后，就无法调整分片的设置，而在ES中，一个分片实际上对应一个lucene 索引，而lucene索引的读写会占用很多的系统资源，因此，分片数不能设置过大；所以，在创建索引时，合理配置分片数是非常重要的。一般来说，我们遵循一些原则：")]),e._v(" "),t("ol",[t("li",[e._v("控制每个分片占用的硬盘容量"),t("strong",[e._v("不超过ES的最大JVM的堆空间设置")]),e._v("（一般设置不超过32G，参加上文的JVM设置原则），因此，如果索引的总容量在500G左右，那分片大小在16个左右即可；当然，最好同时考虑原则2。")]),e._v(" "),t("li",[e._v("考虑一下node数量，一般一个节点有时候就是一台物理机，如果分片数过多，大大超过了节点数，很可能会导致一个节点上存在多个分片，一旦该节点故障，即使保持了1个以上的副本，同样有可能会导致数据丢失，集群无法恢复。所以， "),t("strong",[e._v("一般都设置分片数不超过节点数的3倍")])])]),e._v(" "),t("h1",{attrs:{id:"mapping建模"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mapping建模","aria-hidden":"true"}},[e._v("#")]),e._v(" Mapping建模")]),e._v(" "),t("ol",[t("li",[e._v("尽量避免使用nested或 parent/child，能不用就不用；nested query慢， parent/child query 更慢，比nested query慢上百倍；因此能在mapping设计阶段搞定的（"),t("strong",[e._v("大宽表设计")]),e._v("或采用比较smart的数据结构），就不要用父子关系的mapping。")]),e._v(" "),t("li",[e._v("如果一定要使用nested fields，保证nested fields字段不能过多，目前ES默认限制是50。参考：\nindex.mapping.nested_fields.limit ：50\n因为针对1个document, 每一个nested field, 都会生成一个独立的document, 这将使Doc数量剧增，影响查询效率，尤其是JOIN的效率。")]),e._v(" "),t("li",[e._v("避免使用动态值作字段(key),  动态递增的mapping，会导致集群崩溃；同样，也需要控制字段的数量，业务中不使用的字段，就不要索引。控制索引的字段数量、mapping深度、索引字段的类型，对于ES的性能优化是重中之重。以下是ES关于字段数、mapping深度的一些默认设置：")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("index.mapping.nested_objects.limit :10000\nindex.mapping.total_fields.limit:1000\nindex.mapping.depth.limit: 20\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])])])},[],!1,null,null,null);n.default=a.exports}}]);