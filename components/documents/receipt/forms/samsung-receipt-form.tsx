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

export default function SamsungReceiptForm() {
  const {
    samsungStoreName,
    samsungStoreAddress,
    samsungStoreCity,
    samsungStorePhone,
    samsungDate,
    samsungCustomerName,
    samsungCustomerId,
    samsungCustomerEmail,
    samsungProducts,
    samsungSubtotal,
    samsungTaxItems,
    samsungTotal,
    samsungPaymentMethod,
    samsungCardLast4,
    samsungOrderNumber,
    samsungSerialNumber,
    updateSamsungStoreName,
    updateSamsungStoreAddress,
    updateSamsungStoreCity,
    updateSamsungStorePhone,
    updateSamsungDate,
    updateSamsungCustomerName,
    updateSamsungCustomerId,
    updateSamsungCustomerEmail,
    updateSamsungProducts,
    updateSamsungSubtotal,
    updateSamsungTaxItems,
    updateSamsungTotal,
    updateSamsungPaymentMethod,
    updateSamsungCardLast4,
    updateSamsungOrderNumber,
    updateSamsungSerialNumber,
  } = useReceiptStore();

  useEffect(() => {
    if (samsungProducts && samsungProducts.length > 0) {
      // Calculate subtotal from all products
      let subtotal = 0;
      
      for (const product of samsungProducts) {
        if (!product.price) continue;
        
        const price = parseCurrency(product.price);
        const quantity = parseInt(product.quantity) || 1;
        const productTotal = price * quantity;
        
        // Update product total if needed
        if (product.total !== formatCurrency(productTotal)) {
          const updatedProducts = samsungProducts.map((p: any) => 
            p === product ? { ...p, total: formatCurrency(productTotal) } : p
          );
          updateSamsungProducts(updatedProducts);
        }
        
        subtotal += productTotal;
      }
      
      // Calculate tax amount
      let taxTotal = 0;
      if (samsungTaxItems && samsungTaxItems.length > 0) {
        const updatedTaxItems = [...samsungTaxItems];
        
        for (let i = 0; i < updatedTaxItems.length; i++) {
          const taxItem = updatedTaxItems[i];
          const rate = extractRateFromString(taxItem.rate) || 0;
          const taxAmount = calculateVat(subtotal, rate);
          
          updatedTaxItems[i] = {
            ...taxItem,
            amount: formatCurrency(taxAmount)
          };
          
          taxTotal += taxAmount;
        }
        
        updateSamsungTaxItems(updatedTaxItems);
      }
      
      // Update totals
      updateSamsungSubtotal(formatCurrency(subtotal));
      updateSamsungTotal(formatCurrency(subtotal + taxTotal));
    }
  }, [
    samsungProducts?.length,
    samsungProducts?.[0]?.price,
    samsungProducts?.[0]?.quantity,
    samsungTaxItems?.length,
    samsungTaxItems?.[0]?.rate
  ]);

  // Handle product input updates
  const updateProduct = (index: number, field: string, value: string | number) => {
    if (samsungProducts && samsungProducts.length > index) {
      const updatedProducts = [...samsungProducts];
      updatedProducts[index] = {
        ...updatedProducts[index],
        [field]: value
      };
      updateSamsungProducts(updatedProducts);
    }
  };

  // Handle tax item updates
  const updateTaxItem = (index: number, field: string, value: string | number) => {
    if (samsungTaxItems && samsungTaxItems.length > index) {
      const updatedTaxItems = [...samsungTaxItems];
      updatedTaxItems[index] = {
        ...updatedTaxItems[index],
        [field]: value
      };
      updateSamsungTaxItems(updatedTaxItems);
    }
  };

  // Add a new product
  const addProduct = () => {
    if (samsungProducts) {
      const newProduct = {
        sku: "",
        name: "",
        price: "0.00",
        quantity: "1",
        total: "0.00"
      };
      updateSamsungProducts([...samsungProducts, newProduct]);
    }
  };

  // Add a new tax item
  const addTaxItem = () => {
    if (samsungTaxItems) {
      const newTaxItem = {
        name: "Tax",
        rate: "0.0",
        amount: "0.00"
      };
      updateSamsungTaxItems([...samsungTaxItems, newTaxItem]);
    }
  };

  return (
    <div className="grid gap-3 w-full">
      <h4 className="text-sm font-medium pt-2 border-t">Store Information</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="samsung-store-name">Store Name</Label>
        <Input
          id="samsung-store-name"
          value={samsungStoreName}
          onChange={(e) => updateSamsungStoreName(e.target.value)}
          placeholder="e.g., Samsung Experience Store"
        />
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="samsung-store-address">Store Address</Label>
        <Input
          id="samsung-store-address"
          value={samsungStoreAddress}
          onChange={(e) => updateSamsungStoreAddress(e.target.value)}
          placeholder="e.g., 123 High Street"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="samsung-store-city">City</Label>
          <Input
            id="samsung-store-city"
            value={samsungStoreCity}
            onChange={(e) => updateSamsungStoreCity(e.target.value)}
            placeholder="e.g., London SW1Y 4SB"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="samsung-store-phone">Phone</Label>
          <Input
            id="samsung-store-phone"
            value={samsungStorePhone}
            onChange={(e) => updateSamsungStorePhone(e.target.value)}
            placeholder="e.g., +44 333 000 0333"
          />
        </div>
      </div>
      
      <div className="grid gap-2">
        <Label htmlFor="samsung-date">Date</Label>
        <Input
          id="samsung-date"
          value={samsungDate}
          onChange={(e) => updateSamsungDate(e.target.value)}
          placeholder="e.g., 03/14/2024 10:30"
        />
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Customer Information</h4>
      
      <div className="grid gap-2">
        <Label htmlFor="samsung-customer-name">Customer Name</Label>
        <Input
          id="samsung-customer-name"
          value={samsungCustomerName}
          onChange={(e) => updateSamsungCustomerName(e.target.value)}
          placeholder="e.g., David Wilson"
        />
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="samsung-customer-id">Customer ID</Label>
          <Input
            id="samsung-customer-id"
            value={samsungCustomerId}
            onChange={(e) => updateSamsungCustomerId(e.target.value)}
            placeholder="e.g., 193911"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="samsung-customer-email">Customer Email</Label>
          <Input
            id="samsung-customer-email"
            value={samsungCustomerEmail}
            onChange={(e) => updateSamsungCustomerEmail(e.target.value)}
            placeholder="e.g., david.w@email.com"
          />
        </div>
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Product Details</h4>
      
      {samsungProducts && samsungProducts.map((product, index) => (
        <div key={index} className="mb-6 p-4 border rounded-md">
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor={`samsung-product-sku-${index}`}>SKU</Label>
              <Input
                id={`samsung-product-sku-${index}`}
                value={product.sku}
                onChange={(e) => updateProduct(index, 'sku', e.target.value)}
                placeholder="e.g., PHUPSA000307"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`samsung-product-name-${index}`}>Name</Label>
              <Input
                id={`samsung-product-name-${index}`}
                value={product.name}
                onChange={(e) => updateProduct(index, 'name', e.target.value)}
                placeholder="e.g., Galaxy S24 Ultra"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="grid gap-2">
              <Label htmlFor={`samsung-product-price-${index}`}>Price</Label>
              <Input
                id={`samsung-product-price-${index}`}
                value={product.price}
                onChange={(e) => updateProduct(index, 'price', e.target.value)}
                placeholder="e.g., 1299.99"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`samsung-product-quantity-${index}`}>Quantity</Label>
              <Input
                id={`samsung-product-quantity-${index}`}
                value={product.quantity}
                onChange={(e) => updateProduct(index, 'quantity', e.target.value)}
                placeholder="e.g., 1"
                type="number"
                min="1"
              />
            </div>
          </div>
          
          <div className="grid gap-2 mt-3">
            <Label htmlFor={`samsung-product-total-${index}`}>Total</Label>
            <Input
              id={`samsung-product-total-${index}`}
              value={product.total}
              readOnly
              className="bg-muted"
              placeholder="Auto-calculated"
            />
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
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Tax Details</h4>
      
      {samsungTaxItems && samsungTaxItems.map((taxItem, index) => (
        <div key={index} className="mb-3 p-4 border rounded-md">
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor={`samsung-tax-name-${index}`}>Tax Name</Label>
              <Input
                id={`samsung-tax-name-${index}`}
                value={taxItem.name}
                onChange={(e) => updateTaxItem(index, 'name', e.target.value)}
                placeholder="e.g., TX Houstan City"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`samsung-tax-rate-${index}`}>Rate (%)</Label>
              <Input
                id={`samsung-tax-rate-${index}`}
                value={taxItem.rate}
                onChange={(e) => updateTaxItem(index, 'rate', e.target.value)}
                placeholder="e.g., 1.0"
              />
            </div>
          </div>
          
          <div className="grid gap-2 mt-3">
            <Label htmlFor={`samsung-tax-amount-${index}`}>Amount</Label>
            <Input
              id={`samsung-tax-amount-${index}`}
              value={taxItem.amount}
              readOnly
              className="bg-muted"
              placeholder="Auto-calculated"
            />
          </div>
        </div>
      ))}
      
      <button 
        type="button"
        onClick={addTaxItem}
        className="w-full py-2 border border-dashed rounded-md hover:bg-gray-50"
      >
        + Add Tax Item
      </button>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Order Totals</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="samsung-subtotal">Subtotal</Label>
          <Input
            id="samsung-subtotal"
            value={samsungSubtotal}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="samsung-total">Total</Label>
          <Input
            id="samsung-total"
            value={samsungTotal}
            readOnly
            className="bg-muted"
            placeholder="Auto-calculated"
          />
        </div>
      </div>
      
      <h4 className="text-sm font-medium mt-4 pt-2 border-t">Payment Details</h4>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="samsung-payment-method">Payment Method</Label>
          <Input
            id="samsung-payment-method"
            value={samsungPaymentMethod}
            onChange={(e) => updateSamsungPaymentMethod(e.target.value)}
            placeholder="e.g., Credit Card"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="samsung-card-last4">Card Last 4</Label>
          <Input
            id="samsung-card-last4"
            value={samsungCardLast4}
            onChange={(e) => updateSamsungCardLast4(e.target.value)}
            placeholder="e.g., 8901"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-2">
          <Label htmlFor="samsung-order-number">Order Number</Label>
          <Input
            id="samsung-order-number"
            value={samsungOrderNumber}
            onChange={(e) => updateSamsungOrderNumber(e.target.value)}
            placeholder="e.g., ORD-377459"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="samsung-serial-number">Serial Number</Label>
          <Input
            id="samsung-serial-number"
            value={samsungSerialNumber}
            onChange={(e) => updateSamsungSerialNumber(e.target.value)}
            placeholder="e.g., RF8M99BKXEN"
          />
        </div>
      </div>
    </div>
  );
} 