export interface Template {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  previewImageUrl: string;
  receipts: Array<{
    id: string;
    name: string;
    selector?: string;
    assetsInline?: boolean;
    filename: string;
  }>;
  invoices: Array<{
    id: string;
    name: string;
    selector?: string;
    assetsInline?: boolean;
    filename: string;
  }>;
}
