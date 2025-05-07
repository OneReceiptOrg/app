"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiptStore } from "@/lib/store";

export default function GoyardReceiptForm() {
  const {
    goyardProductName,
    goyardProductPrice,
    goyardTaxAmount,
    goyardDate,
    goyardOrderNumber,
    goyardStoreName,
    goyardStoreAddress,
    goyardStoreCity,
    goyardStorePhone,
    goyardTransactionNumber,
    goyardSalesAssociate,
    goyardCustomerName,
    goyardProductReference,
    goyardProductColor,
    goyardCardLast4,
    goyardCustomerId,
    goyardStoreId,
    goyardCashierId,
    goyardCurrency,
    goyardPaymentMethod,
    goyardPaymentAmount,
    goyardTaxLabel,
    goyardTaxRate,
    goyardTaxBaseAmount,
    goyardVatNumber,
    goyardProductQuantity,
    updateGoyardProductName,
    updateGoyardProductPrice,
    updateGoyardTaxAmount,
    updateGoyardDate,
    updateGoyardOrderNumber,
    updateGoyardStoreName,
    updateGoyardStoreAddress,
    updateGoyardStoreCity,
    updateGoyardStorePhone,
    updateGoyardTransactionNumber,
    updateGoyardSalesAssociate,
    updateGoyardCustomerName,
    updateGoyardProductReference,
    updateGoyardProductColor,
    updateGoyardCardLast4,
    updateGoyardCustomerId,
    updateGoyardStoreId,
    updateGoyardCashierId,
    updateGoyardCurrency,
    updateGoyardPaymentMethod,
    updateGoyardPaymentAmount,
    updateGoyardTaxLabel,
    updateGoyardTaxRate,
    updateGoyardTaxBaseAmount,
    updateGoyardVatNumber,
    updateGoyardProductQuantity,
  } = useReceiptStore();

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="goyard-store-name">Store Name</Label>
        <Input
          id="goyard-store-name"
          value={goyardStoreName}
          onChange={(e) => updateGoyardStoreName(e.target.value)}
          placeholder="e.g., Goyard Maison"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-store-address">Store Address</Label>
        <Input
          id="goyard-store-address"
          value={goyardStoreAddress}
          onChange={(e) => updateGoyardStoreAddress(e.target.value)}
          placeholder="e.g., 233 Mount Street"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-store-city">Store City</Label>
        <Input
          id="goyard-store-city"
          value={goyardStoreCity}
          onChange={(e) => updateGoyardStoreCity(e.target.value)}
          placeholder="e.g., London W1K 2NE"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-store-phone">Store Phone</Label>
        <Input
          id="goyard-store-phone"
          value={goyardStorePhone}
          onChange={(e) => updateGoyardStorePhone(e.target.value)}
          placeholder="e.g., +44 20 7493 1339"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-store-id">Store ID</Label>
        <Input
          id="goyard-store-id"
          value={goyardStoreId}
          onChange={(e) => updateGoyardStoreId(e.target.value)}
          placeholder="e.g., LON1"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-order-number">Order Number</Label>
        <Input
          id="goyard-order-number"
          value={goyardOrderNumber}
          onChange={(e) => updateGoyardOrderNumber(e.target.value)}
          placeholder="e.g., 189438"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-date">Date</Label>
        <Input
          id="goyard-date"
          value={goyardDate}
          onChange={(e) => updateGoyardDate(e.target.value)}
          placeholder="e.g., 03/16/2024 11:15"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-transaction-number">Transaction Number</Label>
        <Input
          id="goyard-transaction-number"
          value={goyardTransactionNumber}
          onChange={(e) => updateGoyardTransactionNumber(e.target.value)}
          placeholder="e.g., GY-24031600456"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-cashier-id">Cashier ID</Label>
        <Input
          id="goyard-cashier-id"
          value={goyardCashierId}
          onChange={(e) => updateGoyardCashierId(e.target.value)}
          placeholder="e.g., CD425"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-customer-id">Customer ID</Label>
        <Input
          id="goyard-customer-id"
          value={goyardCustomerId}
          onChange={(e) => updateGoyardCustomerId(e.target.value)}
          placeholder="e.g., E3645694"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-customer-name">Customer Name</Label>
        <Input
          id="goyard-customer-name"
          value={goyardCustomerName}
          onChange={(e) => updateGoyardCustomerName(e.target.value)}
          placeholder="e.g., Victoria Brown"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-product-quantity">Product Quantity</Label>
        <Input
          id="goyard-product-quantity"
          value={goyardProductQuantity}
          onChange={(e) => updateGoyardProductQuantity(e.target.value)}
          placeholder="e.g., 1"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-product-name">Product Name</Label>
        <Input
          id="goyard-product-name"
          value={goyardProductName}
          onChange={(e) => updateGoyardProductName(e.target.value)}
          placeholder="e.g., Saint Louis PM Tote"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-product-price">Product Price</Label>
        <Input
          id="goyard-product-price"
          value={goyardProductPrice}
          onChange={(e) => updateGoyardProductPrice(e.target.value)}
          placeholder="e.g., 2,450.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-product-reference">Product Reference</Label>
        <Input
          id="goyard-product-reference"
          value={goyardProductReference}
          onChange={(e) => updateGoyardProductReference(e.target.value)}
          placeholder="e.g., SLPM-01"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-product-color">Product Color</Label>
        <Input
          id="goyard-product-color"
          value={goyardProductColor}
          onChange={(e) => updateGoyardProductColor(e.target.value)}
          placeholder="e.g., Black/Tan"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-currency">Currency</Label>
        <Input
          id="goyard-currency"
          value={goyardCurrency}
          onChange={(e) => updateGoyardCurrency(e.target.value)}
          placeholder="e.g., £"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-payment-method">Payment Method</Label>
        <Input
          id="goyard-payment-method"
          value={goyardPaymentMethod}
          onChange={(e) => updateGoyardPaymentMethod(e.target.value)}
          placeholder="e.g., AMERICAN EXPRESS GBP"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-payment-amount">Payment Amount</Label>
        <Input
          id="goyard-payment-amount"
          value={goyardPaymentAmount}
          onChange={(e) => updateGoyardPaymentAmount(e.target.value)}
          placeholder="e.g., 2,940.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-card-last4">Card Last 4</Label>
        <Input
          id="goyard-card-last4"
          value={goyardCardLast4}
          onChange={(e) => updateGoyardCardLast4(e.target.value)}
          placeholder="e.g., 5678"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-tax-label">Tax Label</Label>
        <Input
          id="goyard-tax-label"
          value={goyardTaxLabel}
          onChange={(e) => updateGoyardTaxLabel(e.target.value)}
          placeholder="e.g., VAT"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-tax-amount">Tax Amount</Label>
        <Input
          id="goyard-tax-amount"
          value={goyardTaxAmount}
          onChange={(e) => updateGoyardTaxAmount(e.target.value)}
          placeholder="e.g., 490.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-tax-rate">Tax Rate</Label>
        <Input
          id="goyard-tax-rate"
          value={goyardTaxRate}
          onChange={(e) => updateGoyardTaxRate(e.target.value)}
          placeholder="e.g., 20%"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-tax-base-amount">Tax Base Amount</Label>
        <Input
          id="goyard-tax-base-amount"
          value={goyardTaxBaseAmount}
          onChange={(e) => updateGoyardTaxBaseAmount(e.target.value)}
          placeholder="e.g., 2,450.00"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-vat-number">VAT Number</Label>
        <Input
          id="goyard-vat-number"
          value={goyardVatNumber}
          onChange={(e) => updateGoyardVatNumber(e.target.value)}
          placeholder="e.g., GB123456789"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="goyard-sales-associate">Sales Associate</Label>
        <Input
          id="goyard-sales-associate"
          value={goyardSalesAssociate}
          onChange={(e) => updateGoyardSalesAssociate(e.target.value)}
          placeholder="e.g., Pierre Dubois"
        />
      </div>
    </>
  );
}