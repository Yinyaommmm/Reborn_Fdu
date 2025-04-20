import * as XLSX from "xlsx";

import { createEvtFromStroyEvent } from "./read-components";
import { StoryEvent, Event } from "../type/type";

export const ReadExcelFromPublic = async () => {
    const res = await fetch("/419.xlsx");
    const arrayBuffer = await res.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: "array" });
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const jsonArr: StoryEvent[] = XLSX.utils.sheet_to_json(worksheet, {
        defval: "",
    });
    const events: Event[] = jsonArr.map((item, index) =>
        createEvtFromStroyEvent(item, index),
    );
    console.log("origin", jsonArr);
    console.log(
        "convert",
        events.map((item) => item.specialEffect),
    );
};
