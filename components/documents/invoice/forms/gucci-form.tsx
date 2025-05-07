import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoiceStore } from "@/lib/store";
import type { GucciSlice } from "@/lib/store";

interface GucciInvoiceFieldsProps {}

export default function GucciInvoiceFields({}: GucciInvoiceFieldsProps) {
  const {
    gucciOrderNumber,
    gucciOrderDate,
    gucciBillingName,
    gucciBillingAddressLine,
    gucciBillingCityStateZip,
    gucciBillingPhone,
    gucciBillingEmail,
    gucciPaymentMethod,
    gucciShippingName,
    gucciShippingAddressLine,
    gucciShippingCityStateZip,
    gucciShippingPhone,
    gucciShippingEmail,
    gucciShippingMethod,
    gucciReturnReasonCode,
    gucciSubTotal,
    gucciShippingCost,
    gucciTax,
    gucciFinalTotal,

    updateGucciOrderNumber,
    updateGucciOrderDate,
    updateGucciBillingName,
    updateGucciBillingAddressLine,
    updateGucciBillingCityStateZip,
    updateGucciBillingPhone,
    updateGucciBillingEmail,
    updateGucciPaymentMethod,
    updateGucciShippingName,
    updateGucciShippingAddressLine,
    updateGucciShippingCityStateZip,
    updateGucciShippingPhone,
    updateGucciShippingEmail,
    updateGucciShippingMethod,
    updateGucciReturnReasonCode,
    updateGucciSubTotal,
    updateGucciShippingCost,
    updateGucciTax,
    updateGucciFinalTotal,
  } = useInvoiceStore();

  return (
    <div className="space-y-4 border-t pt-4 mt-4">
      <h3 className="text-md font-semibold mb-2">Gucci Invoice Details</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="gucci-order-number">Order Number</Label>
          <Input
            id="gucci-order-number"
            value={gucciOrderNumber}
            onChange={(e) => updateGucciOrderNumber(e.target.value)}
            placeholder="e.g., 440299181"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="gucci-order-date">Order Date</Label>
          <Input
            id="gucci-order-date"
            type="date"
            value={gucciOrderDate}
            onChange={(e) => updateGucciOrderDate(e.target.value)}
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Billing Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="gucci-billing-name">Billing Name</Label>
        <Input
          id="gucci-billing-name"
          value={gucciBillingName}
          onChange={(e) => updateGucciBillingName(e.target.value)}
          placeholder="e.g., Kayne West"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-billing-address">Billing Address Line</Label>
        <Input
          id="gucci-billing-address"
          value={gucciBillingAddressLine}
          onChange={(e) => updateGucciBillingAddressLine(e.target.value)}
          placeholder="e.g., 555 Ocean Drive"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-billing-city-zip">Billing City/State/Zip</Label>
        <Input
          id="gucci-billing-city-zip"
          value={gucciBillingCityStateZip}
          onChange={(e) => updateGucciBillingCityStateZip(e.target.value)}
          placeholder="e.g., LOS ANGELES, CA 90100"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="gucci-billing-phone">Billing Phone</Label>
          <Input
            id="gucci-billing-phone"
            type="tel"
            value={gucciBillingPhone}
            onChange={(e) => updateGucciBillingPhone(e.target.value)}
            placeholder="e.g., +1 (505) 444-5991"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="gucci-billing-email">Billing Email</Label>
          <Input
            id="gucci-billing-email"
            type="email"
            value={gucciBillingEmail}
            onChange={(e) => updateGucciBillingEmail(e.target.value)}
            placeholder="e.g., theyea@yahoo.com"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-payment-method">Payment Method</Label>
        <Input
          id="gucci-payment-method"
          value={gucciPaymentMethod}
          onChange={(e) => updateGucciPaymentMethod(e.target.value)}
          placeholder="e.g., Visa"
        />
      </div>

      <h4 className="text-sm font-medium pt-2">Shipping Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="gucci-shipping-name">Shipping Name</Label>
        <Input
          id="gucci-shipping-name"
          value={gucciShippingName}
          onChange={(e) => updateGucciShippingName(e.target.value)}
          placeholder="e.g., Kayne West"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-shipping-address">Shipping Address Line</Label>
        <Input
          id="gucci-shipping-address"
          value={gucciShippingAddressLine}
          onChange={(e) => updateGucciShippingAddressLine(e.target.value)}
          placeholder="e.g., 555 Ocean Drive"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-shipping-city-zip">Shipping City/State/Zip</Label>
        <Input
          id="gucci-shipping-city-zip"
          value={gucciShippingCityStateZip}
          onChange={(e) => updateGucciShippingCityStateZip(e.target.value)}
          placeholder="City, State/Province, ZIP/Postal Code"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="gucci-shipping-phone">Shipping Phone</Label>
          <Input
            id="gucci-shipping-phone"
            type="tel"
            value={gucciShippingPhone}
            onChange={(e) => updateGucciShippingPhone(e.target.value)}
            placeholder="e.g., +1 (505) 444-5991"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="gucci-shipping-email">Shipping Email</Label>
          <Input
            id="gucci-shipping-email"
            type="email"
            value={gucciShippingEmail}
            onChange={(e) => updateGucciShippingEmail(e.target.value)}
            placeholder="e.g., theyea@yahoo.com"
          />
        </div>
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-shipping-method">Shipping Method</Label>
        <Input
          id="gucci-shipping-method"
          value={gucciShippingMethod}
          onChange={(e) => updateGucciShippingMethod(e.target.value)}
          placeholder="e.g., Standard Delivery"
        />
      </div>

      <h4 className="text-sm font-medium pt-2">Totals & Other</h4>
      <div className="grid gap-2">
        <Label htmlFor="gucci-shipping-cost">Shipping Cost</Label>
        <Input
          id="gucci-shipping-cost"
          type="number"
          step="0.01"
          value={gucciShippingCost}
          onChange={(e) => updateGucciShippingCost(e.target.value)}
          placeholder="0.00"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-subtotal">Sub Total (Auto-calculated)</Label>
        <Input
          id="gucci-subtotal"
          value={gucciSubTotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from items"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-tax">Tax (Auto-calculated)</Label>
        <Input
          id="gucci-tax"
          value={gucciTax}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-final-total">Final Total (Auto-calculated)</Label>
        <Input
          id="gucci-final-total"
          value={gucciFinalTotal}
          readOnly
          className="bg-muted"
          placeholder="Subtotal + Shipping + Tax"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="gucci-return-code">Return Reason Code</Label>
        <Input
          id="gucci-return-code"
          value={gucciReturnReasonCode}
          onChange={(e) => updateGucciReturnReasonCode(e.target.value)}
          placeholder="e.g., N/A or Return Code"
        />
      </div>
    </div>
  );
}
