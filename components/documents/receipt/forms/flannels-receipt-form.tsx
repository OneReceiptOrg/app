"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiptStore } from "@/lib/store";
import { useEffect } from "react";
import { 
  parseCurrency, 
  formatCurrency, 
  calculateVat, 
} from "@/lib/utils/calculations"; 

export default function FlannelsReceiptForm() {
  const {
    flannelsStoreAddress, updateFlannelsStoreAddress,
    flannelsStoreCityStateZip, updateFlannelsStoreCityStateZip,
    flannelsEmployeeId, updateFlannelsEmployeeId,
    flannelsEmployeeNumber, updateFlannelsEmployeeNumber,
    flannelsProductSku, updateFlannelsProductSku,
    flannelsProductName, updateFlannelsProductName,
    flannelsItemPrice, updateFlannelsItemPrice,
    flannelsSubtotal, updateFlannelsSubtotal,
    flannelsTaxAmount, updateFlannelsTaxAmount,
    flannelsTotal, updateFlannelsTotal,
    flannelsPaymentMethod, updateFlannelsPaymentMethod,
    flannelsPaymentAmount, updateFlannelsPaymentAmount,
    flannelsCardNumberMasked, updateFlannelsCardNumberMasked,
    flannelsMerchantNumber, updateFlannelsMerchantNumber,
    flannelsTerminalNumber, updateFlannelsTerminalNumber,
    flannelsAppId, updateFlannelsAppId,
    flannelsAuthCode, updateFlannelsAuthCode,
    flannelsStoreId, updateFlannelsStoreId,
    flannelsTillId, updateFlannelsTillId,
    flannelsTransactionNumber, updateFlannelsTransactionNumber,
    flannelsDate, updateFlannelsDate,
    flannelsTime, updateFlannelsTime,
    flannelsOperatorId, updateFlannelsOperatorId,
    flannelsItemCount, updateFlannelsItemCount,
    flannelsVatNumber, updateFlannelsVatNumber,
    flannelsBarcodeNumber, updateFlannelsBarcodeNumber,
  } = useReceiptStore();

  useEffect(() => {
    if (flannelsItemPrice) {
      const itemPrice = parseCurrency(flannelsItemPrice);
      const qty = flannelsItemCount || 1; 
      const taxRate = 20; 

      const subtotal = itemPrice * qty;
      const taxAmount = calculateVat(subtotal, taxRate);
      const total = subtotal + taxAmount;

      updateFlannelsSubtotal(formatCurrency(subtotal));
      updateFlannelsTaxAmount(formatCurrency(taxAmount)); 
      updateFlannelsTotal(formatCurrency(total));
      updateFlannelsPaymentAmount(formatCurrency(total)); 
    }
  }, [
    flannelsItemPrice, 
    flannelsItemCount, 
    updateFlannelsSubtotal, 
    updateFlannelsTaxAmount, 
    updateFlannelsTotal, 
    updateFlannelsPaymentAmount
  ]);

  return (
    <div className="grid gap-3 w-full">
      {}
      <div className="grid gap-2">
        <Label htmlFor="flannels-store-address">Store Address</Label>
        <Input
          id="flannels-store-address"
          value={flannelsStoreAddress}
          onChange={(e) => updateFlannelsStoreAddress(e.target.value)}
          placeholder="e.g., 15-17 Oxford Street"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-store-citystatezip">Store City/State/Zip</Label>
        <Input
          id="flannels-store-citystatezip"
          value={flannelsStoreCityStateZip}
          onChange={(e) => updateFlannelsStoreCityStateZip(e.target.value)}
          placeholder="e.g., London W1D 2HU"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-employee-id">Employee ID</Label>
        <Input
          id="flannels-employee-id"
          value={flannelsEmployeeId}
          onChange={(e) => updateFlannelsEmployeeId(e.target.value)}
          placeholder="e.g., 511008"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="flannels-employee-number">Employee Number</Label>
        <Input
          id="flannels-employee-number"
          value={flannelsEmployeeNumber}
          onChange={(e) => updateFlannelsEmployeeNumber(e.target.value)}
          placeholder="e.g., 511008"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="flannels-product-sku">Product SKU</Label>
        <Input
          id="flannels-product-sku"
          value={flannelsProductSku}
          onChange={(e) => updateFlannelsProductSku(e.target.value)}
          placeholder="e.g., 11402702270"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-product-name">Product Name</Label>
        <Input
          id="flannels-product-name"
          value={flannelsProductName}
          onChange={(e) => updateFlannelsProductName(e.target.value)}
          placeholder="e.g., Stone Island Sweatshirt"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="flannels-item-price">Item Price</Label>
        <Input
          id="flannels-item-price"
          value={flannelsItemPrice}
          onChange={(e) => updateFlannelsItemPrice(e.target.value)}
          placeholder="e.g., 225.00"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-item-count">Item Count</Label>
        <Input
          id="flannels-item-count"
          value={flannelsItemCount?.toString() ?? '1'}
          onChange={(e) => {
            const numValue = parseInt(e.target.value, 10);
            updateFlannelsItemCount(numValue > 0 ? numValue : 1);
          }}
          placeholder="e.g., 1"
          type="number"
          min="1"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-subtotal">Subtotal (Auto-calculated)</Label>
        <Input
          id="flannels-subtotal"
          value={flannelsSubtotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price × quantity"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-total">Total (Auto-calculated)</Label>
        <Input
          id="flannels-total"
          value={flannelsTotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal + tax"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-payment-method">Payment Method</Label>
        <Input
          id="flannels-payment-method"
          value={flannelsPaymentMethod}
          onChange={(e) => updateFlannelsPaymentMethod(e.target.value)}
          placeholder="e.g., VISA DEBIT"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-payment-amount">Payment Amount (Auto-calculated)</Label>
        <Input
          id="flannels-payment-amount"
          value={flannelsPaymentAmount}
          readOnly
          className="bg-muted"
          placeholder="Same as total amount"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-card-masked">Card Number (Masked)</Label>
        <Input
          id="flannels-card-masked"
          value={flannelsCardNumberMasked}
          onChange={(e) => updateFlannelsCardNumberMasked(e.target.value)}
          placeholder="e.g., 125000******9012"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-merchant-number">Merchant Number</Label>
        <Input
          id="flannels-merchant-number"
          value={flannelsMerchantNumber}
          onChange={(e) => updateFlannelsMerchantNumber(e.target.value)}
          placeholder="e.g., ***24708"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-terminal-number">Terminal Number</Label>
        <Input
          id="flannels-terminal-number"
          value={flannelsTerminalNumber}
          onChange={(e) => updateFlannelsTerminalNumber(e.target.value)}
          placeholder="e.g., ****0801"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="flannels-app-id">App ID</Label>
        <Input
          id="flannels-app-id"
          value={flannelsAppId}
          onChange={(e) => updateFlannelsAppId(e.target.value)}
          placeholder="e.g., 4B2871ZVSNPPZBR8349|UU/+dcJ029Mi"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="flannels-auth-code">Auth Code</Label>
        <Input
          id="flannels-auth-code"
          value={flannelsAuthCode}
          onChange={(e) => updateFlannelsAuthCode(e.target.value)}
          placeholder="e.g., 009886"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-store-id">Store ID</Label>
        <Input
          id="flannels-store-id"
          value={flannelsStoreId}
          onChange={(e) => updateFlannelsStoreId(e.target.value)}
          placeholder="e.g., 1842"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-till-id">Till ID</Label>
        <Input
          id="flannels-till-id"
          value={flannelsTillId}
          onChange={(e) => updateFlannelsTillId(e.target.value)}
          placeholder="e.g., 002"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-transaction-number">Transaction Number</Label>
        <Input
          id="flannels-transaction-number"
          value={flannelsTransactionNumber}
          onChange={(e) => updateFlannelsTransactionNumber(e.target.value)}
          placeholder="e.g., 000342"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-date">Date</Label>
        <Input
          id="flannels-date"
          value={flannelsDate}
          onChange={(e) => updateFlannelsDate(e.target.value)}
          placeholder="e.g., 23/09/23"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-time">Time</Label>
        <Input
          id="flannels-time"
          value={flannelsTime}
          onChange={(e) => updateFlannelsTime(e.target.value)}
          placeholder="e.g., 17:03"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-operator-id">Operator ID</Label>
        <Input
          id="flannels-operator-id"
          value={flannelsOperatorId}
          onChange={(e) => updateFlannelsOperatorId(e.target.value)}
          placeholder="e.g., 507314"
        />
      </div>
      
       <div className="grid gap-2">
        <Label htmlFor="flannels-vat-number">VAT Number</Label>
        <Input
          id="flannels-vat-number"
          value={flannelsVatNumber}
          onChange={(e) => updateFlannelsVatNumber(e.target.value)}
          placeholder="e.g., GB 707 7253 32"
        />
      </div>

       <div className="grid gap-2">
        <Label htmlFor="flannels-barcode-number">Barcode Number</Label>
        <Input
          id="flannels-barcode-number"
          value={flannelsBarcodeNumber}
          onChange={(e) => updateFlannelsBarcodeNumber(e.target.value)}
          placeholder="e.g., 178102020781260119"
        />
      </div>

    </div>
  );
} 