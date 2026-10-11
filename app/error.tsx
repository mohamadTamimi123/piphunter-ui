"use client";

import { Button } from "@nextui-org/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
      <h2 className="text-2xl font-bold">مشکلی پیش آمد</h2>
      <p className="text-default-500">لطفا چند لحظه بعد دوباره تلاش کنید.</p>
      <Button color="primary" onPress={() => reset()}>
        تلاش مجدد
      </Button>
    </div>
  );
}
