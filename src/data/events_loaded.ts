import { ReadableEvent } from "@/type/type";

export const events: ReadableEvent[] = [
  {
    "id": 0,
    "title": "开学典礼",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "「开学典礼」即将开始。嘿，新同学，别发呆啦，今天是个重要的日子，可不能迟到，穿上书院服，跟上班级队伍去体育场参加开学典礼吧！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "认真聆听校领导和学生代表发言。",
    "endingA": [
      "加油！期待你在大学里勇敢追逐、实现心中理想。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "拍照打卡，发一篇大红书。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 1,
    "title": "班委竞选",
    "required": true,
    "equalRights": false,
    "category": 4,
    "mainDialog": "叮叮，打开班群，C导发来通知：有意向担任班委的同学需要参加「班委竞选」，请大家积极报名~DDL今晚20:00！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1,
      5
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": true,
    "choiceA": "报名班委，为班级建设贡献力量！",
    "endingA": [
      "恭喜你！你在竞选中表现出色，成功当选班委！",
      "很遗憾，这次班委竞选竞争激烈，你没有成功当选。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "算了，人生地不熟，担心兼顾不过来ww",
    "endingB": "你在大一把更多的时间和精力放在了学习上，努力提升了自己的学业成绩，也使得你在班级绩点名列前茅。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 2,
    "title": "本科生选课",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "和室友捧着培养方案仔细读了10遍，还有很多不懂的条目，有无「选课」黑科技！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "求助AI，让ShallowSeek帮我计划。",
    "endingA": [
      "通过综合分析你的兴趣与短板，制定的选课方案让你轻松拿下所有心仪课程！（据说给分都很高",
      "推荐的全是硬核课程，开学一周你就被作业压垮。雪上加霜的是，几门热门课手慢了还没抢到！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "求助学长学姐，求避雷教程。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 3,
    "title": "学生会招新",
    "required": true,
    "equalRights": false,
    "category": 4,
    "mainDialog": "一觉睡到12点，赶到「第25食堂」吃饭。咦？「学生会」的招新摊位！$$的招新队伍排满了萌新，活动照片也好吸引人。学生会，听说里面高手如云...",
    "repalceDialog": [
      "组织部",
      "建设部",
      "联络发展部",
      "学术文化部",
      "文体活动部",
      "融媒体中心",
      "分校区办公室",
      "宣传部"
    ],
    "repetable": false,
    "happenYear": [
      1
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "来F大，就得报名学生会！",
    "endingA": [
      "面试中，你虽然紧张得说话结巴，但依靠真诚这个必杀技，打动了大家，顺利加入了学生会。",
      "面试时，你因为过度紧张，没有回答好问题。最终，你遗憾地没有通过面试。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "菜鸡本人，去估计也是去当炮灰。",
    "endingB": "你没有参加学生会，不代表你不care校园活动。无意间，你发现了一个学术社团，既发现了喜爱的团体，也找到了学习搭字。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 4,
    "title": "入党申请书",
    "required": true,
    "equalRights": false,
    "category": 4,
    "mainDialog": "C导发了递交「入党申请书」的通知。入党光荣，可要求是不是非常难？隐隐约约听说过发展流程，筛选很严格，万一被刷，是不是很丢脸...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "递交入党申请书，争取成为党员！",
    "endingA": [
      "你递交了申请书后，开始认真学习党的理论知识，积极参与党课培训和相关活动。"
    ],
    "resultA": {
      "H": [
        1,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "对党员没有概念，先不递交。",
    "endingB": "虽然你没有递交入党申请书，但在平日里也会注重各方面的提升。",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 5,
    "title": "CET四级",
    "required": true,
    "equalRights": false,
    "category": 3,
    "mainDialog": "区区「四级」，怕什么它就考什么。单词表停留在Abandon，听力里到底谁是Mary Tom Nacy？家人们谁懂，刘大雁老师的魔音在脑海中想起：“回家吧，孩子！”",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "不放弃，刘大雁老师说，回去才能SPA。",
    "endingA": [
      "你铭记回家SPA的教诲努力答题。虽然听力部分表现不佳，但你在阅读理解和写作部分发挥出色，最终顺利通过了四级考试！",
      "你含泪答题，但最终喜提424，遗憾落榜，无奈只能准备继续二战。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "放弃，心态崩溃，本次属于摸底。",
    "endingB": "考试结束后，你反思了学习态度和方法，决定下次一定要认真准备。下次一定！",
    "resultB": {
      "H": 3,
      "L": 2,
      "A": [
        -4,
        -4
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 6,
    "title": "专业分流",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "数着手指头计算「专业分流」的DDL，俗话说考得好也得选的好，这次选择对未来专业课内容、毕业就业都有着重要的影响...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "选择目前热门、就业最好的交叉专业。",
    "endingA": [
      "功夫不负有心人，在绩点和运气的双重加持下，你成功分流到理想的专业。",
      "很可惜，差一名你就进入理想的专业，无奈被调剂到了冷门专业。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "选择竞争一般、稳定的老牌专业。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 7,
    "title": "体测",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "长跑、立定跳远、50米，0个人最爱的「体测」如约而至，一定要及格才能参加后续评奖评优。书到用时方恨少，肉到测时才知多...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "先冲50米，800/100米跟大部队随缘。",
    "endingA": [
      "你堪称体测流程规划大师，完美结合自身优势，轻松完成所有项目。体测成绩获得优秀。",
      "你战略失误，误判自己体能极限，在各个项目的体力分配不合理，最终苟延残喘跑完。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "先拿下800/100米，50米本来就是弱项。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 8,
    "title": "刷锻",
    "required": true,
    "equalRights": false,
    "category": 0,
    "mainDialog": "还差几次「早锻、晚锻、课外活动」，J人会计划早锻早起、课外打乒乓球、晚上去操场溜圈；P人主打被J人室友带飞。也许还有PlanB...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "自己刷，隐隐约约听说隔壁有人代刷被抓。",
    "endingA": [
      "你坚持了下来，顺利刷完所有锻，体育成绩喜提A。",
      "你Lazy属性大爆发，在DDL时还缺两次，含泪没有完成刷锻。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "某鱼找代刷，挑个类似的同学（只是有点像而已。",
    "endingB": "你在侥幸心理的驱使下，找了同学代刷，但最终因长得过于不像被抓！受到了批评，后续亲自补完刷锻。",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        -4,
        -4
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 9,
    "title": "思政大课",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "周二下午，「思政大课」到了“悟”的阶段，现场教学、课题学习，思政大课的培养模式众多，是时候合理选择方案了！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "聚焦“现场教学”，抢到“比特跳动”实践基地。",
    "endingA": [
      "你选到了心仪的方案，组员更是兴致满满、推进积极，思政大课结题报告成功入选官微展示。",
      "你虽然深度投入到思政大课，但组员兴致不高，进度推进拖拖拉拉。秉承着一拖N，勉强完成了结项。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "聚焦“课题学习”，探索“人工智能”的学科交叉。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 10,
    "title": "CET六级",
    "required": true,
    "equalRights": true,
    "category": 3,
    "mainDialog": "刚进宿舍，看到舍友拿着「六级」词汇在哀嚎，虽然内心OS TA四级考了426，祝TA顺利。但是，突然想起自己也是报名六级的冤种...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "找到搭子一起备考，互相鼓励，共同进步！",
    "endingA": [
      "你制定了详细的学习计划，每天早起背单词，晚上做真题并看刘大雁老师的网课，最终成功通过了六级。",
      "你的备考方案出现战略性失误，查分那天，424这三个冷冰冰的数字在手机屏幕上显示，你没通过。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "偷偷背着所有人复习，表面淡人，背地偷学！",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 11,
    "title": "军训",
    "required": true,
    "equalRights": false,
    "category": 0,
    "mainDialog": "盛夏，操场上传来“一二一”的口号声，站军姿、踢正步、军体拳、拉歌，「军训」让人体验极致的体力消耗。阳光、热浪、汗水，连同集体感、纪律性、意志力一起刻入记忆。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "还剩几天，咬牙坚持。",
    "endingA": [
      "你坚持认真训练，每天早早起床整理内务，然后精神饱满地投入到训练中，还成为了新生代表发言。",
      "你继续努力训练，但随着训练强度的增加，你感到身体有些吃不消，不小心扭伤了脚踝，好在也熬过了军训。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "快结束了，p一个请假条给C导。",
    "endingB": "由于全班有一半人请假，导致学校严查请假条...悲惨被C导发现！你在刚入学就交了检讨书！",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 12,
    "title": "FET",
    "required": true,
    "equalRights": true,
    "category": 3,
    "mainDialog": "教务处通知「FET英语水平测试」将于本周安排六场考试。传说FET是比六级还难的英语测试，还是培养方案的必需学分。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "拿出祖传的高考英语底子...",
    "endingA": [
      "你在考试中如履平地，见的都会，会的都对，甚至连笔误都没出现，最终以断层的能力拿到了A。",
      "在考试中，你真的大无语，倒霉的遇到了很多生词，不过好在最后还是擦线通过了Π Π。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "扫一眼6级词汇，应该不会比6级难很多...",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 13,
    "title": "普通话水平测试",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "学校组织「大学生普通话水平测试」，我自带标准普通发，自由发挥环节努力往最爱的“西红柿炒蛋”上靠，一招鲜吃遍天！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "我呢了不分，但有时候也听不出来...",
    "endingA": [
      "运气不错，题目刚好避开了你的弱势，最终在即兴评述时逻辑清晰、内容充实！锐评“表达自然，内容有深度”，喜获成绩二级甲等。",
      "你试图用万能模板应对，但抽到的题目完全大超纲！！发音劣势暴露无遗，还因紧张卡壳多次，最终成绩仅二级乙等。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "我平翘舌不分，测试收音应该没这么好...",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 14,
    "title": "入党志愿书",
    "required": true,
    "equalRights": true,
    "category": 4,
    "mainDialog": "组织部下拨了发展名额，可以提交「入党志愿书」了！自从提交入党申请书以来，身份完成了入党申请人、积极分子、发展对象的转变，是时候成为预备党员了！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [
      5
    ],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "提交入党志愿书$政治面貌变更为党员$。",
    "endingA": [
      "你按期递交了入党志愿书，书记召开了支部大会和支委会表决你的发展事宜。你的努力得到了大家的认可，经过党组织的培养和考察，你成为了一名光荣的党员。"
    ],
    "resultA": {
      "H": [
        2,
        3
      ],
      "L": [
        2,
        3
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "提交入党志愿书（政治面貌变更为党员）。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "政治身份：党员",
    "randIdice": []
  },
  {
    "id": 15,
    "title": "卓博计划",
    "required": true,
    "equalRights": false,
    "category": 3,
    "mainDialog": "「卓博计划」是面向优秀大三学生的本博贯通培养项目，能实现本科与博士的无缝衔接！不仅关注学习成绩，更看重其科研潜力、学术热情及创新能力。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 30,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "报名参与卓博计划$进入免试攻读研究生流程$！",
    "endingA": [
      "你凭借着出色的学术水平，面试时得到了数个大牛的青睐，成功获得了卓博的Offer。",
      "由于今年读博人数暴涨，导致竞争过于激烈，很遗憾没有成功入选。"
    ],
    "resultA": {
      "H": [
        1,
        3
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "至少拿到本科学历，要没读完本科学位都无了。",
    "endingB": "放弃了申请卓博之后，你发现按部就班才是自己的节奏。由于对更加自洽，你各方面属性都有了提升。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "升学去向：研究生",
    "randIdice": []
  },
  {
    "id": 16,
    "title": "人才工程",
    "required": true,
    "equalRights": false,
    "category": 4,
    "mainDialog": "「人才工程」预备队选拔启动，该项目需要在读研期间担任带班辅导员，通过学生思政工作，可以极大锻炼实践能力和研究生专业的学习。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 30
    },
    "mainProp": "M",
    "prerequisites": [
      15
    ],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "报名参加人才工程，辅导员+学术max$进入免试攻读研究生流程$！",
    "endingA": [
      "你在面试中凭借丰富的学工经验和出色的应答表现，成功通过了人才工程的选拔，成为第99批预备队的一员。",
      "你虽然绩点处于前列，但人才工程项目同样看重学生工作经验，缺乏骨干锻炼导致你没有通过这次选拔。"
    ],
    "resultA": {
      "H": [
        1,
        3
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "放弃，研究生阶段一心只想做科研。",
    "endingB": "你放弃了报名人才工程，这意味着你和辅导员工作无缘。相对的，你可以把充足的时间投入在学业和学术中。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "升学去向：研究生",
    "randIdice": []
  },
  {
    "id": 17,
    "title": "免试攻读研究生",
    "required": true,
    "equalRights": false,
    "category": 3,
    "mainDialog": "大四开学，教务处发布了「保研」通知，C导通知你符合推免的基本条件，有机会通过推荐免试进入研究生阶段的学习。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 30,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "准备各项材料，向学院提交报名申请$开启研究生培养阶段$。",
    "endingA": [
      "凭借扎实的专业知识和出色的表现，你成功获得了保研资格，顺利通过的研究生推免，迈出了学术生涯的下一步。",
      "你在激烈的竞争中无奈被刷。尽管有些遗憾，但你在准备过程中进一步巩固了专业知识，提升了面试技巧，也更清楚自己的不足之处。"
    ],
    "resultA": {
      "H": [
        1,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "对深造无感，放弃保研资格。",
    "endingB": "你认为研究生不是人生的必选项，明确了更适合自己的毕业去向，这让你更加自信与自洽。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "升学去向：研究生",
    "randIdice": []
  },
  {
    "id": 18,
    "title": "研究生入学考试",
    "required": true,
    "equalRights": false,
    "category": 3,
    "mainDialog": "「研究生入学考试」报名开始，考研能让你继续深造，获得更系统的专业知识，还能为未来的职业发展增添更多竞争力。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "保不了就all in 考，3个月上岸F大不是梦$开启研究生培养阶段$。",
    "endingA": [
      "你成功考上了研究生。没有辜负过去几个月夜以继日的努力，在接下来的日子里，你在专心准备毕设的同时也该好好放松了一下～",
      "你由于时间安排不合理，最终未能考上研究生。在哪跌倒就在哪爬起，准备收拾收拾继续二战~"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "报不了一点，3个月上岸约等于活在梦里。",
    "endingB": "你把考研的三个月的时间用于秋招，丰富了自己的简历，掌握了面试技巧，谈吐和应变能力获得了长足的进步。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "升学去向：研究生",
    "randIdice": []
  },
  {
    "id": 19,
    "title": "选调生考试",
    "required": true,
    "equalRights": false,
    "category": 4,
    "mainDialog": "C导向你发送了$$「选调生考试」的通知。选调生是各省区市党委组织部门从高等院校选调毕业生到基层工作，作为党政领导干部后备人选和党政机关高素质的工作人员进行重点培养的群体。",
    "repalceDialog": [
      "S市",
      "浙省",
      "徽省",
      "福省",
      "广省",
      "河省",
      "江省",
      "山省",
      "陕省",
      "甘省"
    ],
    "repetable": false,
    "happenYear": [
      4,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 30
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": true,
    "choiceA": "报名参加选调生考试$毕业去向：选调生$。",
    "endingA": [
      "经过数月的艰苦备考，你在笔试中脱颖而出，以优异的成绩进入面试环节，顺利通过面试和考察，成功上岸，开启服务基层的新征程",
      "在选调生考试的众多环节中，你在简历筛选阶段就被淘汰了。尽管你在笔试和面试上做了充分的准备，但没有获得展示的机会。"
    ],
    "resultA": {
      "H": [
        3,
        3
      ],
      "L": [
        3,
        3
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "更想从事专业领域，不参加考试。",
    "endingB": "你仔细分析自身优势后，发现选调岗位与自身专业契合度不高。为追求专业领域深耕，你选择不参加选调考试。",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "毕业去向：选调",
    "randIdice": []
  },
  {
    "id": 20,
    "title": "大厂校招",
    "required": true,
    "equalRights": false,
    "category": 3,
    "mainDialog": "手机弹窗，收到了$$「大厂校招」的面试邀请。机会来之不易，既有优厚的待遇，还能接触到行业前沿的技术。",
    "repalceDialog": [
      "比特跳动",
      "鹅鹅",
      "华华",
      "团团",
      "吃了么",
      "拼拼多",
      "蚁蚁",
      "TTLink",
      "巴巴",
      "大米",
      "ShallowSeek"
    ],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "精心准备简历，抓住大厂赏识的机会$毕业去向：大厂就业$。",
    "endingA": [
      "凭借扎实的专业知识和出色的表现，你成功获得了大厂的Offer。入职后，你迅速融入团队，接触到前沿的技术，职业发展迅速。",
      "在激烈的竞争中未能获得头部企业的Offer。尽管有些遗憾，但你熟悉了大厂的面试压力，在一家初创企业拿到了和大厂相当的薪资。"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "选择灵活就业，放弃校招$毕业去向：灵活就业$。",
    "endingB": "大学毕业后，你成为了个体户。做自己的老板也并不轻松，你需要恶补全链条的知识。在摸爬滚打下，你逐渐发现赚钱的门路。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "毕业去向：企业",
    "randIdice": []
  },
  {
    "id": 21,
    "title": "毕设答辩",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "「毕设答辩」是学士学位申请的必要流程，也是大学四年学习的闭幕式。学科方向负责老师早早通知了答辩时间，而你需要决定你的答辩风格。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "准备答辩稿并配合PPT多次排练。",
    "endingA": [
      "你逻辑清晰、表达顺畅，顺利拿下优秀毕设，还被推荐参加校级展示！",
      "答辩中导师频频点头，你以为稳了其实专家的犀利点评才刚刚开始（不断被cue到研究不足的盲区）…但还是有惊无险通过～"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "论文在心里，全程脱稿，拿捏评审老师。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 22,
    "title": "毕业典礼",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "「毕业典礼」是离校前最后的仪式，也是你人生中闪光时刻。此刻，多年的努力和汗水终将迎来收获，你则是今天毋庸置疑的主角...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "邀请父母观摩毕业典礼。",
    "endingA": [
      "毕业季中你的好朋友、家人、同学都加入到庆祝团队，为自己精彩的校园生活画上最圆满的句号~"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "邀请父母观摩拨穗仪式。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 23,
    "title": "退宿",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "这是留在学校的最后一天，你站在宿舍门口，看着张贴的「退宿」通知，心里五味杂陈。这间住了四年的宿舍，见证了你的成长与欢笑...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "偷偷退宿，为室友留下告别贺卡。",
    "endingA": [
      "你顺利完成了退宿手续。在返程回家后，你发现了室友偷偷留下的告别的贺卡，一字一句记录着你们最难忘的四年光景。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "组织舍友聚餐，吃最后一顿散伙饭。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 24,
    "title": "宿管查寝",
    "required": false,
    "equalRights": false,
    "category": 0,
    "mainDialog": "“紧急通知，今晚「宿管查寝」”，还在做梦的你被宿舍群吵醒。完蛋，寝室现在如同猪窝，脏衣服、垃圾、快递盒、外卖剩菜，喜提最差寝室会取消所有评奖评优...",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      5,
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "收起寝室的脏衣服，提前倒好垃圾。",
    "endingA": [
      "室友们齐心协力上演“垃圾消失术”，连床底袜子都叠成艺术品！宿管阿姨当场夸奖，喜提最佳寝室。",
      "快速清理时误把室友珍藏的\"幸运袜子\"当抹布，阿姨发现后脸色铁青。与最佳寝室擦肩而过~"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "违规电器藏起来，把吹风机、电热水壶收好。",
    "endingB": "你急中生智藏好了违章电器，但是插头漏出了马脚！被眼尖的阿姨一把子发现，喜提园区违规通知。",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        -4,
        -4
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 25,
    "title": "必修课程",
    "required": false,
    "equalRights": false,
    "category": 0,
    "mainDialog": "明天早八有「必修课程」$$。又是悔恨当年选课的一天，当时为什么会觉得能起得来？最重要的是，会点名吗？",
    "repalceDialog": [
      "大学英语",
      "思想道德修养与法律基础",
      "近现代史纲要",
      "马克思主义基本原理概论",
      "计算机基础",
      "专业导论",
      "形势与政策",
      "毛泽东思想和中国特色社会主义理论体系"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "打卡一下，听说这门课经常点名。",
    "endingA": [
      "你成功起床并拿着瑞咖准时到达教室。随着课程的进行，你的睡意一扫而空，在课上做了详细的笔记，对后续的考试大有裨益。",
      "大无语事件，你在去上课的路上被交警抓到没戴头盔。不过最终还是赶上了课程的后半部分，总比没去强。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "能翘就翘，已经连续点了两次，不信还点。",
    "endingB": "家人们，墨菲定律（流汗黄豆，就这节课又点名了，你失去了平时分。",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        -4,
        -4
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 26,
    "title": "通识课程",
    "required": false,
    "equalRights": false,
    "category": 0,
    "mainDialog": "F大有丰富多样的「通识课程」，帮助学生培养综合能力。你和室友小G都抢到了下午的$$，但TA猪瘾大发，想拿一顿晚饭让你代签...",
    "repalceDialog": [
      "人类进化",
      "简明法医学",
      "初级数码钢琴",
      "陶艺",
      "素描",
      "陶艺",
      "宋词导读"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": true,
    "choiceA": "拒绝室友的代签请求，泥菩萨过河自身难保。",
    "endingA": [
      "由于来的人太少，你顺利完成自己签到，室友表示理解，后续你认真听课，最终取得平时成绩满分的成绩。",
      "室友觉得你不是个好兄弟，寝室关系陷入冰点，但课上出现代签被发现，室友知错并在未来改正。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "人好话不多，帮室友带签～",
    "endingB": "你想的有点美，其实教室里还有三个便衣助教...被助教当场抓包，你和室友的平时分一起连坐。",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        -4,
        -4
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 27,
    "title": "期末考试",
    "required": false,
    "equalRights": false,
    "category": 0,
    "mainDialog": "三教久留，看着「期末考试」的复习PPT发呆，心里紧张又焦虑。明天的考试关系到绩点、奖学金...但$$进度是33%。按部就班or尝试“非常规”手段...",
    "repalceDialog": [
      "必修一",
      "必修二",
      "必修三",
      "必修四",
      "必修五",
      "必修六",
      "必修七",
      "必修八"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "制定详细的复习计划，按步骤完成复习任务。",
    "endingA": [
      "你制定了严格的复习计划，开始“三教久留”，全身心地投入到复习中。考试时，你沉着冷静，发挥稳定，喜提全A。",
      "你按照计划认真复习，但时间终究是不够用，最终，你的成绩虽然没有达到预期的优秀，但也全部拿到了B以上。"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "在考试时拿出了珍藏的纸条和小抄。",
    "endingB": "游戏结束！F大的学习生活最重要的是诚信，你在考试被监考老师当场发现，教务取消了你的学位证资格！",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "毕业去向：退学",
    "randIdice": []
  },
  {
    "id": 28,
    "title": "课程Pre",
    "required": false,
    "equalRights": true,
    "category": 0,
    "mainDialog": "精读课要求每个人都要做「课程Pre」！？没看错，是每个人！",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "选择难度高、完成率低的项目进行报告。",
    "endingA": [
      "你深入研究了课题，做了充分的准备。汇报时，你清晰地阐述了自己的观点，并且精彩的进行QA。老师对你的表现给予了高度评价。",
      "虽然你用心准备了汇报内容，但是由于紧张，听众没有Get到你的Topic，但是老师还是夸赞你的用心。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "选择难度中等、均分中上的项目进行报告。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 29,
    "title": "小组作业",
    "required": false,
    "equalRights": true,
    "category": 0,
    "mainDialog": "课程发布「小组作业」。微信群已炸锅：不摆不卷1=n；pnp组2=2...可以大显身手，和同学一起“搞事情”。不过，貌似没人当组长？",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "毛遂自荐做组长，大包大揽组里的脏活累活。",
    "endingA": [
      "小组作业进行得出奇顺利。每次小组讨论，你都能把大家的意见整合起来，提出超棒的点子。最终，所有组员拿到了A。",
      "然而，事情并没有想象中那么顺利。小组里有个同学总是拖拖拉拉，进度严重滞后，你不得不反复催促，小组总成绩只拿到了B。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "没有做组长的野心，全力完成自己的部分。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 30,
    "title": "课程报告",
    "required": false,
    "equalRights": false,
    "category": 0,
    "mainDialog": "「课程报告」后天是ddl，目前只完成了初步调研，今天再官微看到了新的AI大模型ShalloSeek，可以快速生成内容，前提是助教不进行AIGC查重...",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": true,
    "choiceA": "独立完成，不想冒剽窃风险。",
    "endingA": [
      "你咬牙自己完成了论文。虽然过程艰辛，但你通过熬夜完成了所有调研和写作，提交了一份完全原创的论文。",
      "因为时间太紧，你最终还是没能赶上DDL写完。只完成了部分章节，剩下的只能在考试后补交。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "使用AI工具，看看能不能加快进度。",
    "endingB": "一物降一物，随着大模型的崛起，F大也在课程结项中引入了AIGC，你的检测结果是：85%？ 任课老师要求你重写报告并警告。",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        -4,
        -4
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 31,
    "title": "优秀大学生夏令营",
    "required": false,
    "equalRights": false,
    "category": 0,
    "mainDialog": "大四前的暑假，各高校陆续发布了「夏令营」的通知，这是保研的重要途径。求学多年，一直对$$大学心驰神往，但申请条件严格，需要GPA排名靠前、英语六级通过等...",
    "repalceDialog": [
      "华清",
      "京北",
      "大科院",
      "SH交",
      "XA交",
      "哈哈滨",
      "京南",
      "江浙"
    ],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 20,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "报名参加夏令营，争取优秀营员！",
    "endingA": [
      "你提交了简历后，喜提夏令营入营资格，并在面试环节顺利通过考核，成功拿到了优秀营员！",
      "你虽然进入了夏令营，但奔走于多个学校，导致准备不充分以及在面试中出现小失误，最终没有拿到优秀营员"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "估计没有保研资格，把时间用来准备考研。",
    "endingB": "你在暑假系统复习了专业课，这些课程在保研和考研都是重点考察对象，因此你对专业的体系已经了熟于心。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 32,
    "title": "毕业红毯",
    "required": false,
    "equalRights": true,
    "category": 0,
    "mainDialog": "「毕业红毯」投票终于来了！作为大学生涯的闪亮时刻，已经迫不及待要穿上精心准备的战袍，拉满时髦值，水灵灵的走上红毯拍照～",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 30,
      "C": 30,
      "M": 30
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "在各大班群拉票。",
    "endingA": [
      "你凭借惊人的票数入选红毯，走完红毯，朋友圈刷屏，大家都在评论“[美，帅]爆了！”",
      "你成功入选红毯，华丽的礼服让你吸引了所有目光，但走到一半时不小心绊了一下，差点一个大摔倒！好在及时调整，完美补救。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "在KiliKili弹幕网发视频拉票。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 33,
    "title": "志愿服务",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "A教公告栏张贴着「志愿服务」海报：社区助老辅导班，垃圾分类宣传岗...招募四折页写着：“参加$$志愿服务！收获满满感动，还有志愿服务时长！”",
    "repalceDialog": [
      "手机进社区",
      "S市图书馆",
      "爱心义卖",
      "证件照拍摄",
      "环保科普",
      "垃圾分类",
      "电脑义诊",
      "社区助老",
      "S市马拉松",
      "反诈宣传"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "报名志愿服务线下点位负责人。",
    "endingA": [
      "凭借“摄影+海报制作”的双技能组合技，你成功击败对手！被选为志愿活动负责人，活动推进异常顺利！",
      "你想报名成为线下点位负责人，但竞争者全是班长、学生会骨干，遗憾技不如人，无奈落选成为普通志愿者..."
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "参与活动线上设计宣发。",
    "endingB": "线上一样能出力~凭借着你的设计稿，本次志愿活动宣发取得了不错的反响！",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 34,
    "title": "社会实践",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "「F大实践」公众号推送：“社会实践报名开始！！” 厚密转来$$立项书，立项重点项目难度更大，但有更多经费支持和宣发端口！",
    "repalceDialog": [
      "​乡村振兴产业赋能调研",
      "红色文化基因传承实践",
      "社区垃圾分类志愿行动",
      "非遗技艺活化创新研究",
      "特殊群体数字反哺服务",
      "智慧农业技术推广实践",
      "基层治理现代化观察",
      "青少年心理健康护航计划"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "冲击全校重点项目评级。",
    "endingA": [
      "恭喜你成功获评校级重点实践A类！通过这次实践，你丰富了经历，还结交了一群志同道合的朋友。",
      "很遗憾，你没有成功获评重点项目。不过，你并没有因此气馁，你相信常规项目只要用心一样能开花结果。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "报名常规（一般）项目。",
    "endingB": "你成功获得立项常规项目，虽然资助金额较少，但学院团委自掏腰包给予你支持，你的活动登上学院公众号。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 35,
    "title": "校园献血",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "校医院通知：「无偿献血」，传递爱心。想为社会做贡献，这是简单直接机会。回忆一下最近作息有无不规律，",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      5,
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "勇敢参与献血，贡献一份爱心！",
    "endingA": [
      "你顺利完成了献血。在献血过程中，虽然有些紧张，但你感受到了自己的价值，还收到了献血证和小纪念品，心里暖暖的。",
      "你在采血前的测试显示转氨酶过高！原因是熬了太多大夜。遗憾无法献血，所以你决定未来要调整作息，早睡早起。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "晕血，晕针，献爱心有更多方式。",
    "endingB": "由于晕血晕针你没有参与献血。你通过自己的方式，游说全班同学去献血，结果献血率高达90%，工作人员大为震撼。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 36,
    "title": "升旗仪式",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "百廿弦歌激荡云霄，F大学生会组织每周「升旗仪式」院系接力活动，让情怀与使命在同学间传递。本周你收到了邀请函，需着装正式参与下周一的升旗活动。",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      5,
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "参与到升旗仪式学生组织队伍中。",
    "endingA": [
      "凭借出色的组织能力和临场应变，你击败多位对手成为升旗活动负责人！仪式当天，你精准调度彩排、仪仗队入场和国旗下演讲，尽显风采。",
      "你满怀信心参与竞选，无奈院系老师更倾向于亲力亲为，变成辅导员自己组织活动，你遗憾落选..."
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "仅报名参与升旗仪式观众。",
    "endingB": "在升旗过程中，你跟着节奏唱国歌，向国旗行注目礼。看着五星红旗缓缓升起，胸前的红领巾更鲜艳了～（好像没带红领巾",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 37,
    "title": "节日策划",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "$$即将到来，C导邀请你参与F大节日限定活动的「策划和组织」工作，这是锻炼创意和管理能力的好机会！",
    "repalceDialog": [
      "元旦",
      "元宵节",
      "重阳节",
      "中秋节",
      "清明节",
      "妇女节",
      "国庆节",
      "劳动节",
      "植树节",
      "春节",
      "青年节",
      "儿童节"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "作为活动策划人，贯穿设计、策划、执行！",
    "endingA": [
      "活动举办的很顺利。活动当天，你和同学们一起布置场地、引导参与者，整个活动氛围温馨而热闹。",
      "你由于第一次策划活动经验不足，现场突发状况频发，好在顺利结束，通过本次活动学习到了许多经验。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "放弃主导权，作为骨干完成条线工作。",
    "endingB": "有时候，不是所有工作都需要成为最核心的人。你作为学生骨干，在雨天坚守在岗位上，在活动现场收到了师生真心的感谢。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 38,
    "title": "红色寻访",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "F大正在筹备“红色小巴”，计划前往S市的$$开展「红色寻访」。活动旨在通过实地寻访红色足迹，深入了解党在不同历史时期的奋斗历程...",
    "repalceDialog": [
      "革命纪念馆",
      "党群服务中心",
      "纪念雕塑群",
      "烈士陵园",
      "F大校史馆",
      "国歌纪念馆",
      "名人志士故居",
      "红色故事展示馆",
      "主题教育馆",
      "红色教育基地"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "参选大巴讲解员，讲述红色故事。",
    "endingA": [
      "你将红色场馆的革命故事与音视频频资料完美结合，用沉浸式讲述让同学们仿佛“听见”了名人志士的慷慨陈词！现场掌声雷动。",
      "讲解到名人志士篇章时，你突然卡在了著名烈士的牺牲年份上！冷场三秒后，你用社会时政紧急救场，但还是有些尴尬。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "跟着大巴一同前往。",
    "endingB": "通过讲解员的生动讲解，你仿佛回到了那个波澜壮阔的年代，深刻感受到革命先辈的伟大精神，坚定了自己的爱国信念。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 39,
    "title": "基层调研",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "T小区策划了「基层调研」金点子活动，旨在收集居民意见以改善社区环境和服务，本期主题是$$调研。这是一次深入了解基层社区的机会，也能为简历的实践经历增添亮点。",
    "repalceDialog": [
      "​社区公共设施满意度",
      "居民安全诉求",
      "社区文化活动需求",
      "环境卫生治理痛点",
      "​邻里互助服务现状",
      "老龄群体生活难题",
      "社区交通优化建议",
      "​智慧社区建设期待"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "带着项目参选S市城市治理金点子大赛。",
    "endingA": [
      "调研过程中，你积极与社区居民沟通，收集了许多有价值的意见和建议，为社区改善服务提供了重要参考，荣获金点子大赛一等奖。",
      "在实际操作中，由于学习任务繁重，调研进度受到影响。虽在金点子大赛中落选，但还是顺利的完成了社区项目结项。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "完成调研报告书，交付给基层党组织。",
    "endingB": "调研过程中，你积极与社区居民沟通，收集了许多有价值的意见和建议，为社区改善服务提供了重要参考。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 40,
    "title": "科普宣讲团",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "B院系分团委组建了$$「科普宣讲团」，去S社区给小朋友进行专业相关的科普宣讲。你看到了相关推送，目前正紧缺讲师和运营团队成员。",
    "repalceDialog": [
      "AI+",
      "反诈",
      "医疗常识",
      "学前教育",
      "金融知识",
      "大气海洋",
      "考古知识",
      "中华历史",
      "世界地理",
      "化学基础"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "加入宣讲团讲师队伍。",
    "endingA": [
      "在课上，小朋友们十分活跃的参与互动，也提出了很多新颖的想法，对你也颇有启发。",
      "新的宣讲课程第一次试讲，精心准备的内容过于“专业”了，小朋友们似乎不太能听懂，大约记住了几个专业术语。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "加入宣讲团运营队伍。",
    "endingB": "你加入了讲师团运营队伍的课程预约组，负责课程的发布、预约以及讲师安排。有了你的保驾护航，宣讲团的工作开展变得顺利无比~",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 41,
    "title": "青年F大学校",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "C导发布了「青年F大学校」的报名通知。本项目选拔优秀的青年骨干，通过完成为期一年的实践参访、挂职锻炼等培养流程，旨在提高学生的领导力。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 30,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 30
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "报名，争取拿到推荐名额。",
    "endingA": [
      "凭借在学生组织的亮眼表现，你脱颖而出！挂职锻炼时，你被分配到校史馆参与主题周策划，成功将AI技术引入展览，吸引全校师生打卡。",
      "面试时你因紧张将「挂职锻炼」说成「挂机锻炼」，评委当场黑人问号。尽管你曾经的工作表现不错，但最终名额被其他人拿下。"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "为大四保研备战，暂不报名。",
    "endingB": "你投入了更多的时间和精力在学习上，成绩有所提高。但是看到入选同学的票圈，偶尔还是会有点羡慕。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 42,
    "title": "笃行计划",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "「笃行计划」报名正式开始。这是F大青年志愿者骨干培养班、以志愿服务为核心的实践育人平台，旨在培养爱国荣校的青年志愿者骨干与后备人才。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3
    ],
    "requireProps": {
      "H": 30,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 30
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "报名，争取拿到推荐名额。",
    "endingA": [
      "凭借你在先前活动中的出色表现和志愿服务时长的积累，成功入选！你策划了AI+专题志愿服务，被“青春S市”官位头条报道！",
      "你决定报名争取推荐名额，竞争者多是校内志愿服务时长排名前5%的大佬。你的志愿时常近排名前30%，遗憾落选。"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "为大四保研备战，暂不报名。",
    "endingB": "你在大三选择注重学院似乎是正确的选择，本学期绩点提升明显。但是看到笃信计划的活动展示，偶尔还是会有点遗憾。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 43,
    "title": "研支团",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "「研支团」开放报名。这是中国共青团中央、教育部联合组织实施的一项青年志愿者扶贫接力计划，选拔优秀应届本科毕业生，到中西部贫困地区中小学开展为期1年的支教服务。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 30,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 30
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "报名，争取拿到推荐名额。",
    "endingA": [
      "凭借优秀的履历和面试的真诚表达，你脱颖而出！在支教期间，你组织了「山外书信」活动，为孩子们募集了上千本课外读物。",
      "经过进一步的深入了解，工作组和你都觉得自己可能不是很适合这条路，最终你们没有选择双向奔赴。"
    ],
    "resultA": {
      "H": [
        1,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "身体条件不允许，暂不报名。",
    "endingB": "支教是光荣但艰苦的工作，这不一定适合每个人。虽然并未报名，你还是心系山区，赠送了书籍物资，获得了大山孩子的感谢信。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "升学去向：研究生",
    "randIdice": []
  },
  {
    "id": 44,
    "title": "百团大战",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「百团大战」火热来袭！社团各显风采，学长学姐热情邀请：同学，来我们$$吧，这里的人个个是人才，说话又好听！” ",
    "repalceDialog": [
      "尤克里里社",
      "茶艺社",
      "汉服协会",
      "骑行社",
      "创客社",
      "支教社团",
      "书画协会",
      "生涯发展协会",
      "乒乓球协会",
      "足球协会",
      "篮球协会",
      "舞蹈团",
      "电影协会",
      "相声社",
      "小品社团",
      "AI科学协会",
      "魔术社团",
      "演讲协会",
      "科普讲师团"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你热情活泼，受到了很多社长的邀请，在社团中甚至大方异彩，未来成为了新任社长。",
      "你成为了社团的一员，并参与日常组织的活动，其中有二次元还有三次元，这份经历成为了你的宝贵记忆。",
      "你挑挑拣拣，在决定报名时社团已经招满，无奈空手而归，离开了百团大战。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 45,
    "title": "院系杯",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「院系杯」强势来袭。在众多项目中，你锁定了$$。YYSY，自己还算有点技术，这次可以一把子代表全院竞争F大第一...",
    "repalceDialog": [
      "篮球",
      "足球",
      "排球",
      "羽毛球",
      "乒乓球",
      "网球"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      5,
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "Pick 1",
    "endingA": [
      "你领衔院队在决赛上演惊险逆转！最后关头完成翻盘，全场沸腾！赛后你当选MVP，学院获得总冠军。",
      "你报名参赛后，积极备战，顺利闯入半决赛，但最终不敌上届冠军止步四强。尽管未能夺冠，但学院获得团体季军。",
      "你在院系杯初赛就因紧张连续失误，葬送好局，最终惨败出局。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 46,
    "title": "书院杯",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「书院杯」如约而至，自己苦练的技术终于有了用武之地，$$仍有余量，不由得摩拳擦掌！",
    "repalceDialog": [
      "篮球超级联赛",
      "校园啦啦操大赛",
      "师生羽毛球赛",
      "师生乒乓球赛",
      "排球赛"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "经过层层选拔，你成功当选为书院队队长，凭借着碾压的个人能力，成功带队帮助书院斩获冠军。",
      "经过层层选拔，你成功当选为书院队替补。由于队内大佬居多，你偶尔替补上场，也能跟着大部队混到前五。",
      "在预选赛上，你的体能着实太差，替补都没给你。但是！书院队的拉拉队正在招人，男女不限，你被强行拉去做了拉拉队长。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 47,
    "title": "民族体育趣味运动会",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「民族体育趣味运动会」终于提上日程，都是门槛低、民族特色强的趣味项目。其中，$$深得本人心水。",
    "repalceDialog": [
      "射箭",
      "顶翁竞走",
      "滚铁环",
      "板鞋竞速",
      "抛绣球",
      "旱地龙舟",
      "扳棍赛",
      "投壶"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "活动当天，民族游戏生动有趣。有对比才有伤害，其他队伍狗屎运作祟，而你的队伍的失误寥寥，因此轻松拿下冠军。",
      "活动紧张有趣，比你想象的要轻松不少。但队伍里有一个打酱油的，一直拖后腿，后来知道他吃坏肚子了，只能含泪拿下第五。",
      "你当天疲于赶路，在路上不小心弄掉了隐形眼镜，只能“跟着感觉走”，在项目中“假装自己很忙”，累计获得0分。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 48,
    "title": "城市定向",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "P社组织了「城市定向」活动，以小组为单位，在S市中探索未知地点，本期路线为$$。既然选择刺激，那就贯彻到底了！",
    "repalceDialog": [
      "A区至K区",
      "B区至I区",
      "E区至L区",
      "Q区至O区",
      "X区至Z区",
      "W区环线",
      "Y区环线",
      "Z区环线"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "一路上，你和队友们穿梭在城市的各个角落，过程中遇到了一些小困难，但大家齐心协力，最终顺利在前三名完成了定向。",
      "你的队友在中途因为体力不支拖慢了节奏，但是最终还是凭借着毅力，拿到了“签到奖”。",
      "你作为一个“地理盲”，居然负责路线规划，拿着看不懂地图，最终没能在预定时间完成任务。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 49,
    "title": "话剧演出",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "Y剧院进校园！备受好评的话剧$$简直让我心痒痒！实力派演员+剧本题材+人性刻画，完全是我的菜～",
    "repalceDialog": [
      "替身迷局",
      "暗涌之城",
      "逆光时刻",
      "谎言之茧",
      "双生残卷",
      "雾锁重楼",
      "午夜回廊",
      "无声告别"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "演出当天，你提前到达剧院，剧院里浓厚的艺术氛围，深深吸引了你，演出结束后，你感到非常满足，从剧中获得了许多关于人性的思考。",
      "你在演出开始后，才觉得自己原来不喜欢话剧这个形式，在座位上坐的快要睡着了，比高数课还催眠。",
      "大热剧场进校园，1s不到门票就被抢完了，其中的幸运儿没有你，遗憾与本场话剧失之交臂。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 50,
    "title": "演唱会",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "$$即将在S市举办的大型演唱会。啊啊啊啊啊，作为死忠粉必须要去抢票支持！",
    "repalceDialog": [
      "水果姐",
      "雷霆佳佳",
      "娅娅",
      "小程序",
      "插排姐",
      "霉霉",
      "牛姐",
      "麦姐",
      "布兰姐",
      "碧昂姐"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你使用了筋膜枪，顺利买到了票！演唱会当天，现场气氛超燃，你跟着音乐尽情欢呼呐喊，度过了一个超嗨的夜晚。",
      "出票后，你发现位置一般（天知道被音响挡住了半个屏幕？虽然看到了喜欢的明星，但心里好像也没有那么高兴了。",
      "买到票后，当天因为狂风大作而遗憾取消。你只能到某鱼蹲一下下周的场次，每一个余票下面都有100+的“我想要”。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 51,
    "title": "日常旅游",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "在「第18食堂」，听到同学在讨论「旅游计划」，出去走走可以缓解学业压力。搜了下大红书攻略，你对$$很感兴趣...",
    "repalceDialog": [
      "苏市",
      "杭市",
      "京市",
      "广市",
      "厦市",
      "贵市",
      "昆市",
      "海市",
      "合市",
      "天市",
      "西市",
      "湖市",
      "呼市",
      "拉市"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你顺利规划好行程顺利启程，一路上遇到了很多有趣的人和事。这趟旅程不仅让你放松了身心，还降低了学业压力带来的Sad值。",
      "刚好赶上假期，景区真是人挤人挤人，你的第一次大学旅行体验一般，发誓再也不赶着节假日出门。",
      "由于学院里零时有事安排，与旅行时间冲突，无奈取消行程，只能下次再做打算。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 52,
    "title": "新生杯",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「新生杯」系列赛事如火如荼，主打应有尽有。作为一个练习时长两月半的大学生，你看到了最擅长的$$的报名链接。",
    "repalceDialog": [
      "羽毛球",
      "篮球",
      "排球",
      "乒乓球",
      "足球",
      "网球"
    ],
    "repetable": false,
    "happenYear": [
      1,
      5
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "Pick 1",
    "endingA": [
      "你从预赛打到决赛。决赛当天，团队发挥出色，配合默契，斩获新生杯第一。后来你被校队选中，成为了校队队员。",
      "你在组队时遭遇连环鸽子！惊呼F大新生怎么都这样，临近报名结束前硬是凑出来一个草台班子...结果打到半决赛，拿到季军！",
      "你预赛前在华华楼前崴了脚，因此退出了新生杯。但运气守恒，你发现了现场工作人员的招募推送，成为了一名记分员～"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 53,
    "title": "大师剧",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "多场「大师剧」在校内热播，这些剧目由不同院系单位打造，深受大家好评。本学期的节目单中有大师剧：$$...",
    "repalceDialog": [
      "谢希德",
      "蒋学模",
      "陈灏珠",
      "陈望道",
      "苏步青",
      "颜福庆"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你参加了大师剧的一场线下演出。由于长相过于出众，作为观众的你被导演一眼相中，立即试镜通过成为了下一个大师剧的主角。",
      "你拿到了大师剧入场券。在观看演出后，你更了解了F大的历史，并立即撰写了观后感，随后被剧组导演转发！",
      "你选择的大师剧居然是首映，全F大只有30张公开票，分配到系里的只有1张。排队的同学又超过500人，你不是那0.2%。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 54,
    "title": "129歌会",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "太好了，是「129歌会」，我们有救了！本歌会是为了纪念“一二·九”运动，今年的主题是“百廿校庆”！摆在你面前的招募信息有$$。",
    "repalceDialog": [
      "声乐组",
      "现场指挥",
      "钢琴演奏",
      "伴唱",
      "舞美组",
      "人行立板-一朵花",
      "服装道具组"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你偶然在彩排哼了两句，被总导演发现吊打所有人！抽调你去做领唱。现场高音落下时，评委席惊呼你是玛丽亚凯莉，打出最高分！",
      "在演唱队员和工作人员的努力下，本次设计的合唱打破了院系有史以来的最好成绩。完成了从未入围到第四名的突破！",
      "由于院系招募合唱队遇到巨大困难——50人仅报名了15人，因此放弃了本次一二九歌会的参赛资格。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 55,
    "title": "微短剧大赛",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "“团团在F大”又发新消息了！「新青年短剧」！值此百廿华诞，本期主题为“看见·未来F大”。本次大赛以舞台剧为主要表现形式，展现对2035年教育强国的畅想。本次招募组别有$$...",
    "repalceDialog": [
      "摄影组",
      "道具组",
      "机动组",
      "演员组",
      "剧本组"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你加入了剧组，虽然累得像条狗，但看到打磨出的短剧越来越成熟，成就感爆棚。最终，短剧凭借奢华的灯光，取得了校级金奖。",
      "你成功加入剧组。尽管短剧顺利完成，但隔壁组带来了黑科技AR眼镜，用虚拟现实吸引了在场所有人。你们只拿到了校级银奖。",
      "大无语事件，一位主演临时撂挑子，在演出前一周出国离开了剧组。因此，你们的剧组被解散了，所有人拉黑了TA！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 56,
    "title": "十大歌手",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "去「第77食堂」的路上，「十大歌手」的海报映入眼帘。你本来琢磨晚饭是“超级豪华版”烤鸭套餐，还是挑战“火龙果草莓炒芹菜”，思绪被瞬间打乱，十大歌手？你的$$，说不定在这儿一战成名！",
    "repalceDialog": [
      "唱",
      "跳",
      "rap"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你决赛凭借串烧《背带裤》杀疯！情感张力直击人心，现场还请到了练习生联动，最终以最高分斩获「十大歌手」冠军！",
      "你意外出现小插曲——伴奏卡顿，但迅速调整好状态，用清唱挽救。尽管运气欠佳，但瑕不掩瑜，获得了季军的好成绩。",
      "在初赛前，你还是贪吃点了“火龙果草莓炒芹菜”！第二天嗓子发炎，大呼“宝娟”“宝娟”！遗憾止步于初赛。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 57,
    "title": "荣誉课",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "荣誉课的学分和A+诱惑力MAX！But要和卷王同台竞技...回忆起上学期被专业课支配的恐惧。搏一搏单车变摩托，最差也就是和图书馆长相厮守！",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "斗胆报名荣誉课，冲一下绩点。",
    "endingA": [
      "你选上了荣誉课。上课后，你发现课程确实比普通课难度大，但你抓紧跟上，逐渐适应了荣誉课的节奏，期末拿到了A+！",
      "你选上了荣誉课。上课后，你发现课程确实比普通课难度大，你完全跟不上进度，在中退课时间段内果断换回了普通课！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "拜拜，非荣誉课都学不懂。",
    "endingB": "你放弃了申请荣誉课，专注于普通课程的学习。你意识到，无论选择哪种课程，都需要付出努力才能取得好成绩。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 58,
    "title": "学科竞赛",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "逐渐摸到“科研门路”，正想拿什么「学科竞赛」练手，$$的消息炸响！",
    "repalceDialog": [
      "大学生数学建模竞赛",
      "互联网+创新创业大赛",
      "挑战杯科技学术竞赛",
      "ACM程序设计竞赛",
      "国才杯英语演讲大赛",
      "创青春青年创新创业大赛",
      "中美青年创客大赛",
      "大学生英语竞赛",
      "大学生职业规划大赛"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "作为队长，组队策划拿下这次竞赛。",
    "endingA": [
      "经过几轮激烈的初赛，你的队伍凭借着扎实的理论基础和出色的团队协作，一路过关斩将。最终斩获了全国一等奖！！",
      "初赛的结果给了你当头一棒 :( 虽然没能入围决赛，但仔细复盘后，你们发现这次失败也并非没有收获。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "隔壁的大神还缺一个位置，美美进入大神队伍。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 59,
    "title": "出国交换",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "国际合作与交流处发布了「出国交换」项目，涵盖多个国家和地区的顶尖高校。不仅体验海外学习生活，还可以提升语言和跨文化交流能力。你看到了心驰神往的$$大学...",
    "repalceDialog": [
      "羊津",
      "拆桥",
      "TIM",
      "减州",
      "佛佛",
      "福斯坦",
      "耶耶",
      "宾东法尼亚",
      "北西"
    ],
    "repetable": true,
    "happenYear": [
      2,
      3,
      5,
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 20,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [
      64
    ],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "报名，抓住机会拓宽国际视野。",
    "endingA": [
      "你凭借出色的表现，成功入选并顺利前往海外学习。在国外，你体验了全新的学习模式，结识了来自不同文化背景的朋友。",
      "你在激烈的竞争中未能入选。尽管有些遗憾，但你在准备过程中提升了自己的语言水平，也更清楚自己的优势和不足。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "放弃报名，专注于本学期的课程。",
    "endingB": "你在KiliKili弹幕网站对比了F大和国外的相同课程。你意识到，F大的教学质量丝毫不弱于海外高校，高等教育阶段个人努力可能更为关键。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 60,
    "title": "公司实习",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "该找份「公司实习」了！？大学生活过半，再不换成点“实战经验”，毕业怕是要被社会狠狠“教育”。$$的广告在Boss直招被置顶，毫无经验的你会不会在公司闯祸...",
    "repalceDialog": [
      "比特跳动",
      "鹅鹅",
      "华华",
      "团团",
      "吃了么",
      "拼拼多",
      "蚁蚁",
      "TTLink",
      "巴巴",
      "大米",
      "ShallowSeek"
    ],
    "repetable": true,
    "happenYear": [
      3,
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "在Boss直招选择最心水的公司。",
    "endingA": [
      "功夫不负有心人，你在群面、技术面、hr面轮番轰炸后，顺利通过了面试，成功拿到了心仪的实习Offer！",
      "面试的时候，你紧张得舌头打结，自我介绍都磕磕巴巴。结果，不出所料，自己成为了HR的分母指标。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "海王战术，继续在Boss直招网上投递n个简历。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 61,
    "title": "卓越杯",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "在“走进实验室” 活动中提到了 「卓越杯」科创大赛。L老师居然送来一封邀请，小白瑟瑟发抖...能亲手摸设备、体验科研生活，这机会有点香！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 20,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "绝佳的抱大腿机会！报名参加！",
    "endingA": [
      "你和团队成员们一起努力，在各个院系的队伍中一路过关斩将，拿下了F大卓越杯国赛一等奖！",
      "你的团队在校赛中展示了项目，但遗憾止步于决赛。老师在点评时指出，你的课题在目前工业界已经有了性能更好的上位品。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "由于害怕拖后腿而没有参赛。",
    "endingB": "你没有参加卓越杯，但狠狠的恶补了科创基础技能。在这段时间里，你掌握了数据处理软件SPSS和绘图软件OriginPro，技能点++。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 62,
    "title": "复芏计划",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "「复芏计划（FDUROP）」立项开始！FDUROP即本科生学术研究资助计划，旨在资助学有余力的本科生开展课外学术实践。C导列出了一堆正在招募的项目以及导师的联系方式...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2,
      3,
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "抢研究感兴趣的课题，填写申报表。",
    "endingA": [
      "几周后，FDUROP的立项结果出来了，你成功入围了！最终成果在校内展示会上获得了好评，还收到了F大次条的报道。",
      "几周后，FDUROP的立项结果出来了，你发现自己的名字并没有出现。虽然有点失落，但你很快调整了idea投递了大学生创业项目。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "知道自己几斤几两，先好好完成学业。",
    "endingB": "你对自己的能力评估很准确，本学年课程数量多、压力大、考试难，拿不出时间搞科创！你把心思花在课程上，绩点蹭蹭上涨！",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 63,
    "title": "计算机二级",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "「计算机二级」包括计算机语言与基础程序设计能力、办公软件高级应用能力！“打字快过闪电”不一定管用？Excel函数比摩斯密码还难懂！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      3,
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 20,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "报名程序设计（C/C++等）或数据库设计（MySQL等）。",
    "endingA": [
      "你基础扎实，考试试题仅用90分钟便全部完成，一次性通过所有测试点！顺利通过计算机二级，成绩为“优秀”。",
      "你因第一次参与计算机考试、慌不择路，单选看不懂、操作题写不出。成绩公布时显示“不及格”！"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "报名办公自动化（MS/WPS Office）。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 64,
    "title": "托福雅思",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "如果想出国交流，$$是必须跨越的第一道门槛。阅读、口语、听力、写作四座大山，词汇量、模版都至关重要。考一次费用不低， 交了钱就要认真准备...",
    "repalceDialog": [
      "托福",
      "雅思"
    ],
    "repetable": false,
    "happenYear": [
      2,
      3,
      5,
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 20,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "按听力->口语->阅读->写作的顺序备考。",
    "endingA": [
      "你在考试中的复习战略完全正确，高分通过，让新西方的导师都自愧不如，接下来的日子你更加关注出国的流程。",
      "你复习的策略和考题难度完全不match，没能达到目标分数。钱包空空，痛定思痛，决定下次准备充分再战。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "按写作->阅读->阅读->听力的顺序备考。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 65,
    "title": "出国读研",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "打开学邮时心跳漏了一拍——$$这所梦校的offer居然静静躺在收件箱里！国际化视野、顶尖学术资源，这些闪闪发光的机遇近在咫尺。",
    "repalceDialog": [
      "羊津",
      "拆桥",
      "TIM",
      "减州",
      "佛佛",
      "福斯坦",
      "耶耶",
      "宾东法尼亚",
      "北西"
    ],
    "repetable": false,
    "happenYear": [
      4
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 20,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [
      64
    ],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "家庭条件可以支持出国，接受OFFER。",
    "endingA": [
      "功夫不负有心人，你顺利获得了海外大学的录取通知书，这意味着你未来的研究生生涯将接受更加国际化的教育。",
      "很遗憾，留学的赛道竞争越来越激烈，你的Offer变成了非全额奖学金，于是你选择了放弃出国。"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "再看一看秋招或者其他学校。",
    "endingB": "国内也有不错的选择，你决定在仔细看看秋招和国内高校再做打算。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "毕业去向：出国",
    "randIdice": []
  },
  {
    "id": 66,
    "title": "教师资格证",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "「教师资格考试」报名通道开了！这是评价是否具备从事教师职业所必需的教育教学基本素质和能力的全国统一考试，室友小g已经开始背《综合素质》了！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 20,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "在KiliKili刷了大量视频和考试教程。",
    "endingA": [
      "你以完备的策略上岸教资考试，可能也归功于咖啡，考试状态超神，拿证的那一刻感觉拿到了教室职业入场券！",
      "你通过了笔试，但高估了自己的表达能力，面试里脑子跟不上嘴的速度，在结构化问答中拉了个大的。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "拒绝看课，以大红书和红笔教材为核心。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 67,
    "title": "五月评优",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "「五月评优」是一项重要的校级荣誉，将评选优秀团员、优秀团干部，该评选将综合考量学生的学术能力、学生工作、学业成绩等多维度素质。",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      2,
      3,
      4,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 20,
      "C": 20,
      "M": 20
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": true,
    "choiceA": "提交五月评优申请表。",
    "endingA": [
      "你踩了狗屎运，这次报名的人数巨少！有多少？居然是等额选举！最终，你成功当选为优秀共青团干部。",
      "你提交了申请，谁知道班里报了22个人却只有4个名额！最终，你含泪没有评上优秀团员。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 68,
    "title": "十月评优",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "「十月评优」是一项重要的校级荣誉，将评选优秀学生、优秀学生干部，该评选将综合考量学生的学术能力、学生工作、学业成绩等多维度素质。",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      2,
      3,
      4,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 20,
      "C": 20,
      "M": 20
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": true,
    "choiceA": "提交十月评优申请表。",
    "endingA": [
      "经过层层筛选，你凭借优秀的学工、学术和实践综合分数，在十月评优中评为优秀学生！",
      "由于上一年申请的人太少，造成了申请人>名额的惨案！导致这学期想捡漏的人数成倍上升，酿成了更大的惨案！你没有选上～"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 69,
    "title": "年度标兵",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "「年度标兵」竞选是F大每年最为重要的学生评优之一，该评选会在优秀学生和优秀学生干部中各选树出十个年度典型，这份荣誉也代表着巨大的难度！",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      3,
      4,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 30,
      "C": 30,
      "M": 30
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": true,
    "choiceA": "提交年度标兵申请表。",
    "endingA": [
      "提交申请表后，F大团委对申请人做了严格的筛选。尽管答辩现场八仙过海，但你不遑多让！最终成功获评年度标兵。",
      "了解到山外有山，人外有人，你最终还是棋差一招，与年度标兵失之交臂，简历筛选甚至都没通过，止步于答辩。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 70,
    "title": "国家奖学金",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "全国/S市「奖学金」通知已发布，这两个奖学金无人不知。绩点OK，课外活动OK，学科竞赛OK；但你不知道，别人是不是OK...",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      2,
      3,
      4,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 30,
      "C": 30,
      "M": 30
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": true,
    "choiceA": "提交国家奖学金评优申请表。",
    "endingA": [
      "你把上一学年获得的奖项、参与的项目、学生活动经历整理成一份超过的三十页申请材料。最终，成功获得了国家奖学金！",
      "算分中科研成果的分数占比过高，即便你有不错的绩点和学生工作，但也因为论文数量不够，没有获得国家奖学金和S市奖学金。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 71,
    "title": "校级奖学金",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "$$是F大设立的校级奖学金，资助人数比例较高，用以鼓励学生在校期间勤奋学习、 刻苦钻研，促进德、智、体、美、劳全面发展。",
    "repalceDialog": [
      "优秀学生奖学金-本",
      "学业奖学金-研"
    ],
    "repetable": true,
    "happenYear": [
      2,
      3,
      4,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 20,
      "C": 20,
      "M": 20
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "提交校级奖学金评优申请表。",
    "endingA": [
      "你按时提交了奖学金申报表，由于校级奖学金基本是阳光普照，因此你也获得了这份阳光，美滋滋！",
      "你按时提交了奖学金申报表，虽然校级奖学金是趋近于阳光普照，但今年同年纪的同学论文数暴涨，导致你连照都没照到！"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 72,
    "title": "优秀毕业生",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "「优秀毕业生评选」包括S市和F大优秀毕业生，参选材料需要横跨在校培养的所有时段，通过严格的分数计算，评估学生的学术、学工、学业等多方位素质...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 20,
      "C": 20,
      "M": 20
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": true,
    "choiceA": "提交优秀毕业生申请表。",
    "endingA": [
      "你把从入学以来的所有学生工作经历、论文专利发表和志愿服务汇编为申请材料。在80页的材料支持下，你获得了S市优秀毕业生。",
      "优秀毕业生参评的内容横跨整个在校学习生涯，你在学生工作和科研成果中的分数不均衡，由于偏科只拿到了F大优秀毕业生。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 73,
    "title": "毕业大片",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "毕业季来临，F大计划拍摄本年度的「毕业大片」。目前正在火热招募候选人，如果试镜成功，将会作为毕业生典型被拍进大片，并且会在毕业典礼上播放！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4,
      9
    ],
    "requireProps": {
      "H": 30,
      "L": 0,
      "A": 30,
      "C": 30,
      "M": 30
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": true,
    "choiceA": "提交毕业大片演员候选人申请表。",
    "endingA": [
      "你试镜“泪撒母校”重场戏时，因代入太深真情流露，泪水决堤而下！导演惊呼“这比剧本还真实！”，你的表演被剪进大片高潮。",
      "你因为在校期间成果稍微欠缺，没有入选毕业生典型。但是，你自拍自演毕业短片「青春F大」，也在KiliKili上获得了十万播放～"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 74,
    "title": "学生会换届",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "「学生会换届」正式开始！摸爬滚打了一年，已从萌新变成了半个“老江湖”，面对换届，你陷入了重大抉择：是留任，再战江湖；还是功成身退，潇洒走一回？",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      2,
      3,
      4
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [
      4
    ],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "提交学生会竞聘申请表。",
    "endingA": [
      "你站上了F大学生代表大会，成为了主席团候选人！在各个院系代表大投票后，你以最高票当选！接下来的任期，你带着学生会一路开挂，成了传说中的“老大哥”。",
      "虽然你投递了主席团竞选表，但没进入候选人。虽然有点小失落，但你成功的留任了部门负责人，继续在学生会发光发热。"
    ],
    "resultA": {
      "H": [
        1,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 75,
    "title": "研究生会换届",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "一年一度的「研究生会骨换届」正式开始！研会期间的工作足以让你透彻的了解其运转和工作模式，活动参与的积累让你好奇，部门负责人和主席团的工作该如何做？",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 40,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 40
    },
    "mainProp": "M",
    "prerequisites": [
      90
    ],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "提交研究生会竞聘申请表。",
    "endingA": [
      "你站上了F大研究生代表大会，竞选演讲以加强研究生科研产学结合为核心，提出设立「跨学科项目孵化基金」的创新提案，赢得全场掌声！最终以最高票当选主席。",
      "你在研代会演讲时因紧张将「研究生会」说成「学生会」，各个院系的研究生代表当场无语。尽管你的提案内容扎实，但最终落选。"
    ],
    "resultA": {
      "H": [
        1,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 76,
    "title": "学术之星",
    "required": false,
    "equalRights": false,
    "category": 2,
    "mainDialog": "「学术之星」是每年一度的学术典型评选，旨在充分展示F大学生良好的学术风貌，发挥先进典型的价值引领作用。学途漫漫，努力争做F大最亮的一颗学术之“星”！",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      4,
      8,
      9
    ],
    "requireProps": {
      "H": 30,
      "L": 0,
      "A": 30,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": true,
    "choiceA": "提交学术之星申请表。",
    "endingA": [
      "你天赋异禀，又在实验室静心耕耘多年，最终手握多篇TOP期刊杀入决赛，成功斩获当年学术之星特等奖！",
      "报名的人中，高手如云，拥有一篇Science封面也只是标配。你虽然失败了，却也认清楚了自己的差距，并继续努力。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        1,
        2
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "下次一定$下次竞选事件概率小幅提升$。",
    "endingB": "在锦鲤的祝福下，你的下次竞选事件成功概率将获得小幅提升！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 77,
    "title": "Crush",
    "required": false,
    "equalRights": false,
    "category": 6,
    "mainDialog": "漫步在校园的小道上，突然迎面撞上了一个身影。书本散落一地，你赶紧蹲下帮忙捡起。抬头的瞬间，你看到了一张让人「心动」的脸，空气中弥漫着一丝尴尬又甜蜜的气息...",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      5,
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 20,
      "L": 20,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "L",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "心跳加速，鼓起勇气搭话，并约定下次一起自习。",
    "endingA": [
      "你和Crush加上了微信！之后你们成为了学习和运动搭子，从教学楼到操场，从图书馆到体育馆，都留下了美好的回忆。",
      "加上Crush微信后，你发现你们没有什么共同话题，在几天的尬聊下，你放弃了主动权，两个的联系也越来越少。"
    ],
    "resultA": {
      "H": [
        1,
        3
      ],
      "L": [
        3,
        3
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "S（Shy）属性大爆发错过了和TA搭讪的机会...",
    "endingB": "留得青山在，不怕没Crush追。你就当是积累经验，下次再遇到心动的TA，一定要鼓起勇气！",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 78,
    "title": "表白",
    "required": false,
    "equalRights": false,
    "category": 6,
    "mainDialog": "学生生活即将画上句号，而你心中一直藏着一个人。自己对TA的感情已经从单纯的友谊变成了深深的爱慕。毕业在即，是趁最后的机会表白，还是把这份感情永远藏在心底？",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      4,
      9
    ],
    "requireProps": {
      "H": 40,
      "L": 40,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "L",
    "prerequisites": [
      77
    ],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "勇敢表白，不留遗憾！",
    "endingA": [
      "你怀着忐忑不安的心情，在F大的亮草表白。意外的是，当天TA也打算和你表白，这是一段双向奔赴！你们成为了彼此的恋人，这段感情也成了你们青春最美好的回忆。",
      "最终你没有等来肯定的答复，怀念不一定就要相见，喜欢不一定就能在一起，你要相信，每一种距离都有它存在的意义。"
    ],
    "resultA": {
      "H": [
        2,
        3
      ],
      "L": [
        4,
        4
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "默默守护，藏在心底～",
    "endingB": "你选择把这份感情永远藏在心底。毕业前，你送给TA一份精心准备的礼物，当作友谊的见证，然后默默离开。",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 79,
    "title": "研究生会招新",
    "required": true,
    "equalRights": false,
    "category": 4,
    "mainDialog": "报道现场热闹非凡，院系摊位旁边是「研究生会招新」摊位！学长学姐们热情地分发宣传册，桌上有专属文创礼品。看着宣传册上往年的活动照片，$$的介绍映入眼帘。",
    "repalceDialog": [
      "秘书处",
      "组织部",
      "宣传理论部",
      "实践部",
      "社团部",
      "融媒体部",
      "学术文化部",
      "权益联络部",
      "研创中心",
      "分校区工作委员会"
    ],
    "repetable": false,
    "happenYear": [
      5
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "在F大，更得报名研究生会！",
    "endingA": [
      "欢迎加入研会！你凭借出色的综合能力与团队协作精神脱颖而出，正式成为研会的一员，校园文化的建设可少不了你！",
      "研会竞争激烈，来自五湖四海的同学们“八仙过海”，你遗憾落选。但段经历为你积累了面试经验，未来定能厚积薄发，绽放光彩！"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "先不考虑，研一应该侧重科研。",
    "endingB": "虽然少了研会的社交圈，但你更加沉迷于学术，科研进度飞快，老板开始用“别人家的学生”夸你了。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 80,
    "title": "导师双选",
    "required": true,
    "equalRights": false,
    "category": 0,
    "mainDialog": "对于研究生，导师是第一责任人！入学第一天进行「导师双选」，“师傅领进门，修行看个人”，好的师傅至关重要。想要不走弯路，更想弯道超车，就务必调研心仪的好老师！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      5
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "给大牛获“我心目中的好导师”的老师发送简历。",
    "endingA": [
      "你的简历和面试表现得到了导师的高度认可。成功加入大牛课题组，开启了科研新征程，学术能力得到了飞速提升。",
      "面试时，你未能充分展示自己的优势，失去了加入顶尖课题组的机会，无奈投递简历给其他课题组，最终顺利入学。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "选择产出稳定、竞争适中的课题组。",
    "endingB": "你意识到大牛课题组的竞争激烈且与方向契合度不高，于是选择了产出稳定、竞争适中的课题组，也能在相对轻松的氛围中积累经验。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 81,
    "title": "分配工位",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "工欲善其事，必先利其“位”！研究生最需要的就是自己的工位，俗话说“金窝银窝不如自己的工“窝””！「工位分配」明天开始，联系导师好位置先到先得！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      5
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "坚信先到先得，早上八点就去教务排队。",
    "endingA": [
      "你如愿地抢到了窗边、采光极佳且视野开阔的“风水宝地”。这里可以远眺校园风景，让你在学习和科研时心情愉悦、效率倍增。",
      "你不小心选到了导师办公室对面的工位。每次导师进出办公室都必须经过你的工位，这也是某种“福报”。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "坚信命中注定，下午人少之后再去排队。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 82,
    "title": "实验室安全操作培训",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "近年来高校实验室事故频发！F大现组织全体新生参加「实验室安全操作培训」，重温实验室安全知识，在保护自己的同时，共同守护实验室这片科研净土！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      5
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "线下参加，前往集中培训讲座。",
    "endingA": [
      "你积极参加了安全操作培训，系统地学习了实验室的安全规范、操作流程以及应急处理措施，为今后的研究工作保驾护航。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "线上参加，抽空观看网课签到。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 83,
    "title": "研究生津贴",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "手机推送：借记卡动账提醒！今天是发津贴的日子，每月国家会下发固定金额的研究生津贴，实验室也会按照工作量下发补贴，快看看这个月有多少钱！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "先拜一下“超越”姐，再看工资！",
    "endingA": [
      "发财了！课题组本月发放的研究生津贴高达全院第一，简直羡煞旁人。你不仅能轻松应对日常开销，还能攒下一笔钱。",
      "遗憾的是，课题组本月的经费紧张，发放的津贴（低保仅有500元，只够维持基本生活开销。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "直接揭晓答案！",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 84,
    "title": "消防轮训",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "第一周研工备忘：下周务必参加「消防演练」！F大保卫处组织全体学生开展消防安全轮训，现场进行逃生模拟演练和灭火器使用教学，现场设有签到！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "报名参加楼宇应急演练志愿者。",
    "endingA": [
      "通过这次演练，你掌握了在紧急情况下如何进行自救和互救，这些宝贵的经验让你在面对潜在的火灾风险时更加从容不迫。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "报名试用灭火器体验消防设备。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 85,
    "title": "学位论文开题",
    "required": true,
    "equalRights": false,
    "category": 0,
    "mainDialog": "本学期将进行「学位论文开题」，这是研究生确定学位论文选题、提出研究计划的培养环节，研究生均须参加答辩形式的开题并通过考核，答辩专家组将应听取研究生在课程学习、文献查阅、研究计划等方面的汇报。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      6
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Idea成熟，准备充分，立即开题。",
    "endingA": [
      "你凭借成熟的研究想法和充分的准备，清晰地阐述了研究背景、目标和方法，开题顺利通过。评审委员对你的Idea给予了高度评价，认为研究具有创新性和可行性。",
      "你的Idea被指出存在明显不足，论证不够充分，研究方法也缺乏严谨性。于是，你需要在半个学期后重新开题。经过更深入的调研和调整，你对课题进行了完善，重新开题时终于获得通过。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "课题仍在调研，延缓开题。",
    "endingB": "现有的调研仍不充分，研究方向需要进一步细化和明确。为了避免仓促开题导致失败，你决定延缓开题。最终在下个学期开题通过。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 86,
    "title": "学位论文中期考核",
    "required": true,
    "equalRights": false,
    "category": 0,
    "mainDialog": "按培养流程，本学期将开展「学位论文中期考核」，所有研究生必须参加。中期考核旨在对照培养方案的要求，对研究生的学业进展情况进行全面检查，并对其后续学业安排提出意见、建议和要求。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      7
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "推进课题进度，提交中期考核。",
    "endingA": [
      "凭借扎实的研究功底，你清晰地展示了论文的新进展。评审老师对你的研究进度和质量表示满意，认为研究方向明确、方法得当、结果初步可见。你顺利通过中期考核。",
      "你的研究进展未能达到预期，评审老师指出研究方法已落后时代。你需要重新更改方法论，调整研究课题。在下定决心并完成了重开题后，你的新课题顺利通过中期考核。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "稳妥期间，继续积累，延缓中期。",
    "endingB": "由于新的工作问世，你发现方法论需要大幅调整，因此你主动申请延缓开题。在深入对比和调研后，经过一学期积累，你顺利通过中期。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 87,
    "title": "学位论文答辩",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "已到学制最后一年，之前的阶段顺利的完成开题、中期、预答辩！学位申请接下来就是「学位论文答辩」，学位论文应是一篇系统而完整的学术论文，其考查一般通过同行专家评阅和组织进行。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "精力聚焦PPT，好的演讲需要好的slide！",
    "endingA": [
      "你凭借扎实的研究功底、清晰的逻辑表达和创新的研究成果，赢得了答辩委员会的高度评价。答辩结束后，委员会一致同意通过你的论文，并推荐你申请优秀博士论文。",
      "你遭遇了史上最激烈的提问环节。面对答辩委员的连环追问，你在某些关键问题上未能给出清晰、准确的回答。尽管如此，你还是凭借扎实的论文和应变能力，勉强通过了答辩。"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "精力聚焦演讲，答辩的重点是讲的通俗易懂。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 88,
    "title": "辅导员招聘",
    "required": true,
    "equalRights": false,
    "category": 4,
    "mainDialog": "F大已启动「专职辅导员」招聘！辅导员是指从事学生的思政教育、学生管理、就业指导和党团建设等方面工作的公职人员。机会难得，如果想留在F大从事行政工作，专职辅导员是不二选择！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 40,
      "C": 0,
      "M": 0
    },
    "mainProp": "M",
    "prerequisites": [
      15
    ],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "汇总学生工作履历，投递简历。$毕业去向：专职辅导员$",
    "endingA": [
      "你凭借优秀的学生工作履历进入笔面环节。笔试中，你对突发情况处理应答入流；面试中，你自信的问答征服了所有评审领导，因此成功上岸。",
      "你通过简历筛选和笔试环节，顺利入围面试考核。面试过程中，针对专硕和学硕的培养模式，以及差异化引导等问题，对于你过于超纲，因此止步于面试。"
    ],
    "resultA": {
      "H": [
        3,
        3
      ],
      "L": [
        3,
        3
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "慎重考虑后，放弃事业编。",
    "endingB": "辅导员招聘每年仅一次，你并未投递简历。因此，在毕业学年的秋季学期，你需要把更多精力投入在招聘会，并选择心意的大厂。",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "毕业去向：辅导员",
    "randIdice": []
  },
  {
    "id": 89,
    "title": "青椒留校",
    "required": true,
    "equalRights": false,
    "category": 3,
    "mainDialog": "F大博士后申请已开放，如果想在F大「青椒留校」并继续开展学术工作，入站成为博士后是一个重要途径。博后在站时间一般为24个月，期间需发表高水平学术论文才可出站。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 40,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "确认研究方向和合作导师，提交申请。$毕业去向：青年教师$",
    "endingA": [
      "在提交入站手续一个半月后，你收到了来自F大大录用函，正式成为所在学科的博士后研究人员。希望你在博后期间科研顺利，Paper多多，基金满满！",
      "在提交入站手续后，导师与你沟通了后续研究方向。由于合作导师有了新的研究版图，迫使你必须放弃已有的研究方向，因此与你已不再适配，最终你放弃了博后的Offer。"
    ],
    "resultA": {
      "H": [
        3,
        3
      ],
      "L": [
        3,
        3
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "慎重思考好，决定以企业就业为第一志愿。",
    "endingB": "青椒之路未必适合每一个人，你在研究生阶段接受学术毒打之后，毅然决定投奔工业界，相信秋招总有企业适合你。",
    "resultB": {
      "H": 3,
      "L": 3,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "毕业去向：青椒",
    "randIdice": []
  },
  {
    "id": 90,
    "title": "招聘会",
    "required": true,
    "equalRights": false,
    "category": 3,
    "mainDialog": "明天有F大专场「招聘会」！网申的简历如同石沉大海，但线下能和HR面对面交流！明天大头部企业是$$，赶紧翻出压箱底的职业装，再把简历打磨一遍。",
    "repalceDialog": [
      "比特跳动",
      "鹅鹅",
      "华华",
      "团团",
      "吃了么",
      "拼拼多",
      "蚁蚁",
      "TTLink",
      "巴巴",
      "大米",
      "ShallowSeek"
    ],
    "repetable": false,
    "happenYear": [
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "企业就业，大厂NO1，抄底宝藏岗位$毕业去向：大厂就业$。",
    "endingA": [
      "在招聘会上，你凭借完美简历，如同大厂HR“诱捕器”。经过多轮面试，最终斩获SP offer，开启职业新篇章。",
      "你在招聘会上积极投递简历，与多家企业交流，虽未获大厂青睐，但收到几家普通企业的offer，薪资待遇中规中矩。"
    ],
    "resultA": {
      "H": [
        0,
        2
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "选择灵活就业，弹性选择职业方向$毕业去向：灵活就业$。",
    "endingB": "博士毕业后，你选择了创业。你带着课题组优秀的师弟师妹，立足学科设计落地产品，在母校和导师的支持下，你们逐渐在业界站稳脚跟。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "毕业去向：企业",
    "randIdice": []
  },
  {
    "id": 91,
    "title": "毕业照",
    "required": true,
    "equalRights": true,
    "category": 0,
    "mainDialog": "学院组织拍摄「毕业照」，穿着学位服在校园的每个角落打卡。耸立的华华楼，湾湾大草坪，精神图腾的亮草，教学楼的旋转楼梯，每个地方都承载着特别的回忆。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "NONE",
    "prerequisites": [],
    "baseProbability": "TRIVIAL",
    "upgrade": false,
    "choiceA": "拉上学校里的“家人们”，拍摄创意毕业照。",
    "endingA": [
      "随着快门声响起，青春定格在这一刻！这段时光终被岁月珍藏，此刻的笑脸和温暖将永远在心底熠熠生辉。这是你在F大这段旅程的最美纪念！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "组织全班同学，在学院楼前拍摄大合照。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 1,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 92,
    "title": "《望道》观影",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "班级团总支拟举办「《望道》观影」活动，该片以陈望道先生翻译首个《共产党宣言》中文全译本的历程为框架，讲述了以他追寻真理、坚守大道的青春故事。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "担起电影活动组织的责任。",
    "endingA": [
      "你在本次观影负责预约和电影票发放，在精心策划安排下，同学们在观影后深受触动，收获满满，你在班级中的威信++。",
      "本次活动的策划人手充足，不再招收工作人员。你身处观影席，望道先生的赤诚信念让你热泪盈眶，心中默默立下奋进之志。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "只想看看电影，跟着大部队即可。",
    "endingB": "虽未承担组织工作，但你在电影中感受革命先辈的信仰与热血，内心深受触动，也收获了别样的成长，为未来埋下奋进的种子。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 93,
    "title": "望道故居参访",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "班级党支部主办了「陈望道」故居参访，并预约了星火志愿服务队的金牌讲师进行讲解！这不仅是一次简单的参观，更是一次跨越百年的精神对话。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "主动请缨，拍摄讲解视频Vlog。",
    "endingA": [
      "你全身心地投入到Vlog制作中。成品凭借出色的拍摄剪辑和深情的讲述走红，意外成F大宣传新宠，助力望道精神在校园传播。",
      "你努力尝试制作Vlog，但首次拍摄略显生疏，画面抖动、剪辑卡帧。虽未达预期，但从中积累了经验，开启了创作之路。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "简单参观，了解一下生平事迹。",
    "endingB": "你融入大部队参观，静听讲解，学习望道先生的生平事迹，被其精神所触动，也被《共产党宣言》的翻译故事深深感染。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 94,
    "title": "组织生活案例大赛",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "党支书下发「组织生活案例大赛」的通知，该大赛通过筛选优秀的专题组织生活案例，助力党建高质量发展。同志们热火朝天地讨论起案例设想，其中$$呼声最高！",
    "repalceDialog": [
      "特色党史学习",
      "学科志愿服务",
      "基层联学共建",
      "专业导向特色活动",
      "跨学科交流",
      "AI+党建专项"
    ],
    "repetable": false,
    "happenYear": [
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 40,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 40
    },
    "mainProp": "M",
    "prerequisites": [
      15
    ],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "共同撰写大赛申报材料，积极配合全流程。",
    "endingA": [
      "喜报！在党支部支委和党员们的齐心协力下，该案例脱颖而出，获评组织生活优秀安利，并在S市各大高校中争相学习和参考。",
      "尽管创意不错，但评委觉得案例有点“浮夸”，缺少走进基层的落地实践，辐射性较为欠缺，未能入选优秀案例。"
    ],
    "resultA": {
      "H": [
        1,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "在支部打个酱油，不做主力。",
    "endingB": "党支部的给力队友把你带飞，支部拿到优秀案例。期间你按时完成了工作，虽然不是主力，但也见证了周围党员的齐心协力。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 95,
    "title": "示范党支部评选",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "F大党委研究生工作部通知，你的支部要参选第99批「示范党支部评选」。作为党建品牌，该平台以赛促建，通过多流程孵化选拔优秀支部，提升党建工作的整体质量。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      6,
      7,
      8
    ],
    "requireProps": {
      "H": 40,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 40
    },
    "mainProp": "M",
    "prerequisites": [
      15
    ],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "All in，全集冲击五星级示范党支部！",
    "endingA": [
      "你的支部动员全体党员，活动丰富、资料详实、特色亮眼，成功获评五星示范党支部，成为全校标杆，团队凝聚力爆棚！",
      "你的支部初次参评，经验不足，工作扎实但欠缺亮点，仅获三星示范党支部。好在摸清了评选要求，明年重整旗鼓再出发。"
    ],
    "resultA": {
      "H": [
        1,
        2
      ],
      "L": [
        1,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        1.5,
        2.5
      ]
    },
    "choiceB": "稳妥保四，按四星示范党支部逐条完成。",
    "endingB": "党支部保四争四！按四星标准稳步推进，不求过高突破，稳扎稳打完成任务。支部建设扎实，成员各司其职，最终拿下四星的直播。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        1,
        2.5
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 96,
    "title": "研究生助管",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "学邮弹出$$「研究生助管」的招聘通知，工作内容正好对胃口！助管是F大勤工助学体系的重要组成部分，既可以勤工俭学，也可以在岗位锻炼能力、提升自我。",
    "repalceDialog": [
      "学院教务办公室",
      "学院研究生工作办公室",
      "F大职能办公室",
      "F大教务处",
      "F大信息办",
      "F大研究生会",
      "F大团委"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "知晓该岗位竞争激烈，仍然申请。",
    "endingA": [
      "报名后，老师面试时发现了你有良好工作基础，因此得以录用。在助管工作中，你锻炼了文稿能力，还获得了优秀助管补贴",
      "报名后，老师询问了你能否工作三个半天。尽管你工作能力突出，但由于实验室需要打卡，而无缘本次助管岗位！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "在蹲顿其他稍微轻松的宝藏岗位。",
    "endingB": "你简直是草丛蹲人专家！你蹲到了只需要坐班打卡的助管岗位，这使得你可以一边看学术论文一边做助管，简直美滋滋！",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 97,
    "title": "研究生团校",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "F大研究生会发布了「研究生团校」的报名通知。这也是研究生骨干培训班，通过专题讲座、实践参访等多种形式，引导学员砥砺奋进、行稳致远，为中国式现代化注入新动力。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      5,
      6,
      7
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "报名领队，带队前往企业走访路线。",
    "endingA": [
      "你成为了领队，在企业座谈中拟定访谈大纲，带领学员深入交流，顺利完成了任务。企业反馈良好，你收获了行业人脉资源。",
      "团校选取了其他专业相符的同学作为领队，你作为普通队员参与走访，也深入了解企业运作模式，并顺利结业获得结业证书。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "报名队员，按时参与多项学习。",
    "endingB": "你按时参与团校学习，认真完成理论课程与校内实践活动，提升了自身理论素养，结交一群学生骨干，收获了结业证书。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 98,
    "title": "招生组招募",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "一年一度的高考结束，随之而来的是报考环节。F大发布了「招生组志愿者」的招募贴，离你最近的是$$市，想到能向学弟学妹们安利自己的大学和专业，整个人都来劲了。",
    "repalceDialog": [
      "苏",
      "杭",
      "京",
      "广",
      "厦",
      "贵",
      "昆",
      "海",
      "合",
      "天",
      "西",
      "湖",
      "呼",
      "拉"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "果断报名（顺便旅游），招生最重要的是真诚！",
    "endingA": [
      "你成功入选招生组！详细介绍了F大的招生政策、专业特色与校园文化，分享大学生活与成长经历，成功吸引了宝贵的优秀生源。",
      "你遗憾落选招生组，但并未气馁。假期里，你做了一支F大校园生活的“整活视频”，直接在KiliKli视频排行榜冲到第一，变向宣传了母校。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "暑假留校，安排其他学习工作任务。",
    "endingB": "你利用暑假的安静时光，全身心投入到科研中。在导师的指导下，你查阅大量文献，完成了关键的实验，为论文发表打好基础。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 99,
    "title": "返校宣讲",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "正值假期，你可以回到高中母校进行F大招生政策的「返校宣讲」。一想到，站在熟悉的讲台上，会面对学弟学妹们期待的眼神，选择好的宣讲主题至关重要。",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "选择前沿的AI+课题为高中生做介绍。",
    "endingA": [
      "你的选举宣讲效果极佳！前沿AI课题让学弟学妹听得津津有味，成功点燃他们对AI的浓厚兴趣，甚至有学生当场表示要报考F大相关专业。",
      "过于前沿的AI课题晦涩难懂，学弟学妹眼神迷茫，很多人中途走神，课后反应冷淡，你也意识到选题有些脱离高中生接受水平。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "选择浅显易懂的学科大类科普主题。",
    "endingB": "你设计了学科基础科普，用通俗的语言，辅以生活实例讲解。学生听得津津有味并反响热烈，这让他们对大学专业有了清晰认知。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 100,
    "title": "学科周",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "下下周就是专业学科周。专题会上，看着活动清单：讲座论坛、企业参访...都是传统活动，恰好此时院长注意到你，想让你策划一个全新活动迎接学科周的到来！",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 20
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "设计更加新颖的学科游园会。",
    "endingA": [
      "学科游园会大放异彩！趣味学科闯关、VR沉浸体验等环节吸睛无数，同学们热情高涨，在欢乐中探索学科魅力，为学科周氛围推向新高潮。",
      "筹备期间突遇罕见暴雨，游园会场地积水严重，只得无奈取消。同学们期待化作失落，你只能默默整理物资，等待下次机会。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.5,
        2
      ]
    },
    "choiceB": "以稳为主，仍坚持采用老牌传统活动。",
    "endingB": "你坚持传统品牌，学术论坛按部就班开展，企业参访有序进行，活动不出彩但完成任务，保证了学科周平稳落幕，未出纰漏。",
    "resultB": {
      "H": 0,
      "L": 1,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 101,
    "title": "实验室报销",
    "required": false,
    "equalRights": false,
    "category": 4,
    "mainDialog": "导师突然把报销任务交到你手上，看着桌上堆成小山的发票和单据简直头大！电子发票、纸质收据、不同金额的票据混在一起，报销单该怎么填？",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "M",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "请教学姐，认真填写报销单，核对数据。",
    "endingA": [
      "你虚心请教学姐，认真填写报销单并反复核对数据，报销流程一气呵成。导师见你细致负责，便指定你为实验室专属报销负责人！",
      "你因对报销流程不熟悉，多次出错，反复询问学姐且效率低下，学姐被你烦得直接喜提报销工作黑名单。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0,
        1.5
      ]
    },
    "choiceB": "N人，按直觉分类，大类目不错就没问题。",
    "endingB": "你自以为是，按直觉将发票简单分类，大类目还行，但细项混乱，导致报销账单频频被财务打回。学姐帮你修改多次无果，报销工作陷入混乱。",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        -4,
        -4
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        -4,
        -4
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 102,
    "title": "华华楼30楼打卡",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "班群里炸开消息：今晚有世纪日落，「华华楼30楼」观景台视野绝佳！无数小群七嘴八舌讨论着几点集合...赶紧私戳室友：“帮我占个靠栏杆的位置！”深处校外，润回F大有$$可供考虑...",
    "repalceDialog": [
      "地铁",
      "公交",
      "出租车",
      "自行车",
      "步行"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你一路狂飙赶回学校！电梯刚到30楼，你冲向栏杆，成功占到最佳位置！两人一起拍下日落与城市的剪影。",
      "你没料到郸郸校区大门被游客堵死，好在日落前赶到。位置虽已被占满，但你和室友在走廊尽头找到绝佳“偷窥点”。",
      "你因为电梯爆满而爬30层！赶到观景台时，日落已接近尾声，只能在走廊尽头拍到一片橙红色的余晖。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 103,
    "title": "辉相堂打卡",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「辉相堂」是F大标志性的建筑物之一，名字是对F大创始人和重要建设者两位老先生的永恒纪念。官微发布了人气打卡领取校名服活动，有$$推荐点位可以供参考～",
    "repalceDialog": [
      "辉相堂正门",
      "辉相堂阶梯",
      "辉相堂二楼",
      "辉相堂草坪",
      "辉相堂报告厅"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你选择拍摄了一组“时光剪影”照片，用长曝光捕捉夕阳洒在建筑上的光影，照片被官微选中作为头图并获赠校名服！",
      "你拍了一张标准游客照，留下了辉相堂的标志特写，照片清晰且构图完美。活动结束后，你顺利领取校名服。",
      "你因临时有事迟到，赶到辉相堂时活动已接近尾声。你匆忙拍了一张自拍，但因手抖略显模糊，与校名服擦肩而过。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 104,
    "title": "郸郸樱花打卡",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "每逢四月，郸郸校区的「樱花」都成为最热门打卡点！起了个大早，刚到校门口就看见乌泱泱的人群围着樱花树。还好室友做足攻略找到打卡点位，可选的有$$...",
    "repalceDialog": [
      "华华楼前",
      "华华亮草坪旁",
      "第五教学楼旁",
      "实验楼后墙"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你拍摄了“樱花与F大”创意照，用花瓣拼出F大校名，背景是樱花树下的教学楼剪影，校礼品店还采纳设计了纪念品！",
      "你选择了官微推荐的较冷门机位。这里樱花有点“秃”，但顺利拿下票圈打卡照，今晚点赞数过百！",
      "你坚持选择最热门点位，在排了3个小时的队后，你疲惫不堪放弃了蹲点，最后偷了一张票圈的图安慰自己。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 105,
    "title": "老校门打卡",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "郸郸校区的「老校门」是F大的最热门打卡点！背着相机包和室友晃悠到郸郸老校门前，阳光正好洒在那块饱经风霜的校名石匾上。赶紧在门廊下找好角度，今天的滤镜推荐是$$。",
    "repalceDialog": [
      "徕卡M6",
      "哈苏503CW",
      "NikonF3",
      "康泰时T2",
      "传奇大F",
      "Toma M-616",
      "佳能WP1"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你精准捕捉阳光洒在校名石匾上的瞬间，画面既有历史厚重感又不失现代光影美感！被S市选中作为“高校特辑”封面！",
      "你拍出一张经典复古风格的老校门照片。摄影协会看中了你的照片，并邀请你到其他院系作为嘉宾授课。",
      "你尝试用高饱和滤镜，结果拍出的照片像“夕阳下的火鸡”，校名石匾被过度曝光，完全看不清细节！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 106,
    "title": "湾湾银杏打卡",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "春天有郸郸校区的樱花，秋天就有湾湾校区的「银杏」！电驴缓缓驶过银杏大道，金黄的叶片正簌簌落下。赶紧靠边停车，掏出手机对准铺满落叶的大道。这份素材你打算发在$$。",
    "repalceDialog": [
      "大红书",
      "微Bo",
      "朋友圈",
      "KiliKili",
      "Ins",
      "TicTic"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你发布了一段“银杏落叶舞”短视频，用慢动作捕捉落叶飘落的瞬间，配上F大校歌。视频瞬间爆火，播放量突破1000万！",
      "你发布了一张“银杏大道全景”广角照片，配文「秋日的湾湾校区，每一片落叶都在诉说故事」，“F大湾湾”找你申请转发。",
      "你自信p了过度调色的“银杏灾难片”，如同“核爆炸后的废土”，树叶颜色失真到发绿。评论区被“这是P图还是修仙？”刷屏。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 107,
    "title": "湾湾黑天鹅打卡",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "官微说湾湾校区的「黑天鹅」又生了！这一窝生了四只！最爱天鹅的你决定为他们付出力所能及的力量，最简单的就是为F大贡献物资，躺在购物车的有$$...",
    "repalceDialog": [
      "雏鹅饲料",
      "成龄天鹅饲料",
      "菜叶子一捆",
      "饮水器",
      "饲料槽",
      "木质屋子",
      "草垛"
    ],
    "repetable": false,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "天鹅们仿佛知道你是金主大大，允许你近距离接触天鹅宝宝们，瞬间好感度Max，你成为了“看宝”导游。",
      "受益于你的捐赠，天鹅一家的生活变得更加幸福，四只小天鹅茁壮成长！学院特别报道了你的善举。",
      "鹅鹅们觉得你捐的有点少，每次你去看望的时候都摇头、大叫“嘎嘎”，应该是催你再大方一点！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 108,
    "title": "迎新游园会",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "每年9月，在湾湾校区的广场都会举办「迎新游园会」。你在去教学楼的路上，被志愿者热情地塞了一张游园会的攻略地图，这里你感兴趣的有$$。",
    "repalceDialog": [
      "学院片区",
      "社团片区",
      "文化片区",
      "抽奖片区",
      "赞助商大佬片区",
      "园区片区"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你在游园会大薅羊毛，前往的片区大方的令人发指！帆布包、卡套、校名服、盲盒，甚至是防晒霜！不仅了解了校园，还赚到了！",
      "你积极参与打卡盖章活动，奈何片区过多，集章只完成了70%。在兑换点，你也换到了心意的游园会专属polo衫～",
      "你试图用“新生优惠”薅羊毛，却被工作人员误认为“校外游客”，触发“社死现场”（由于太I选择直接逃离。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 109,
    "title": "Echo新年音乐会",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「Echo新年音乐会」将在让辉相堂上演，为新年奏响悠扬的序曲。However，你收到了幸运嘉宾邀请函，可以在安可环节点一首自选曲目，扣扣音乐收藏夹最爱的$$可以考虑！",
    "repalceDialog": [
      "慢慢喜欢你",
      "我爱你中国",
      "海阔天空",
      "浮夸",
      "千千阙歌",
      "十年",
      "听海"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "没想到你选择的是改编曲目，现场瞬间切换成摇滚模式！主唱即兴进行了solo，观众跟着节奏挥舞手臂，气氛燃爆全场！",
      "你选择了热门金曲，温暖的旋律响起时，全场观众自发合唱！灯光渐暗，手机闪光灯汇成星海～",
      "Echo邀请你领唱第一句，无数人注视着你，堪称骑虎难下。你自知五音不全，硬着头皮发出一段“核爆级”魔音！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 110,
    "title": "师生趣味运动会",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "湾湾校区「师生趣味运动会」预热推送刷屏朋友圈，除了有传统以院系为单位的“整装集结”，还首次出现跨科研机构的“楼宇联盟”组队参赛。项目$$尚有余量！",
    "repalceDialog": [
      "充气龙舟",
      "积木挑战赛",
      "踏浪木板鞋",
      "巨型履带",
      "飞盘九宫格",
      "皮球平衡赛",
      "跳绳接力"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你真是锦鲤，组队无意拉到了两位学体育的辅导员！比赛开始后，靠他们俩带飞，凭借“专业碾压”一路摘得桂冠。",
      "你自知趣味运动会需要巧劲！一路过关斩将杀到决赛，但是还是输给了一支黑皮体育生全明星阵容，喜提第二。",
      "你的肢体协调性差的感人，比赛时连连失误，全队因你突然卡住！观众席爆发出阵阵笑声，拿下了最佳安慰奖。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 111,
    "title": "乐跑",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "RUN FOR FUN! F大「乐跑」正式开始，本届乐跑居然还有校友组和校友亲子组等“F二代”一同参与！据前线消息，今年的乐跑一共有四个组别，目前$$还有少量空位～",
    "repalceDialog": [
      "10公里竞技跑",
      "3.3公里竞技跑",
      "3.3公里健康跑",
      "1.3公里亲子跑"
    ],
    "repetable": true,
    "happenYear": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你日常月跑量就有150km，乐跑只能说小菜一碟！凭借稳健的步伐和冲刺时的爆发力，成功冲线并获得组别第二名！",
      "你知道自己最近猪瘾较大，体重升高了15斤，选择了低配速的保守策略。你瞄准了一个同学，跟着大部队正常完赛！",
      "作为长跑苦手，你在500米处就感觉如同安陵容耗尽了所有力气，再跑一步都会喘的死！最后选择了步行完赛。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 112,
    "title": "研究生主题欢乐跑",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「研究生主题欢乐跑」火热来袭！地点还在湾湾校区广场，今年配备沉浸式校庆主题赛道，十个创意打卡点等参与，隐藏NPC$$出没，合影集赞赢额外积分！",
    "repalceDialog": [
      "F小燕",
      "蛋卷",
      "弹幕"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你化身“NPC猎手”，抓到所有野生NPC！与F小燕合影时，她掏出一枚“校庆徽章”送给你，合影被校媒选中作为官网宣传图！",
      "你选择稳健策略，完成了十个创意打卡点。但你的运气一般，途中你为了抓住弹幕NPC，飞奔400米，导致没有力气寻找其他两小只！",
      "你专注于跑步，完成了十个创意打卡点。但是！你的眼神不太好，途中甚至NPC蛋卷向你招手，你没有看见！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 113,
    "title": "歌王旦生赛",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "「歌王旦生战」是研究生的十大歌手！去年，甚至还记得在湾湾校区食堂门口，展出了一个月的歌王宣言！是时候准备一下再次出道，用$$告诉所有人，你的练习时长——就是两年半！",
    "repalceDialog": [
      "唱",
      "跳",
      "rap"
    ],
    "repetable": false,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你以原创曲《F大两年半》震撼全场！歌词巧妙融入校园热梗，节奏感十足，评委打出满分！以绝对优势夺冠！",
      "你的原创曲《F大两年半》创意尚可，但是不如对手的《篮球练习生》。评委因此略显失望，最终获得亚军～",
      "你的原创曲《F大两年半》被指借鉴了去年冠军的《中分背带裤》，而且被吊打，只在第一轮就淘汰出局。"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 114,
    "title": "课题组团建",
    "required": false,
    "equalRights": true,
    "category": 5,
    "mainDialog": "实验室又下发了活动经费，导师每个月会提供1000元的共享费用供大家组织活动！课题组的大师姐安排了$$团建！秉承谁不去谁吃亏原则，你参与了投票！",
    "repalceDialog": [
      "聚餐",
      "迪士尼",
      "欢乐谷",
      "剧本杀",
      "狼人杀",
      "轰趴",
      "唱K",
      "桌游"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "C",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "Pick 1",
    "endingA": [
      "你投票的活动高票当选，当天大家玩得不亦乐乎！导师毫无架子、热情加入，甚至主动掏腰包加了1000元经费！",
      "你投票的活动以领先一票的优势当选，但大师姐定的地点距离学校足足20km！虽然玩的开心，但晕车的你直呼救命。",
      "你投票的活动无人问津，被选的活动开销超了预算1倍，大家无奈自掏腰包补了差价！"
    ],
    "resultA": {
      "H": [
        0,
        1
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "Pick 2",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 115,
    "title": "横向课题立项",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "博士大师兄在讨论「横向课题立项」，横向是指由企业、公司或个人等自发提出的课题。本课题与$$合作，周期为一年，课题组正火热安排分工！",
    "repalceDialog": [
      "比特跳动",
      "鹅鹅",
      "华华",
      "团团",
      "吃了么",
      "拼拼多",
      "蚁蚁",
      "TTLink",
      "巴巴",
      "大米",
      "ShallowSeek"
    ],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "认领工程背景和现有产品调研部分。",
    "endingA": [
      "你认真地完成了本子撰写，助力课题组成功立项，顺利拿下200W经费，获导师与师兄师姐肯定，成为以后的本子主力。",
      "你虽然实验做的好，但本子写的确实烂！错别字、标点符号问题大堆，其他同学负责的板块更是拉垮，本次本子申请失败。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "认领产品架构和原型设计部分。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 116,
    "title": "纵向课题立项",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "在导师的推进下，「纵向课题立项」进入本子阶段，纵向是指由各级政府指定的科研行政单位代表政府立项的课题。本课题由$$立项，周期为一年，每个人都得参与进来！",
    "repalceDialog": [
      "省科技厅",
      "市科技局",
      "省社科联",
      "市社科联",
      "省改革委员会",
      "省财政厅",
      "教育部",
      "教育厅"
    ],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "认领科研背景和现有文献调研部分。",
    "endingA": [
      "你文笔流畅、逻辑清晰，团队协作紧密，申报书论证严谨、创新点突出，因此成功获得立项，获批50W经费，科研之路开启新篇章。",
      "由于团队整体方案缺乏亮点和竞争力，最终立项失败。导师鼓励大家总结经验，继续打磨方案，为下次申报蓄力。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "认领算法设计和架构搭建部分。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 117,
    "title": "横向课题结项",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "本季度，实验室要完成「横向课题结项」，尽管项目调研和模块设计已经完成，但数据处理和结项报告的进度都不到50%。导师开始Push大家认领工作！",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [
      115
    ],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "先和同门开展数据处理和分析工作。",
    "endingA": [
      "该课题运用前沿方法，精准剖析现实问题，成果在企业实际应用中效果卓越，顺利落地转化，为企业创造了显著价值。",
      "你与同门高效协作，答辩会现场获企业专家的一致认可，顺利完成了结项。可惜落地投入成本过高，企业没有采纳该方案。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "先主导协调和撰写项目结项材料。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 118,
    "title": "纵向课题结项",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "随着时间的流逝，「纵向课题结项」的时间愈发接近！结项的报告已趋紧完成，但是学术界的新工作也曾出不穷，此时如果要完美结项就必须补充相关的对比材料。",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [
      116
    ],
    "baseProbability": "MEDIUM",
    "upgrade": true,
    "choiceA": "聚焦实验，开展模型的对比实验分析。",
    "endingA": [
      "该课题成果突出且具前瞻性，课题结项后，政府相关部门高度认可，发来感谢信授予团队表彰，为后续课题研究赢得更多支持。",
      "课题顺利结项，材料逻辑缜密、实验丰富、证明完备。但是，理论的落地转化尚欠缺，课题额外申请了专项完成项目落地。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "聚焦理论，开展模型的性能瓶颈证明。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 119,
    "title": "国家自然科学基金",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "「国家自然科学基金」旨在推动科技体制改革和基础研究发展，为国民经济、社会发展和国家安全提供科学支撑。实验室的国自然申请需要每个研究生参与撰写，请选择你负责的板块。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 30,
      "L": 0,
      "A": 0,
      "C": 30,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "认领实验室现有研究成果梳理部分。",
    "endingA": [
      "你为申报书提供详实材料。在全组共同努力，课题组首次获批国家自然科学基金，该课题成为课题组未来三年的核心研究方向。",
      "因领域冷门，尽管团队付出诸多努力，但最终未获批准。不过，这次经历提升了课题组整体的科研素养，为未来申报积累了宝贵经验。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        1,
        2.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "认领前期调研和研究背景部分。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 120,
    "title": "国自然博士生项目",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "「国自然博士生项目」即国家自然科学基金青年学生基础研究项目，采用“推荐+评审”制，旨在支持博士生开展在自然科学领域的基础研究工作，培养优秀青年科学家。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 40,
      "L": 0,
      "A": 0,
      "C": 40,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "汇编既往的科研材料，向学院递交申请。",
    "endingA": [
      "你精心汇编材料，申请书锚定关键科学问题，成功获评国自然博士生项目，拿下科研资金支持与权威认可。",
      "申请未通过，因研究问题非领域关键，创新与应用价值有限。这次经历让你重新审视研究方向，未来更加聚焦核心科学问题。"
    ],
    "resultA": {
      "H": [
        1,
        3
      ],
      "L": [
        1,
        3
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "该赛道竞争过于激烈，科研苦手逃离。",
    "endingB": "鉴于竞争激烈，且自身非科研牛人，你果断放弃，转而专注论文发表。最终论文顺产，不仅节约了时间，还产出了代表性成果。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 121,
    "title": "青年人才托举博士专项",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "「青年人才托举博士专项」是面向高年级在读博士生的国家级人才培养项目，旨在通过学术资源整合与资金支持，助力优秀青年学者成长，托举期不超过2年。",
    "repalceDialog": [],
    "repetable": false,
    "happenYear": [
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 40,
      "L": 0,
      "A": 0,
      "C": 40,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "VERYHARD",
    "upgrade": false,
    "choiceA": "整理学术成果，向学院递交申请。",
    "endingA": [
      "你得到了评审专家的高度评价，他们认为你的研究具有重要的理论和实践意义，成功入学托举计划。",
      "项目书提交后，竞争激烈，棋差一招落选。尽管未获资助，但评审专家给出了详细的反馈意见，帮助你发现了研究的不足之处。"
    ],
    "resultA": {
      "H": [
        1,
        3
      ],
      "L": [
        1,
        3
      ],
      "A": [
        1.5,
        2.5
      ],
      "C": [
        1.5,
        2.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "现有成果不足以支撑，继续积累Paper。",
    "endingB": "你没有申请，专注于现有的研究工作中，意外地发现了一个新的研究方向，这个发现使你的课题更加丰富。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 122,
    "title": "发明专利",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "「发明专利」是学术成果转化的重要途径之一，授予发明专利，应当具备新颖性、创造性和实用性。完成实验后，导师建议把课题整理成专利进行申请。",
    "repalceDialog": [],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "审查时间较长，优先专利申请。",
    "endingA": [
      "你详实记录实验细节，清晰阐述技术要点，经团队协作与导师把关，专利成功获批，成果走向应用，学术与实践成功结合。",
      "为保护核心技术，你申请书技术披露过于简略，审查员无法充分理解评估，最终专利申请被驳回，需补充材料重新申请。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.5,
        2
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "聚焦其他小论文，暂缓专利申请。",
    "endingB": "你专注于小论文，实验室同门接手了专利申请。但因创新性不足，专利被驳回。你节省了时间，同时小论文顺利投稿。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0,
        1.5
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 123,
    "title": "论文审稿",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "曾经投稿的期刊$$邀请你并分配了审稿工作，这些新的科研工作和你的方向正好Match。同时，成为审稿人也是迈出学术下一步的重要标志！",
    "repalceDialog": [
      "A-学报",
      "A-Journal",
      "A-Science",
      "A-Cell",
      "A-Nature",
      "A-Transaction",
      "A-Studies"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 0,
      "L": 0,
      "A": 0,
      "C": 0,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "EASY",
    "upgrade": false,
    "choiceA": "认真审阅论文，高质量完成审稿工作。",
    "endingA": [
      "凭借高质量的审稿，你展现出专业、严谨的学术态度和出色评判能力，给期刊主编留下深刻印象，受邀成为程序委员会成员。",
      "你提出拒稿意见，指出论文关键问题，原作者修改后投向更优质期刊并成功发表。虽拒收本次稿件，但你的专业意见促使其提升质量，也为自己树立良好审稿人声誉。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1
      ],
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "用大模型工具帮忙审稿，节省时间。",
    "endingB": "你用大模型审稿，虽节省时间，但被主席发现后取消审稿结果。警示你在学术工作要遵循规范，不能过度依赖AI工具。",
    "resultB": {
      "H": 2,
      "L": 2,
      "A": [
        -4,
        -4
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 124,
    "title": "期刊投稿",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "“科研人”都在聚焦学术创新。课题接近收尾，「期刊投稿」需要排上日程。在你的领域，$$是核心期刊，同门说你的Idea值得上一次期刊封面！",
    "repalceDialog": [
      "AJ-学报",
      "A-Journal",
      "A-Science",
      "A-Cell",
      "A-Nature",
      "A-Transaction",
      "A-Studies"
    ],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 30,
      "L": 0,
      "A": 0,
      "C": 30,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "HARD",
    "upgrade": false,
    "choiceA": "冲击顶刊，万一能行！",
    "endingA": [
      "恭喜！你的论文凭借杰出的创新性和实验成果被接收并荣登封面，研究工作获业界广泛关注认可，为学术生涯添上浓墨重彩的一笔。",
      "论文未被接收，审稿人指出研究创新性不足，缺乏关键突破。你虚心吸收意见，继续打磨论文，寻找更易发表的期刊。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        1,
        2.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "感觉够呛，选择一个二类期刊。",
    "endingB": "你选择二类期刊投稿，历经两轮返修，按审稿人意见补充实验，最终成功发表。虽未上顶刊，但也产出了小论文，提升了学术自信。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 125,
    "title": "Rebuttal",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "$$回复了审稿意见，评论如利刃般剖析着你的论文。你需要精心「Rebuttal」，逐条回应审稿人的意见，也有机会让论文起死回生。",
    "repalceDialog": [
      "A-学报",
      "A-Journal",
      "A-Science",
      "A-Cell",
      "A-Nature",
      "A-Transaction",
      "A-Studies"
    ],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "言语激烈，驳斥Reviewer没有看懂你的论文。",
    "endingA": [
      "你分析审稿意见，用数据和逻辑逐条证明，夯实论文观点。清晰的回应让审稿人重新审视论文，认可创新与价值，论文成功发表。",
      "反驳中你坚持论文主张，但未充分补充证据。因此审稿人坚持负分评价，论文终被拒。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "先扬后抑，承认缺陷但瑕不掩瑜。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 2,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 126,
    "title": "学术会议",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "International Conference on $$ 「学术会议」即将在S市举行，这是一场学术盛会，既包括了多个主题演讲，也提供了Poster展示！最重要的是，组委会的茶歇也异常丰盛，可以让人大快朵颐。",
    "repalceDialog": [
      "AA",
      "BB",
      "CC",
      "DD",
      "EE",
      "FF",
      "GG"
    ],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "选择在大会上进行Topic演讲。",
    "endingA": [
      "你演讲出色，逻辑清晰、内容新颖，吸引众多学者关注，演讲后与一位院士深度交流，获其赞赏与指导。",
      "你在演讲中被质疑研究细节，暴露工作瑕疵，虽尽力回应但未能完全释疑。会后你深刻反思，继续完善研究。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "选择在大会上进行Poster展示。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 127,
    "title": "Workshop",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "「Workshop」是以特定主题或技能为核心的小型学术活动，目标是通过互动讨论、实践操作和深度交流提升参与者的专业能力或知识水平。$$举办了AI特训Workshop，现邀请你参与。",
    "repalceDialog": [
      "ACM",
      "IEEE"
    ],
    "repetable": true,
    "happenYear": [
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "接受邀请并完成WorkShop注册。",
    "endingA": [
      "在Workshop中，你全身心投入学习，和大佬面对面答疑解惑，初步入门了Pytorch框架，为今后使用AI添新助力。",
      "不幸的是，你的Visa申请被拒，错失Workshop机会，但你未气馁，组委会开通了线上通道欢迎你的接入。"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "由于投稿压力，拒绝Workshop。",
    "endingB": "这是一个AI的风口，你错过了学习机会。但由于全身心投入论文收尾工作，最终在DDL前顺利提交，至少投稿还算顺利。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 128,
    "title": "校企合作实习",
    "required": false,
    "equalRights": false,
    "category": 3,
    "mainDialog": "被导师叫去办公室，介绍了课题组与$$搭建的「校企合作实习」机会。该项目可以一边实习，一边科研，两者结合，共同发展。",
    "repalceDialog": [
      "比特跳动",
      "鹅鹅",
      "华华",
      "团团",
      "吃了么",
      "拼拼多",
      "蚁蚁",
      "TTLink",
      "巴巴",
      "大米",
      "ShallowSeek"
    ],
    "repetable": true,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "毛遂自建报名，向导师递交简历。",
    "endingA": [
      "你凭借无敌的积极态度，成功拿到名额。并在实习中崭露头角，成为优秀员工，还获企业导师推荐，为未来发展铺就快车道。",
      "家人们谁懂！课题组五个师兄师姐也在申请，你遗憾未获实习机会。但你并未气馁，导师承诺让你明年一定！"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        2
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "考虑通勤过远，坚守在实验室即可。",
    "endingB": "你选择留守实验室。同学凭借实习表现既发表了论文，也拿到留用机会。你虽遗憾，但也专注于课题组任务，成为中坚力量。",
    "resultB": {
      "H": 1,
      "L": 1,
      "A": [
        0,
        1.5
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": true,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  },
  {
    "id": 129,
    "title": "研究生助教",
    "required": false,
    "equalRights": true,
    "category": 3,
    "mainDialog": "F大教务发布了「助教」招募通知，助教也是勤工助学体系的组成部分，其学分还是毕业的必要条件，日常工作需要设计实验、发布通知等。目前，你申请的$$课程助教已审批通过。",
    "repalceDialog": [
      "研究生英语",
      "研究生论文写作",
      "科研论文索引",
      "文献信息阅读",
      "AI课程导论",
      "大模型运用与实践",
      "学术思维训练"
    ],
    "repetable": false,
    "happenYear": [
      5,
      6,
      7,
      8,
      9
    ],
    "requireProps": {
      "H": 20,
      "L": 0,
      "A": 0,
      "C": 20,
      "M": 0
    },
    "mainProp": "A",
    "prerequisites": [],
    "baseProbability": "MEDIUM",
    "upgrade": false,
    "choiceA": "联系老师，申请负责实验设计和验收。",
    "endingA": [
      "你助教工作认真负责，答疑细致出色，课程因你的用心备受好评。于是专业内学生口耳相传，纷纷安利，老师也对你赞誉有加。",
      "课程内容过于抽象，学生理解困难，因此向你反馈。你及时联系老师调整，但难度依旧，教评结果SOS！"
    ],
    "resultA": {
      "H": [
        0,
        1.5
      ],
      "L": [
        0,
        1.5
      ],
      "A": [
        0.5,
        2
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "choiceB": "联系老师，申请负责作业批改和通知发布。",
    "endingB": "",
    "resultB": {
      "H": 0,
      "L": 0,
      "A": [
        0.75,
        0.75
      ],
      "C": [
        0.75,
        0.75
      ],
      "M": [
        0.75,
        0.75
      ]
    },
    "isHighlight": false,
    "bgCategory": 0,
    "specialEffect": "",
    "randIdice": []
  }
];
