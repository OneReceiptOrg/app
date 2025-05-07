"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import useBoundStore from "@/lib/store/index"; 

export default function DiorReceiptForm() {
  const {
    diorStorePhone,
    diorStoreAddress,
    diorStoreCityStateZip,
    diorStoreId,
    diorDate,
    diorTime,
    diorRegisterId,
    diorTransCounter,
    diorCashierId,
    diorCustomerId,
    diorStoreName,
    diorProductName,
    diorProductSku,
    diorSalespersonId,
    diorTotalAmount,
    diorTaxRate,
    diorTaxAmount,
    diorSubtotal,
    diorItemPrice,
    diorCardLast4,
    diorTaxRateDetail,
    diorTaxAmountDetail,
    diorTaxableAmountDetail,
    diorTaxTotalDetail,
    diorTransactionId,

    customerName,

    updateDiorStorePhone,
    updateDiorStoreAddress,
    updateDiorStoreCityStateZip,
    updateDiorStoreId,
    updateDiorDate,
    updateDiorTime,
    updateDiorRegisterId,
    updateDiorTransCounter,
    updateDiorCashierId,
    updateDiorCustomerId,
    updateDiorStoreName,
    updateDiorProductName,
    updateDiorProductSku,
    updateDiorSalespersonId,
    updateDiorTotalAmount,
    updateDiorTaxRate,
    updateDiorTaxAmount,
    updateDiorSubtotal,
    updateDiorItemPrice,
    updateDiorCardLast4,
    updateDiorTaxRateDetail,
    updateDiorTaxAmountDetail,
    updateDiorTaxableAmountDetail,
    updateDiorTaxTotalDetail,
    updateDiorTransactionId,

    updateCustomerName,
  } = useBoundStore();

  return (
    <div className="grid gap-3 w-full">
      <div className="grid gap-2">
        <Label htmlFor="dior-store-name">Store Name</Label>
        <Input
          id="dior-store-name"
          value={diorStoreName}
          onChange={(e) => updateDiorStoreName(e.target.value)}
          placeholder="e.g., DIOR LONDON"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dior-store-address">Store Address</Label>
        <Input
          id="dior-store-address"
          value={diorStoreAddress}
          onChange={(e) => updateDiorStoreAddress(e.target.value)}
          placeholder="e.g., 160-162 New Bond Street"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dior-store-city-zip">Store City/State/Zip</Label>
        <Input
          id="dior-store-city-zip"
          value={diorStoreCityStateZip}
          onChange={(e) => updateDiorStoreCityStateZip(e.target.value)}
          placeholder="e.g., London W1S 2UE"
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="dior-store-phone">Store Phone</Label>
        <Input
          id="dior-store-phone"
          value={diorStorePhone}
          onChange={(e) => updateDiorStorePhone(e.target.value)}
          placeholder="e.g., +44 20 7172 0172"
        />
      </div>

      {}
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="dior-store-id">Store ID</Label>
          <Input
            id="dior-store-id"
            value={diorStoreId}
            onChange={(e) => updateDiorStoreId(e.target.value)}
            placeholder="e.g., 201"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-register-id">Register ID</Label>
          <Input
            id="dior-register-id"
            value={diorRegisterId}
            onChange={(e) => updateDiorRegisterId(e.target.value)}
            placeholder="e.g., 01"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-trans-counter">Trans Counter</Label>
          <Input
            id="dior-trans-counter"
            value={diorTransCounter}
            onChange={(e) => updateDiorTransCounter(e.target.value)}
            placeholder="e.g., 3"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-transaction-id">Transaction ID</Label>
          <Input
            id="dior-transaction-id"
            value={diorTransactionId}
            onChange={(e) => updateDiorTransactionId(e.target.value)}
            placeholder="e.g., TR-89354"
          />
        </div>
      </div>

      {}
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="dior-date">Date</Label>
          <Input
            id="dior-date"
            value={diorDate}
            onChange={(e) => updateDiorDate(e.target.value)}
            placeholder="e.g., 01/15/2024"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-time">Time</Label>
          <Input
            id="dior-time"
            value={diorTime}
            onChange={(e) => updateDiorTime(e.target.value)}
            placeholder="e.g., 14:30"
          />
        </div>
      </div>

      {}
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="dior-cashier-id">Cashier ID</Label>
          <Input
            id="dior-cashier-id"
            value={diorCashierId}
            onChange={(e) => updateDiorCashierId(e.target.value)}
            placeholder="e.g., 40002103"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-salesperson-id">Salesperson ID</Label>
          <Input
            id="dior-salesperson-id"
            value={diorSalespersonId}
            onChange={(e) => updateDiorSalespersonId(e.target.value)}
            placeholder="e.g., 10002133"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-customer-name">Customer Name</Label>
          <Input
            id="dior-customer-name"
            value={customerName} 
            onChange={(e) => updateCustomerName(e.target.value)} 
            placeholder="e.g., JAMES WILSON"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-customer-id">Customer ID</Label>
          <Input
            id="dior-customer-id"
            value={diorCustomerId}
            onChange={(e) => updateDiorCustomerId(e.target.value)}
            placeholder="e.g., 05503008515"
          />
        </div>
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">Product</h4>
      <div className="grid gap-2">
        <Label htmlFor="dior-product-name">Product Name</Label>
        <Input
          id="dior-product-name"
          value={diorProductName}
          onChange={(e) => updateDiorProductName(e.target.value)}
          placeholder="e.g., DIOR OBLIQUE JACKET"
        />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="dior-product-sku">Product SKU</Label>
          <Input
            id="dior-product-sku"
            value={diorProductSku}
            onChange={(e) => updateDiorProductSku(e.target.value)}
            placeholder="e.g., 1DIOR239"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-item-price">Item Price</Label>
          <Input
            id="dior-item-price"
            value={diorItemPrice}
            onChange={(e) => updateDiorItemPrice(e.target.value)}
            placeholder="e.g., 3,200.00"
          />
        </div>
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">Summary</h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="dior-subtotal">Subtotal (HT)</Label>
          <Input
            id="dior-subtotal"
            value={diorSubtotal}
            onChange={(e) => updateDiorSubtotal(e.target.value)}
            placeholder="e.g., 2,616.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-tax-amount">Tax Amount</Label>
          <Input
            id="dior-tax-amount"
            value={diorTaxAmount} 
            onChange={(e) => updateDiorTaxAmount(e.target.value)}
            placeholder="e.g., 533.00" 
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-tax-rate">Tax Rate (%)</Label>
          <Input
            id="dior-tax-rate"
            value={diorTaxRate}
            onChange={(e) => updateDiorTaxRate(e.target.value)}
            placeholder="e.g., 20.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-total-amount">Total Amount (TTC)</Label>
          <Input
            id="dior-total-amount"
            value={diorTotalAmount}
            onChange={(e) => updateDiorTotalAmount(e.target.value)}
            placeholder="e.g., 3,200.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-card-last4">Card Last 4</Label>
          <Input
            id="dior-card-last4"
            value={diorCardLast4}
            onChange={(e) => updateDiorCardLast4(e.target.value)}
            placeholder="e.g., 4892"
          />
        </div>
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Tax Analysis Detail
      </h4>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="dior-tax-rate-detail">Detail Rate (%)</Label>
          <Input
            id="dior-tax-rate-detail"
            value={diorTaxRateDetail}
            onChange={(e) => updateDiorTaxRateDetail(e.target.value)}
            placeholder="e.g., 0.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-tax-amount-detail">Detail Tax Amount</Label>
          <Input
            id="dior-tax-amount-detail"
            value={diorTaxAmountDetail}
            onChange={(e) => updateDiorTaxAmountDetail(e.target.value)}
            placeholder="e.g., 0.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-taxable-amount-detail">Detail Taxable</Label>
          <Input
            id="dior-taxable-amount-detail"
            value={diorTaxableAmountDetail}
            onChange={(e) => updateDiorTaxableAmountDetail(e.target.value)}
            placeholder="e.g., 0.00"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="dior-tax-total-detail">Detail Tax Total</Label>
          <Input
            id="dior-tax-total-detail"
            value={diorTaxTotalDetail}
            onChange={(e) => updateDiorTaxTotalDetail(e.target.value)}
            placeholder="e.g., 0.00"
          />
        </div>
      </div>
    </div>
  );
}
