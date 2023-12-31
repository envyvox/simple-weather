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
import { useLocationStore } from "@/store/location-store";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

export default function LocationPicker() {
  const location = useLocationStore((state) => state.location);
  const setLocation = useLocationStore((state) => state.setLocation);
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
              (loc) => loc.label.toLowerCase() === location.toLowerCase(),
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
                  onSelect={(value) => {
                    setLocation(value);
                    setOpen(false);
                  }}
                  className="mr-3"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      location.toLowerCase() === loc.label.toLowerCase()
                        ? "opacity-100"
                        : "opacity-0",
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
