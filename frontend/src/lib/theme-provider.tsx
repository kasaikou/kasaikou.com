"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme as nextUseTheme } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export function useTheme() {
    const { setTheme } = nextUseTheme();

    return function (mode: string) {
        setTheme(mode);
    }
}
