// Future-ready data layer. When wiring Prisma + MongoDB, replace these
// constants with server-fn fetches that return the same shapes.

import overviewUrl from "@/assets/pdfs/OVERVEW.pdf?url";
import parkingUrl from "@/assets/pdfs/parking.pdf?url";
import batimentAUrl from "@/assets/pdfs/Batiment A.pdf?url";
import batimentBUrl from "@/assets/pdfs/Batiment B.pdf?url";
import batimentCUrl from "@/assets/pdfs/Batiment C.pdf?url";
import batimentDUrl from "@/assets/pdfs/Batiment D.pdf?url";
import batimentEUrl from "@/assets/pdfs/Batiment E.pdf?url";

export type PdfDocId = "overview" | "parking" | "a" | "b" | "c" | "d" | "e";

export interface PdfDocument {
  id: PdfDocId;
  i18nKey: string; // residence.docs.items.<key>
  url?: string;
}

export const pdfDocuments: PdfDocument[] = [
  { id: "overview", i18nKey: "overview", url: overviewUrl },
  { id: "parking", i18nKey: "parking", url: parkingUrl },
  { id: "a", i18nKey: "a", url: batimentAUrl },
  { id: "b", i18nKey: "b", url: batimentBUrl },
  { id: "c", i18nKey: "c", url: batimentCUrl },
  { id: "d", i18nKey: "d", url: batimentDUrl },
  { id: "e", i18nKey: "e", url: batimentEUrl },
];

export interface ContactPerson {
  name: string;
  role?: string;
  phone: string;
  display: string;
}

export const contacts: ContactPerson[] = [
  { name: "Ismail Mouloud", role: "DZ", phone: "+213541187459", display: "+213 541 187 459" },
  { name: "Ismail Mouloud", role: "FR", phone: "+33683293055", display: "+33 6 83 29 30 55" },
  { name: "Bouanani Mouhand", phone: "+213560929691", display: "+213 560 929 691" },
  { name: "Bouanani Abdelghani", phone: "+213560960479", display: "+213 560 960 479" },
  { name: "Chouali Amel", phone: "+213560380005", display: "+213 560 380 005" },
];

export const socials = {
  facebook: "https://www.facebook.com/profile.php?id=61574057414236",
  instagram: "https://www.instagram.com/hamid_immobilier/",
};

// Replace with the exact coordinates / Maps embed URL once provided.
export const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Ait+Mendil+Beni+Ksila+Bejaia";

export const agencyMapsLink =
  "https://www.google.com/maps/search/?api=1&query=Cit%C3%A9+Somacob+B%C3%A9ja%C3%AFa+Algeria";
