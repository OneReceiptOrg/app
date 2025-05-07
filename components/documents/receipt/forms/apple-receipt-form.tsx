"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiptStore } from "@/lib/store";
import { useEffect } from "react";
import { 
  parseCurrency, 
  formatCurrency, 
  calculateVat, 
  extractRateFromString 
} from "@/lib/utils/calculations";

export default function AppleReceiptForm() {
  const {
    appleStoreLocation,
    appleDateTime,
    appleProductName,
    applePartNumber,
    appleReturnDate,
    appleSubTotal,
    appleTaxRate,
    appleTaxAmount,
    appleTotal,
    applePaymentMethod,
    appleCardNumber,
    appleTransactionDateTime,
    appleApplicationId,
    appleApplicationPanSequence,
    appleDeviceId,
    appleCardType,
    applePreferredName,
    appleTvr,
    appleTsi,
    appleTransactionCode,
    updateAppleStoreLocation,
    updateAppleDateTime,
    updateAppleProductName,
    updateApplePartNumber,
    updateAppleReturnDate,
    updateAppleSubTotal,
    updateAppleTaxRate,
    updateAppleTaxAmount,
    updateAppleTotal,
    updateApplePaymentMethod,
    updateAppleCardNumber,
    updateAppleTransactionDateTime,
    updateAppleApplicationId,
    updateAppleApplicationPanSequence,
    updateAppleDeviceId,
    updateAppleCardType,
    updateApplePreferredName,
    updateAppleTvr,
    updateAppleTsi,
    updateAppleTransactionCode,
  } = useReceiptStore();

  useEffect(() => {
    if (appleSubTotal) {
      const subtotal = parseCurrency(appleSubTotal);
      const taxRate = extractRateFromString(appleTaxRate) || 9.04; 
      
      const taxAmount = calculateVat(subtotal, taxRate);
      
      const total = subtotal + taxAmount;
      
      updateAppleTaxAmount(formatCurrency(taxAmount));
      updateAppleTotal(formatCurrency(total));
    }
  }, [appleSubTotal, appleTaxRate]);

  return (
    <div className="grid gap-3 w-full">
      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-store-location">Store Location</Label>
        <Input
          id="apple-store-location"
          value={appleStoreLocation}
          onChange={(e) => updateAppleStoreLocation(e.target.value)}
          placeholder="e.g., Apple Downtown Brooklyn"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-date-time">Date and Time</Label>
        <Input
          id="apple-date-time"
          value={appleDateTime}
          onChange={(e) => updateAppleDateTime(e.target.value)}
          placeholder="e.g., 04/12/2025, 10:04 PM"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-product-name">Product Name</Label>
        <Input
          id="apple-product-name"
          value={appleProductName}
          onChange={(e) => updateAppleProductName(e.target.value)}
          placeholder="e.g., AirPods (2nd Generation)"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-part-number">Part Number</Label>
        <Input
          id="apple-part-number"
          value={applePartNumber}
          onChange={(e) => updateApplePartNumber(e.target.value)}
          placeholder="e.g., MV7N2AM/A"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-return-date">Return Date</Label>
        <Input
          id="apple-return-date"
          value={appleReturnDate}
          onChange={(e) => updateAppleReturnDate(e.target.value)}
          placeholder="e.g., Apr 26, 2025"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-subtotal">Subtotal</Label>
        <Input
          id="apple-subtotal"
          value={appleSubTotal}
          onChange={(e) => updateAppleSubTotal(e.target.value)}
          placeholder="e.g., 129.95"
          type="number"
          step="0.01"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-tax-rate">Tax Rate</Label>
        <Input
          id="apple-tax-rate"
          value={appleTaxRate}
          onChange={(e) => updateAppleTaxRate(e.target.value)}
          placeholder="e.g., 9.04%"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-tax-amount">Tax Amount (Auto-calculated)</Label>
        <Input
          id="apple-tax-amount"
          value={appleTaxAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax rate"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-total">Total (Auto-calculated)</Label>
        <Input
          id="apple-total"
          value={appleTotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-payment-method">Payment Method</Label>
        <Input
          id="apple-payment-method"
          value={applePaymentMethod}
          onChange={(e) => updateApplePaymentMethod(e.target.value)}
          placeholder="e.g., CHASE VISA"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-card-number">Card Number</Label>
        <Input
          id="apple-card-number"
          value={appleCardNumber}
          onChange={(e) => updateAppleCardNumber(e.target.value)}
          placeholder="e.g., .....3123"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-transaction-datetime">
          Transaction Date/Time
        </Label>
        <Input
          id="apple-transaction-datetime"
          value={appleTransactionDateTime}
          onChange={(e) => updateAppleTransactionDateTime(e.target.value)}
          placeholder="e.g., 2024/01/13 14:43:16"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Payment Processing Details
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {}
        <div className="grid gap-2">
          <Label htmlFor="apple-application-id">Application ID</Label>
          <Input
            id="apple-application-id"
            value={appleApplicationId}
            onChange={(e) => updateAppleApplicationId(e.target.value)}
            placeholder="e.g., A00000000031010"
          />
        </div>

        {}
        <div className="grid gap-2">
          <Label htmlFor="apple-application-pan">
            Application PAN Sequence
          </Label>
          <Input
            id="apple-application-pan"
            value={appleApplicationPanSequence}
            onChange={(e) => updateAppleApplicationPanSequence(e.target.value)}
            placeholder="e.g., 01"
          />
        </div>

        {}
        <div className="grid gap-2">
          <Label htmlFor="apple-device-id">Device ID</Label>
          <Input
            id="apple-device-id"
            value={appleDeviceId}
            onChange={(e) => updateAppleDeviceId(e.target.value)}
            placeholder="e.g., 0000"
          />
        </div>

        {}
        <div className="grid gap-2">
          <Label htmlFor="apple-card-type">Card Type</Label>
          <Input
            id="apple-card-type"
            value={appleCardType}
            onChange={(e) => updateAppleCardType(e.target.value)}
            placeholder="e.g., Credit"
          />
        </div>

        {}
        <div className="grid gap-2">
          <Label htmlFor="apple-preferred-name">Preferred Name</Label>
          <Input
            id="apple-preferred-name"
            value={applePreferredName}
            onChange={(e) => updateApplePreferredName(e.target.value)}
            placeholder="e.g., CHASE VISA"
          />
        </div>

        {}
        <div className="grid gap-2">
          <Label htmlFor="apple-tvr">TVR</Label>
          <Input
            id="apple-tvr"
            value={appleTvr}
            onChange={(e) => updateAppleTvr(e.target.value)}
            placeholder="e.g., 0000000000000"
          />
        </div>

        {}
        <div className="grid gap-2">
          <Label htmlFor="apple-tsi">TSI</Label>
          <Input
            id="apple-tsi"
            value={appleTsi}
            onChange={(e) => updateAppleTsi(e.target.value)}
            placeholder="e.g., 0000"
          />
        </div>
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="apple-transaction-code">Transaction Code</Label>
        <Input
          id="apple-transaction-code"
          value={appleTransactionCode}
          onChange={(e) => updateAppleTransactionCode(e.target.value)}
          placeholder="e.g., 2024011301325027019"
        />
      </div>
    </div>
  );
}
