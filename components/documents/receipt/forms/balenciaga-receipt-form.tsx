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

export default function BalenciagaReceiptForm() {
  const {
    balenciagaStoreName,
    balenciagaStoreAddress,
    balenciagaStoreCity,
    balenciagaStoreZip,
    balenciagaStorePhone,
    balenciagaTransactionNumber,
    balenciagaDate,
    balenciagaTime,
    balenciagaCashier,
    balenciagaRegister,
    balenciagaCustomerName,
    balenciagaCustomerId,
    balenciagaCurrency,
    balenciagaProducts,
    balenciagaSubtotal,
    balenciagaTax,
    balenciagaTotal,
    balenciagaPaymentMethod,
    balenciagaPaymentAmount,
    balenciagaChange,
    balenciagaItemCount,
    balenciagaTaxAnalysis,
    updateBalenciagaStoreName,
    updateBalenciagaStoreAddress,
    updateBalenciagaStoreCity,
    updateBalenciagaStoreZip,
    updateBalenciagaStorePhone,
    updateBalenciagaTransactionNumber,
    updateBalenciagaDate,
    updateBalenciagaTime,
    updateBalenciagaCashier,
    updateBalenciagaRegister,
    updateBalenciagaCustomerName,
    updateBalenciagaCustomerId,
    updateBalenciagaCurrency,
    updateBalenciagaProducts,
    updateBalenciagaSubtotal,
    updateBalenciagaTax,
    updateBalenciagaTotal,
    updateBalenciagaPaymentMethod,
    updateBalenciagaPaymentAmount,
    updateBalenciagaChange,
    updateBalenciagaItemCount,
    updateBalenciagaTaxAnalysis,
  } = useReceiptStore();

  useEffect(() => {
    if (balenciagaProducts && balenciagaProducts.length > 0) {
      const product = balenciagaProducts[0];
      if (!product.price) return;
      
      const price = parseCurrency(product.price);
      const quantity = parseInt(product.quantity) || 1;
      const taxRate = balenciagaTaxAnalysis && balenciagaTaxAnalysis.length > 0 
        ? extractRateFromString(balenciagaTaxAnalysis[0].rate) 
        : 7.29;
      
      const subtotal = price * quantity;
      const taxAmount = calculateVat(subtotal, taxRate);
      const total = subtotal + taxAmount;
      
      updateBalenciagaSubtotal(formatCurrency(subtotal));
      updateBalenciagaTax(formatCurrency(taxAmount));
      updateBalenciagaTotal(formatCurrency(total));
      
      if (balenciagaTaxAnalysis && balenciagaTaxAnalysis.length > 0) {
        const updatedTaxAnalysis = [...balenciagaTaxAnalysis];
        updatedTaxAnalysis[0] = {
          ...balenciagaTaxAnalysis[0],
          taxable: formatCurrency(total),
          totalTax: formatCurrency(taxAmount)
        };
        updateBalenciagaTaxAnalysis(updatedTaxAnalysis);
      }
      
      const paymentAmount = parseCurrency(balenciagaPaymentAmount);
      if (paymentAmount > 0) {
        if (paymentAmount >= total) {
          updateBalenciagaChange(formatCurrency(paymentAmount - total));
        } else {
          updateBalenciagaChange("0.00");
        }
      }
      
      if (product.total !== formatCurrency(total)) {
        const updatedProducts = balenciagaProducts.map((p: any) => 
          p === product ? { ...p, total: formatCurrency(total) } : p
        );
        updateBalenciagaProducts(updatedProducts);
      }
    }
  }, [
    balenciagaProducts?.length,
    balenciagaProducts?.[0]?.price,
    balenciagaProducts?.[0]?.quantity,
    balenciagaTaxAnalysis?.[0]?.rate,
    balenciagaPaymentAmount
  ]);

  const updateProduct = (field: string, value: string | number) => {
    if (balenciagaProducts && balenciagaProducts.length > 0) {
      const updatedProducts = [...balenciagaProducts];
      updatedProducts[0] = {
        ...updatedProducts[0],
        [field]: value
      };
      updateBalenciagaProducts(updatedProducts);
    }
  };

  const updateTaxAnalysis = (field: string, value: string | number) => {
    if (balenciagaTaxAnalysis && balenciagaTaxAnalysis.length > 0) {
      const updatedTaxAnalysis = [...balenciagaTaxAnalysis];
      updatedTaxAnalysis[0] = {
        ...updatedTaxAnalysis[0],
        [field]: value
      };
      updateBalenciagaTaxAnalysis(updatedTaxAnalysis);
    }
  };

  return (
    <div className="grid gap-3 w-full">
      <h4 className="text-sm font-medium pt-2 border-t">Store Information</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-store-name">Store Name</Label>
        <Input
          id="balenciaga-store-name"
          value={balenciagaStoreName}
          onChange={(e) => updateBalenciagaStoreName(e.target.value)}
          placeholder="e.g., Costa Mesa"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-store-address">Store Address</Label>
        <Input
          id="balenciaga-store-address"
          value={balenciagaStoreAddress}
          onChange={(e) => updateBalenciagaStoreAddress(e.target.value)}
          placeholder="e.g., 3333 Bristol Street"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-store-city">City</Label>
          <Input
            id="balenciaga-store-city"
            value={balenciagaStoreCity}
            onChange={(e) => updateBalenciagaStoreCity(e.target.value)}
            placeholder="e.g., Costa Mesa"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-store-zip">Zip Code</Label>
          <Input
            id="balenciaga-store-zip"
            value={balenciagaStoreZip}
            onChange={(e) => updateBalenciagaStoreZip(e.target.value)}
            placeholder="e.g., 92626"
          />
        </div>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-store-phone">Phone</Label>
        <Input
          id="balenciaga-store-phone"
          value={balenciagaStorePhone}
          onChange={(e) => updateBalenciagaStorePhone(e.target.value)}
          placeholder="e.g., (714)-668-0057"
        />
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Transaction Details</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-transaction-number">Transaction #</Label>
          <Input
            id="balenciaga-transaction-number"
            value={balenciagaTransactionNumber}
            onChange={(e) => updateBalenciagaTransactionNumber(e.target.value)}
            placeholder="e.g., 6985"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-register">Register</Label>
          <Input
            id="balenciaga-register"
            value={balenciagaRegister}
            onChange={(e) => updateBalenciagaRegister(e.target.value)}
            placeholder="e.g., 1"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-date">Date</Label>
          <Input
            id="balenciaga-date"
            value={balenciagaDate}
            onChange={(e) => updateBalenciagaDate(e.target.value)}
            placeholder="e.g., 04/02/19"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-time">Time</Label>
          <Input
            id="balenciaga-time"
            value={balenciagaTime}
            onChange={(e) => updateBalenciagaTime(e.target.value)}
            placeholder="e.g., 12:04:43"
          />
        </div>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-cashier">Cashier</Label>
        <Input
          id="balenciaga-cashier"
          value={balenciagaCashier}
          onChange={(e) => updateBalenciagaCashier(e.target.value)}
          placeholder="e.g., 1052200"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-customer-name">Customer Name</Label>
        <Input
          id="balenciaga-customer-name"
          value={balenciagaCustomerName}
          onChange={(e) => updateBalenciagaCustomerName(e.target.value)}
          placeholder="e.g., Ruslan Badretdinov"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-customer-id">Customer ID</Label>
        <Input
          id="balenciaga-customer-id"
          value={balenciagaCustomerId}
          onChange={(e) => updateBalenciagaCustomerId(e.target.value)}
          placeholder="e.g., 2362349677847"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-currency">Currency</Label>
        <Input
          id="balenciaga-currency"
          value={balenciagaCurrency}
          onChange={(e) => updateBalenciagaCurrency(e.target.value)}
          placeholder="e.g., USD"
        />
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Product Details</h4>
      
      {balenciagaProducts && balenciagaProducts.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-product-sku">SKU</Label>
              <Input
                id="balenciaga-product-sku"
                value={balenciagaProducts[0].sku}
                onChange={(e) => updateProduct('sku', e.target.value)}
                placeholder="e.g., 556150TAV4"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-product-quantity">Quantity</Label>
              <Input
                id="balenciaga-product-quantity"
                value={balenciagaProducts[0].quantity}
                onChange={(e) => updateProduct('quantity', e.target.value)}
                placeholder="e.g., 1"
                type="number"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-product-price">Price</Label>
              <Input
                id="balenciaga-product-price"
                value={balenciagaProducts[0].price}
                onChange={(e) => updateProduct('price', e.target.value)}
                placeholder="e.g., 440.40"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-product-total">Total</Label>
              <Input
                id="balenciaga-product-total"
                value={balenciagaProducts[0].total}
                readOnly
                className="bg-muted"
                placeholder="Auto-calculated"
              />
            </div>
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="balenciaga-product-name">Name</Label>
            <Input
              id="balenciaga-product-name"
              value={balenciagaProducts[0].name}
              onChange={(e) => updateProduct('name', e.target.value)}
              placeholder="e.g., MEN T-SHIRT M"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="balenciaga-product-size">Size</Label>
            <Input
              id="balenciaga-product-size"
              value={balenciagaProducts[0].size}
              onChange={(e) => updateProduct('size', e.target.value)}
              placeholder="e.g., 483504 - 1000 - M"
            />
          </div>
          
          <div className="grid gap-2">
            <Label htmlFor="balenciaga-product-salesperson">Salesperson</Label>
            <Input
              id="balenciaga-product-salesperson"
              value={balenciagaProducts[0].salesperson}
              onChange={(e) => updateProduct('salesperson', e.target.value)}
              placeholder="e.g., 1062200 (SHAEBUR)"
            />
          </div>
        </>
      )}
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Payment & Tax Details</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-subtotal">Subtotal</Label>
          <Input
            id="balenciaga-subtotal"
            value={balenciagaSubtotal}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-tax">Tax</Label>
          <Input
            id="balenciaga-tax"
            value={balenciagaTax}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-total">Total</Label>
          <Input
            id="balenciaga-total"
            value={balenciagaTotal}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-item-count">Item Count</Label>
          <Input
            id="balenciaga-item-count"
            value={balenciagaItemCount.toString()}
            onChange={(e) => {
              const numValue = parseInt(e.target.value, 10);
              updateBalenciagaItemCount(numValue > 0 ? numValue : 1);
            }}
            placeholder="e.g., 1"
            type="number"
            min="1"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-payment-method">Payment Method</Label>
          <Input
            id="balenciaga-payment-method"
            value={balenciagaPaymentMethod}
            onChange={(e) => updateBalenciagaPaymentMethod(e.target.value)}
            placeholder="e.g., Visa"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="balenciaga-payment-amount">Payment Amount</Label>
          <Input
            id="balenciaga-payment-amount"
            value={balenciagaPaymentAmount}
            onChange={(e) => updateBalenciagaPaymentAmount(e.target.value)}
            placeholder="e.g., 440.00"
          />
        </div>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="balenciaga-change">Change</Label>
        <Input
          id="balenciaga-change"
          value={balenciagaChange}
          readOnly
          className="bg-muted"
          placeholder="Auto-calculated"
        />
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Tax Analysis</h4>
      
      {balenciagaTaxAnalysis && balenciagaTaxAnalysis.length > 0 && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-tax-code">Tax Code</Label>
              <Input
                id="balenciaga-tax-code"
                value={balenciagaTaxAnalysis[0].code}
                onChange={(e) => updateTaxAnalysis('code', e.target.value)}
                placeholder="e.g., Local"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-tax-rate">Tax Rate (%)</Label>
              <Input
                id="balenciaga-tax-rate"
                value={balenciagaTaxAnalysis[0].rate}
                onChange={(e) => updateTaxAnalysis('rate', e.target.value)}
                placeholder="e.g., 7.29"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-taxable">Taxable Amount</Label>
              <Input
                id="balenciaga-taxable"
                value={balenciagaTaxAnalysis[0].taxable}
                readOnly
                className="bg-muted"
                placeholder="Auto-calculated"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="balenciaga-total-tax">Total Tax</Label>
              <Input
                id="balenciaga-total-tax"
                value={balenciagaTaxAnalysis[0].totalTax}
                readOnly
                className="bg-muted"
                placeholder="Auto-calculated"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
} 