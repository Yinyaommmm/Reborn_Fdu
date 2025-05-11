export const LovePath = new Map<number, { path: string; min: number; max: number; doc: string }>([
  [1, { path: "相亲", min: 0, max: 2, doc: `家人安排你去相亲，你怀揣着复杂心情赴约。` }],
  [2, { path: "结婚", min: 2, max: 4, doc: `你与伴侣步入婚姻殿堂，开始全新生活旅程。` }],
  [3, { path: "生子", min: 2, max: 5, doc: `你迎来自己的孩子，感受新生命带来的喜悦。` }],
  [4, { path: "孩子结婚", min: 25, max: 32, doc: `爱情线文案待填充4` }],
  [5, { path: "抱孙子", min: 2, max: 5, doc: `爱情线文案待填充5` }],
  [6, { path: "孙子结婚", min: 25, max: 32, doc: `爱情线文案待填充6` }]
]);
