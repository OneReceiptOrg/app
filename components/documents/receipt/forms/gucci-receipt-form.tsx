"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiptStore } from "@/lib/store";
import { useEffect } from "react";
import {
  parseCurrency,
  formatCurrency,
  calculateVat,
  extractRateFromString,
} from "@/lib/utils/calculations";

export default function GucciReceiptForm() {
  const {
    gucciStoreLocation,
    gucciDate,
    gucciTransNumber,
    gucciPaymentMethod,
    gucciProductName,
    gucciProductSku,
    gucciProductPrice,
    gucciProductTax,
    gucciStoreAddress1,
    gucciStoreAddress2,
    gucciStoreCityZip,
    gucciStorePhoneFax,
    gucciStoreId,
    gucciRegisterId,
    gucciCustomerId,
    gucciSalesperson,
    gucciSubtotal,
    gucciTotal,
    gucciPaymentAmount,
    gucciChange,
    gucciItemCount,
    gucciTaxAnalysisCode,
    gucciTaxAnalysisTaxable,
    gucciTaxAnalysisRate,
    gucciTaxAnalysisTotal,
    gucciTaxAnalysisTax,
    customerName,
    cashierName,
    updateGucciStoreLocation,
    updateGucciDate,
    updateGucciTransNumber,
    updateGucciPaymentMethod,
    updateGucciProductName,
    updateGucciProductSku,
    updateGucciProductPrice,
    updateGucciProductTax,
    updateGucciStoreAddress1,
    updateGucciStoreAddress2,
    updateGucciStoreCityZip,
    updateGucciStorePhoneFax,
    updateGucciStoreId,
    updateGucciRegisterId,
    updateGucciCustomerId,
    updateGucciSalesperson,
    updateGucciSubtotal,
    updateGucciTotal,
    updateGucciPaymentAmount,
    updateGucciChange,
    updateGucciItemCount,
    updateGucciTaxAnalysisCode,
    updateGucciTaxAnalysisTaxable,
    updateGucciTaxAnalysisRate,
    updateGucciTaxAnalysisTotal,
    updateGucciTaxAnalysisTax,
    updateCustomerName,
    updateCashierName,
  } = useReceiptStore();

  useEffect(() => {
    if (gucciProductPrice) {
      const itemPrice = parseCurrency(gucciProductPrice);
      const qty = gucciItemCount || 1;
      const taxRate = extractRateFromString(gucciTaxAnalysisRate) || 20;

      const subtotal = itemPrice * qty;

      const taxAmount = calculateVat(subtotal, taxRate);

      const total = subtotal + taxAmount;

      updateGucciSubtotal(formatCurrency(subtotal));
      updateGucciProductTax(formatCurrency(taxAmount));
      updateGucciTotal(formatCurrency(total));
      updateGucciPaymentAmount(formatCurrency(total));
      updateGucciTaxAnalysisTaxable(formatCurrency(subtotal));
      updateGucciTaxAnalysisTotal(formatCurrency(total));
      updateGucciTaxAnalysisTax(formatCurrency(taxAmount));

      const paymentAmount = parseCurrency(gucciPaymentAmount);
      if (paymentAmount > total) {
        updateGucciChange(formatCurrency(paymentAmount - total));
      } else {
        updateGucciChange("0.00");
      }
    }
  }, [
    gucciProductPrice,
    gucciItemCount,
    gucciTaxAnalysisRate,
    gucciPaymentAmount,
  ]);

  return (
    <div className="grid gap-3 w-full">
      {}

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-store-location">Store Location</Label>
        <Input
          id="gucci-store-location"
          value={gucciStoreLocation}
          onChange={(e) => updateGucciStoreLocation(e.target.value)}
          placeholder="e.g., London Bond"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-store-address1">Store Address 1</Label>
        <Input
          id="gucci-store-address1"
          value={gucciStoreAddress1}
          onChange={(e) => updateGucciStoreAddress1(e.target.value)}
          placeholder="e.g., 34 Old Bond Street"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-store-address2">Store Address 2</Label>
        <Input
          id="gucci-store-address2"
          value={gucciStoreAddress2}
          onChange={(e) => updateGucciStoreAddress2(e.target.value)}
          placeholder="e.g., (Optional floor/suite)"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-store-cityzip">Store City/State/Zip</Label>
        <Input
          id="gucci-store-cityzip"
          value={gucciStoreCityZip}
          onChange={(e) => updateGucciStoreCityZip(e.target.value)}
          placeholder="e.g., London W1S 4QL"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-store-phonefax">Store Phone/Fax</Label>
        <Input
          id="gucci-store-phonefax"
          value={gucciStorePhoneFax}
          onChange={(e) => updateGucciStorePhoneFax(e.target.value)}
          placeholder="e.g., tel +44... fax +44..."
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-trans-number">Transaction Number (#)</Label>
        <Input
          id="gucci-trans-number"
          value={gucciTransNumber}
          onChange={(e) => updateGucciTransNumber(e.target.value)}
          placeholder="e.g., 8591"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-date">Date</Label>
        <Input
          id="gucci-date"
          value={gucciDate}
          onChange={(e) => updateGucciDate(e.target.value)}
          placeholder="e.g., 10/5/19 14:48:35"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-store-id">Store ID</Label>
        <Input
          id="gucci-store-id"
          value={gucciStoreId}
          onChange={(e) => updateGucciStoreId(e.target.value)}
          placeholder="e.g., 20201"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-register-id">Register ID</Label>
        <Input
          id="gucci-register-id"
          value={gucciRegisterId}
          onChange={(e) => updateGucciRegisterId(e.target.value)}
          placeholder="e.g., 1"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-cashier">Cashier</Label>
        <Input
          id="gucci-cashier"
          value={cashierName}
          onChange={(e) => updateCashierName(e.target.value)}
          placeholder="e.g., ASeniono"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-customer-name">Customer Name</Label>
        <Input
          id="gucci-customer-name"
          value={customerName}
          onChange={(e) => updateCustomerName(e.target.value)}
          placeholder="e.g., MATTHEW MILES"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-customer-id">Customer ID</Label>
        <Input
          id="gucci-customer-id"
          value={gucciCustomerId}
          onChange={(e) => updateGucciCustomerId(e.target.value)}
          placeholder="e.g., 20201003673200"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-product-sku">Product SKU</Label>
        <Input
          id="gucci-product-sku"
          value={gucciProductSku}
          onChange={(e) => updateGucciProductSku(e.target.value)}
          placeholder="e.g., 182451M21"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-product-price">Product Price</Label>
        <Input
          id="gucci-product-price"
          value={gucciProductPrice}
          onChange={(e) => updateGucciProductPrice(e.target.value)}
          placeholder="e.g., 380.00"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-product-name">Products / Description</Label>
        <Input
          id="gucci-product-name"
          value={gucciProductName}
          onChange={(e) => updateGucciProductName(e.target.value)}
          placeholder="e.g., MEN T-SHIRT"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-salesperson">Salesperson</Label>
        <Input
          id="gucci-salesperson"
          value={gucciSalesperson}
          onChange={(e) => updateGucciSalesperson(e.target.value)}
          placeholder="e.g., ASeniono (Agnija)"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-subtotal">Subtotal (Auto-calculated)</Label>
        <Input
          id="gucci-subtotal"
          value={gucciSubtotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price × quantity"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-product-tax">Product Tax (Auto-calculated)</Label>
        <Input
          id="gucci-product-tax"
          value={gucciProductTax}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax rate"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-total">Total (Auto-calculated)</Label>
        <Input
          id="gucci-total"
          value={gucciTotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-payment-method">Payment Method</Label>
        <Input
          id="gucci-payment-method"
          value={gucciPaymentMethod}
          onChange={(e) => updateGucciPaymentMethod(e.target.value)}
          placeholder="e.g., CASH"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-payment-amount">
          Payment Amount (Auto-calculated)
        </Label>
        <Input
          id="gucci-payment-amount"
          value={gucciPaymentAmount}
          readOnly
          className="bg-muted"
          placeholder="Same as total amount"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-change">Change (Auto-calculated)</Label>
        <Input
          id="gucci-change"
          value={gucciChange}
          readOnly
          className="bg-muted"
          placeholder="Calculated if payment exceeds total"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-item-count">Item Count</Label>
        <Input
          id="gucci-item-count"
          value={gucciItemCount.toString()}
          onChange={(e) => {
            const numValue = parseInt(e.target.value, 10);
            updateGucciItemCount(numValue > 0 ? numValue : 1);
          }}
          placeholder="e.g., 1"
          type="number"
          min="1"
        />
      </div>

      {}
      <div className="grid gap-2">
        <h3 className="text-sm font-medium pt-2">Tax Analysis</h3>
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-analysis-code">Tax Analysis Code</Label>
        <Input
          id="gucci-tax-analysis-code"
          value={gucciTaxAnalysisCode}
          onChange={(e) => updateGucciTaxAnalysisCode(e.target.value)}
          placeholder="e.g., S1"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-analysis-rate">Tax Analysis Rate (%)</Label>
        <Input
          id="gucci-tax-analysis-rate"
          value={gucciTaxAnalysisRate}
          onChange={(e) => updateGucciTaxAnalysisRate(e.target.value)}
          placeholder="e.g., 20%"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-analysis-taxable">
          Tax Analysis Taxable (Auto-calculated)
        </Label>
        <Input
          id="gucci-tax-analysis-taxable"
          value={gucciTaxAnalysisTaxable}
          readOnly
          className="bg-muted"
          placeholder="Same as subtotal"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-analysis-total">
          Tax Analysis Total (Auto-calculated)
        </Label>
        <Input
          id="gucci-tax-analysis-total"
          value={gucciTaxAnalysisTotal}
          readOnly
          className="bg-muted"
          placeholder="Same as total"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-analysis-tax">
          Tax Analysis Tax (Auto-calculated)
        </Label>
        <Input
          id="gucci-tax-analysis-tax"
          value={gucciTaxAnalysisTax}
          readOnly
          className="bg-muted"
          placeholder="Same as product tax"
        />
      </div>
    </div>
  );
}
