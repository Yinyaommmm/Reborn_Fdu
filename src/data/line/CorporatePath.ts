export const CorporatePath = new Map<number, { path: string; min: number; max: number; doc: string }>([
  [1, { path: "本科生毕业A级工程师", min: 0, max: 0, doc: `你刚入职时是A级，随着努力工作逐步晋升。` }],
  [2, { path: "研究生毕业B级中级工程师", min: 2, max: 4, doc: `你刚入职时是B级，随着努力工作逐步晋升。` }],
  [3, { path: "博士生毕业C级高级工程师", min: 2, max: 4, doc: `你刚入职时是C级，随着努力工作逐步晋升。` }],
  [4, { path: "D级项目主管", min: 2, max: 4, doc: `你积累了若干项目经验，达到D级，成为项目主管，带领团队。` }],
  [5, { path: "E级研发主任", min: 3, max: 5, doc: `你的项目成果转化率爆表，公司任命你为研发主任，职级E级` }],
  [6, { path: "F级部门领导", min: 4, max: 6, doc: `你能力出众，已到F级，担任部门领导职务。` }],
  [7, { path: "G级首席专家", min: 6, max: 10, doc: `你成为公司各业务部门的领头雁，G级首席专家。` }],
  [8, { path: "S级公司领导", min: 8, max: 12, doc: `你天赋异禀，达到S级，是公司高级别boss。` }]
]);
