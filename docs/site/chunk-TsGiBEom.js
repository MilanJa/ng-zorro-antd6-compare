import{$i as xD,Ar as jD,Hi as ug,Rn as c_,Xn as dg,a as $x,bt as Oa,dt as ND,mr as gf,ra as yD,vn as Z0}from"./chunk-C_Vlpnqv.js";import{Rr as oN,dn as _T,nn as YR}from"./chunk-xYfUUuUI.js";import"./main-IAYOGJQH.js";import"./chunk-X4UHWekD.js";import{f as na,m as no,t as In}from"./chunk-DnqmvAdA.js";function B(i,a){i&1&&(Oa(0,`span`),$x(1,`全局配置项`),gf())}function g(i,a){i&1&&ND(0,`span`)}var E=class i{goLink(a){window&&(window.location.hash=a)}static ɵfac=function(l){return new(l||i)};static ɵcmp=Z0({type:i,selectors:[[`nz-doc-global-config-zh`]],decls:984,vars:2,consts:[[1,`markdown`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzAffix`],[`nzHref`,`#如何使用`,`nzTitle`,`如何使用`,1,`toc-indent-1`],[`nzHref`,`#提供模板`,`nzTitle`,`提供模板`,1,`toc-indent-2`],[`nzHref`,`#局部生效`,`nzTitle`,`局部生效`,1,`toc-indent-1`],[`nzHref`,`#动态变更`,`nzTitle`,`动态变更`,1,`toc-indent-1`],[`nzHref`,`#优先级说明`,`nzTitle`,`优先级说明`,1,`toc-indent-1`],[`nzHref`,`#可配置项`,`nzTitle`,`可配置项`,1,`toc-indent-1`],[`id`,`如何使用`],[`onclick`,`window.location.hash = '如何使用'`,1,`anchor`],[1,`language-typescript`],[1,`token`,`keyword`],[1,`token`,`punctuation`],[1,`token`,`string`],[1,`token`,`operator`],[1,`token`,`comment`],[1,`token`,`number`],[1,`token`,`function`],[`id`,`提供模板`],[`onclick`,`window.location.hash = '提供模板'`,1,`anchor`],[1,`token`,`class-name`],[1,`token`,`decorator`],[1,`token`,`at`,`operator`],[1,`token`,`boolean`],[1,`token`,`template-string`],[1,`token`,`template-punctuation`,`string`],[1,`token`,`constant`],[`id`,`局部生效`],[`onclick`,`window.location.hash = '局部生效'`,1,`anchor`],[1,`token`,`function-variable`,`function`],[`id`,`动态变更`],[`onclick`,`window.location.hash = '动态变更'`,1,`anchor`],[`id`,`优先级说明`],[`onclick`,`window.location.hash = '优先级说明'`,1,`anchor`],[`id`,`可配置项`],[`onclick`,`window.location.hash = '可配置项'`,1,`anchor`]],template:function(l,A){l&1&&(Oa(0,`article`,0)(1,`h1`)(2,`nz-space`),yD(3,B,2,0,`span`,1)(4,g,1,0,`span`,1),gf()(),Oa(5,`nz-affix`,2)(6,`nz-anchor`,3),jD(`nzClick`,function(z){return A.goLink(z)}),ND(7,`nz-link`,4)(8,`nz-link`,5)(9,`nz-link`,6)(10,`nz-link`,7)(11,`nz-link`,8)(12,`nz-link`,9),gf()(),Oa(13,`section`,0),dg(),Oa(14,`p`),$x(15,`我们给众多组件添加了`),Oa(16,`strong`),$x(17,`全局配置`),gf(),$x(18,`功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。`),gf(),Oa(19,`h2`,10)(20,`span`),$x(21,`如何使用`),gf(),Oa(22,`a`,11),$x(23,`#`),gf()(),Oa(24,`p`),$x(25,`想要为某些组件提供默认配置项, 可以使用 `),Oa(26,`code`),$x(27,`provideNzConfig`),gf(),$x(28,` 函数，传入一个符合 `),Oa(29,`code`),$x(30,`NzConfig`),gf(),$x(31,` 接口的对象。例如：`),gf(),Oa(32,`pre`)(33,`code`,12)(34,`span`,13),$x(35,`import`),gf(),$x(36,` `),Oa(37,`span`,14),$x(38,`{`),gf(),$x(39,` NzConfig`),Oa(40,`span`,14),$x(41,`,`),gf(),$x(42,` provideNzConfig `),Oa(43,`span`,14),$x(44,`}`),gf(),$x(45,` `),Oa(46,`span`,13),$x(47,`from`),gf(),$x(48,` `),Oa(49,`span`,15),$x(50,`'ng-zorro-antd/core/config'`),gf(),Oa(51,`span`,14),$x(52,`;`),gf(),$x(53,`

`),Oa(54,`span`,13),$x(55,`const`),gf(),$x(56,` ngZorroConfig`),Oa(57,`span`,16),$x(58,`:`),gf(),$x(59,` NzConfig `),Oa(60,`span`,16),$x(61,`=`),gf(),$x(62,` `),Oa(63,`span`,14),$x(64,`{`),gf(),$x(65,`
  `),Oa(66,`span`,17),$x(67,`// 注意组件名称没有 nz 前缀`),gf(),$x(68,`
  message`),Oa(69,`span`,16),$x(70,`:`),gf(),$x(71,` `),Oa(72,`span`,14),$x(73,`{`),gf(),$x(74,` nzTop`),Oa(75,`span`,16),$x(76,`:`),gf(),$x(77,` `),Oa(78,`span`,18),$x(79,`120`),gf(),$x(80,` `),Oa(81,`span`,14),$x(82,`}`),gf(),Oa(83,`span`,14),$x(84,`,`),gf(),$x(85,`
  notification`),Oa(86,`span`,16),$x(87,`:`),gf(),$x(88,` `),Oa(89,`span`,14),$x(90,`{`),gf(),$x(91,` nzTop`),Oa(92,`span`,16),$x(93,`:`),gf(),$x(94,` `),Oa(95,`span`,18),$x(96,`240`),gf(),$x(97,` `),Oa(98,`span`,14),$x(99,`}`),gf(),$x(100,`
`),Oa(101,`span`,14),$x(102,`}`),gf(),Oa(103,`span`,14),$x(104,`;`),gf(),$x(105,`

`),Oa(106,`span`,13),$x(107,`export`),gf(),$x(108,` `),Oa(109,`span`,13),$x(110,`const`),gf(),$x(111,` appConfig`),Oa(112,`span`,16),$x(113,`:`),gf(),$x(114,` ApplicationConfig `),Oa(115,`span`,16),$x(116,`=`),gf(),$x(117,` `),Oa(118,`span`,14),$x(119,`{`),gf(),$x(120,`
  providers`),Oa(121,`span`,16),$x(122,`:`),gf(),$x(123,` `),Oa(124,`span`,14),$x(125,`[`),gf(),Oa(126,`span`,19),$x(127,`provideNzConfig`),gf(),Oa(128,`span`,14),$x(129,`(`),gf(),$x(130,`ngZorroConfig`),Oa(131,`span`,14),$x(132,`)`),gf(),Oa(133,`span`,14),$x(134,`]`),gf(),$x(135,`
`),Oa(136,`span`,14),$x(137,`}`),gf(),Oa(138,`span`,14),$x(139,`;`),gf(),$x(140,`
`),gf()(),Oa(141,`p`),$x(142,`这些全局配置项将会被注入 `),Oa(143,`code`),$x(144,`NzConfigService`),gf(),$x(145,` 当中并保存。`),gf(),Oa(146,`h3`,20)(147,`span`),$x(148,`提供模板`),gf(),Oa(149,`a`,21),$x(150,`#`),gf()(),Oa(151,`p`),$x(152,`一些组件支持传递模板 `),Oa(153,`code`),$x(154,`TemplateRef<T>`),gf(),$x(155,` 作为默认参数，我们来了解一下如何做到这一点。`),gf(),Oa(156,`p`),$x(157,`最简单的方式是在应用的根组件中调用 `),Oa(158,`code`),$x(159,`NzConfigService`),gf(),$x(160,` 的相关方法：`),gf(),Oa(161,`pre`)(162,`code`,12)(163,`span`,13),$x(164,`import`),gf(),$x(165,` `),Oa(166,`span`,14),$x(167,`{`),gf(),$x(168,` NzConfigService `),Oa(169,`span`,14),$x(170,`}`),gf(),$x(171,` `),Oa(172,`span`,13),$x(173,`from`),gf(),$x(174,` `),Oa(175,`span`,15),$x(176,`'ng-zorro-antd/core/config'`),gf(),Oa(177,`span`,14),$x(178,`;`),gf(),$x(179,`

`),Oa(180,`span`,13),$x(181,`export`),gf(),$x(182,` `),Oa(183,`span`,13),$x(184,`class`),gf(),$x(185,` `),Oa(186,`span`,22),$x(187,`AppComponent`),gf(),$x(188,` `),Oa(189,`span`,13),$x(190,`implements`),gf(),$x(191,` `),Oa(192,`span`,22),$x(193,`OnInit`),gf(),$x(194,` `),Oa(195,`span`,14),$x(196,`{`),gf(),$x(197,`
  `),Oa(198,`span`,13),$x(199,`private`),gf(),$x(200,` nzConfigService `),Oa(201,`span`,16),$x(202,`=`),gf(),$x(203,` `),Oa(204,`span`,19),$x(205,`inject`),gf(),Oa(206,`span`,14),$x(207,`(`),gf(),$x(208,`NzConfigService`),Oa(209,`span`,14),$x(210,`)`),gf(),Oa(211,`span`,14),$x(212,`;`),gf(),$x(213,`

  `),Oa(214,`span`,23)(215,`span`,24),$x(216,`@`),gf(),Oa(217,`span`,19),$x(218,`ViewChild`),gf()(),Oa(219,`span`,14),$x(220,`(`),gf(),Oa(221,`span`,15),$x(222,`'nzIndicatorTpl'`),gf(),Oa(223,`span`,14),$x(224,`,`),gf(),$x(225,` `),Oa(226,`span`,14),$x(227,`{`),gf(),$x(228,` `),Oa(229,`span`,13),$x(230,`static`),gf(),Oa(231,`span`,16),$x(232,`:`),gf(),$x(233,` `),Oa(234,`span`,25),$x(235,`true`),gf(),$x(236,` `),Oa(237,`span`,14),$x(238,`}`),gf(),Oa(239,`span`,14),$x(240,`)`),gf(),$x(241,`
  nzIndicator`),Oa(242,`span`,16),$x(243,`!`),gf(),Oa(244,`span`,16),$x(245,`:`),gf(),$x(246,` TemplateRef`),Oa(247,`span`,16),$x(248,`<`),gf(),Oa(249,`span`,13),$x(250,`void`),gf(),Oa(251,`span`,16),$x(252,`>`),gf(),Oa(253,`span`,14),$x(254,`;`),gf(),$x(255,`

  `),Oa(256,`span`,19),$x(257,`ngOnInit`),gf(),Oa(258,`span`,14),$x(259,`(`),gf(),Oa(260,`span`,14),$x(261,`)`),gf(),Oa(262,`span`,16),$x(263,`:`),gf(),$x(264,` `),Oa(265,`span`,13),$x(266,`void`),gf(),$x(267,` `),Oa(268,`span`,14),$x(269,`{`),gf(),$x(270,`
    `),Oa(271,`span`,13),$x(272,`this`),gf(),Oa(273,`span`,14),$x(274,`.`),gf(),$x(275,`nzConfigService`),Oa(276,`span`,14),$x(277,`.`),gf(),Oa(278,`span`,19),$x(279,`set`),gf(),Oa(280,`span`,14),$x(281,`(`),gf(),Oa(282,`span`,15),$x(283,`'spin'`),gf(),Oa(284,`span`,14),$x(285,`,`),gf(),$x(286,` `),Oa(287,`span`,14),$x(288,`{`),gf(),$x(289,` nzIndicator`),Oa(290,`span`,16),$x(291,`:`),gf(),$x(292,` `),Oa(293,`span`,13),$x(294,`this`),gf(),Oa(295,`span`,14),$x(296,`.`),gf(),$x(297,`nzIndicator `),Oa(298,`span`,14),$x(299,`}`),gf(),Oa(300,`span`,14),$x(301,`)`),gf(),Oa(302,`span`,14),$x(303,`;`),gf(),$x(304,`
  `),Oa(305,`span`,14),$x(306,`}`),gf(),$x(307,`
`),Oa(308,`span`,14),$x(309,`}`),gf(),$x(310,`
`),gf()(),Oa(311,`p`),$x(312,`然而这种方式可能会让你的 AppComponent 相当臃肿，并违反关注分离原则。`),gf(),Oa(313,`p`),$x(314,`因此，当你的项目比较大时，我们建议你使用一个 `),Oa(315,`code`),$x(316,`FactoryProvider`),gf(),$x(317,`，如下所示：`),gf(),Oa(318,`pre`)(319,`code`,12)(320,`span`,17),$x(321,`// The module-level Component which contains template references.`),gf(),$x(322,`
`),Oa(323,`span`,17),$x(324,`// Exporting is required for AOT compatibility`),gf(),$x(325,`
`),Oa(326,`span`,23)(327,`span`,24),$x(328,`@`),gf(),Oa(329,`span`,19),$x(330,`Component`),gf()(),Oa(331,`span`,14),$x(332,`(`),gf(),Oa(333,`span`,14),$x(334,`{`),gf(),$x(335,`
  template`),Oa(336,`span`,16),$x(337,`:`),gf(),$x(338,` `),Oa(339,`span`,26)(340,`span`,27),$x(341,"`"),gf(),Oa(342,`span`,15),$x(343,`
    <ng-template #nzIndicatorTpl>
      <span class="ant-spin-dot">
        <nz-icon nzType="loading" />
      </span>
    </ng-template>
  `),gf(),Oa(344,`span`,27),$x(345,"`"),gf()(),$x(346,`
`),Oa(347,`span`,14),$x(348,`}`),gf(),Oa(349,`span`,14),$x(350,`)`),gf(),$x(351,`
`),Oa(352,`span`,13),$x(353,`export`),gf(),$x(354,` `),Oa(355,`span`,13),$x(356,`class`),gf(),$x(357,` `),Oa(358,`span`,22),$x(359,`GlobalTemplatesComponent`),gf(),$x(360,` `),Oa(361,`span`,14),$x(362,`{`),gf(),$x(363,`
  `),Oa(364,`span`,23)(365,`span`,24),$x(366,`@`),gf(),Oa(367,`span`,19),$x(368,`ViewChild`),gf()(),Oa(369,`span`,14),$x(370,`(`),gf(),Oa(371,`span`,15),$x(372,`'nzIndicatorTpl'`),gf(),Oa(373,`span`,14),$x(374,`,`),gf(),$x(375,` `),Oa(376,`span`,14),$x(377,`{`),gf(),$x(378,` `),Oa(379,`span`,13),$x(380,`static`),gf(),Oa(381,`span`,16),$x(382,`:`),gf(),$x(383,` `),Oa(384,`span`,25),$x(385,`true`),gf(),$x(386,` `),Oa(387,`span`,14),$x(388,`}`),gf(),Oa(389,`span`,14),$x(390,`)`),gf(),$x(391,`
  nzIndicator`),Oa(392,`span`,16),$x(393,`!`),gf(),Oa(394,`span`,16),$x(395,`:`),gf(),$x(396,` TemplateRef`),Oa(397,`span`,16),$x(398,`<`),gf(),Oa(399,`span`,13),$x(400,`void`),gf(),Oa(401,`span`,16),$x(402,`>`),gf(),Oa(403,`span`,14),$x(404,`;`),gf(),$x(405,`
`),Oa(406,`span`,14),$x(407,`}`),gf(),$x(408,`

`),Oa(409,`span`,17),$x(410,`// The Factory function`),gf(),$x(411,`
`),Oa(412,`span`,13),$x(413,`const`),gf(),$x(414,` nzConfigFactory `),Oa(415,`span`,16),$x(416,`=`),gf(),$x(417,` `),Oa(418,`span`,14),$x(419,`(`),gf(),Oa(420,`span`,14),$x(421,`)`),gf(),Oa(422,`span`,16),$x(423,`:`),gf(),$x(424,` NzConfig `),Oa(425,`span`,16),$x(426,`=>`),gf(),$x(427,` `),Oa(428,`span`,14),$x(429,`{`),gf(),$x(430,`
  `),Oa(431,`span`,13),$x(432,`const`),gf(),$x(433,` environmentInjector `),Oa(434,`span`,16),$x(435,`=`),gf(),$x(436,` `),Oa(437,`span`,19),$x(438,`inject`),gf(),Oa(439,`span`,14),$x(440,`(`),gf(),$x(441,`EnvironmentInjector`),Oa(442,`span`,14),$x(443,`)`),gf(),Oa(444,`span`,14),$x(445,`;`),gf(),$x(446,`
  `),Oa(447,`span`,13),$x(448,`const`),gf(),$x(449,` `),Oa(450,`span`,14),$x(451,`{`),gf(),$x(452,` nzIndicator `),Oa(453,`span`,14),$x(454,`}`),gf(),$x(455,` `),Oa(456,`span`,16),$x(457,`=`),gf(),$x(458,` `),Oa(459,`span`,19),$x(460,`createComponent`),gf(),Oa(461,`span`,14),$x(462,`(`),gf(),$x(463,`component`),Oa(464,`span`,14),$x(465,`,`),gf(),$x(466,` `),Oa(467,`span`,14),$x(468,`{`),gf(),$x(469,` environmentInjector `),Oa(470,`span`,14),$x(471,`}`),gf(),Oa(472,`span`,14),$x(473,`)`),gf(),Oa(474,`span`,14),$x(475,`.`),gf(),$x(476,`instance`),Oa(477,`span`,14),$x(478,`;`),gf(),$x(479,`
  `),Oa(480,`span`,13),$x(481,`return`),gf(),$x(482,` `),Oa(483,`span`,14),$x(484,`{`),gf(),$x(485,`
    spin`),Oa(486,`span`,16),$x(487,`:`),gf(),$x(488,` `),Oa(489,`span`,14),$x(490,`{`),gf(),$x(491,`
      nzIndicator
    `),Oa(492,`span`,14),$x(493,`}`),gf(),$x(494,`
  `),Oa(495,`span`,14),$x(496,`}`),gf(),Oa(497,`span`,14),$x(498,`;`),gf(),$x(499,`
`),Oa(500,`span`,14),$x(501,`}`),gf(),Oa(502,`span`,14),$x(503,`;`),gf(),$x(504,`

`),Oa(505,`span`,13),$x(506,`export`),gf(),$x(507,` `),Oa(508,`span`,13),$x(509,`const`),gf(),$x(510,` appConfig`),Oa(511,`span`,16),$x(512,`:`),gf(),$x(513,` ApplicationConfig `),Oa(514,`span`,16),$x(515,`=`),gf(),$x(516,` `),Oa(517,`span`,14),$x(518,`{`),gf(),$x(519,`
  providers`),Oa(520,`span`,16),$x(521,`:`),gf(),$x(522,` `),Oa(523,`span`,14),$x(524,`[`),gf(),$x(525,`
    `),Oa(526,`span`,14),$x(527,`{`),gf(),$x(528,`
      `),Oa(529,`span`,17),$x(530,`// The FactoryProvider`),gf(),$x(531,`
      provide`),Oa(532,`span`,16),$x(533,`:`),gf(),$x(534,` `),Oa(535,`span`,28),$x(536,`NZ_CONFIG`),gf(),Oa(537,`span`,14),$x(538,`,`),gf(),$x(539,`
      useFactory`),Oa(540,`span`,16),$x(541,`:`),gf(),$x(542,` nzConfigFactory
    `),Oa(543,`span`,14),$x(544,`}`),gf(),$x(545,`
  `),Oa(546,`span`,14),$x(547,`]`),gf(),$x(548,`
`),Oa(549,`span`,14),$x(550,`}`),gf(),Oa(551,`span`,14),$x(552,`;`),gf(),$x(553,`
`),gf()(),Oa(554,`h2`,29)(555,`span`),$x(556,`局部生效`),gf(),Oa(557,`a`,30),$x(558,`#`),gf()(),Oa(559,`p`),$x(560,`开发者可以利用 Angular 自带的依赖注入机制，在特定组件内重新设定 `),Oa(561,`code`),$x(562,`NZ_CONFIG`),gf(),$x(563,`， 该设定不会影响该组件以外的配置。`),gf(),Oa(564,`pre`)(565,`code`,12)(566,`span`,23)(567,`span`,24),$x(568,`@`),gf(),Oa(569,`span`,19),$x(570,`Component`),gf()(),Oa(571,`span`,14),$x(572,`(`),gf(),Oa(573,`span`,14),$x(574,`{`),gf(),$x(575,`
  providers`),Oa(576,`span`,16),$x(577,`:`),gf(),$x(578,` `),Oa(579,`span`,14),$x(580,`[`),gf(),$x(581,`
    `),Oa(582,`span`,17),$x(583,`// 重设本地 NzConfigService`),gf(),$x(584,`
    NzConfigService`),Oa(585,`span`,14),$x(586,`,`),gf(),$x(587,`
    `),Oa(588,`span`,14),$x(589,`{`),gf(),$x(590,`
      provide`),Oa(591,`span`,16),$x(592,`:`),gf(),$x(593,` `),Oa(594,`span`,28),$x(595,`NZ_CONFIG`),gf(),Oa(596,`span`,14),$x(597,`,`),gf(),$x(598,`
      useValue`),Oa(599,`span`,16),$x(600,`:`),gf(),$x(601,` `),Oa(602,`span`,14),$x(603,`{`),gf(),$x(604,`
        button`),Oa(605,`span`,16),$x(606,`:`),gf(),$x(607,` `),Oa(608,`span`,14),$x(609,`{`),gf(),$x(610,`
          nzSize`),Oa(611,`span`,16),$x(612,`:`),gf(),$x(613,` `),Oa(614,`span`,15),$x(615,`'large'`),gf(),$x(616,`
        `),Oa(617,`span`,14),$x(618,`}`),gf(),$x(619,`
      `),Oa(620,`span`,14),$x(621,`}`),gf(),$x(622,`
    `),Oa(623,`span`,14),$x(624,`}`),gf(),$x(625,`
  `),Oa(626,`span`,14),$x(627,`]`),gf(),$x(628,`
`),Oa(629,`span`,14),$x(630,`}`),gf(),Oa(631,`span`,14),$x(632,`)`),gf(),$x(633,`
`),gf()(),Oa(634,`p`),$x(635,`也可以使用 `),Oa(636,`code`),$x(637,`useFactory`),gf(),$x(638,` 将全局配置与区域配置合并后生效`),gf(),Oa(639,`blockquote`)(640,`p`),$x(641,`注意：全局配置在初始化之后修改将不会影响该部分配置结果`),gf()(),Oa(642,`pre`)(643,`code`,12)(644,`span`,23)(645,`span`,24),$x(646,`@`),gf(),Oa(647,`span`,19),$x(648,`Component`),gf()(),Oa(649,`span`,14),$x(650,`(`),gf(),Oa(651,`span`,14),$x(652,`{`),gf(),$x(653,`
  providers`),Oa(654,`span`,16),$x(655,`:`),gf(),$x(656,` `),Oa(657,`span`,14),$x(658,`[`),gf(),$x(659,`
    `),Oa(660,`span`,17),$x(661,`// 重设本地 NzConfigService`),gf(),$x(662,`
    NzConfigService`),Oa(663,`span`,14),$x(664,`,`),gf(),$x(665,`
    `),Oa(666,`span`,14),$x(667,`{`),gf(),$x(668,`
      provide`),Oa(669,`span`,16),$x(670,`:`),gf(),$x(671,` `),Oa(672,`span`,28),$x(673,`NZ_CONFIG`),gf(),Oa(674,`span`,14),$x(675,`,`),gf(),$x(676,`
      `),Oa(677,`span`,31),$x(678,`useFactory`),gf(),Oa(679,`span`,16),$x(680,`:`),gf(),$x(681,` `),Oa(682,`span`,14),$x(683,`(`),gf(),Oa(684,`span`,14),$x(685,`)`),gf(),$x(686,` `),Oa(687,`span`,16),$x(688,`=>`),gf(),$x(689,` `),Oa(690,`span`,14),$x(691,`{`),gf(),$x(692,`
        `),Oa(693,`span`,17),$x(694,`// 获取全局 NzConfigService`),gf(),$x(695,`
        `),Oa(696,`span`,13),$x(697,`const`),gf(),$x(698,` globalConfig `),Oa(699,`span`,16),$x(700,`=`),gf(),$x(701,` `),Oa(702,`span`,19),$x(703,`inject`),gf(),Oa(704,`span`,14),$x(705,`(`),gf(),$x(706,`NzConfigService`),Oa(707,`span`,14),$x(708,`,`),gf(),$x(709,` `),Oa(710,`span`,14),$x(711,`{`),gf(),$x(712,` skipSelf`),Oa(713,`span`,16),$x(714,`:`),gf(),$x(715,` `),Oa(716,`span`,25),$x(717,`true`),gf(),$x(718,` `),Oa(719,`span`,14),$x(720,`}`),gf(),Oa(721,`span`,14),$x(722,`)`),gf(),Oa(723,`span`,14),$x(724,`.`),gf(),Oa(725,`span`,19),$x(726,`getConfig`),gf(),Oa(727,`span`,14),$x(728,`(`),gf(),Oa(729,`span`,14),$x(730,`)`),gf(),Oa(731,`span`,14),$x(732,`;`),gf(),$x(733,`
        `),Oa(734,`span`,13),$x(735,`const`),gf(),$x(736,` localConfig `),Oa(737,`span`,16),$x(738,`=`),gf(),$x(739,` `),Oa(740,`span`,14),$x(741,`{`),gf(),$x(742,`
          select`),Oa(743,`span`,16),$x(744,`:`),gf(),$x(745,` `),Oa(746,`span`,14),$x(747,`{`),gf(),$x(748,`
            nzVariant`),Oa(749,`span`,16),$x(750,`:`),gf(),$x(751,` `),Oa(752,`span`,15),$x(753,`'borderless'`),gf(),$x(754,`
          `),Oa(755,`span`,14),$x(756,`}`),gf(),$x(757,`
        `),Oa(758,`span`,14),$x(759,`}`),gf(),Oa(760,`span`,14),$x(761,`;`),gf(),$x(762,`
        `),Oa(763,`span`,17),$x(764,`// 合并全局配置与本地配置`),gf(),$x(765,`
        `),Oa(766,`span`,13),$x(767,`const`),gf(),$x(768,` mergedConfig `),Oa(769,`span`,16),$x(770,`=`),gf(),$x(771,` `),Oa(772,`span`,14),$x(773,`{`),gf(),$x(774,`
          `),Oa(775,`span`,16),$x(776,`...`),gf(),$x(777,`globalConfig`),Oa(778,`span`,14),$x(779,`,`),gf(),$x(780,`
          `),Oa(781,`span`,16),$x(782,`...`),gf(),$x(783,`localConfig
        `),Oa(784,`span`,14),$x(785,`}`),gf(),Oa(786,`span`,14),$x(787,`;`),gf(),$x(788,`
        `),Oa(789,`span`,13),$x(790,`return`),gf(),$x(791,` mergedConfig`),Oa(792,`span`,14),$x(793,`;`),gf(),$x(794,`
      `),Oa(795,`span`,14),$x(796,`}`),gf(),Oa(797,`span`,14),$x(798,`,`),gf(),$x(799,`
    `),Oa(800,`span`,14),$x(801,`}`),gf(),$x(802,`
  `),Oa(803,`span`,14),$x(804,`]`),gf(),$x(805,`
`),Oa(806,`span`,14),$x(807,`}`),gf(),Oa(808,`span`,14),$x(809,`)`),gf(),$x(810,`
`),gf()(),Oa(811,`h2`,32)(812,`span`),$x(813,`动态变更`),gf(),Oa(814,`a`,33),$x(815,`#`),gf()(),Oa(816,`p`),$x(817,`你可以通过调用 `),Oa(818,`code`),$x(819,`NzConfigService`),gf(),$x(820,` 的 `),Oa(821,`code`),$x(822,`set`),gf(),$x(823,` 方法来改变某个组件的配置项，例如：`),gf(),Oa(824,`pre`)(825,`code`,12)(826,`span`,13),$x(827,`import`),gf(),$x(828,` `),Oa(829,`span`,14),$x(830,`{`),gf(),$x(831,` NzConfigService `),Oa(832,`span`,14),$x(833,`}`),gf(),$x(834,` `),Oa(835,`span`,13),$x(836,`from`),gf(),$x(837,` `),Oa(838,`span`,15),$x(839,`'ng-zorro-antd/core/config'`),gf(),Oa(840,`span`,14),$x(841,`;`),gf(),$x(842,`

`),Oa(843,`span`,23)(844,`span`,24),$x(845,`@`),gf(),Oa(846,`span`,19),$x(847,`Component`),gf()(),Oa(848,`span`,14),$x(849,`(`),gf(),Oa(850,`span`,14),$x(851,`{`),gf(),Oa(852,`span`,14),$x(853,`}`),gf(),Oa(854,`span`,14),$x(855,`)`),gf(),$x(856,`
`),Oa(857,`span`,13),$x(858,`export`),gf(),$x(859,` `),Oa(860,`span`,13),$x(861,`class`),gf(),$x(862,` `),Oa(863,`span`,22),$x(864,`ChangeZorroConfigComponent`),gf(),$x(865,` `),Oa(866,`span`,14),$x(867,`{`),gf(),$x(868,`
  `),Oa(869,`span`,13),$x(870,`private`),gf(),$x(871,` nzConfigService `),Oa(872,`span`,16),$x(873,`=`),gf(),$x(874,` `),Oa(875,`span`,19),$x(876,`inject`),gf(),Oa(877,`span`,14),$x(878,`(`),gf(),$x(879,`NzConfigService`),Oa(880,`span`,14),$x(881,`)`),gf(),Oa(882,`span`,14),$x(883,`;`),gf(),$x(884,`

  `),Oa(885,`span`,19),$x(886,`onChangeConfig`),gf(),Oa(887,`span`,14),$x(888,`(`),gf(),Oa(889,`span`,14),$x(890,`)`),gf(),$x(891,` `),Oa(892,`span`,14),$x(893,`{`),gf(),$x(894,`
    `),Oa(895,`span`,13),$x(896,`this`),gf(),Oa(897,`span`,14),$x(898,`.`),gf(),$x(899,`nzConfigService`),Oa(900,`span`,14),$x(901,`.`),gf(),Oa(902,`span`,19),$x(903,`set`),gf(),Oa(904,`span`,14),$x(905,`(`),gf(),Oa(906,`span`,15),$x(907,`'button'`),gf(),Oa(908,`span`,14),$x(909,`,`),gf(),$x(910,` `),Oa(911,`span`,14),$x(912,`{`),gf(),$x(913,` nzSize`),Oa(914,`span`,16),$x(915,`:`),gf(),$x(916,` `),Oa(917,`span`,15),$x(918,`'large'`),gf(),$x(919,` `),Oa(920,`span`,14),$x(921,`}`),gf(),Oa(922,`span`,14),$x(923,`)`),gf(),Oa(924,`span`,14),$x(925,`;`),gf(),$x(926,`
  `),Oa(927,`span`,14),$x(928,`}`),gf(),$x(929,`
`),Oa(930,`span`,14),$x(931,`}`),gf(),$x(932,`
`),gf()(),Oa(933,`p`),$x(934,`所有的组件实例都会响应这些改变（只要它们没有被单独赋值）。`),gf(),Oa(935,`h2`,34)(936,`span`),$x(937,`优先级说明`),gf(),Oa(938,`a`,35),$x(939,`#`),gf()(),Oa(940,`p`),$x(941,`对于任何一个属性来说，各个来源的值的优先级如下：`),gf(),Oa(942,`p`)(943,`strong`),$x(944,`为组件的某个实例单独设置的值（通过模板或类似于 `),Oa(945,`code`),$x(946,`service.create`),gf(),$x(947,` 的方法）> 通过 `),Oa(948,`code`),$x(949,`NZ_CONFIG`),gf(),$x(950,` 提供的全局默认值（包括 `),Oa(951,`code`),$x(952,`set`),gf(),$x(953,` 方法） > NG-ZORRO 内置的默认值。`),gf()(),Oa(954,`p`),$x(955,`例如，你想创建一个 NzNotification 组件：`),gf(),Oa(956,`ol`)(957,`li`),$x(958,`你在调用 `),Oa(959,`code`),$x(960,`NzNotificationService.success`),gf(),$x(961,` 时传递参数 `),Oa(962,`code`),$x(963,`{ nzDuration: 6000 }`),gf()(),Oa(964,`li`),$x(965,`你通过 `),Oa(966,`code`),$x(967,`NZ_CONFIG`),gf(),$x(968,` 提供了全局默认值 `),Oa(969,`code`),$x(970,`{ notification: { nzDuration: 5000 } }`),gf()(),Oa(971,`li`),$x(972,`NG-ZORRO 内部默认值为 4500`),gf()(),Oa(973,`p`),$x(974,`最终该 Notification 将会显示 6000 毫秒。`),gf(),Oa(975,`h2`,36)(976,`span`),$x(977,`可配置项`),gf(),Oa(978,`a`,37),$x(979,`#`),gf()(),Oa(980,`p`)(981,`code`),$x(982,`NzConfig`),gf(),$x(983,` 接口提供的类型定义信息能够帮助你找到所有支持全局配置项的组件和属性。另外，每个组件的文档都会指出哪些属性可以通过全局配置项的方式指定。`),gf(),ug(),gf()()),l&2&&(c_(5),xD(`nzOffsetTop`,16),c_(),xD(`nzAffix`,!1))},dependencies:[no,In,na,YR,oN,_T],encapsulation:2})};export{E as default};