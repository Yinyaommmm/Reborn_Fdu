import * as XLSX from "xlsx";

import { createEvtFromStroyEvent } from "./read-components";
import { StoryEvent, ReadableEvent } from "../type/type";

export const ReadExcelFromPublic = async () => {
    const res = await fetch("/419.xlsx");
    const arrayBuffer = await res.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonArr: StoryEvent[] = XLSX.utils.sheet_to_json(worksheet, {
        defval: "",
    });
    const events: ReadableEvent[] = jsonArr.map((item, index) =>
        createEvtFromStroyEvent(item, index),
    );
    return events;
};
