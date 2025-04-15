export interface StoryEvent {
    A创造C: string;
    A学术A: string;
    A幸运L: string; // 示例是 "[0,1]"，可以保留 string 或自定义范围类型
    A管理M: string;
    A诚信H: string; // 示例是 "[0,1.5]"
    B创造C: string;
    B学术A: string;
    B幸运L: string;
    B管理M: string;
    B诚信H: string;
    R创造C: string;
    R学术A: string;
    R幸运L: string;
    R管理M: string;
    R诚信H: string;
    主属性: string;
    主题: string;
    出现学年: string; // 示例为 "[1]\r\n[5]"，你可以考虑处理成 number[]（拓展建议见下方）
    前置事件: string;
    升阶: string;
    可选性: string; // e.g. "必选"
    基础概率: string; // e.g. "TRIVIAL"
    对话文案: string;
    特殊影响: string;
    等权重: string; // e.g. "是"
    类别: string; // e.g. "培养方案"
    结局A: string;
    结局B: string;
    编号: number;
    背景图类别: string;
    选项A: string;
    选项B: string;
    重复性: string;
    高光事件: string;
  }
  
export enum EventCategory{
    PYFA = 0, //培养方案
    CGQY = 1,  //出国企业
    JXPY = 2 , // 竞选评优
    XSTS = 3 , // 学术提升
    XSGZ = 4 , // 学生工作
    SZTZ = 5 , // 素质拓展
    XYSJ = 6 // 幸运事件
}

export enum RequirePropLevel {
    None,
    D,
    C,
    B,
    A,
    S
}
export const NoneRequiredPropFactory = ()=> {return {
    H: RequirePropLevel.None,
    L: RequirePropLevel.None,
    A: RequirePropLevel.None,
    C: RequirePropLevel.None,
    M: RequirePropLevel.None,
}}
export enum Prop {
    H,
    L,
    A,
    C,
    M
}
export enum BaseProbability{
    TRIVIAL,
    EASY,
    MEDIUM,
    HARD,
    VERYHARD
}

export enum ResultLevel  {
    X,
    I,
    II,
    III,
    IV
}
export class ResultA {
    H : [number,number] = [0,0]
    L : [number,number] = [0,0]
    A : ResultLevel = ResultLevel.X
    C : ResultLevel = ResultLevel.X
    M : ResultLevel = ResultLevel.X

}
export class ResultB{
    // todo
}
export enum BgCategory{
    NONE,
    CAMPUS,
    CLASSROOM,
    GYM,
    PLAYGROUND,
    LAB,
    OFFICE,
    PRACTICE,
    AUDITORIUM,
    DORMITORY,
    TOUR
}

export class Event {
    id : number =0 ;
    title: string = "无主题";
    required : boolean = false;
    equalRights :boolean = false;
    category : EventCategory = EventCategory.PYFA
    // 对话文案
    mainDialog : string = ""
    repalceDialog : string[] = []

    repetable :boolean = false
    happenYear :number[] = []
    requireProps : {
        H : RequirePropLevel 
        L : RequirePropLevel
        A : RequirePropLevel
        C : RequirePropLevel
        M : RequirePropLevel
    } = NoneRequiredPropFactory()
    mainProp:Prop =  Prop.H

    prerequisites :number[] =[]

    baseProbability : BaseProbability = BaseProbability.TRIVIAL
    upgrade : boolean = false

    choiceA : string= ""
    endingA : string[] = []
    resultA : ResultA = new ResultA()

    choiceB :  string = ""
    endingB : string = ""
    resultB : ResultB = new ResultB()

    isHighlight :boolean = false
    bgCategory : BgCategory = BgCategory.NONE
    specialEffect : string = ""

}