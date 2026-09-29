import { getMediaStorageServiceClient } from "@/src/features/media/server/getMediaStorageClient";

describe("getMediaStorageServiceClient", () => {
  it("caches one client per bucket", () => {
    const a = getMediaStorageServiceClient("bucket-a");
    const b = getMediaStorageServiceClient("bucket-b");

    expect(a).not.toBe(b);
    expect(getMediaStorageServiceClient("bucket-a")).toBe(a);
    expect(getMediaStorageServiceClient("bucket-b")).toBe(b);
  });
});
