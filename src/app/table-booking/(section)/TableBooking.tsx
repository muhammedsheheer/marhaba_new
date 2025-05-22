"use client";

import TableBookingForm from "@/app/table-booking/(section)/TableBookingForm";

const TableBooking = ({}) => {
  return (
    <div className="z-40 flex h-full w-full max-w-[1300px] items-center justify-center gap-[1.2rem] bg-[#f7f4ed] py-12">
      <TableBookingForm />
    </div>
  );
};

export default TableBooking;
