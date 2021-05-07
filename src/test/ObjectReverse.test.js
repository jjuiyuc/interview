import fetchMock from "fetch-mock";
import ObjectReverse from "../component/ObjectReverse";

describe("objectReverse", () => {
    // 每一次測試後清除 fetchMock紀錄
    afterEach(() => {
        fetchMock.restore();
    });
});
