export function ReadErrorFactory(index: number, prop: string, reason: string) {
    return new Error(`第${index}条记录的${prop}属性出错:${reason} `);
}
