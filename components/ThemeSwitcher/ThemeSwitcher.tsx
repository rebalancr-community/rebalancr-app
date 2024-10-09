"use client";

import { FC } from "react";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { SwitchProps, useSwitch } from "@nextui-org/switch";
import clsx from "clsx";

import { useThemeSwitcher } from "./useThemeSwitcher";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface IThemeSwitcher {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitcher: FC<IThemeSwitcher> = ({
  className,
  classNames,
}) => {
  const themeSwitcher = useThemeSwitcher();
  const theme = themeSwitcher ? themeSwitcher.theme : "light"; // Default to "light" if null

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "light",
    "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
  });

  return (
    <Component
      {...getBaseProps({
        className: clsx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: clsx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper
          ),
        })}
      >
        {!isSelected ? (
          <SunFilledIcon
            size={22}
            onClick={() => themeSwitcher?.setTheme("light")}
          />
        ) : (
          <MoonFilledIcon
            size={22}
            onClick={() => themeSwitcher?.setTheme("dark")}
          />
        )}
      </div>
    </Component>
  );
};
