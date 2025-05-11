export const CivilServantPath = new Map<number, { path: string; min: number; max: number; doc: string }>([
  [1, { path: "基层锻炼", min: 0, max: 0, doc: `你进入基层锻炼，积累经验，为未来打下基础。` }],
  [2, { path: "任职定级", min: 1, max: 2, doc: `你基层表现良好，回到单位完成任职定级。` }],
  [3, { path: "乡科级副职", min: 2, max: 4, doc: `你因工作出色，被提拔为乡科级副职干部。` }],
  [4, { path: "乡科级正职", min: 4, max: 6, doc: `你能力突出，晋升为乡科级正职干部。` }],
  [5, { path: "县处级副职", min: 4, max: 6, doc: `你被调往县城，担任县处级副职领导。` }],
  [6, { path: "县处级正职", min: 6, max: 10, doc: `你凭借出色政绩，升任县处级正职领导。` }],
  [7, { path: "厅局级副职", min: 6, max: 10, doc: `你调往市里，开始担任厅局级副职领导。` }],
  [8, { path: "厅局级正职", min: 6, max: 10, doc: `你德高望重，荣升为厅局级正职领导。` }]
]);
