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

export default function AdidasReceiptForm() {
  const {
    adidasStoreId,
    adidasStoreName,
    adidasStoreAddress,
    adidasStoreCity,
    adidasStorePhone,
    adidasTransactionId,
    adidasDateTime,
    adidasProducts,
    adidasSubtotal,
    adidasTaxLabel,
    adidasTax,
    adidasTotal,
    adidasPayment,
    adidasBalance,
    adidasPaymentMethod,
    adidasPaymentDate,
    adidasPaymentAmount,
    adidasReferenceNumber,
    adidasAuthNumber,
    adidasCardLast4,
    updateAdidasStoreId,
    updateAdidasStoreName,
    updateAdidasStoreAddress,
    updateAdidasStoreCity,
    updateAdidasStorePhone,
    updateAdidasTransactionId,
    updateAdidasDateTime,
    updateAdidasProducts,
    updateAdidasSubtotal,
    updateAdidasTaxLabel,
    updateAdidasTax,
    updateAdidasTotal,
    updateAdidasPayment,
    updateAdidasBalance,
    updateAdidasPaymentMethod,
    updateAdidasPaymentDate,
    updateAdidasPaymentAmount,
    updateAdidasReferenceNumber,
    updateAdidasAuthNumber,
    updateAdidasCardLast4,
  } = useReceiptStore();

  useEffect(() => {
    if (adidasProducts && adidasProducts.length > 0) {
      // Calculate subtotal from all products
      let subtotal = 0;
      
      for (const product of adidasProducts) {
        if (!product.price) continue;
        
        const price = parseCurrency(product.price);
        const quantity = parseInt(product.quantity) || 1;
        const productTotal = price * quantity;
        
        subtotal += productTotal;
      }
      
      // Calculate tax
      const taxRate = 0.089; // Default tax rate (8.9%)
      const taxAmount = calculateVat(subtotal, taxRate);
      
      // Calculate total and payment
      const total = subtotal + taxAmount;
      
      // Update all values
      updateAdidasSubtotal(formatCurrency(subtotal));
      updateAdidasTax(formatCurrency(taxAmount));
      updateAdidasTotal(formatCurrency(total));
      updateAdidasPayment(formatCurrency(total));
      updateAdidasPaymentAmount(formatCurrency(total));
      updateAdidasBalance("0.00");
    }
  }, [
    adidasProducts?.length,
    adidasProducts?.[0]?.price,
    adidasProducts?.[0]?.quantity
  ]);

  // Handle product input updates
  const updateProduct = (index: number, field: string, value: string | number) => {
    if (adidasProducts && adidasProducts.length > index) {
      const updatedProducts = [...adidasProducts];
      updatedProducts[index] = {
        ...updatedProducts[index],
        [field]: value
      };
      updateAdidasProducts(updatedProducts);
    }
  };

  // Add a new product
  const addProduct = () => {
    if (adidasProducts) {
      const newProduct = {
        sku: "",
        name: "YEEZY BOOST",
        price: "250.00",
        quantity: "1",
        description: "350 V2 YECHEIL/",
        size: "9.5"
      };
      updateAdidasProducts([...adidasProducts, newProduct]);
    }
  };

  return (
    <div className="grid gap-3 w-full">
      <h4 className="text-sm font-medium pt-2 border-t">Store Information</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-store-id">Store ID</Label>
          <Input
            id="adidas-store-id"
            value={adidasStoreId}
            onChange={(e) => updateAdidasStoreId(e.target.value)}
            placeholder="e.g., 6525"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-store-name">Store Name</Label>
          <Input
            id="adidas-store-name"
            value={adidasStoreName}
            onChange={(e) => updateAdidasStoreName(e.target.value)}
            placeholder="e.g., New York Fifth Ave"
          />
        </div>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="adidas-store-address">Store Address</Label>
        <Input
          id="adidas-store-address"
          value={adidasStoreAddress}
          onChange={(e) => updateAdidasStoreAddress(e.target.value)}
          placeholder="e.g., 565 5th Ave"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-store-city">City</Label>
          <Input
            id="adidas-store-city"
            value={adidasStoreCity}
            onChange={(e) => updateAdidasStoreCity(e.target.value)}
            placeholder="e.g., New York, NY 10017"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-store-phone">Phone</Label>
          <Input
            id="adidas-store-phone"
            value={adidasStorePhone}
            onChange={(e) => updateAdidasStorePhone(e.target.value)}
            placeholder="e.g., (212) 883-5606"
          />
        </div>
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Transaction Details</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-transaction-id">Transaction ID</Label>
          <Input
            id="adidas-transaction-id"
            value={adidasTransactionId}
            onChange={(e) => updateAdidasTransactionId(e.target.value)}
            placeholder="e.g., 652510803"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-date-time">Date & Time</Label>
          <Input
            id="adidas-date-time"
            value={adidasDateTime}
            onChange={(e) => updateAdidasDateTime(e.target.value)}
            placeholder="e.g., 02:51:10PM 12/19/2019"
          />
        </div>
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Product Details</h4>
      
      {adidasProducts && adidasProducts.map((product, index) => (
        <div key={index} className="mb-6 p-4 border rounded-md">
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor={`adidas-product-sku-${index}`}>SKU</Label>
              <Input
                id={`adidas-product-sku-${index}`}
                value={product.sku}
                onChange={(e) => updateProduct(index, 'sku', e.target.value)}
                placeholder="e.g., FX4145"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`adidas-product-name-${index}`}>Name</Label>
              <Input
                id={`adidas-product-name-${index}`}
                value={product.name}
                onChange={(e) => updateProduct(index, 'name', e.target.value)}
                placeholder="e.g., YEEZY BOOST"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="grid gap-2">
              <Label htmlFor={`adidas-product-price-${index}`}>Price</Label>
              <Input
                id={`adidas-product-price-${index}`}
                value={product.price}
                onChange={(e) => updateProduct(index, 'price', e.target.value)}
                placeholder="e.g., 250.00"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`adidas-product-quantity-${index}`}>Quantity</Label>
              <Input
                id={`adidas-product-quantity-${index}`}
                value={product.quantity}
                onChange={(e) => updateProduct(index, 'quantity', e.target.value)}
                placeholder="e.g., 1"
                type="number"
                min="1"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="grid gap-2">
              <Label htmlFor={`adidas-product-description-${index}`}>Description</Label>
              <Input
                id={`adidas-product-description-${index}`}
                value={product.description}
                onChange={(e) => updateProduct(index, 'description', e.target.value)}
                placeholder="e.g., 350 V2 YECHEIL/"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`adidas-product-size-${index}`}>Size</Label>
              <Input
                id={`adidas-product-size-${index}`}
                value={product.size}
                onChange={(e) => updateProduct(index, 'size', e.target.value)}
                placeholder="e.g., 9.5"
              />
            </div>
          </div>
        </div>
      ))}
      
      <button 
        type="button"
        onClick={addProduct}
        className="w-full py-2 border border-dashed rounded-md hover:bg-gray-50"
      >
        + Add Product
      </button>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Payment Details</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-tax-label">Tax Label</Label>
          <Input
            id="adidas-tax-label"
            value={adidasTaxLabel}
            onChange={(e) => updateAdidasTaxLabel(e.target.value)}
            placeholder="e.g., ACC"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-tax">Tax</Label>
          <Input
            id="adidas-tax"
            value={adidasTax}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-subtotal">Subtotal</Label>
          <Input
            id="adidas-subtotal"
            value={adidasSubtotal}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-total">Total</Label>
          <Input
            id="adidas-total"
            value={adidasTotal}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-payment">Payment</Label>
          <Input
            id="adidas-payment"
            value={adidasPayment}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-balance">Balance</Label>
          <Input
            id="adidas-balance"
            value={adidasBalance}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Payment Method</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-payment-method">Payment Method</Label>
          <Input
            id="adidas-payment-method"
            value={adidasPaymentMethod}
            onChange={(e) => updateAdidasPaymentMethod(e.target.value)}
            placeholder="e.g., VISA"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-payment-date">Payment Date</Label>
          <Input
            id="adidas-payment-date"
            value={adidasPaymentDate}
            onChange={(e) => updateAdidasPaymentDate(e.target.value)}
            placeholder="e.g., 12/19/2019"
          />
        </div>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="adidas-payment-amount">Payment Amount</Label>
        <Input
          id="adidas-payment-amount"
          value={adidasPaymentAmount}
          readOnly
          className="bg-muted"
          placeholder="Auto-calculated"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="adidas-reference-number">Reference Number</Label>
          <Input
            id="adidas-reference-number"
            value={adidasReferenceNumber}
            onChange={(e) => updateAdidasReferenceNumber(e.target.value)}
            placeholder="e.g., 6079606827"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="adidas-auth-number">Auth Number</Label>
          <Input
            id="adidas-auth-number"
            value={adidasAuthNumber}
            onChange={(e) => updateAdidasAuthNumber(e.target.value)}
            placeholder="e.g., 095915"
          />
        </div>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="adidas-card-last4">Card Last 4 Digits</Label>
        <Input
          id="adidas-card-last4"
          value={adidasCardLast4}
          onChange={(e) => updateAdidasCardLast4(e.target.value)}
          placeholder="e.g., 1126"
        />
      </div>
    </div>
  );
} 