import * as XLSX from "xlsx";

import { StoryEvent, Event } from "../type/type";
export const ReadExcelFromPublic = async () => {
    const res = await fetch("/plot.xlsx");
    const arrayBuffer = await res.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonArr: StoryEvent[] = XLSX.utils.sheet_to_json(worksheet, {
        defval: "",
    });
    const events: Event[] = jsonArr.map((item) => {
        return new Event();
    });
    console.log("origin", jsonArr);
    console.log("convert", events);
};
