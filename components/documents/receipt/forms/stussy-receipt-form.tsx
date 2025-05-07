"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useReceiptStore } from "@/lib/store";
import { useEffect } from "react";
import { 
  parseCurrency, 
  formatCurrency
} from "@/lib/utils/calculations";

export default function StussyReceiptForm() {
  const {
    stussyStoreAddressLine1,
    stussyStoreCity,
    stussyStorePhone,
    stussyDateTime,
    stussyTicketNumber,
    stussyVatNumber,
    stussyRegister,
    stussyEmployee,
    stussyProductName,
    stussyProductPrice,
    stussyProductSize,
    stussySubtotal,
    stussyTaxBase,
    stussyTaxRate,
    stussyTaxAmount,
    stussyTotal,
    stussyPaymentMethod,
    stussyBarcodeNumber,
    customerName,
    cashierName,

    updateStussyStoreAddressLine1,
    updateStussyStoreCity,
    updateStussyStorePhone,
    updateStussyDateTime,
    updateStussyTicketNumber,
    updateStussyVatNumber,
    updateStussyRegister,
    updateStussyEmployee,
    updateStussyProductName,
    updateStussyProductPrice,
    updateStussyProductSize,
    updateStussySubtotal,
    updateStussyTaxBase,
    updateStussyTaxRate,
    updateStussyTaxAmount,
    updateStussyTotal,
    updateStussyPaymentMethod,
    updateStussyBarcodeNumber,
    updateCustomerName,
    updateCashierName,
  } = useReceiptStore();

  useEffect(() => {
    if (stussyProductPrice) {
      const price = parseCurrency(stussyProductPrice);
      updateStussySubtotal(formatCurrency(price));
      updateStussyTotal(formatCurrency(price));
    }

    if (stussyProductPrice && stussyTaxRate) {
      const price = parseCurrency(stussyProductPrice);
      const taxRate = parseFloat(stussyTaxRate);
      const taxAmount = price * (taxRate / 100);
      updateStussyTaxAmount(formatCurrency(taxAmount));
      
      updateStussyTaxBase(formatCurrency(price));
    }

    if (stussyEmployee && !cashierName) {
      updateCashierName(stussyEmployee);
    }
  }, [
    stussyProductPrice,
    stussyTaxRate,
    stussyEmployee,
    cashierName,
    updateStussySubtotal,
    updateStussyTotal,
    updateStussyTaxAmount,
    updateStussyTaxBase,
    updateCashierName,
  ]);

  return (
    <>
      <div className="grid gap-2">
        <Label htmlFor="stussy-store-address">Store Address Line 1</Label>
        <Input
          id="stussy-store-address"
          value={stussyStoreAddressLine1}
          onChange={(e) => updateStussyStoreAddressLine1(e.target.value)}
          placeholder="e.g., 115 Spring Street"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-store-city">Store City</Label>
        <Input
          id="stussy-store-city"
          value={stussyStoreCity}
          onChange={(e) => updateStussyStoreCity(e.target.value)}
          placeholder="e.g., New York, NY 10012"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-store-phone">Store Phone</Label>
        <Input
          id="stussy-store-phone"
          value={stussyStorePhone}
          onChange={(e) => updateStussyStorePhone(e.target.value)}
          placeholder="e.g., (212) 226-8493"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-date-time">Date & Time</Label>
        <Input
          id="stussy-date-time"
          value={stussyDateTime}
          onChange={(e) => updateStussyDateTime(e.target.value)}
          placeholder="e.g., 03/12/2024 12:30pm"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-ticket-number">Ticket Number</Label>
        <Input
          id="stussy-ticket-number"
          value={stussyTicketNumber}
          onChange={(e) => updateStussyTicketNumber(e.target.value)}
          placeholder="e.g., 220000057624"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-vat-number">VAT Number</Label>
        <Input
          id="stussy-vat-number"
          value={stussyVatNumber}
          onChange={(e) => updateStussyVatNumber(e.target.value)}
          placeholder="e.g., 857809362B01"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-register">Register</Label>
        <Input
          id="stussy-register"
          value={stussyRegister}
          onChange={(e) => updateStussyRegister(e.target.value)}
          placeholder="e.g., Register 1"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-employee">Employee</Label>
        <Input
          id="stussy-employee"
          value={stussyEmployee}
          onChange={(e) => updateStussyEmployee(e.target.value)}
          placeholder="e.g., STY123"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="customer-name">Customer Name</Label>
        <Input
          id="customer-name"
          value={customerName}
          onChange={(e) => updateCustomerName(e.target.value)}
          placeholder="e.g., John Smith"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-product-name">Product Name</Label>
        <Input
          id="stussy-product-name"
          value={stussyProductName}
          onChange={(e) => updateStussyProductName(e.target.value)}
          placeholder="e.g., Basic Stüssy Hoodie"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-product-size">Product Size</Label>
        <Input
          id="stussy-product-size"
          value={stussyProductSize}
          onChange={(e) => updateStussyProductSize(e.target.value)}
          placeholder="e.g., L"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-product-price">Product Price</Label>
        <Input
          id="stussy-product-price"
          value={stussyProductPrice}
          onChange={(e) => updateStussyProductPrice(e.target.value)}
          placeholder="e.g., 141.70"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-subtotal">Subtotal (Auto-calculated)</Label>
        <Input
          id="stussy-subtotal"
          value={stussySubtotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from product price"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-tax-rate">Tax Rate (%)</Label>
        <Input
          id="stussy-tax-rate"
          value={stussyTaxRate}
          onChange={(e) => updateStussyTaxRate(e.target.value)}
          placeholder="e.g., 21"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-tax-base">Tax Base (Auto-calculated)</Label>
        <Input
          id="stussy-tax-base"
          value={stussyTaxBase}
          readOnly
          className="bg-muted"
          placeholder="Calculated from product price"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-tax-amount">Tax Amount (Auto-calculated)</Label>
        <Input
          id="stussy-tax-amount"
          value={stussyTaxAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from product price and tax rate"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-total">Total (Auto-calculated)</Label>
        <Input
          id="stussy-total"
          value={stussyTotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal and tax"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-payment-method">Payment Method</Label>
        <Input
          id="stussy-payment-method"
          value={stussyPaymentMethod}
          onChange={(e) => updateStussyPaymentMethod(e.target.value)}
          placeholder="e.g., Debit Card"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="stussy-barcode-number">Barcode Number</Label>
        <Input
          id="stussy-barcode-number"
          value={stussyBarcodeNumber}
          onChange={(e) => updateStussyBarcodeNumber(e.target.value)}
          placeholder="e.g., 2 200000 576248"
        />
      </div>
    </>
  );
} 