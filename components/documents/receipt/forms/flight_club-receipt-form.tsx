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

export default function FlightClubReceiptForm() {
  const {
    flightClubStoreAddress,
    flightClubStoreCityStateZip,
    flightClubStorePhone,
    flightClubDate,
    flightClubOrderNumber,
    flightClubProductName,
    flightClubProductSKU,
    flightClubProductSize,
    flightClubItemPrice,
    flightClubSubtotal,
    flightClubTaxAmount,
    flightClubShippingAmount,
    flightClubTotalAmount,
    flightClubDiscountAmount,
    flightClubTenderedCash,
    flightClubTenderedCreditCard,
    flightClubChangeAmount,

    updateFlightClubStoreAddress,
    updateFlightClubStoreCityStateZip,
    updateFlightClubStorePhone,
    updateFlightClubDate,
    updateFlightClubOrderNumber,
    updateFlightClubProductName,
    updateFlightClubProductSKU,
    updateFlightClubProductSize,
    updateFlightClubItemPrice,
    updateFlightClubSubtotal,
    updateFlightClubTaxAmount,
    updateFlightClubShippingAmount,
    updateFlightClubTotalAmount,
    updateFlightClubDiscountAmount,
    updateFlightClubTenderedCash,
    updateFlightClubTenderedCreditCard,
    updateFlightClubChangeAmount,

    customerName,
    cashierName,
    updateCustomerName,
    updateCashierName,
  } = useReceiptStore();

  useEffect(() => {
    if (flightClubItemPrice) {
      const price = parseCurrency(flightClubItemPrice);
      const discount = parseCurrency(flightClubDiscountAmount);
      const shipping = parseCurrency(flightClubShippingAmount);
      
      const subtotal = Math.max(0, price - discount);
      
      const taxRate = 10.76;
      const taxAmount = calculateVat(subtotal, taxRate);
      
      const total = subtotal + taxAmount + shipping;
      
      updateFlightClubSubtotal(formatCurrency(subtotal));
      updateFlightClubTaxAmount(formatCurrency(taxAmount));
      updateFlightClubTotalAmount(formatCurrency(total));
      
      const cashAmount = parseCurrency(flightClubTenderedCash);
      updateFlightClubTenderedCreditCard(formatCurrency(total - cashAmount));
      
      if (cashAmount > total) {
        updateFlightClubChangeAmount(formatCurrency(cashAmount - total));
      } else {
        updateFlightClubChangeAmount("0.00");
      }
    }
  }, [flightClubItemPrice, flightClubDiscountAmount, flightClubShippingAmount, flightClubTenderedCash]);

  return (
    <div className="grid gap-3 w-full">
      {}
      <h4 className="text-sm font-medium mt-2">Store Information</h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-store-address">Store Address</Label>
        <Input
          id="flight-club-store-address"
          value={flightClubStoreAddress}
          onChange={(e) => updateFlightClubStoreAddress(e.target.value)}
          placeholder="e.g., 812 Broadway"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-store-city-state-zip">
          City, State, ZIP
        </Label>
        <Input
          id="flight-club-store-city-state-zip"
          value={flightClubStoreCityStateZip}
          onChange={(e) => updateFlightClubStoreCityStateZip(e.target.value)}
          placeholder="e.g., New York, NY 10003"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-store-phone">Store Phone</Label>
        <Input
          id="flight-club-store-phone"
          value={flightClubStorePhone}
          onChange={(e) => updateFlightClubStorePhone(e.target.value)}
          placeholder="e.g., (888) 937-8020"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Order Information
      </h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-date">Date</Label>
        <Input
          id="flight-club-date"
          value={flightClubDate}
          onChange={(e) => updateFlightClubDate(e.target.value)}
          placeholder="e.g., Saturday, May 11, 2019, 2:08 PM"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-order-number">Order Number</Label>
        <Input
          id="flight-club-order-number"
          value={flightClubOrderNumber}
          onChange={(e) => updateFlightClubOrderNumber(e.target.value)}
          placeholder="e.g., ORD-444089"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Product Information
      </h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-product-name">Product Name</Label>
        <Input
          id="flight-club-product-name"
          value={flightClubProductName}
          onChange={(e) => updateFlightClubProductName(e.target.value)}
          placeholder="e.g., Air Jordan 1 High OG"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-product-sku">Product SKU</Label>
        <Input
          id="flight-club-product-sku"
          value={flightClubProductSKU}
          onChange={(e) => updateFlightClubProductSKU(e.target.value)}
          placeholder="e.g., 555088-134"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-product-size">Product Size</Label>
        <Input
          id="flight-club-product-size"
          value={flightClubProductSize}
          onChange={(e) => updateFlightClubProductSize(e.target.value)}
          placeholder="e.g., US 10"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-item-price">Item Price</Label>
        <Input
          id="flight-club-item-price"
          value={flightClubItemPrice}
          onChange={(e) => updateFlightClubItemPrice(e.target.value)}
          placeholder="e.g., 175.00"
          type="number"
          step="0.01"
        />
      </div>

      {}
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">
        Payment Information
      </h4>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-subtotal">Subtotal (Auto-calculated)</Label>
        <Input
          id="flight-club-subtotal"
          value={flightClubSubtotal}
          readOnly
          className="bg-muted"
          placeholder="Calculated from item price - discount"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-discount-amount">Discount Amount</Label>
        <Input
          id="flight-club-discount-amount"
          value={flightClubDiscountAmount}
          onChange={(e) => updateFlightClubDiscountAmount(e.target.value)}
          placeholder="e.g., 0.00"
          type="number"
          step="0.01"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-shipping-amount">Shipping Amount</Label>
        <Input
          id="flight-club-shipping-amount"
          value={flightClubShippingAmount}
          onChange={(e) => updateFlightClubShippingAmount(e.target.value)}
          placeholder="e.g., 50.00"
          type="number"
          step="0.01"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-tax-amount">Tax Amount (Auto-calculated)</Label>
        <Input
          id="flight-club-tax-amount"
          value={flightClubTaxAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal (tax rate ~10.76%)"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-total-amount">Total Amount (Auto-calculated)</Label>
        <Input
          id="flight-club-total-amount"
          value={flightClubTotalAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated from subtotal + tax + shipping"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-tendered-cash">Tendered Cash</Label>
        <Input
          id="flight-club-tendered-cash"
          value={flightClubTenderedCash}
          onChange={(e) => updateFlightClubTenderedCash(e.target.value)}
          placeholder="e.g., 0.00"
          type="number"
          step="0.01"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-tendered-credit-card">
          Tendered Credit Card (Auto-calculated)
        </Label>
        <Input
          id="flight-club-tendered-credit-card"
          value={flightClubTenderedCreditCard}
          readOnly
          className="bg-muted"
          placeholder="Calculated (total - cash payment)"
        />
      </div>

      {}
      <div className="grid gap-2">
        <Label htmlFor="flight-club-change-amount">Change Amount (Auto-calculated)</Label>
        <Input
          id="flight-club-change-amount"
          value={flightClubChangeAmount}
          readOnly
          className="bg-muted"
          placeholder="Calculated if cash exceeds total"
        />
      </div>
    </div>
  );
}
