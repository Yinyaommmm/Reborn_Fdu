export const YoungResearcherPath = new Map<number, { path: string; min: number; max: number; doc: string }>([
  [1, { path: "博士后", min: 0, max: 0, doc: `你从F大博士毕业后选择留校做博士后，开启学术“卷王”模式。` }],
  [2, { path: "硕导 副教授", min: 2, max: 4, doc: `你评上[副教授, 硕导]后朋友圈晒成果，却被同行评论下次冲正高。` }],
  [3, { path: "博导 教授", min: 2, max: 4, doc: `你成为[教授, 博导]后，学生送外号“卷王导师”，每周组会开到凌晨。` }],
  [4, { path: "院长助理", min: 3, max: 5, doc: `你因组织协调能力强，被聘为院长助理。` }],
  [5, { path: "副院长", min: 3, max: 5, doc: `你积累了经验，晋升为副院长。` }],
  [6, { path: "院长", min: 5, max: 8, doc: `你能力突出，成为院长。` }],
  [7, { path: "副校长", min: 5, max: 8, doc: `你因卓越的领导才能，被任命为副校长。` }],
  [8, { path: "校长", min: 5, max: 8, doc: `你凭借深厚的学术造诣，荣任校长。` }]
]);
