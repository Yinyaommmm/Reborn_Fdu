export const CorporatePath = new Map<number, { path: string; min: number; max: number; doc: string }>([
  [1, { path: "本科生毕业初级工程师", min: 0, max: 0, doc: `你顺利进入企业，从初级工程师做起，虽是公司里的“技术小白”但充满干劲。` }],
  [2, { path: "中级工程师", min: 2, max: 4, doc: `你绩效考核为A，晋升中级工程师，独立负责小型项目，攻克简单技术问题。` }],
  [3, { path: "博士生毕业高级工程师", min: 2, max: 4, doc: `你成为公司高级工程师，负责关键技术攻关，为核心技术的突破做出重要贡献。` }],
  [4, { path: "项目主管", min: 2, max: 4, doc: `你晋升为项目主管，负责调配资源，把控项目进度，确保项目按时高质量交付。` }],
  [5, { path: "研发主任", min: 3, max: 5, doc: `你被提拔为E级研发主任，规划整个部门，制定研发计划，引领技术创新方向。` }],
  [6, { path: "部门领导", min: 4, max: 6, doc: `你晋升为部门领导，负责片区管理和跨部门协作，是战略执行的“中流砥柱”。` }],
  [7, { path: "首席专家", min: 6, max: 10, doc: `你被聘为首席专家，专注于公司战略规划和技术研究，行业内知名度直线上升。` }],
  [8, { path: "公司领导", min: 8, max: 12, doc: `你晋升为公司领导，参与高层决策，把握公司发展方向，成为公司“掌舵人”。` }]
]);
