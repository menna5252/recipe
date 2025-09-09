import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard({ count = 8 }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 ">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex flex-col space-y-3">
          <Skeleton className="h-[250px] w-[250px] rounded-xl bg-gray-300" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}
