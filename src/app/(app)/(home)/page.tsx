"use client";

import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const trpc = useTRPC();
  const cateogries = useQuery(trpc.categories.getMany.queryOptions());

  return <div>Home</div>;
}
