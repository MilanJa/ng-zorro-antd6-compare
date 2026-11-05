import{Bi as uD,W as ID,Zi as va,fa as zh,ir as ef,jr as kM,mt as NN,p as CD,ra as xD,rn as Wh,vn as ZT}from"./chunk-D6Q27eMV.js";import{$t as UP,dt as MR,it as LL}from"./chunk-D9ib9B2F.js";import"./main-6DBNN6UG.js";import"./chunk-BJxi0dBT.js";import{a as Us,i as Un,x as yo}from"./chunk-B7ybz6Sb.js";function B(i,a){i&1&&(va(0,`span`),NN(1,`全局配置项`),ef())}function g(i,a){i&1&&CD(0,`span`)}var E=class i{goLink(a){window&&(window.location.hash=a)}static ɵfac=function(l){return new(l||i)};static ɵcmp=kM({type:i,selectors:[[`nz-doc-global-config-zh`]],decls:984,vars:2,consts:[[1,`markdown`],[4,`nzSpaceItem`],[1,`toc-affix`,3,`nzOffsetTop`],[`nzShowInkInFixed`,``,3,`nzClick`,`nzAffix`],[`nzHref`,`#如何使用`,`nzTitle`,`如何使用`,1,`toc-indent-1`],[`nzHref`,`#提供模板`,`nzTitle`,`提供模板`,1,`toc-indent-2`],[`nzHref`,`#局部生效`,`nzTitle`,`局部生效`,1,`toc-indent-1`],[`nzHref`,`#动态变更`,`nzTitle`,`动态变更`,1,`toc-indent-1`],[`nzHref`,`#优先级说明`,`nzTitle`,`优先级说明`,1,`toc-indent-1`],[`nzHref`,`#可配置项`,`nzTitle`,`可配置项`,1,`toc-indent-1`],[`id`,`如何使用`],[`onclick`,`window.location.hash = '如何使用'`,1,`anchor`],[1,`language-typescript`],[1,`token`,`keyword`],[1,`token`,`punctuation`],[1,`token`,`string`],[1,`token`,`operator`],[1,`token`,`comment`],[1,`token`,`number`],[1,`token`,`function`],[`id`,`提供模板`],[`onclick`,`window.location.hash = '提供模板'`,1,`anchor`],[1,`token`,`class-name`],[1,`token`,`decorator`],[1,`token`,`at`,`operator`],[1,`token`,`boolean`],[1,`token`,`template-string`],[1,`token`,`template-punctuation`,`string`],[1,`token`,`constant`],[`id`,`局部生效`],[`onclick`,`window.location.hash = '局部生效'`,1,`anchor`],[1,`token`,`function-variable`,`function`],[`id`,`动态变更`],[`onclick`,`window.location.hash = '动态变更'`,1,`anchor`],[`id`,`优先级说明`],[`onclick`,`window.location.hash = '优先级说明'`,1,`anchor`],[`id`,`可配置项`],[`onclick`,`window.location.hash = '可配置项'`,1,`anchor`]],template:function(l,A){l&1&&(va(0,`article`,0)(1,`h1`)(2,`nz-space`),uD(3,B,2,0,`span`,1)(4,g,1,0,`span`,1),ef()(),va(5,`nz-affix`,2)(6,`nz-anchor`,3),xD(`nzClick`,function(z){return A.goLink(z)}),CD(7,`nz-link`,4)(8,`nz-link`,5)(9,`nz-link`,6)(10,`nz-link`,7)(11,`nz-link`,8)(12,`nz-link`,9),ef()(),va(13,`section`,0),Wh(),va(14,`p`),NN(15,`我们给众多组件添加了`),va(16,`strong`),NN(17,`全局配置`),ef(),NN(18,`功能，你可以通过全局配置来定义组件的默认行为，从而减少在模板中需要写的代码（让你的代码更加清爽），还能在运行时修改全局配置项。`),ef(),va(19,`h2`,10)(20,`span`),NN(21,`如何使用`),ef(),va(22,`a`,11),NN(23,`#`),ef()(),va(24,`p`),NN(25,`想要为某些组件提供默认配置项, 可以使用 `),va(26,`code`),NN(27,`provideNzConfig`),ef(),NN(28,` 函数，传入一个符合 `),va(29,`code`),NN(30,`NzConfig`),ef(),NN(31,` 接口的对象。例如：`),ef(),va(32,`pre`)(33,`code`,12)(34,`span`,13),NN(35,`import`),ef(),NN(36,` `),va(37,`span`,14),NN(38,`{`),ef(),NN(39,` NzConfig`),va(40,`span`,14),NN(41,`,`),ef(),NN(42,` provideNzConfig `),va(43,`span`,14),NN(44,`}`),ef(),NN(45,` `),va(46,`span`,13),NN(47,`from`),ef(),NN(48,` `),va(49,`span`,15),NN(50,`'ng-zorro-antd/core/config'`),ef(),va(51,`span`,14),NN(52,`;`),ef(),NN(53,`

`),va(54,`span`,13),NN(55,`const`),ef(),NN(56,` ngZorroConfig`),va(57,`span`,16),NN(58,`:`),ef(),NN(59,` NzConfig `),va(60,`span`,16),NN(61,`=`),ef(),NN(62,` `),va(63,`span`,14),NN(64,`{`),ef(),NN(65,`
  `),va(66,`span`,17),NN(67,`// 注意组件名称没有 nz 前缀`),ef(),NN(68,`
  message`),va(69,`span`,16),NN(70,`:`),ef(),NN(71,` `),va(72,`span`,14),NN(73,`{`),ef(),NN(74,` nzTop`),va(75,`span`,16),NN(76,`:`),ef(),NN(77,` `),va(78,`span`,18),NN(79,`120`),ef(),NN(80,` `),va(81,`span`,14),NN(82,`}`),ef(),va(83,`span`,14),NN(84,`,`),ef(),NN(85,`
  notification`),va(86,`span`,16),NN(87,`:`),ef(),NN(88,` `),va(89,`span`,14),NN(90,`{`),ef(),NN(91,` nzTop`),va(92,`span`,16),NN(93,`:`),ef(),NN(94,` `),va(95,`span`,18),NN(96,`240`),ef(),NN(97,` `),va(98,`span`,14),NN(99,`}`),ef(),NN(100,`
`),va(101,`span`,14),NN(102,`}`),ef(),va(103,`span`,14),NN(104,`;`),ef(),NN(105,`

`),va(106,`span`,13),NN(107,`export`),ef(),NN(108,` `),va(109,`span`,13),NN(110,`const`),ef(),NN(111,` appConfig`),va(112,`span`,16),NN(113,`:`),ef(),NN(114,` ApplicationConfig `),va(115,`span`,16),NN(116,`=`),ef(),NN(117,` `),va(118,`span`,14),NN(119,`{`),ef(),NN(120,`
  providers`),va(121,`span`,16),NN(122,`:`),ef(),NN(123,` `),va(124,`span`,14),NN(125,`[`),ef(),va(126,`span`,19),NN(127,`provideNzConfig`),ef(),va(128,`span`,14),NN(129,`(`),ef(),NN(130,`ngZorroConfig`),va(131,`span`,14),NN(132,`)`),ef(),va(133,`span`,14),NN(134,`]`),ef(),NN(135,`
`),va(136,`span`,14),NN(137,`}`),ef(),va(138,`span`,14),NN(139,`;`),ef(),NN(140,`
`),ef()(),va(141,`p`),NN(142,`这些全局配置项将会被注入 `),va(143,`code`),NN(144,`NzConfigService`),ef(),NN(145,` 当中并保存。`),ef(),va(146,`h3`,20)(147,`span`),NN(148,`提供模板`),ef(),va(149,`a`,21),NN(150,`#`),ef()(),va(151,`p`),NN(152,`一些组件支持传递模板 `),va(153,`code`),NN(154,`TemplateRef<T>`),ef(),NN(155,` 作为默认参数，我们来了解一下如何做到这一点。`),ef(),va(156,`p`),NN(157,`最简单的方式是在应用的根组件中调用 `),va(158,`code`),NN(159,`NzConfigService`),ef(),NN(160,` 的相关方法：`),ef(),va(161,`pre`)(162,`code`,12)(163,`span`,13),NN(164,`import`),ef(),NN(165,` `),va(166,`span`,14),NN(167,`{`),ef(),NN(168,` NzConfigService `),va(169,`span`,14),NN(170,`}`),ef(),NN(171,` `),va(172,`span`,13),NN(173,`from`),ef(),NN(174,` `),va(175,`span`,15),NN(176,`'ng-zorro-antd/core/config'`),ef(),va(177,`span`,14),NN(178,`;`),ef(),NN(179,`

`),va(180,`span`,13),NN(181,`export`),ef(),NN(182,` `),va(183,`span`,13),NN(184,`class`),ef(),NN(185,` `),va(186,`span`,22),NN(187,`AppComponent`),ef(),NN(188,` `),va(189,`span`,13),NN(190,`implements`),ef(),NN(191,` `),va(192,`span`,22),NN(193,`OnInit`),ef(),NN(194,` `),va(195,`span`,14),NN(196,`{`),ef(),NN(197,`
  `),va(198,`span`,13),NN(199,`private`),ef(),NN(200,` nzConfigService `),va(201,`span`,16),NN(202,`=`),ef(),NN(203,` `),va(204,`span`,19),NN(205,`inject`),ef(),va(206,`span`,14),NN(207,`(`),ef(),NN(208,`NzConfigService`),va(209,`span`,14),NN(210,`)`),ef(),va(211,`span`,14),NN(212,`;`),ef(),NN(213,`

  `),va(214,`span`,23)(215,`span`,24),NN(216,`@`),ef(),va(217,`span`,19),NN(218,`ViewChild`),ef()(),va(219,`span`,14),NN(220,`(`),ef(),va(221,`span`,15),NN(222,`'nzIndicatorTpl'`),ef(),va(223,`span`,14),NN(224,`,`),ef(),NN(225,` `),va(226,`span`,14),NN(227,`{`),ef(),NN(228,` `),va(229,`span`,13),NN(230,`static`),ef(),va(231,`span`,16),NN(232,`:`),ef(),NN(233,` `),va(234,`span`,25),NN(235,`true`),ef(),NN(236,` `),va(237,`span`,14),NN(238,`}`),ef(),va(239,`span`,14),NN(240,`)`),ef(),NN(241,`
  nzIndicator`),va(242,`span`,16),NN(243,`!`),ef(),va(244,`span`,16),NN(245,`:`),ef(),NN(246,` TemplateRef`),va(247,`span`,16),NN(248,`<`),ef(),va(249,`span`,13),NN(250,`void`),ef(),va(251,`span`,16),NN(252,`>`),ef(),va(253,`span`,14),NN(254,`;`),ef(),NN(255,`

  `),va(256,`span`,19),NN(257,`ngOnInit`),ef(),va(258,`span`,14),NN(259,`(`),ef(),va(260,`span`,14),NN(261,`)`),ef(),va(262,`span`,16),NN(263,`:`),ef(),NN(264,` `),va(265,`span`,13),NN(266,`void`),ef(),NN(267,` `),va(268,`span`,14),NN(269,`{`),ef(),NN(270,`
    `),va(271,`span`,13),NN(272,`this`),ef(),va(273,`span`,14),NN(274,`.`),ef(),NN(275,`nzConfigService`),va(276,`span`,14),NN(277,`.`),ef(),va(278,`span`,19),NN(279,`set`),ef(),va(280,`span`,14),NN(281,`(`),ef(),va(282,`span`,15),NN(283,`'spin'`),ef(),va(284,`span`,14),NN(285,`,`),ef(),NN(286,` `),va(287,`span`,14),NN(288,`{`),ef(),NN(289,` nzIndicator`),va(290,`span`,16),NN(291,`:`),ef(),NN(292,` `),va(293,`span`,13),NN(294,`this`),ef(),va(295,`span`,14),NN(296,`.`),ef(),NN(297,`nzIndicator `),va(298,`span`,14),NN(299,`}`),ef(),va(300,`span`,14),NN(301,`)`),ef(),va(302,`span`,14),NN(303,`;`),ef(),NN(304,`
  `),va(305,`span`,14),NN(306,`}`),ef(),NN(307,`
`),va(308,`span`,14),NN(309,`}`),ef(),NN(310,`
`),ef()(),va(311,`p`),NN(312,`然而这种方式可能会让你的 AppComponent 相当臃肿，并违反关注分离原则。`),ef(),va(313,`p`),NN(314,`因此，当你的项目比较大时，我们建议你使用一个 `),va(315,`code`),NN(316,`FactoryProvider`),ef(),NN(317,`，如下所示：`),ef(),va(318,`pre`)(319,`code`,12)(320,`span`,17),NN(321,`// The module-level Component which contains template references.`),ef(),NN(322,`
`),va(323,`span`,17),NN(324,`// Exporting is required for AOT compatibility`),ef(),NN(325,`
`),va(326,`span`,23)(327,`span`,24),NN(328,`@`),ef(),va(329,`span`,19),NN(330,`Component`),ef()(),va(331,`span`,14),NN(332,`(`),ef(),va(333,`span`,14),NN(334,`{`),ef(),NN(335,`
  template`),va(336,`span`,16),NN(337,`:`),ef(),NN(338,` `),va(339,`span`,26)(340,`span`,27),NN(341,"`"),ef(),va(342,`span`,15),NN(343,`
    <ng-template #nzIndicatorTpl>
      <span class="ant-spin-dot">
        <nz-icon nzType="loading" />
      </span>
    </ng-template>
  `),ef(),va(344,`span`,27),NN(345,"`"),ef()(),NN(346,`
`),va(347,`span`,14),NN(348,`}`),ef(),va(349,`span`,14),NN(350,`)`),ef(),NN(351,`
`),va(352,`span`,13),NN(353,`export`),ef(),NN(354,` `),va(355,`span`,13),NN(356,`class`),ef(),NN(357,` `),va(358,`span`,22),NN(359,`GlobalTemplatesComponent`),ef(),NN(360,` `),va(361,`span`,14),NN(362,`{`),ef(),NN(363,`
  `),va(364,`span`,23)(365,`span`,24),NN(366,`@`),ef(),va(367,`span`,19),NN(368,`ViewChild`),ef()(),va(369,`span`,14),NN(370,`(`),ef(),va(371,`span`,15),NN(372,`'nzIndicatorTpl'`),ef(),va(373,`span`,14),NN(374,`,`),ef(),NN(375,` `),va(376,`span`,14),NN(377,`{`),ef(),NN(378,` `),va(379,`span`,13),NN(380,`static`),ef(),va(381,`span`,16),NN(382,`:`),ef(),NN(383,` `),va(384,`span`,25),NN(385,`true`),ef(),NN(386,` `),va(387,`span`,14),NN(388,`}`),ef(),va(389,`span`,14),NN(390,`)`),ef(),NN(391,`
  nzIndicator`),va(392,`span`,16),NN(393,`!`),ef(),va(394,`span`,16),NN(395,`:`),ef(),NN(396,` TemplateRef`),va(397,`span`,16),NN(398,`<`),ef(),va(399,`span`,13),NN(400,`void`),ef(),va(401,`span`,16),NN(402,`>`),ef(),va(403,`span`,14),NN(404,`;`),ef(),NN(405,`
`),va(406,`span`,14),NN(407,`}`),ef(),NN(408,`

`),va(409,`span`,17),NN(410,`// The Factory function`),ef(),NN(411,`
`),va(412,`span`,13),NN(413,`const`),ef(),NN(414,` nzConfigFactory `),va(415,`span`,16),NN(416,`=`),ef(),NN(417,` `),va(418,`span`,14),NN(419,`(`),ef(),va(420,`span`,14),NN(421,`)`),ef(),va(422,`span`,16),NN(423,`:`),ef(),NN(424,` NzConfig `),va(425,`span`,16),NN(426,`=>`),ef(),NN(427,` `),va(428,`span`,14),NN(429,`{`),ef(),NN(430,`
  `),va(431,`span`,13),NN(432,`const`),ef(),NN(433,` environmentInjector `),va(434,`span`,16),NN(435,`=`),ef(),NN(436,` `),va(437,`span`,19),NN(438,`inject`),ef(),va(439,`span`,14),NN(440,`(`),ef(),NN(441,`EnvironmentInjector`),va(442,`span`,14),NN(443,`)`),ef(),va(444,`span`,14),NN(445,`;`),ef(),NN(446,`
  `),va(447,`span`,13),NN(448,`const`),ef(),NN(449,` `),va(450,`span`,14),NN(451,`{`),ef(),NN(452,` nzIndicator `),va(453,`span`,14),NN(454,`}`),ef(),NN(455,` `),va(456,`span`,16),NN(457,`=`),ef(),NN(458,` `),va(459,`span`,19),NN(460,`createComponent`),ef(),va(461,`span`,14),NN(462,`(`),ef(),NN(463,`component`),va(464,`span`,14),NN(465,`,`),ef(),NN(466,` `),va(467,`span`,14),NN(468,`{`),ef(),NN(469,` environmentInjector `),va(470,`span`,14),NN(471,`}`),ef(),va(472,`span`,14),NN(473,`)`),ef(),va(474,`span`,14),NN(475,`.`),ef(),NN(476,`instance`),va(477,`span`,14),NN(478,`;`),ef(),NN(479,`
  `),va(480,`span`,13),NN(481,`return`),ef(),NN(482,` `),va(483,`span`,14),NN(484,`{`),ef(),NN(485,`
    spin`),va(486,`span`,16),NN(487,`:`),ef(),NN(488,` `),va(489,`span`,14),NN(490,`{`),ef(),NN(491,`
      nzIndicator
    `),va(492,`span`,14),NN(493,`}`),ef(),NN(494,`
  `),va(495,`span`,14),NN(496,`}`),ef(),va(497,`span`,14),NN(498,`;`),ef(),NN(499,`
`),va(500,`span`,14),NN(501,`}`),ef(),va(502,`span`,14),NN(503,`;`),ef(),NN(504,`

`),va(505,`span`,13),NN(506,`export`),ef(),NN(507,` `),va(508,`span`,13),NN(509,`const`),ef(),NN(510,` appConfig`),va(511,`span`,16),NN(512,`:`),ef(),NN(513,` ApplicationConfig `),va(514,`span`,16),NN(515,`=`),ef(),NN(516,` `),va(517,`span`,14),NN(518,`{`),ef(),NN(519,`
  providers`),va(520,`span`,16),NN(521,`:`),ef(),NN(522,` `),va(523,`span`,14),NN(524,`[`),ef(),NN(525,`
    `),va(526,`span`,14),NN(527,`{`),ef(),NN(528,`
      `),va(529,`span`,17),NN(530,`// The FactoryProvider`),ef(),NN(531,`
      provide`),va(532,`span`,16),NN(533,`:`),ef(),NN(534,` `),va(535,`span`,28),NN(536,`NZ_CONFIG`),ef(),va(537,`span`,14),NN(538,`,`),ef(),NN(539,`
      useFactory`),va(540,`span`,16),NN(541,`:`),ef(),NN(542,` nzConfigFactory
    `),va(543,`span`,14),NN(544,`}`),ef(),NN(545,`
  `),va(546,`span`,14),NN(547,`]`),ef(),NN(548,`
`),va(549,`span`,14),NN(550,`}`),ef(),va(551,`span`,14),NN(552,`;`),ef(),NN(553,`
`),ef()(),va(554,`h2`,29)(555,`span`),NN(556,`局部生效`),ef(),va(557,`a`,30),NN(558,`#`),ef()(),va(559,`p`),NN(560,`开发者可以利用 Angular 自带的依赖注入机制，在特定组件内重新设定 `),va(561,`code`),NN(562,`NZ_CONFIG`),ef(),NN(563,`， 该设定不会影响该组件以外的配置。`),ef(),va(564,`pre`)(565,`code`,12)(566,`span`,23)(567,`span`,24),NN(568,`@`),ef(),va(569,`span`,19),NN(570,`Component`),ef()(),va(571,`span`,14),NN(572,`(`),ef(),va(573,`span`,14),NN(574,`{`),ef(),NN(575,`
  providers`),va(576,`span`,16),NN(577,`:`),ef(),NN(578,` `),va(579,`span`,14),NN(580,`[`),ef(),NN(581,`
    `),va(582,`span`,17),NN(583,`// 重设本地 NzConfigService`),ef(),NN(584,`
    NzConfigService`),va(585,`span`,14),NN(586,`,`),ef(),NN(587,`
    `),va(588,`span`,14),NN(589,`{`),ef(),NN(590,`
      provide`),va(591,`span`,16),NN(592,`:`),ef(),NN(593,` `),va(594,`span`,28),NN(595,`NZ_CONFIG`),ef(),va(596,`span`,14),NN(597,`,`),ef(),NN(598,`
      useValue`),va(599,`span`,16),NN(600,`:`),ef(),NN(601,` `),va(602,`span`,14),NN(603,`{`),ef(),NN(604,`
        button`),va(605,`span`,16),NN(606,`:`),ef(),NN(607,` `),va(608,`span`,14),NN(609,`{`),ef(),NN(610,`
          nzSize`),va(611,`span`,16),NN(612,`:`),ef(),NN(613,` `),va(614,`span`,15),NN(615,`'large'`),ef(),NN(616,`
        `),va(617,`span`,14),NN(618,`}`),ef(),NN(619,`
      `),va(620,`span`,14),NN(621,`}`),ef(),NN(622,`
    `),va(623,`span`,14),NN(624,`}`),ef(),NN(625,`
  `),va(626,`span`,14),NN(627,`]`),ef(),NN(628,`
`),va(629,`span`,14),NN(630,`}`),ef(),va(631,`span`,14),NN(632,`)`),ef(),NN(633,`
`),ef()(),va(634,`p`),NN(635,`也可以使用 `),va(636,`code`),NN(637,`useFactory`),ef(),NN(638,` 将全局配置与区域配置合并后生效`),ef(),va(639,`blockquote`)(640,`p`),NN(641,`注意：全局配置在初始化之后修改将不会影响该部分配置结果`),ef()(),va(642,`pre`)(643,`code`,12)(644,`span`,23)(645,`span`,24),NN(646,`@`),ef(),va(647,`span`,19),NN(648,`Component`),ef()(),va(649,`span`,14),NN(650,`(`),ef(),va(651,`span`,14),NN(652,`{`),ef(),NN(653,`
  providers`),va(654,`span`,16),NN(655,`:`),ef(),NN(656,` `),va(657,`span`,14),NN(658,`[`),ef(),NN(659,`
    `),va(660,`span`,17),NN(661,`// 重设本地 NzConfigService`),ef(),NN(662,`
    NzConfigService`),va(663,`span`,14),NN(664,`,`),ef(),NN(665,`
    `),va(666,`span`,14),NN(667,`{`),ef(),NN(668,`
      provide`),va(669,`span`,16),NN(670,`:`),ef(),NN(671,` `),va(672,`span`,28),NN(673,`NZ_CONFIG`),ef(),va(674,`span`,14),NN(675,`,`),ef(),NN(676,`
      `),va(677,`span`,31),NN(678,`useFactory`),ef(),va(679,`span`,16),NN(680,`:`),ef(),NN(681,` `),va(682,`span`,14),NN(683,`(`),ef(),va(684,`span`,14),NN(685,`)`),ef(),NN(686,` `),va(687,`span`,16),NN(688,`=>`),ef(),NN(689,` `),va(690,`span`,14),NN(691,`{`),ef(),NN(692,`
        `),va(693,`span`,17),NN(694,`// 获取全局 NzConfigService`),ef(),NN(695,`
        `),va(696,`span`,13),NN(697,`const`),ef(),NN(698,` globalConfig `),va(699,`span`,16),NN(700,`=`),ef(),NN(701,` `),va(702,`span`,19),NN(703,`inject`),ef(),va(704,`span`,14),NN(705,`(`),ef(),NN(706,`NzConfigService`),va(707,`span`,14),NN(708,`,`),ef(),NN(709,` `),va(710,`span`,14),NN(711,`{`),ef(),NN(712,` skipSelf`),va(713,`span`,16),NN(714,`:`),ef(),NN(715,` `),va(716,`span`,25),NN(717,`true`),ef(),NN(718,` `),va(719,`span`,14),NN(720,`}`),ef(),va(721,`span`,14),NN(722,`)`),ef(),va(723,`span`,14),NN(724,`.`),ef(),va(725,`span`,19),NN(726,`getConfig`),ef(),va(727,`span`,14),NN(728,`(`),ef(),va(729,`span`,14),NN(730,`)`),ef(),va(731,`span`,14),NN(732,`;`),ef(),NN(733,`
        `),va(734,`span`,13),NN(735,`const`),ef(),NN(736,` localConfig `),va(737,`span`,16),NN(738,`=`),ef(),NN(739,` `),va(740,`span`,14),NN(741,`{`),ef(),NN(742,`
          select`),va(743,`span`,16),NN(744,`:`),ef(),NN(745,` `),va(746,`span`,14),NN(747,`{`),ef(),NN(748,`
            nzVariant`),va(749,`span`,16),NN(750,`:`),ef(),NN(751,` `),va(752,`span`,15),NN(753,`'borderless'`),ef(),NN(754,`
          `),va(755,`span`,14),NN(756,`}`),ef(),NN(757,`
        `),va(758,`span`,14),NN(759,`}`),ef(),va(760,`span`,14),NN(761,`;`),ef(),NN(762,`
        `),va(763,`span`,17),NN(764,`// 合并全局配置与本地配置`),ef(),NN(765,`
        `),va(766,`span`,13),NN(767,`const`),ef(),NN(768,` mergedConfig `),va(769,`span`,16),NN(770,`=`),ef(),NN(771,` `),va(772,`span`,14),NN(773,`{`),ef(),NN(774,`
          `),va(775,`span`,16),NN(776,`...`),ef(),NN(777,`globalConfig`),va(778,`span`,14),NN(779,`,`),ef(),NN(780,`
          `),va(781,`span`,16),NN(782,`...`),ef(),NN(783,`localConfig
        `),va(784,`span`,14),NN(785,`}`),ef(),va(786,`span`,14),NN(787,`;`),ef(),NN(788,`
        `),va(789,`span`,13),NN(790,`return`),ef(),NN(791,` mergedConfig`),va(792,`span`,14),NN(793,`;`),ef(),NN(794,`
      `),va(795,`span`,14),NN(796,`}`),ef(),va(797,`span`,14),NN(798,`,`),ef(),NN(799,`
    `),va(800,`span`,14),NN(801,`}`),ef(),NN(802,`
  `),va(803,`span`,14),NN(804,`]`),ef(),NN(805,`
`),va(806,`span`,14),NN(807,`}`),ef(),va(808,`span`,14),NN(809,`)`),ef(),NN(810,`
`),ef()(),va(811,`h2`,32)(812,`span`),NN(813,`动态变更`),ef(),va(814,`a`,33),NN(815,`#`),ef()(),va(816,`p`),NN(817,`你可以通过调用 `),va(818,`code`),NN(819,`NzConfigService`),ef(),NN(820,` 的 `),va(821,`code`),NN(822,`set`),ef(),NN(823,` 方法来改变某个组件的配置项，例如：`),ef(),va(824,`pre`)(825,`code`,12)(826,`span`,13),NN(827,`import`),ef(),NN(828,` `),va(829,`span`,14),NN(830,`{`),ef(),NN(831,` NzConfigService `),va(832,`span`,14),NN(833,`}`),ef(),NN(834,` `),va(835,`span`,13),NN(836,`from`),ef(),NN(837,` `),va(838,`span`,15),NN(839,`'ng-zorro-antd/core/config'`),ef(),va(840,`span`,14),NN(841,`;`),ef(),NN(842,`

`),va(843,`span`,23)(844,`span`,24),NN(845,`@`),ef(),va(846,`span`,19),NN(847,`Component`),ef()(),va(848,`span`,14),NN(849,`(`),ef(),va(850,`span`,14),NN(851,`{`),ef(),va(852,`span`,14),NN(853,`}`),ef(),va(854,`span`,14),NN(855,`)`),ef(),NN(856,`
`),va(857,`span`,13),NN(858,`export`),ef(),NN(859,` `),va(860,`span`,13),NN(861,`class`),ef(),NN(862,` `),va(863,`span`,22),NN(864,`ChangeZorroConfigComponent`),ef(),NN(865,` `),va(866,`span`,14),NN(867,`{`),ef(),NN(868,`
  `),va(869,`span`,13),NN(870,`private`),ef(),NN(871,` nzConfigService `),va(872,`span`,16),NN(873,`=`),ef(),NN(874,` `),va(875,`span`,19),NN(876,`inject`),ef(),va(877,`span`,14),NN(878,`(`),ef(),NN(879,`NzConfigService`),va(880,`span`,14),NN(881,`)`),ef(),va(882,`span`,14),NN(883,`;`),ef(),NN(884,`

  `),va(885,`span`,19),NN(886,`onChangeConfig`),ef(),va(887,`span`,14),NN(888,`(`),ef(),va(889,`span`,14),NN(890,`)`),ef(),NN(891,` `),va(892,`span`,14),NN(893,`{`),ef(),NN(894,`
    `),va(895,`span`,13),NN(896,`this`),ef(),va(897,`span`,14),NN(898,`.`),ef(),NN(899,`nzConfigService`),va(900,`span`,14),NN(901,`.`),ef(),va(902,`span`,19),NN(903,`set`),ef(),va(904,`span`,14),NN(905,`(`),ef(),va(906,`span`,15),NN(907,`'button'`),ef(),va(908,`span`,14),NN(909,`,`),ef(),NN(910,` `),va(911,`span`,14),NN(912,`{`),ef(),NN(913,` nzSize`),va(914,`span`,16),NN(915,`:`),ef(),NN(916,` `),va(917,`span`,15),NN(918,`'large'`),ef(),NN(919,` `),va(920,`span`,14),NN(921,`}`),ef(),va(922,`span`,14),NN(923,`)`),ef(),va(924,`span`,14),NN(925,`;`),ef(),NN(926,`
  `),va(927,`span`,14),NN(928,`}`),ef(),NN(929,`
`),va(930,`span`,14),NN(931,`}`),ef(),NN(932,`
`),ef()(),va(933,`p`),NN(934,`所有的组件实例都会响应这些改变（只要它们没有被单独赋值）。`),ef(),va(935,`h2`,34)(936,`span`),NN(937,`优先级说明`),ef(),va(938,`a`,35),NN(939,`#`),ef()(),va(940,`p`),NN(941,`对于任何一个属性来说，各个来源的值的优先级如下：`),ef(),va(942,`p`)(943,`strong`),NN(944,`为组件的某个实例单独设置的值（通过模板或类似于 `),va(945,`code`),NN(946,`service.create`),ef(),NN(947,` 的方法）> 通过 `),va(948,`code`),NN(949,`NZ_CONFIG`),ef(),NN(950,` 提供的全局默认值（包括 `),va(951,`code`),NN(952,`set`),ef(),NN(953,` 方法） > NG-ZORRO 内置的默认值。`),ef()(),va(954,`p`),NN(955,`例如，你想创建一个 NzNotification 组件：`),ef(),va(956,`ol`)(957,`li`),NN(958,`你在调用 `),va(959,`code`),NN(960,`NzNotificationService.success`),ef(),NN(961,` 时传递参数 `),va(962,`code`),NN(963,`{ nzDuration: 6000 }`),ef()(),va(964,`li`),NN(965,`你通过 `),va(966,`code`),NN(967,`NZ_CONFIG`),ef(),NN(968,` 提供了全局默认值 `),va(969,`code`),NN(970,`{ notification: { nzDuration: 5000 } }`),ef()(),va(971,`li`),NN(972,`NG-ZORRO 内部默认值为 4500`),ef()(),va(973,`p`),NN(974,`最终该 Notification 将会显示 6000 毫秒。`),ef(),va(975,`h2`,36)(976,`span`),NN(977,`可配置项`),ef(),va(978,`a`,37),NN(979,`#`),ef()(),va(980,`p`)(981,`code`),NN(982,`NzConfig`),ef(),NN(983,` 接口提供的类型定义信息能够帮助你找到所有支持全局配置项的组件和属性。另外，每个组件的文档都会指出哪些属性可以通过全局配置项的方式指定。`),ef(),zh(),ef()()),l&2&&(ZT(5),ID(`nzOffsetTop`,16),ZT(),ID(`nzAffix`,!1))},dependencies:[yo,Un,Us,MR,LL,UP],encapsulation:2})};export{E as default};