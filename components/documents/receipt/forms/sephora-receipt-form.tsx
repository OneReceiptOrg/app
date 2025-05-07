"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useBoundStore from "@/lib/store/index";
import { useEffect } from "react";
import { parseCurrency, formatCurrency, calculateVat, extractRateFromString } from "@/lib/utils/calculations";

export default function SephoraReceiptForm() {
  const {
    sephoraStoreName,
    sephoraStoreAddress1,
    sephoraStoreAddress2,
    sephoraProductName,
    sephoraProductSku,
    sephoraProductQty,
    sephoraPrice,
    sephoraProductAmount,
    sephoraSubtotal,
    sephoraTaxDesc,
    sephoraTaxPercent,
    sephoraTax,
    sephoraTotalAmount,
    sephoraPaymentType,
    sephoraPaymentAmount,
    sephoraCardNumberMasked,
    sephoraCardType,
    sephoraCardEntry,
    sephoraTransType,
    sephoraAuthCode,
    sephoraSequenceNum,
    sephoraReferenceNum,
    sephoraTerminalId,
    sephoraDate,
    sephoraTime,
    sephoraApprovalStatus,
    updateSephoraStoreAddress1,
    updateSephoraStoreAddress2,
    updateSephoraProductName,
    updateSephoraProductSku,
    updateSephoraProductQty,
    updateSephoraPrice,
    updateSephoraProductAmount,
    updateSephoraSubtotal,
    updateSephoraTaxDesc,
    updateSephoraTaxPercent,
    updateSephoraTax,
    updateSephoraTotalAmount,
    updateSephoraPaymentType,
    updateSephoraPaymentAmount,
    updateSephoraCardNumberMasked,
    updateSephoraCardType,
    updateSephoraCardEntry,
    updateSephoraTransType,
    updateSephoraAuthCode,
    updateSephoraSequenceNum,
    updateSephoraReferenceNum,
    updateSephoraTerminalId,
    updateSephoraDate,
    updateSephoraTime,
  } = useBoundStore();

  useEffect(() => {
    if (sephoraPrice) {
      const price = parseCurrency(sephoraPrice);
      const qty = parseInt(sephoraProductQty || "1", 10);
      const taxRate = extractRateFromString(sephoraTaxPercent) || 7; 

      const productAmount = price * qty;
      
      const subtotal = productAmount;
      
      const taxAmount = calculateVat(subtotal, taxRate);
      
      const total = subtotal + taxAmount;
      
      updateSephoraProductAmount(formatCurrency(productAmount));
      updateSephoraSubtotal(formatCurrency(subtotal));
      updateSephoraTax(formatCurrency(taxAmount));
      updateSephoraTotalAmount(formatCurrency(total));
      updateSephoraPaymentAmount(formatCurrency(total));
    }
  }, [
    sephoraPrice, 
    sephoraProductQty, 
    sephoraTaxPercent
  ]);

  return (
    <div className="grid gap-3 w-full">
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-store-address1">Store Address</Label>
        <Input
          id="sephora-store-address1"
          value={sephoraStoreAddress1}
          onChange={(e) => updateSephoraStoreAddress1(e.target.value)}
          placeholder="e.g., 5 Times Square"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-store-address2">Store City/State/Zip</Label>
        <Input
          id="sephora-store-address2"
          value={sephoraStoreAddress2}
          onChange={(e) => updateSephoraStoreAddress2(e.target.value)}
          placeholder="e.g., New York, NY 10036"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-product-name">Product</Label>
        <Input
          id="sephora-product-name"
          value={sephoraProductName}
          onChange={(e) => updateSephoraProductName(e.target.value)}
          placeholder="e.g., Dior Backstage Foundation"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-product-sku">Product SKU</Label>
        <Input
          id="sephora-product-sku"
          value={sephoraProductSku}
          onChange={(e) => updateSephoraProductSku(e.target.value)}
          placeholder="e.g., P439089"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-product-qty">Product Quantity</Label>
        <Input
          id="sephora-product-qty"
          value={sephoraProductQty}
          onChange={(e) => updateSephoraProductQty(e.target.value)}
          placeholder="e.g., 1"
          type="number"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-price">Price (Item Price)</Label>
        <Input
          id="sephora-price"
          value={sephoraPrice}
          onChange={(e) => updateSephoraPrice(e.target.value)}
          placeholder="e.g., 40.00"
          type="number"
          step="0.01"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-product-amount">Product Amount (Auto-calculated)</Label>
        <Input
          id="sephora-product-amount"
          value={sephoraProductAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price × quantity"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-subtotal">Subtotal (Auto-calculated)</Label>
        <Input
          id="sephora-subtotal"
          value={sephoraSubtotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price × quantity"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-tax-desc">Tax Description</Label>
        <Input
          id="sephora-tax-desc"
          value={sephoraTaxDesc}
          onChange={(e) => updateSephoraTaxDesc(e.target.value)}
          placeholder="e.g., FL STATE TAX"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-tax-percent">Tax Percent</Label>
        <Input
          id="sephora-tax-percent"
          value={sephoraTaxPercent}
          onChange={(e) => updateSephoraTaxPercent(e.target.value)}
          placeholder="e.g., 7%"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-tax">Tax Amount (Auto-calculated)</Label>
        <Input
          id="sephora-tax"
          value={sephoraTax}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax rate"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-total-amount">Total Amount (Auto-calculated)</Label>
        <Input
          id="sephora-total-amount"
          value={sephoraTotalAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-payment-type">Payment Type</Label>
        <Input
          id="sephora-payment-type"
          value={sephoraPaymentType}
          onChange={(e) => updateSephoraPaymentType(e.target.value)}
          placeholder="e.g., Visa"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-payment-amount">Payment Amount (Auto-calculated)</Label>
        <Input
          id="sephora-payment-amount"
          value={sephoraPaymentAmount}
          readOnly
          className="bg-muted"
          placeholder="Same as total amount"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-card-masked">Card Number (Masked)</Label>
        <Input
          id="sephora-card-masked"
          value={sephoraCardNumberMasked}
          onChange={(e) => updateSephoraCardNumberMasked(e.target.value)}
          placeholder="e.g., ***********5241"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-card-type">Card Type</Label>
        <Input
          id="sephora-card-type"
          value={sephoraCardType}
          onChange={(e) => updateSephoraCardType(e.target.value)}
          placeholder="e.g., Visa"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-card-entry">Card Entry</Label>
        <Input
          id="sephora-card-entry"
          value={sephoraCardEntry}
          onChange={(e) => updateSephoraCardEntry(e.target.value)}
          placeholder="e.g., CHIP"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-trans-type">Transaction Type</Label>
        <Input
          id="sephora-trans-type"
          value={sephoraTransType}
          onChange={(e) => updateSephoraTransType(e.target.value)}
          placeholder="e.g., PURCHASE"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-auth-code">Auth Code (#)</Label>
        <Input
          id="sephora-auth-code"
          value={sephoraAuthCode}
          onChange={(e) => updateSephoraAuthCode(e.target.value)}
          placeholder="e.g., 076135"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-sequence-num">Sequence #</Label>
        <Input
          id="sephora-sequence-num"
          value={sephoraSequenceNum}
          onChange={(e) => updateSephoraSequenceNum(e.target.value)}
          placeholder="e.g., 092351"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-reference-num">Reference #</Label>
        <Input
          id="sephora-reference-num"
          value={sephoraReferenceNum}
          onChange={(e) => updateSephoraReferenceNum(e.target.value)}
          placeholder="e.g., 00006317"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-terminal-id">Terminal ID</Label>
        <Input
          id="sephora-terminal-id"
          value={sephoraTerminalId}
          onChange={(e) => updateSephoraTerminalId(e.target.value)}
          placeholder="e.g., 712"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-date">Date</Label>
        <Input
          id="sephora-date"
          value={sephoraDate}
          onChange={(e) => updateSephoraDate(e.target.value)}
          placeholder="e.g., 03/13/2024"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-time">Time</Label>
        <Input
          id="sephora-time"
          value={sephoraTime}
          onChange={(e) => updateSephoraTime(e.target.value)}
          placeholder="e.g., 15:45"
        />
      </div>
      {}
      <div className="grid gap-2">
        <Label htmlFor="sephora-approval-status">Approval Status</Label>
        <Input
          id="sephora-approval-status"
          value={sephoraApprovalStatus}
          readOnly
          className="bg-gray-100 cursor-not-allowed"
          placeholder="APPROVED"
        />
      </div>
    </div>
  );
}
