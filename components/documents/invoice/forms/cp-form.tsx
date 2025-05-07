import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoiceStore } from "@/lib/store";

interface CPInvoiceFieldsProps {}

export default function CPInvoiceFields({}: CPInvoiceFieldsProps) {
  const {
    cpCompanyInvoiceNumber,
    cpCompanyInvoiceDate,
    cpCompanyAddressLine1,
    cpCompanyPostalCode,
    cpCompanyCity,
    cpCompanyPhoneNumber,
    cpCompanyEmail,
    cpCompanyClientName,
    cpCompanyClientAddress,
    cpCompanyClientCity,
    cpCompanyClientPhoneNumber,
    cpCompanyClientEmail,
    cpCompanyPaymentMethod,
    cpCompanyDueDate,
    cpCompanyProductDescription,
    cpCompanyProductQuantity,
    cpCompanyProductUnitPriceHT,
    cpCompanyProductVatRate,
    cpCompanyProductTotalHT,
    cpCompanyProductTotalVATAmount,
    cpCompanyProductTotalTTC,
    cpCompanyGrandTotalHT,
    cpCompanyGrandTotalVAT,
    cpCompanyGrandTotalTTC,
    updateCpCompanyInvoiceNumber,
    updateCpCompanyInvoiceDate,
    updateCpCompanyAddressLine1,
    updateCpCompanyPostalCode,
    updateCpCompanyCity,
    updateCpCompanyPhoneNumber,
    updateCpCompanyEmail,
    updateCpCompanyClientName,
    updateCpCompanyClientAddress,
    updateCpCompanyClientCity,
    updateCpCompanyClientPhoneNumber,
    updateCpCompanyClientEmail,
    updateCpCompanyPaymentMethod,
    updateCpCompanyDueDate,
    updateCpCompanyProductDescription,
    updateCpCompanyProductQuantity,
    updateCpCompanyProductUnitPriceHT,
    updateCpCompanyProductVatRate,
  } = useInvoiceStore();

  return (
    <div className="space-y-4 border-t pt-4 mt-4">
      <h3 className="text-md font-semibold mb-2">CP Company Invoice Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="cp-invoice-number">Numéro de facture</Label>
          <Input
            id="cp-invoice-number"
            value={cpCompanyInvoiceNumber}
            onChange={(e) => updateCpCompanyInvoiceNumber(e.target.value)}
            placeholder="F2023-1212"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-invoice-date">Date</Label>
          <Input
            id="cp-invoice-date"
            value={cpCompanyInvoiceDate}
            onChange={(e) => updateCpCompanyInvoiceDate(e.target.value)}
            placeholder="26/10/2024"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-due-date">Date d'échéance</Label>
          <Input
            id="cp-due-date"
            value={cpCompanyDueDate}
            onChange={(e) => updateCpCompanyDueDate(e.target.value)}
            placeholder="10/11/2024"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="cp-payment-method">Méthode de paiement</Label>
        <Input
          id="cp-payment-method"
          value={cpCompanyPaymentMethod}
          onChange={(e) => updateCpCompanyPaymentMethod(e.target.value)}
          placeholder="carte bancaire"
        />
      </div>

      <h4 className="text-sm font-medium pt-2">Company Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="cp-company-address">Adresse</Label>
        <Input
          id="cp-company-address"
          value={cpCompanyAddressLine1}
          onChange={(e) => updateCpCompanyAddressLine1(e.target.value)}
          placeholder="94 rue RENE BOULANGER, 75010"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="cp-company-postal-code">Code Postal</Label>
          <Input
            id="cp-company-postal-code"
            value={cpCompanyPostalCode}
            onChange={(e) => updateCpCompanyPostalCode(e.target.value)}
            placeholder="75010"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-company-city">Ville</Label>
          <Input
            id="cp-company-city"
            value={cpCompanyCity}
            onChange={(e) => updateCpCompanyCity(e.target.value)}
            placeholder="Paris"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-company-phone">Numéro de téléphone</Label>
          <Input
            id="cp-company-phone"
            value={cpCompanyPhoneNumber}
            onChange={(e) => updateCpCompanyPhoneNumber(e.target.value)}
            placeholder="01 48 03 35 58"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cp-company-email">Company Email</Label>
        <Input
          id="cp-company-email"
          type="email"
          value={cpCompanyEmail}
          onChange={(e) => updateCpCompanyEmail(e.target.value)}
          placeholder="customerservice@cpcompany.com"
        />
      </div>

      <h4 className="text-sm font-medium pt-2">Client Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="cp-client-name">Nom du client</Label>
        <Input
          id="cp-client-name"
          value={cpCompanyClientName}
          onChange={(e) => updateCpCompanyClientName(e.target.value)}
          placeholder="Aristide Gilgean"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="cp-client-address">Client Adresse</Label>
        <Input
          id="cp-client-address"
          value={cpCompanyClientAddress}
          onChange={(e) => updateCpCompanyClientAddress(e.target.value)}
          placeholder="Rue des chênes 139"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="cp-client-city">Ville</Label>
          <Input
            id="cp-client-city"
            value={cpCompanyClientCity}
            onChange={(e) => updateCpCompanyClientCity(e.target.value)}
            placeholder="Wihérie"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-client-phone">Tel</Label>
          <Input
            id="cp-client-phone"
            value={cpCompanyClientPhoneNumber}
            onChange={(e) => updateCpCompanyClientPhoneNumber(e.target.value)}
            placeholder="0492125567"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-client-email">Client Email</Label>
          <Input
            id="cp-client-email"
            type="email"
            value={cpCompanyClientEmail}
            onChange={(e) => updateCpCompanyClientEmail(e.target.value)}
            placeholder="gilgeanaristide@gmail.com"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Product Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="cp-product-description">Description du produit</Label>
        <Input
          id="cp-product-description"
          value={cpCompanyProductDescription}
          onChange={(e) => updateCpCompanyProductDescription(e.target.value)}
          placeholder="Extra Fine Merino Wool Goggle Beanie"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="cp-product-quantity">Quantité</Label>
          <Input
            id="cp-product-quantity"
            type="number"
            value={cpCompanyProductQuantity}
            onChange={(e) =>
              updateCpCompanyProductQuantity(Number(e.target.value))
            }
            placeholder="1"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-product-unit-price">Prix unitaire HT</Label>
          <Input
            id="cp-product-unit-price"
            type="number"
            step="0.01"
            value={cpCompanyProductUnitPriceHT}
            onChange={(e) =>
              updateCpCompanyProductUnitPriceHT(Number(e.target.value))
            }
            placeholder="115.70"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-product-vat-rate">Taux de TVA (%)</Label>
          <Input
            id="cp-product-vat-rate"
            type="number"
            value={cpCompanyProductVatRate}
            onChange={(e) =>
              updateCpCompanyProductVatRate(Number(e.target.value))
            }
            placeholder="21"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Totals (Auto-calculated)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="cp-product-total-ht">Total HT</Label>
          <Input
            id="cp-product-total-ht"
            value={cpCompanyProductTotalHT.toFixed(2)}
            readOnly
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-product-total-vat">Montant TVA</Label>
          <Input
            id="cp-product-total-vat"
            value={cpCompanyProductTotalVATAmount.toFixed(2)}
            readOnly
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="cp-product-total-ttc">Total TTC</Label>
          <Input
            id="cp-product-total-ttc"
            value={cpCompanyProductTotalTTC.toFixed(2)}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}
