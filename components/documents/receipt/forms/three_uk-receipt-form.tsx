"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiptStore } from "@/lib/store";

export default function ThreeUkReceiptForm() {
  const {
    threeUkBrandName,
    threeUkBranchName,
    threeUkStoreAddress,
    threeUkStoreCity,
    threeUkStorePhone,
    threeUkProductName,
    threeUkProductPrice,
    threeUkProductImei,
    threeUkInvoiceNumber,
    threeUkServedBy,
    threeUkVatNumber,
    threeUkTransactionDate,
    threeUkTransactionTime,
    threeUkTransactionStore,
    threeUkTransactionTerm,
    threeUkTransactionCode,
    updateThreeUkBrandName,
    updateThreeUkBranchName,
    updateThreeUkStoreAddress,
    updateThreeUkStoreCity,
    updateThreeUkStorePhone,
    updateThreeUkProductName,
    updateThreeUkProductPrice,
    updateThreeUkProductImei,
    updateThreeUkInvoiceNumber,
    updateThreeUkServedBy,
    updateThreeUkVatNumber,
    updateThreeUkTransactionDate,
    updateThreeUkTransactionTime,
    updateThreeUkTransactionStore,
    updateThreeUkTransactionTerm,
    updateThreeUkTransactionCode,
  } = useReceiptStore();

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="threeuk-brand-name">Brand Name</Label>
        <Input
          id="threeuk-brand-name"
          value={threeUkBrandName}
          onChange={(e) => updateThreeUkBrandName(e.target.value)}
          placeholder="e.g., Three.co.uk"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-branch-name">Branch Name</Label>
        <Input
          id="threeuk-branch-name"
          value={threeUkBranchName}
          onChange={(e) => updateThreeUkBranchName(e.target.value)}
          placeholder="e.g., Three Liverpool"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-store-address">Store Address</Label>
        <Input
          id="threeuk-store-address"
          value={threeUkStoreAddress}
          onChange={(e) => updateThreeUkStoreAddress(e.target.value)}
          placeholder="e.g., 123 Oxford Street"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-store-city">Store City</Label>
        <Input
          id="threeuk-store-city"
          value={threeUkStoreCity}
          onChange={(e) => updateThreeUkStoreCity(e.target.value)}
          placeholder="e.g., London W1D 2JA"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-store-phone">Store Phone</Label>
        <Input
          id="threeuk-store-phone"
          value={threeUkStorePhone}
          onChange={(e) => updateThreeUkStorePhone(e.target.value)}
          placeholder="e.g., +44 333 338 1001"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-product-name">Product Name</Label>
        <Input
          id="threeuk-product-name"
          value={threeUkProductName}
          onChange={(e) => updateThreeUkProductName(e.target.value)}
          placeholder="e.g., iPhone 15 Pro Max – Contract"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-product-price">Product Price</Label>
        <Input
          id="threeuk-product-price"
          value={threeUkProductPrice}
          onChange={(e) => updateThreeUkProductPrice(e.target.value)}
          placeholder="e.g., 1,199.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-product-imei">Product IMEI</Label>
        <Input
          id="threeuk-product-imei"
          value={threeUkProductImei}
          onChange={(e) => updateThreeUkProductImei(e.target.value)}
          placeholder="e.g., 123456789012345"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-invoice-number">Invoice Number</Label>
        <Input
          id="threeuk-invoice-number"
          value={threeUkInvoiceNumber}
          onChange={(e) => updateThreeUkInvoiceNumber(e.target.value)}
          placeholder="e.g., XXXXXXXXXXXXXXXXXXX"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-served-by">Served By</Label>
        <Input
          id="threeuk-served-by"
          value={threeUkServedBy}
          onChange={(e) => updateThreeUkServedBy(e.target.value)}
          placeholder="e.g., Alex Smith"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-vat-number">VAT Number</Label>
        <Input
          id="threeuk-vat-number"
          value={threeUkVatNumber}
          onChange={(e) => updateThreeUkVatNumber(e.target.value)}
          placeholder="e.g., 857809362B01"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-transaction-date">Transaction Date</Label>
        <Input
          id="threeuk-transaction-date"
          value={threeUkTransactionDate}
          onChange={(e) => updateThreeUkTransactionDate(e.target.value)}
          placeholder="e.g., 02/08/2024"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-transaction-time">Transaction Time</Label>
        <Input
          id="threeuk-transaction-time"
          value={threeUkTransactionTime}
          onChange={(e) => updateThreeUkTransactionTime(e.target.value)}
          placeholder="e.g., 15:27"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-transaction-store">Transaction Store</Label>
        <Input
          id="threeuk-transaction-store"
          value={threeUkTransactionStore}
          onChange={(e) => updateThreeUkTransactionStore(e.target.value)}
          placeholder="e.g., 00001"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-transaction-term">Transaction Term</Label>
        <Input
          id="threeuk-transaction-term"
          value={threeUkTransactionTerm}
          onChange={(e) => updateThreeUkTransactionTerm(e.target.value)}
          placeholder="e.g., 0001"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="threeuk-transaction-code">Transaction Code</Label>
        <Input
          id="threeuk-transaction-code"
          value={threeUkTransactionCode}
          onChange={(e) => updateThreeUkTransactionCode(e.target.value)}
          placeholder="e.g., 00001"
        />
      </div>
    </>
  );
}