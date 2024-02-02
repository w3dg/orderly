import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingProductsSkeleton = () => {
  return (
    <div className="mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[160px]">
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead>
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead className="hidden lg:table-cell">
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead className="text-right">
              {" "}
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead className="text-right">
              {" "}
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead className="text-right">
              {" "}
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead className="text-right">
              {" "}
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 8 }).map((item, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell className="w-[160px]">
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableCell>
                <TableCell>
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableCell>
                <TableCell className="hidden lg:table-cell">
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="w-10 h-4 rounded-full" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="w-10 h-4 rounded-full" />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default LoadingProductsSkeleton;
