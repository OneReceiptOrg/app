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
    gucciTransNumber,
    gucciTransDateTime,
    gucciStoreNumber,
    gucciRegisterNumber,
    gucciCashierId,
    gucciCustomerName,
    gucciCustomerId,
    gucciItemSku,
    gucciItemQty,
    gucciItemPrice,
    gucciItemTotalAmount,
    gucciItemDescription,
    gucciItemSize,
    gucciItemStyleNumber,
    gucciItemExtraDetails,
    gucciSalespersonId,
    gucciSalespersonName,
    gucciSubtotal,
    gucciTaxAmount,
    gucciTotalAmount,
    gucciDistanceSalesAmount,
    gucciDistanceSalesId,
    gucciChangeAmount,
    gucciSoldItemCount,
    gucciTaxCode,
    gucciTaxableAmount,
    gucciTaxRate,
    gucciTaxTotal,
    gucciTaxAmountFinal,
    updateGucciTransNumber,
    updateGucciTransDateTime,
    updateGucciStoreNumber,
    updateGucciRegisterNumber,
    updateGucciCashierId,
    updateGucciCustomerName,
    updateGucciCustomerId,
    updateGucciItemSku,
    updateGucciItemQty,
    updateGucciItemPrice,
    updateGucciItemTotalAmount,
    updateGucciItemDescription,
    updateGucciItemSize,
    updateGucciItemStyleNumber,
    updateGucciItemExtraDetails,
    updateGucciSalespersonId,
    updateGucciSalespersonName,
    updateGucciSubtotal,
    updateGucciTaxAmount,
    updateGucciTotalAmount,
    updateGucciDistanceSalesAmount,
    updateGucciDistanceSalesId,
    updateGucciChangeAmount,
    updateGucciSoldItemCount,
    updateGucciTaxCode,
    updateGucciTaxableAmount,
    updateGucciTaxRate,
    updateGucciTaxTotal,
    updateGucciTaxAmountFinal,
  } = useReceiptStore();

  useEffect(() => {
    if (gucciItemPrice) {
      const itemPrice = parseCurrency(gucciItemPrice);
      const qty = parseInt(gucciItemQty) || 1;
      const taxRate = extractRateFromString(gucciTaxRate) || 0;

      const subtotal = itemPrice * qty;
      const taxAmount = calculateVat(subtotal, taxRate);
      const total = subtotal + taxAmount;

      updateGucciSubtotal(formatCurrency(subtotal));
      updateGucciTaxAmount(formatCurrency(taxAmount));
      updateGucciTotalAmount(formatCurrency(total));
      updateGucciDistanceSalesAmount(formatCurrency(total));
      updateGucciTaxableAmount(formatCurrency(subtotal));
      updateGucciTaxTotal(formatCurrency(total));
      updateGucciTaxAmountFinal(formatCurrency(taxAmount));
      updateGucciItemTotalAmount(formatCurrency(itemPrice * qty));
    }
  }, [gucciItemPrice, gucciItemQty, gucciTaxRate]);

  return (
    <div className="grid gap-3 w-full">
      <div className="grid gap-2">
        <Label htmlFor="gucci-trans-number">Transaction Number</Label>
        <Input
          id="gucci-trans-number"
          value={gucciTransNumber}
          onChange={(e) => updateGucciTransNumber(e.target.value)}
          placeholder="e.g., 69212"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-trans-datetime">Transaction Date/Time</Label>
        <Input
          id="gucci-trans-datetime"
          value={gucciTransDateTime}
          onChange={(e) => updateGucciTransDateTime(e.target.value)}
          placeholder="e.g., 8/9/21 17:27:26"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-store-number">Store Number</Label>
        <Input
          id="gucci-store-number"
          value={gucciStoreNumber}
          onChange={(e) => updateGucciStoreNumber(e.target.value)}
          placeholder="e.g., 23030"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-register-number">Register Number</Label>
        <Input
          id="gucci-register-number"
          value={gucciRegisterNumber}
          onChange={(e) => updateGucciRegisterNumber(e.target.value)}
          placeholder="e.g., 13"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-cashier-id">Cashier ID</Label>
        <Input
          id="gucci-cashier-id"
          value={gucciCashierId}
          onChange={(e) => updateGucciCashierId(e.target.value)}
          placeholder="e.g., 96962458"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-customer-name">Customer Name</Label>
        <Input
          id="gucci-customer-name"
          value={gucciCustomerName}
          onChange={(e) => updateGucciCustomerName(e.target.value)}
          placeholder="e.g., JEREMY CROUSE"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-customer-id">Customer ID</Label>
        <Input
          id="gucci-customer-id"
          value={gucciCustomerId}
          onChange={(e) => updateGucciCustomerId(e.target.value)}
          placeholder="e.g., 2341599900805752059"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-sku">Item SKU</Label>
        <Input
          id="gucci-item-sku"
          value={gucciItemSku}
          onChange={(e) => updateGucciItemSku(e.target.value)}
          placeholder="e.g., 809385156"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-qty">Item Quantity</Label>
        <Input
          id="gucci-item-qty"
          value={gucciItemQty}
          onChange={(e) => updateGucciItemQty(e.target.value)}
          placeholder="e.g., 1"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-price">Item Price</Label>
        <Input
          id="gucci-item-price"
          value={gucciItemPrice}
          onChange={(e) => updateGucciItemPrice(e.target.value)}
          placeholder="e.g., 980.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-total-amount">Item Total Amount (Auto-calculated)</Label>
        <Input
          id="gucci-item-total-amount"
          value={gucciItemTotalAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price × quantity"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-description">Item Description</Label>
        <Input
          id="gucci-item-description"
          value={gucciItemDescription}
          onChange={(e) => updateGucciItemDescription(e.target.value)}
          placeholder="e.g., 310 MENS RTW"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-size">Item Size</Label>
        <Input
          id="gucci-item-size"
          value={gucciItemSize}
          onChange={(e) => updateGucciItemSize(e.target.value)}
          placeholder="e.g., 91/M"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-style-number">Item Style Number</Label>
        <Input
          id="gucci-item-style-number"
          value={gucciItemStyleNumber}
          onChange={(e) => updateGucciItemStyleNumber(e.target.value)}
          placeholder="e.g., 626976XJCOE"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-item-extra-details">Item Extra Details</Label>
        <Input
          id="gucci-item-extra-details"
          value={gucciItemExtraDetails}
          onChange={(e) => updateGucciItemExtraDetails(e.target.value)}
          placeholder="e.g., 9146 - M"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-salesperson-id">Salesperson ID</Label>
        <Input
          id="gucci-salesperson-id"
          value={gucciSalespersonId}
          onChange={(e) => updateGucciSalespersonId(e.target.value)}
          placeholder="e.g., 96962458"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-salesperson-name">Salesperson Name</Label>
        <Input
          id="gucci-salesperson-name"
          value={gucciSalespersonName}
          onChange={(e) => updateGucciSalespersonName(e.target.value)}
          placeholder="e.g., VINCENT"
        />
      </div>

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

      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-amount">Tax Amount (Auto-calculated)</Label>
        <Input
          id="gucci-tax-amount"
          value={gucciTaxAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax rate"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-total-amount">Total Amount (Auto-calculated)</Label>
        <Input
          id="gucci-total-amount"
          value={gucciTotalAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-distance-sales-amount">Distance Sales Amount</Label>
        <Input
          id="gucci-distance-sales-amount"
          value={gucciDistanceSalesAmount}
          onChange={(e) => updateGucciDistanceSalesAmount(e.target.value)}
          placeholder="e.g., 980.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-distance-sales-id">Distance Sales ID</Label>
        <Input
          id="gucci-distance-sales-id"
          value={gucciDistanceSalesId}
          onChange={(e) => updateGucciDistanceSalesId(e.target.value)}
          placeholder="e.g., 1025631405"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-change-amount">Change Amount</Label>
        <Input
          id="gucci-change-amount"
          value={gucciChangeAmount}
          onChange={(e) => updateGucciChangeAmount(e.target.value)}
          placeholder="e.g., 0.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-sold-item-count">Sold Item Count</Label>
        <Input
          id="gucci-sold-item-count"
          value={gucciSoldItemCount}
          onChange={(e) => updateGucciSoldItemCount(e.target.value)}
          placeholder="e.g., 1"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-code">Tax Code</Label>
        <Input
          id="gucci-tax-code"
          value={gucciTaxCode}
          onChange={(e) => updateGucciTaxCode(e.target.value)}
          placeholder="e.g., 17512-1928"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-taxable-amount">Taxable Amount</Label>
        <Input
          id="gucci-taxable-amount"
          value={gucciTaxableAmount}
          onChange={(e) => updateGucciTaxableAmount(e.target.value)}
          placeholder="e.g., 980.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-rate">Tax Rate</Label>
        <Input
          id="gucci-tax-rate"
          value={gucciTaxRate}
          onChange={(e) => updateGucciTaxRate(e.target.value)}
          placeholder="e.g., 0%"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-total">Tax Total</Label>
        <Input
          id="gucci-tax-total"
          value={gucciTaxTotal}
          onChange={(e) => updateGucciTaxTotal(e.target.value)}
          placeholder="e.g., 980.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="gucci-tax-amount-final">Tax Amount Final</Label>
        <Input
          id="gucci-tax-amount-final"
          value={gucciTaxAmountFinal}
          onChange={(e) => updateGucciTaxAmountFinal(e.target.value)}
          placeholder="e.g., 0.00"
        />
      </div>
    </div>
  );
}
