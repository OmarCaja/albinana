import type { CollectionEntry } from "astro:content";
import type { useTranslations } from "./i18n/translations";

type Offer = CollectionEntry<"offers">;
type T = ReturnType<typeof useTranslations>;

// Sort by brand then start date, and merge identical offers whose dates are contiguous
export function groupOffers(offers: Offer[]) {
    const sortedOffers = offers.sort((a, b) => {
        if (a.data.brand < b.data.brand) return -1;
        if (a.data.brand > b.data.brand) return 1;
        return a.data.startDate.localeCompare(b.data.startDate);
    });

    // Group offers only if they are identical AND contiguous
    return sortedOffers.reduce((acc: any[], current) => {
        const existing = acc.find(
            (o) =>
                o.data.brand === current.data.brand &&
                o.data.products === current.data.products &&
                o.data.discount === current.data.discount &&
                // Check if current starts right after existing ends (or same day)
                new Date(current.data.startDate).getTime() -
                    new Date(o.data.endDate).getTime() <=
                    24 * 60 * 60 * 1000 + 1000,
        );

        if (existing) {
            existing.data.endDate = current.data.endDate;
        } else {
            // Deep clone to avoid mutating the original collection
            acc.push(JSON.parse(JSON.stringify(current)));
        }
        return acc;
    }, []);
}

export function getFullOfferText(offer: any, t: T) {
    const { brand, products, discount, startDate, endDate } = offer.data;
    const brandName = brand
        .split(" ")
        .map(
            (w: string) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
        )
        .join(" ");
    const productLower = products.toLowerCase();
    const discountUpper = discount.toUpperCase();

    const todoStr = t("offer.allProducts");
    let titleText = `${brandName}${productLower === "todo" ? ` ${todoStr}` : " " + products.charAt(0).toUpperCase() + products.slice(1).toLowerCase()}`;

    let descriptionText = "";
    if (discountUpper === "3X2") {
        if (productLower === "todo") {
            descriptionText = t("offer.take3pay2") as string;
        } else if (
            productLower.includes("water wipes") ||
            productLower.includes("toallitas")
        ) {
            descriptionText = t("offer.take3pay2wipes") as string;
        } else {
            descriptionText = (t("offer.take3pay2in") as Function)(
                productLower,
            );
        }
    } else if (discountUpper.includes("2ªUD")) {
        const euro = discountUpper.match(/(\d+)€/)?.[1];
        if (euro) {
            descriptionText = (t("offer.2ndUnitEuro") as Function)(euro);
        } else {
            const pct = discountUpper.match(/(\d+)%/)?.[1] || discountUpper;
            descriptionText = (t("offer.2ndUnit") as Function)(pct);
        }
        if (brand.toUpperCase() === "REIG JOFRE") {
            descriptionText += " " + t("offer.2ndUnitAllYear");
        }
    } else if (discountUpper.match(/^\d+%\s+X\s+OTRO\s+PRODUCTO$/)) {
        const pct = discountUpper.match(/(\d+)%/)![1];
        descriptionText = (t("offer.pctWithOtherProduct") as Function)(pct);
    } else if (discountUpper.includes("EN COMPRAS >")) {
        const pctMatch = discountUpper.match(/(\d+%)/)?.[1] || "";
        const amountMatch = discountUpper.match(/(\d+€)/)?.[1] || "";
        descriptionText = (t("offer.percentOverAmount") as Function)(
            pctMatch,
            amountMatch,
        );
    } else if (/^1UD\s+\S+\s+2UD\s+\S+\s+3UD\s+\S+$/i.test(discountUpper)) {
        const parts = discountUpper.split(/\s+/);
        descriptionText = (t("offer.steppedDiscount3") as Function)(
            parts[1],
            parts[3],
            parts[5],
        );
    } else if (/^1UD\s+\S+\s+2UD\s+\S+$/i.test(discountUpper)) {
        const parts = discountUpper.split(/\s+2UD\s+/i);
        const firstVal = parts[0].replace(/^1UD\s+/i, "");
        const secondVal = parts[1];
        descriptionText = (t("offer.steppedDiscount") as Function)(
            firstVal,
            secondVal,
        );
    } else if (discountUpper.includes("%")) {
        descriptionText = (t("offer.directDiscount") as Function)(discount);
    } else if (discountUpper.match(/^\d+\s?€$/)) {
        descriptionText = (t("offer.directDiscount") as Function)(discount);
    } else if (/^\d+€\s+EN\s+1UD\s+O\s+\d+€\s+EN\s+2UD$/i.test(discountUpper)) {
        const match = discountUpper.match(/(\d+)€\s+EN\s+1UD\s+O\s+(\d+)€\s+EN\s+2UD/i);
        descriptionText = (t("offer.xein1udOrYein2ud") as Function)(match![1], match![2]);
    } else if (discountUpper.includes("10€ EN 2UD")) {
        if (brand.toUpperCase() === "ISDIN") {
            descriptionText = t("offer.10in2units") as string;
            if (new Date(startDate).getMonth() === 3) {
                // April
                descriptionText = t("offer.10in2unitsApril") as string;
            }
        } else {
            descriptionText = t("offer.10in2unitsGeneric") as string;
        }
    } else if (
        discountUpper.includes("1UD 3€ 2UD 8€") &&
        discountUpper.includes("3X2")
    ) {
        descriptionText = t("offer.1u3e2u8eOr3x2") as string;
    } else {
        descriptionText = discount;
    }

    return { title: titleText, description: descriptionText };
}
