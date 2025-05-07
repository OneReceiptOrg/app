"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiptStore } from "@/lib/store";
import { useEffect } from "react";
import { 
  parseCurrency, 
  formatCurrency, 
  calculateVat
} from "@/lib/utils/calculations";

export default function DysonReceiptForm() {
  const {
    dysonStoreName,
    dysonStoreAddress,
    dysonStoreCity,
    dysonStorePhone,
    dysonDate,
    dysonOrderNumber,
    dysonOrderReference,
    dysonCustomerName,
    dysonCustomerEmail,
    dysonProductName,
    dysonProductModel,
    dysonProductSKU,
    dysonSerialNumber,
    dysonPrice,
    dysonTax,
    dysonTotalPrice,
    dysonCardLast4,

    updateDysonStoreName,
    updateDysonStoreAddress,
    updateDysonStoreCity,
    updateDysonStorePhone,
    updateDysonDate,
    updateDysonOrderNumber,
    updateDysonOrderReference,
    updateDysonCustomerName,
    updateDysonCustomerEmail,
    updateDysonProductName,
    updateDysonProductModel,
    updateDysonProductSKU,
    updateDysonSerialNumber,
    updateDysonPrice,
    updateDysonTax,
    updateDysonTotalPrice,
    updateDysonCardLast4,
  } = useReceiptStore();

  useEffect(() => {
    if (dysonPrice) {
      const price = parseCurrency(dysonPrice);
      
      const taxRate = 20;
      const taxAmount = calculateVat(price, taxRate);
      
      const total = price + taxAmount;
      
      updateDysonTax(formatCurrency(taxAmount));
      updateDysonTotalPrice(formatCurrency(total));
    }
  }, [dysonPrice]);

  return (
    <div className="grid gap-3 w-full">
      {}
      <h4 className="text-sm font-medium mt-2">Store Information</h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-store-name">Store Name</Label>
        <Input
          id="dyson-store-name"
          value={dysonStoreName}
          onChange={(e) => updateDysonStoreName(e.target.value)}
          placeholder="e.g., Dyson Demo Store"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-store-address">Store Address</Label>
        <Input
          id="dyson-store-address"
          value={dysonStoreAddress}
          onChange={(e) => updateDysonStoreAddress(e.target.value)}
          placeholder="e.g., 123 Oxford Street"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-store-city">Store City</Label>
        <Input
          id="dyson-store-city"
          value={dysonStoreCity}
          onChange={(e) => updateDysonStoreCity(e.target.value)}
          placeholder="e.g., London W1D 2LF"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-store-phone">Store Phone</Label>
        <Input
          id="dyson-store-phone"
          value={dysonStorePhone}
          onChange={(e) => updateDysonStorePhone(e.target.value)}
          placeholder="e.g., +44 800 298 0298"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Order Information
      </h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-date">Date</Label>
        <Input
          id="dyson-date"
          value={dysonDate}
          onChange={(e) => updateDysonDate(e.target.value)}
          placeholder="e.g., 03/15/2024 15:45"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-order-number">Order Number</Label>
        <Input
          id="dyson-order-number"
          value={dysonOrderNumber}
          onChange={(e) => updateDysonOrderNumber(e.target.value)}
          placeholder="e.g., ORD-132431"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-order-reference">Order Reference</Label>
        <Input
          id="dyson-order-reference"
          value={dysonOrderReference}
          onChange={(e) => updateDysonOrderReference(e.target.value)}
          placeholder="e.g., DYS-24031500789"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Customer Information
      </h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-customer-name">Customer Name</Label>
        <Input
          id="dyson-customer-name"
          value={dysonCustomerName}
          onChange={(e) => updateDysonCustomerName(e.target.value)}
          placeholder="e.g., Emma Thompson"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-customer-email">Customer Email</Label>
        <Input
          id="dyson-customer-email"
          value={dysonCustomerEmail}
          onChange={(e) => updateDysonCustomerEmail(e.target.value)}
          placeholder="e.g., emma.t@email.com"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Product Information
      </h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-product-name">Product Name</Label>
        <Input
          id="dyson-product-name"
          value={dysonProductName}
          onChange={(e) => updateDysonProductName(e.target.value)}
          placeholder="e.g., Dyson V15 Detect Absolute"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-product-model">Product Model</Label>
        <Input
          id="dyson-product-model"
          value={dysonProductModel}
          onChange={(e) => updateDysonProductModel(e.target.value)}
          placeholder="e.g., V15 Detect Absolute"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-product-sku">Product SKU</Label>
        <Input
          id="dyson-product-sku"
          value={dysonProductSKU}
          onChange={(e) => updateDysonProductSKU(e.target.value)}
          placeholder="e.g., 419128-01"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-serial-number">Serial Number</Label>
        <Input
          id="dyson-serial-number"
          value={dysonSerialNumber}
          onChange={(e) => updateDysonSerialNumber(e.target.value)}
          placeholder="e.g., XB22-UK-LEA193"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Payment Information
      </h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-price">Price (Excl. Tax)</Label>
        <Input
          id="dyson-price"
          value={dysonPrice}
          onChange={(e) => updateDysonPrice(e.target.value)}
          placeholder="e.g., 699.99"
          type="number"
          step="0.01"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-tax">Tax (Auto-calculated)</Label>
        <Input
          id="dyson-tax"
          value={dysonTax}
          readOnly
          className="bg-muted"
          placeholder="Calculated as 20% of price"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-total-price">Total Price (Auto-calculated)</Label>
        <Input
          id="dyson-total-price"
          value={dysonTotalPrice}
          readOnly
          className="bg-muted"
          placeholder="Calculated from price + tax"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="dyson-card-last4">Card Last 4</Label>
        <Input
          id="dyson-card-last4"
          value={dysonCardLast4}
          onChange={(e) => updateDysonCardLast4(e.target.value)}
          placeholder="e.g., 7823"
        />
      </div>
    </div>
  );
}
