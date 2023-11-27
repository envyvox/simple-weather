"use client";

import { Button } from "./ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { ScrollArea } from "./ui/scroll-area";
import { locations } from "@/lib/locations";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

type Props = {
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

export default function LocationPicker({ location, setLocation }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[300px] justify-between"
        >
          {
            locations.find(
              (loc) => loc.label.toLowerCase() === location.toLowerCase()
            )?.label
          }
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Назва міста" />
          <CommandEmpty>Нічого не знайдено :O</CommandEmpty>
          <CommandGroup>
            <ScrollArea className="h-72">
              {locations.map((loc) => (
                <CommandItem
                  key={loc.value}
                  value={loc.label}
                  onSelect={(currentValue) => {
                    setLocation(
                      currentValue === location ? "Київ" : currentValue
                    );
                    setOpen(false);
                  }}
                  className="mr-3"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      location.toLowerCase() === loc.label.toLowerCase()
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {loc.label}
                </CommandItem>
              ))}
            </ScrollArea>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
