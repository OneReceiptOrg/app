import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoiceStore } from "@/lib/store";

interface FarfetchInvoiceFieldsProps {}

export default function FarfetchInvoiceFields({}: FarfetchInvoiceFieldsProps) {
  const {
    farfetchVatNumber,
    farfetchOrderNumber,
    farfetchInvoiceDate,
    farfetchInvoiceNumber,
    farfetchEoriNumber,
    farfetchExportReason,
    farfetchCustomerName,
    farfetchCustomerAddressLine,
    farfetchCustomerCityZip,
    farfetchCustomerRegionCountry,
    farfetchShippingDescription,
    farfetchShippingQuantity,
    farfetchShippingUnitPrice,
    farfetchShippingDiscount,
    farfetchShippingTotalExclVat,
    farfetchShippingTotalInclVat,
    farfetchSubTotalExclVat,
    farfetchTotalDiscount,
    farfetchTaxableAmount,
    farfetchTotalVat,
    farfetchGrandTotal,

    updateFarfetchVatNumber,
    updateFarfetchOrderNumber,
    updateFarfetchInvoiceDate,
    updateFarfetchInvoiceNumber,
    updateFarfetchEoriNumber,
    updateFarfetchExportReason,
    updateFarfetchCustomerName,
    updateFarfetchCustomerAddressLine,
    updateFarfetchCustomerCityZip,
    updateFarfetchCustomerRegionCountry,
    updateFarfetchShippingDescription,
    updateFarfetchShippingQuantity,
    updateFarfetchShippingUnitPrice,
    updateFarfetchShippingDiscount,
    updateFarfetchShippingTotalInclVat,
    calculateTotals,
  } = useInvoiceStore();

  const handleShippingChange = (updateFn: Function, value: string | number) => {
    updateFn(value);
    calculateTotals("farfetch");
  };

  return (
    <div className="space-y-4 border-t pt-4 mt-4">
      <h3 className="text-md font-semibold mb-2">Farfetch Invoice Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="farfetch-order-number">Order Number</Label>
          <Input
            id="farfetch-order-number"
            value={farfetchOrderNumber}
            onChange={(e) => updateFarfetchOrderNumber(e.target.value)}
            placeholder="e.g., VHQ5T2/EB110035472"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-invoice-number">Invoice Number</Label>
          <Input
            id="farfetch-invoice-number"
            value={farfetchInvoiceNumber}
            onChange={(e) => updateFarfetchInvoiceNumber(e.target.value)}
            placeholder="e.g., ITDN0035472664689031"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-invoice-date">Invoice Date</Label>
          <Input
            id="farfetch-invoice-date"
            type="date"
            value={farfetchInvoiceDate}
            onChange={(e) => updateFarfetchInvoiceDate(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-export-reason">Reason for Export</Label>
          <Input
            id="farfetch-export-reason"
            value={farfetchExportReason}
            onChange={(e) => updateFarfetchExportReason(e.target.value)}
            placeholder="e.g., Personal use, not for resale"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="farfetch-vat-number">VAT Number</Label>
          <Input
            id="farfetch-vat-number"
            value={farfetchVatNumber}
            onChange={(e) => updateFarfetchVatNumber(e.target.value)}
            placeholder="e.g., FR09691814410"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-eori-number">EORI Number</Label>
          <Input
            id="farfetch-eori-number"
            value={farfetchEoriNumber}
            onChange={(e) => updateFarfetchEoriNumber(e.target.value)}
            placeholder="e.g., NL861065561"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Customer Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="farfetch-customer-name">Customer Name</Label>
        <Input
          id="farfetch-customer-name"
          value={farfetchCustomerName}
          onChange={(e) => updateFarfetchCustomerName(e.target.value)}
          placeholder="e.g., Lucas Mallak"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="farfetch-customer-address">Customer Address Line</Label>
        <Input
          id="farfetch-customer-address"
          value={farfetchCustomerAddressLine}
          onChange={(e) => updateFarfetchCustomerAddressLine(e.target.value)}
          placeholder="e.g., 14 place du fort"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="farfetch-customer-city-zip">Customer City/Zip</Label>
          <Input
            id="farfetch-customer-city-zip"
            value={farfetchCustomerCityZip}
            onChange={(e) => updateFarfetchCustomerCityZip(e.target.value)}
            placeholder="e.g., Lyon Gerland, 69007"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-customer-region-country">
            Customer Region/Country
          </Label>
          <Input
            id="farfetch-customer-region-country"
            value={farfetchCustomerRegionCountry}
            onChange={(e) =>
              updateFarfetchCustomerRegionCountry(e.target.value)
            }
            placeholder="e.g., Auvergne Rhône-Alpes, France"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Shipping Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="farfetch-shipping-desc">Shipping Description</Label>
        <Input
          id="farfetch-shipping-desc"
          value={farfetchShippingDescription}
          onChange={(e) =>
            handleShippingChange(
              updateFarfetchShippingDescription,
              e.target.value
            )
          }
          placeholder="e.g., Shipping Charges"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="farfetch-shipping-qty">Quantity</Label>
          <Input
            id="farfetch-shipping-qty"
            type="number"
            min="0"
            value={farfetchShippingQuantity}
            onChange={(e) =>
              handleShippingChange(
                updateFarfetchShippingQuantity,
                parseInt(e.target.value) || 0
              )
            }
            placeholder="Qty"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-shipping-unit-price">Unit Price</Label>
          <Input
            id="farfetch-shipping-unit-price"
            type="number"
            step="0.01"
            min="0"
            value={farfetchShippingUnitPrice}
            onChange={(e) =>
              handleShippingChange(
                updateFarfetchShippingUnitPrice,
                parseFloat(e.target.value) || 0
              )
            }
            placeholder="10.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-shipping-discount">Discount</Label>
          <Input
            id="farfetch-shipping-discount"
            type="number"
            step="0.01"
            min="0"
            value={farfetchShippingDiscount}
            onChange={(e) =>
              handleShippingChange(
                updateFarfetchShippingDiscount,
                parseFloat(e.target.value) || 0
              )
            }
            placeholder="0.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-shipping-total-excl-vat">
            Total (Excl. VAT)
          </Label>
          <Input
            id="farfetch-shipping-total-excl-vat"
            value={farfetchShippingTotalExclVat}
            readOnly
            className="bg-muted"
            placeholder="Calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-shipping-total-vat">Total (Incl. VAT)</Label>
          <Input
            id="farfetch-shipping-total-vat"
            type="number"
            step="0.01"
            min="0"
            value={farfetchShippingTotalInclVat}
            onChange={(e) =>
              handleShippingChange(
                updateFarfetchShippingTotalInclVat,
                parseFloat(e.target.value) || 0
              )
            }
            placeholder="12.00"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Calculated Invoice Totals</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="farfetch-subtotal">Items Subtotal (Excl. VAT)</Label>
          <Input
            id="farfetch-subtotal"
            value={farfetchSubTotalExclVat}
            readOnly
            className="bg-muted"
            placeholder="Calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-taxable">Taxable Amount</Label>
          <Input
            id="farfetch-taxable"
            value={farfetchTaxableAmount}
            readOnly
            className="bg-muted"
            placeholder="Calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-discount">Total Discount</Label>
          <Input
            id="farfetch-discount"
            value={farfetchTotalDiscount}
            readOnly
            className="bg-muted"
            placeholder="Calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-vat">Total VAT</Label>
          <Input
            id="farfetch-vat"
            value={farfetchTotalVat}
            readOnly
            className="bg-muted"
            placeholder="Calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="farfetch-grand-total">Grand Total</Label>
          <Input
            id="farfetch-grand-total"
            value={farfetchGrandTotal}
            readOnly
            className="bg-muted font-semibold"
            placeholder="Calculated"
          />
        </div>
      </div>
    </div>
  );
}
