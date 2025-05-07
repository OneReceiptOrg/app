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

export default function FootLockerReceiptForm() {
  const {
    footLockerProductName,
    footLockerPrice,
    footLockerTax,
    footLockerTotal,
    footLockerDateTime,
    footLockerDate,
    footLockerOrderNumber,
    footLockerStoreNumber,
    footLockerRegister,
    footLockerCashier,
    footLockerProductSKU,
    footLockerCardLast4,
    footLockerApprovalCode,
    footLockerStoreName,
    footLockerStoreAddress,
    footLockerStoreAddressLine2,
    footLockerStoreCity,
    footLockerStoreZip,
    footLockerStorePhone,
    footLockerAssociateNumber,
    footLockerCardExpiry,
    footLockerTaxRate,
    footLockerTaxableAmount,
    footLockerQuantity,
    footLockerValidationCode,
    updateFootLockerProductName,
    updateFootLockerPrice,
    updateFootLockerTax,
    updateFootLockerTotal,
    updateFootLockerDateTime,
    updateFootLockerDate,
    updateFootLockerOrderNumber,
    updateFootLockerStoreNumber,
    updateFootLockerRegister,
    updateFootLockerCashier,
    updateFootLockerProductSKU,
    updateFootLockerCardLast4,
    updateFootLockerApprovalCode,
    updateFootLockerStoreName,
    updateFootLockerStoreAddress,
    updateFootLockerStoreAddressLine2,
    updateFootLockerStoreCity,
    updateFootLockerStoreZip,
    updateFootLockerStorePhone,
    updateFootLockerAssociateNumber,
    updateFootLockerCardExpiry,
    updateFootLockerTaxRate,
    updateFootLockerTaxableAmount,
    updateFootLockerQuantity,
    updateFootLockerValidationCode,
  } = useReceiptStore();

  useEffect(() => {
    if (footLockerPrice) {
      const itemPrice = parseCurrency(footLockerPrice);
      const qty = footLockerQuantity || 1; 
      const taxRate = extractRateFromString(footLockerTaxRate) || 6.5; 

      const subtotal = itemPrice * qty;
      const taxableAmount = subtotal;
      updateFootLockerTaxableAmount(formatCurrency(taxableAmount));
      
      const taxAmount = calculateVat(subtotal, taxRate);
      updateFootLockerTax(formatCurrency(taxAmount));
      
      const total = subtotal + taxAmount;
      updateFootLockerTotal(formatCurrency(total));
    }
  }, [
    footLockerPrice,
    footLockerQuantity,
    footLockerTaxRate
  ]);

  return (
    <div className="grid gap-3 w-full">
      <div className="grid gap-2">
        <Label htmlFor="footlocker-store-name">Store Name</Label>
        <Input
          id="footlocker-store-name"
          value={footLockerStoreName}
          onChange={(e) => updateFootLockerStoreName(e.target.value)}
          placeholder="e.g., FOOT LOCKER"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-store-number">Store Number</Label>
        <Input
          id="footlocker-store-number"
          value={footLockerStoreNumber}
          onChange={(e) => updateFootLockerStoreNumber(e.target.value)}
          placeholder="e.g., 07153"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-store-address">Store Address</Label>
        <Input
          id="footlocker-store-address"
          value={footLockerStoreAddress}
          onChange={(e) => updateFootLockerStoreAddress(e.target.value)}
          placeholder="e.g., THE FLORIDA MALL"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-store-address-line2">Store Address Line 2</Label>
        <Input
          id="footlocker-store-address-line2"
          value={footLockerStoreAddressLine2}
          onChange={(e) => updateFootLockerStoreAddressLine2(e.target.value)}
          placeholder="e.g., 8001 S ORHIG HUSSOM JRAIL"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-store-city">Store City</Label>
        <Input
          id="footlocker-store-city"
          value={footLockerStoreCity}
          onChange={(e) => updateFootLockerStoreCity(e.target.value)}
          placeholder="e.g., ORLNND"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-store-zip">Store ZIP Code</Label>
        <Input
          id="footlocker-store-zip"
          value={footLockerStoreZip}
          onChange={(e) => updateFootLockerStoreZip(e.target.value)}
          placeholder="e.g., 32809"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-store-phone">Store Phone</Label>
        <Input
          id="footlocker-store-phone"
          value={footLockerStorePhone}
          onChange={(e) => updateFootLockerStorePhone(e.target.value)}
          placeholder="e.g., 407857190"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-cashier">Cashier</Label>
        <Input
          id="footlocker-cashier"
          value={footLockerCashier}
          onChange={(e) => updateFootLockerCashier(e.target.value)}
          placeholder="e.g., CELENIA"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-associate-number">Associate Number</Label>
        <Input
          id="footlocker-associate-number"
          value={footLockerAssociateNumber}
          onChange={(e) => updateFootLockerAssociateNumber(e.target.value)}
          placeholder="e.g., 000009874068"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-register">Register</Label>
        <Input
          id="footlocker-register"
          value={footLockerRegister}
          onChange={(e) => updateFootLockerRegister(e.target.value)}
          placeholder="e.g., 005"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-date">Date</Label>
        <Input
          id="footlocker-date"
          value={footLockerDate}
          onChange={(e) => updateFootLockerDate(e.target.value)}
          placeholder="e.g., 06/28"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-date-time">Date Time</Label>
        <Input
          id="footlocker-date-time"
          value={footLockerDateTime}
          onChange={(e) => updateFootLockerDateTime(e.target.value)}
          placeholder="e.g., 06/28/2023 01:29 PM"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-order-number">Order Number</Label>
        <Input
          id="footlocker-order-number"
          value={footLockerOrderNumber}
          onChange={(e) => updateFootLockerOrderNumber(e.target.value)}
          placeholder="e.g., 54917"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-product-name">Product Name</Label>
        <Input
          id="footlocker-product-name"
          value={footLockerProductName}
          onChange={(e) => updateFootLockerProductName(e.target.value)}
          placeholder="e.g., ADI ULTRA BOOST 3.0"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-product-sku">Product SKU</Label>
        <Input
          id="footlocker-product-sku"
          value={footLockerProductSKU}
          onChange={(e) => updateFootLockerProductSKU(e.target.value)}
          placeholder="e.g., 88666877746714"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-quantity">Quantity</Label>
        <Input
          id="footlocker-quantity"
          value={footLockerQuantity.toString()}
          onChange={(e) => {
            const numValue = parseInt(e.target.value, 10);
            updateFootLockerQuantity(numValue > 0 ? numValue : 1);
          }}
          placeholder="e.g., 1"
          type="number"
          min="1"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-price">Price</Label>
        <Input
          id="footlocker-price"
          value={footLockerPrice}
          onChange={(e) => updateFootLockerPrice(e.target.value)}
          placeholder="e.g., 149.99"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-tax-rate">Tax Rate (%)</Label>
        <Input
          id="footlocker-tax-rate"
          value={footLockerTaxRate}
          onChange={(e) => updateFootLockerTaxRate(e.target.value)}
          placeholder="e.g., 6.500"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-taxable-amount">Taxable Amount (Auto-calculated)</Label>
        <Input
          id="footlocker-taxable-amount"
          value={footLockerTaxableAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-tax">Tax (Auto-calculated)</Label>
        <Input
          id="footlocker-tax"
          value={footLockerTax}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price and tax rate"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-total">Total (Auto-calculated)</Label>
        <Input
          id="footlocker-total"
          value={footLockerTotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price and tax"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-card-last4">Card Last 4 Digits</Label>
        <Input
          id="footlocker-card-last4"
          value={footLockerCardLast4}
          onChange={(e) => updateFootLockerCardLast4(e.target.value)}
          placeholder="e.g., 6657"
          maxLength={4}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-card-expiry">Card Expiry</Label>
        <Input
          id="footlocker-card-expiry"
          value={footLockerCardExpiry}
          onChange={(e) => updateFootLockerCardExpiry(e.target.value)}
          placeholder="e.g., ******"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-approval-code">Approval Code</Label>
        <Input
          id="footlocker-approval-code"
          value={footLockerApprovalCode}
          onChange={(e) => updateFootLockerApprovalCode(e.target.value)}
          placeholder="e.g., 11493EF"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="footlocker-validation-code">Validation Code</Label>
        <Input
          id="footlocker-validation-code"
          value={footLockerValidationCode}
          onChange={(e) => updateFootLockerValidationCode(e.target.value)}
          placeholder="e.g., XY645ZF"
        />
      </div>
    </div>
  );
} 