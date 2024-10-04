"use client";

import * as React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/ui/table";

// Simulate dynamic NASA OSDR data
const fetchData = () => [
  {
    id: "sat123",
    telemetry: "OK",
    altitude: 400,
    status: "Active",
    email: "mission.control@nasa.gov",
  },
  {
    id: "sat456",
    telemetry: "Intermittent",
    altitude: 375,
    status: "Monitoring",
    email: "data.ops@nasa.gov",
  },
  {
    id: "sat789",
    telemetry: "Critical",
    altitude: 390,
    status: "Emergency",
    email: "alert@nasa.gov",
  },
  // More rows...
];

function DataTableDemo() {
  const [data, setData] = React.useState(fetchData());

  const columns = React.useMemo<ColumnDef<any>[]>(
    () =>
      Object.keys(data[0] || {}).map((key) => ({
        accessorKey: key,
        header: key.charAt(0).toUpperCase() + key.slice(1),
        cell: ({ row }) => (
          <div className="text-gray-300 animate-fadeIn">{row.getValue(key)}</div>
        ),
      })),
    [data]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div 
    id="banner"
    className="w-full md:h-[120vh] min-[390px]:h-[140vh] h-[115vh] md:bg-fixed bg-[url(./assets/bg-banner.png)] lg:px-24 lg:bg-top md:px-5 px-1 md:bg-center bg-cover bg-no-repeat text-white"
    >
      {/* Background animation */}
      <div className="absolute inset-0 bg-starfield opacity-20 z-0" />

      {/* Title */}
      <h1 
        className="self-start md:self-auto my-5 py-1 lg:text-4xl pt-12 text-5xl font-bold drop-shadow-[1px_5px_0_rgb(145,47,179)]"
      >
        NASA PLACE HOLDER
      </h1>

      {/* Search and Filter Bar */}
      <div className="flex items-center py-4 z-10 relative">
        <Input
          placeholder="Filter by status..."
          className=" rounded-xl text-transparent bg-clip-text bg-gradient-to-br from-gray-400 to-white border-gray-300"
          onChange={(e) => {
            const filterValue = e.target.value;
            const filteredData = fetchData().filter((row) =>
              Object.values(row).some((val) =>
                String(val).toLowerCase().includes(filterValue.toLowerCase())
              )
            );
            setData(filteredData);
          }}
        />
      </div>

      {/* Animated Data Table */}
      <div className="border border-gray-400 rounded-xl z-10 relative animate-slideUp bg-glass-effect shadow-lg backdrop-blur-md">
        <Table className="table-auto min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="text-gray-200">
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="px-4 py-2 text-left text-lg tracking-wider border-b text-gray-200 border-gray-600"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="hover:bg-white/5 hover:scale-[1.01] transition-transform duration-200 ease-out"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-4 py-2 text-lg text-gray-500"
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-gray-500"
                >
                  No results found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="flex items-center justify-end space-x-4 py-4 z-10 relative mt-4">
        <Button
          variant="outline"
          size="lg"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="hover:shadow-space hover:glow-on-hover bg-gradient-to-r from-white/10 to-purple-300/10  text-gray-300 px-6 py-2 rounded-md"
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="lg"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="hover:shadow-space hover:glow-on-hover bg-gradient-to-r from-white/10 to-purple-300/10 text-gray-300 px-6 py-2 rounded-md"
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DataTableDemo;

/* Additional Styles for Space-Themed Luxury */
<style jsx>{`
  .bg-deep-space {
    background: radial-gradient(circle at 50% 50%, #0b0d2b, #000);
  }

  .bg-starfield {
    background: url('/path-to-starfield.jpg');
    background-size: cover;
    background-position: center;
  }

  .bg-glass-effect {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .hover:glow-on-hover {
    transition: box-shadow 0.3s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0);
  }

  .hover:glow-on-hover:hover {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.6s ease-in-out forwards;
  }

  .animate-slideUp {
    animation: slideUp 0.8s ease-out forwards;
  }
`}</style>
