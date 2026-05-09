// Future-ready data layer. When wiring Prisma + MongoDB, replace these
// constants with server-fn fetches that return the same shapes.

export type PdfDocId = "overview" | "parking" | "a" | "b" | "c" | "d" | "e";

export interface PdfDocument {
  id: PdfDocId;
  i18nKey: string; // residence.docs.items.<key>
  url?: string; // to be filled when PDFs are uploaded
}

export const pdfDocuments: PdfDocument[] = [
  { id: "overview", i18nKey: "overview" },
  { id: "parking", i18nKey: "parking" },
  { id: "a", i18nKey: "a" },
  { id: "b", i18nKey: "b" },
  { id: "c", i18nKey: "c" },
  { id: "d", i18nKey: "d" },
  { id: "e", i18nKey: "e" },
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
  facebook:
    "https://www.facebook.com/profile.php?id=61574057414236",
  instagram: "https://www.instagram.com/hamid_immobilier/",
};

// Replace with the exact coordinates / Maps embed URL once provided.
export const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Ait+Mendil+Beni+Ksila+Bejaia";
