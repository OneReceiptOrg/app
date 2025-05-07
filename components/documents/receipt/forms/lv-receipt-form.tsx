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

export default function LVReceiptForm() {
  const {
    // Store Information
    lvStoreName, updateLvStoreName,
    lvStoreAddressLine, updateLvStoreAddressLine,
    lvStoreCityPostal, updateLvStoreCityPostal,
    lvStoreCountry, updateLvStoreCountry,
    lvStorePhone, updateLvStorePhone,
    lvStoreSiret, updateLvStoreSiret,
    lvStoreNaf, updateLvStoreNaf,
    lvStoreTvaNumber, updateLvStoreTvaNumber,
    lvStoreSiren, updateLvStoreSiren,
    
    // Receipt Details
    lvSignatureCode, updateLvSignatureCode,
    lvDocumentNumber, updateLvDocumentNumber,
    lvPosSoftwareVersion, updateLvPosSoftwareVersion,
    lvStoreId, updateLvStoreId,
    lvRegisterId, updateLvRegisterId,
    
    // Transaction Details
    lvDate, updateLvDate,
    lvTime, updateLvTime,
    lvTransactionId, updateLvTransactionId,
    lvSalesAssociate, updateLvSalesAssociate,
    lvCustomerName, updateLvCustomerName,
    
    // Product Details
    lvProductDescription, updateLvProductDescription,
    lvProductCode, updateLvProductCode,
    lvQuantity, updateLvQuantity,
    lvVatRate, updateLvVatRate,
    lvUnitPriceHt, updateLvUnitPriceHt,
    lvUnitPriceTtc, updateLvUnitPriceTtc,
    
    // Totals and Payment
    lvTotalTtc, updateLvTotalTtc,
    lvTotalHt, updateLvTotalHt,
    lvTotalTax, updateLvTotalTax,
    lvPaymentMethod, updateLvPaymentMethod,
    lvAmountPaid, updateLvAmountPaid,
    lvChangeGiven, updateLvChangeGiven,
  } = useReceiptStore();

  // Calculate VAT automatically when unit price changes
  useEffect(() => {
    if (lvUnitPriceTtc && lvVatRate) {
      const parsedPrice = parseCurrency(lvUnitPriceTtc);
      const parsedRate = parseFloat(lvVatRate.replace('%', '')) || 20;
      
      // Calculate price excluding tax and tax amount
      const priceExclTax = parsedPrice / (1 + (parsedRate / 100));
      const taxAmount = parsedPrice - priceExclTax;
      
      updateLvUnitPriceHt(formatCurrency(priceExclTax));
      updateLvTotalTtc(lvUnitPriceTtc); // Set total to unit price for single item
      updateLvTotalHt(formatCurrency(priceExclTax)); // Set total HT
      updateLvTotalTax(formatCurrency(taxAmount)); // Set tax amount
    }
  }, [lvUnitPriceTtc, lvVatRate, updateLvUnitPriceHt, updateLvTotalTtc, updateLvTotalHt, updateLvTotalTax]);

  return (
    <div className="grid gap-3 w-full">
      <h4 className="text-sm font-medium pt-2 border-t">Store Information</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-store-name">Store Name</Label>
        <Input
          id="lv-store-name"
          value={lvStoreName}
          onChange={(e) => updateLvStoreName(e.target.value)}
          placeholder="e.g., Louis Vuitton PARIS CHAMPS ELYSEES"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-store-address">Store Address</Label>
        <Input
          id="lv-store-address"
          value={lvStoreAddressLine}
          onChange={(e) => updateLvStoreAddressLine(e.target.value)}
          placeholder="e.g., 101, AVENUE DES CHAMPS-ELYSEES"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-city-postal">City & Postal Code</Label>
        <Input
          id="lv-city-postal"
          value={lvStoreCityPostal}
          onChange={(e) => updateLvStoreCityPostal(e.target.value)}
          placeholder="e.g., 75008 PARIS 75"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-country">Country</Label>
        <Input
          id="lv-country"
          value={lvStoreCountry}
          onChange={(e) => updateLvStoreCountry(e.target.value)}
          placeholder="e.g., France"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-phone">Phone Number</Label>
        <Input
          id="lv-phone"
          value={lvStorePhone}
          onChange={(e) => updateLvStorePhone(e.target.value)}
          placeholder="e.g., +33 9 77 40 40 77"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-siret">SIRET Number</Label>
        <Input
          id="lv-siret"
          value={lvStoreSiret}
          onChange={(e) => updateLvStoreSiret(e.target.value)}
          placeholder="e.g., 331 888 990 00248"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-naf">NAF/APE Code</Label>
        <Input
          id="lv-naf"
          value={lvStoreNaf}
          onChange={(e) => updateLvStoreNaf(e.target.value)}
          placeholder="e.g., 7010Z"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-tva">TVA Number</Label>
        <Input
          id="lv-tva"
          value={lvStoreTvaNumber}
          onChange={(e) => updateLvStoreTvaNumber(e.target.value)}
          placeholder="e.g., FR06331888990"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-siren">SIREN Number</Label>
        <Input
          id="lv-siren"
          value={lvStoreSiren}
          onChange={(e) => updateLvStoreSiren(e.target.value)}
          placeholder="e.g., 775 66A 122 00119"
        />
      </div>
      
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">Receipt Details</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-signature">Signature Code</Label>
        <Input
          id="lv-signature"
          value={lvSignatureCode}
          onChange={(e) => updateLvSignatureCode(e.target.value)}
          placeholder="e.g., B01636imW"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-document">Document Number</Label>
        <Input
          id="lv-document"
          value={lvDocumentNumber}
          onChange={(e) => updateLvDocumentNumber(e.target.value)}
          placeholder="e.g., T140625014835"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-pos-software">POS Software Version</Label>
        <Input
          id="lv-pos-software"
          value={lvPosSoftwareVersion}
          onChange={(e) => updateLvPosSoftwareVersion(e.target.value)}
          placeholder="e.g., 18.0.2.0.26"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-store-id">Store ID</Label>
        <Input
          id="lv-store-id"
          value={lvStoreId}
          onChange={(e) => updateLvStoreId(e.target.value)}
          placeholder="e.g., 1406"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-register-id">Register ID</Label>
        <Input
          id="lv-register-id"
          value={lvRegisterId}
          onChange={(e) => updateLvRegisterId(e.target.value)}
          placeholder="e.g., 1"
        />
      </div>
      
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">Transaction Details</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-date">Date</Label>
        <Input
          id="lv-date"
          value={lvDate}
          onChange={(e) => updateLvDate(e.target.value)}
          placeholder="e.g., 06/10/2023"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-time">Time</Label>
        <Input
          id="lv-time"
          value={lvTime}
          onChange={(e) => updateLvTime(e.target.value)}
          placeholder="e.g., 12 : 07"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-transaction-id">Transaction ID</Label>
        <Input
          id="lv-transaction-id"
          value={lvTransactionId}
          onChange={(e) => updateLvTransactionId(e.target.value)}
          placeholder="e.g., 92348"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-sales-associate">Sales Associate</Label>
        <Input
          id="lv-sales-associate"
          value={lvSalesAssociate}
          onChange={(e) => updateLvSalesAssociate(e.target.value)}
          placeholder="e.g., Ayako H."
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-customer-name">Customer Name</Label>
        <Input
          id="lv-customer-name"
          value={lvCustomerName}
          onChange={(e) => updateLvCustomerName(e.target.value)}
          placeholder="e.g., Noam Taine"
        />
      </div>
      
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">Product Details</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-product-description">Product Description</Label>
        <Input
          id="lv-product-description"
          value={lvProductDescription}
          onChange={(e) => updateLvProductDescription(e.target.value)}
          placeholder="e.g., SNEAKERS LV SKATE"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-product-code">Product Code</Label>
        <Input
          id="lv-product-code"
          value={lvProductCode}
          onChange={(e) => updateLvProductCode(e.target.value)}
          placeholder="e.g., 808030"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-quantity">Quantity</Label>
        <Input
          id="lv-quantity"
          value={lvQuantity}
          onChange={(e) => updateLvQuantity(e.target.value)}
          placeholder="e.g., 1"
          type="number"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-vat-rate">VAT Rate</Label>
        <Input
          id="lv-vat-rate"
          value={lvVatRate}
          onChange={(e) => updateLvVatRate(e.target.value)}
          placeholder="e.g., 20%"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-unit-price-ttc">Unit Price (incl. VAT)</Label>
        <Input
          id="lv-unit-price-ttc"
          value={lvUnitPriceTtc}
          onChange={(e) => updateLvUnitPriceTtc(e.target.value)}
          placeholder="e.g., 990.00"
          type="number"
          step="0.01"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-unit-price-ht">Unit Price (excl. VAT) - Auto-calculated</Label>
        <Input
          id="lv-unit-price-ht"
          value={lvUnitPriceHt}
          onChange={(e) => updateLvUnitPriceHt(e.target.value)}
          placeholder="Auto-calculated"
          className="bg-muted"
          readOnly
        />
      </div>
      
      <h4 className="text-sm font-medium mt-2 pt-2 border-t">Totals and Payment</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-total-ttc">Total (incl. VAT) - Auto-calculated</Label>
        <Input
          id="lv-total-ttc"
          value={lvTotalTtc}
          onChange={(e) => updateLvTotalTtc(e.target.value)}
          placeholder="Auto-calculated"
          className="bg-muted"
          readOnly
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-total-ht">Total (excl. VAT) - Auto-calculated</Label>
        <Input
          id="lv-total-ht"
          value={lvTotalHt}
          onChange={(e) => updateLvTotalHt(e.target.value)}
          placeholder="Auto-calculated"
          className="bg-muted"
          readOnly
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-total-tax">Total VAT - Auto-calculated</Label>
        <Input
          id="lv-total-tax"
          value={lvTotalTax}
          onChange={(e) => updateLvTotalTax(e.target.value)}
          placeholder="Auto-calculated"
          className="bg-muted"
          readOnly
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-payment-method">Payment Method</Label>
        <Input
          id="lv-payment-method"
          value={lvPaymentMethod}
          onChange={(e) => updateLvPaymentMethod(e.target.value)}
          placeholder="e.g., EURO CASH"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-amount-paid">Amount Paid</Label>
        <Input
          id="lv-amount-paid"
          value={lvAmountPaid}
          onChange={(e) => updateLvAmountPaid(e.target.value)}
          placeholder="e.g., 795.00"
          type="number"
          step="0.01"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="lv-change-given">Change Given</Label>
        <Input
          id="lv-change-given"
          value={lvChangeGiven}
          onChange={(e) => updateLvChangeGiven(e.target.value)}
          placeholder="e.g., 0.00"
          type="number"
          step="0.01"
        />
      </div>
    </div>
  );
} 