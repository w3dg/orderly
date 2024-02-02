import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

const OrderSkeleton = () => {
  return (
    <div className="mt-8">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[160px]">
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead className="hidden lg:table-cell">
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead>
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead>
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
            <TableHead>
              <Skeleton className="w-full h-[20px] rounded-full" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 8 }).map((_, idx) => {
            return (
              <TableRow key={idx}>
                <TableHead className="w-[160px]">
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableHead>
                <TableHead className="hidden lg:table-cell">
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableHead>
                <TableHead>
                  <Skeleton className="w-full h-[20px] rounded-full" />
                </TableHead>
                <TableCell className="text-center">
                  <Skeleton className="w-10 h-4 rounded-full" />
                </TableCell>
                <TableCell className="text-center">
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
export default OrderSkeleton;
