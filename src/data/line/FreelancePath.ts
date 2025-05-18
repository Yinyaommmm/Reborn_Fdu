export const FreelancePath = new Map<number, { path: string; min: number; max: number; doc: string }>([
  [1, { path: "Pre-Seed", min: 0, max: 0, doc: `你怀揣热情，走向创业之路，凭借积蓄和父母支持，你完成了原型设计。` }],
  [2, { path: "天使轮", min: 2, max: 4, doc: `凭借出色的产品原型和路演表现，你吸引天使投资人注资，组建起小型团队。` }],
  [3, { path: "Pre-A轮", min: 2, max: 4, doc: `产品入驻首批用户后，你拿下PreA轮融资，开始扩充团队、加大推广力度。` }],
  [4, { path: "A轮", min: 2, max: 4, doc: `产品用户量稳步增长，你完成A轮融资，聚焦技术优化、市场拓展和团队建设。` }],
  [5, { path: "B轮", min: 3, max: 5, doc: `你带领团队实现盈利，成功获得B轮融资。借力资金，进一步扩大市场份额。` }],
  [6, { path: "C轮及以后", min: 4, max: 6, doc: `你通过C轮融资，成为龙头企业。利用雄厚资金，进行投资收购，巩固行业地位。` }],
  [7, { path: "IPO准备", min: 6, max: 10, doc: `公司市场份额可观，已具备上市潜力。你带领团队筹备IPO，为上市做足准备。` }],
  [8, { path: "并购退出", min: 8, max: 12, doc: `你洞察并购机遇，与资本达成并购协议，实现增值与EXIT，创业旅程圆满收官。` }]
]);
