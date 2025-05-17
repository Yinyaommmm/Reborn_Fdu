export const CounselorPath = new Map<number, { path: string; min: number; max: number; doc: string }>([
  [1, { path: "专职辅导员", min: 0, max: 0, doc: `你硕士毕业后，应聘成为A院系专职辅导员。分管[分团委, 就业, 资助, 园区]工作。` }],
  [2, { path: "学工/研工组长", min: 2, max: 4, doc: `你因工作能力突出，被提拔为[学工组长, 研工组长]。` }],
  [3, { path: "院办公室主任", min: 2, max: 4, doc: `你积累了丰富经验，成功竞选学院党委副书记。` }],
  [4, { path: "挂职轮岗", min: 3, max: 5, doc: `你积累了领导岗位工作经验，当选学校某机关负责人。` }],
  [5, { path: "院党委副书记", min: 3, max: 5, doc: `你积累了丰富经验，成功竞选学院党委副书记。` }],
  [6, { path: "院党委书记", min: 6, max: 10, doc: `你凭借出色领导才能，当选学院党委书记。` }],
  [7, { path: "校党委副书记", min: 4, max: 8, doc: `你能力得到认可，进入学校党委担任副书记。` }],
  [8, { path: "校党委书记", min: 8, max: 12, doc: `你历经多年磨砺，荣任学校党委书记。` }]
]);
