import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
    amount: number,
    currency: string = "USD",
    locale: string = "en-US"
) {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(amount)
}