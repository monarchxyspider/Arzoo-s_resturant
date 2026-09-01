"use client";

/**
 * ReservationForm – Table reservation form for Arzoo Restaurant.
 *
 * Fields:
 * - First name
 * - Last name
 * - Reservation date
 * - Number of guests
 *
 * The selected date is displayed using date-fns format().
 * The form is currently presentational and does not have a
 * submit handler yet.
 */

import { useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export default function ReservationForm() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <form className="flex flex-col gap-y-10">
      <div className="grid gap-[30px]">

        {/* Guest name */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <div>
            <Label htmlFor="firstname">First Name</Label>
            <Input id="firstname" type="text" />
          </div>

          <div>
            <Label htmlFor="lastname">Last Name</Label>
            <Input id="lastname" type="text" />
          </div>
        </div>

        {/* Reservation details */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">

          {/* Reservation date */}
          <div>
            <Label>Reservation Date</Label>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="input"
                  className={cn(
                    "w-full justify-start text-left font-normal"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />

                  {date ? (
                    format(date, "PPP")
                  ) : (
                    <span>Select a date</span>
                  )}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Number of guests */}
          <div>
            <Label>Number of Guests</Label>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="How many guests?" />
              </SelectTrigger>

              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Guests</SelectLabel>

                  <SelectItem value="1">1 Guest</SelectItem>
                  <SelectItem value="2">2 Guests</SelectItem>
                  <SelectItem value="3">3 Guests</SelectItem>
                  <SelectItem value="4">4 Guests</SelectItem>
                  <SelectItem value="5">5 Guests</SelectItem>
                  <SelectItem value="6">6 Guests</SelectItem>
                  <SelectItem value="7">7 Guests</SelectItem>
                  <SelectItem value="8">8 Guests</SelectItem>
                  <SelectItem value="9">9 Guests</SelectItem>
                  <SelectItem value="10">10 Guests</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Reservation button */}
        <Button className="uppercase w-full xl:w-auto xl:self-end">
          Reserve a Table
        </Button>
      </div>
    </form>
  );
}