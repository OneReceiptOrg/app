import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoiceStore } from "@/lib/store";

interface SaintLaurentInvoiceFieldsProps {}

export default function SaintLaurentInvoiceForm({}: SaintLaurentInvoiceFieldsProps) {
  const {
    invoiceNumber,
    invoiceDate,
    productName,
    productColor,
    quantity,
    unitPrice,
    discountAmount,
    netPrice,
    totalPrice,
    tva,
    customsCode,
    tvaPercentage,
    tvaAmount,
    totalNetHt,
    totalTvaAmount,
    totalTtc,
    updateInvoiceNumber,
    updateInvoiceDate,
    updateProductName,
    updateProductColor,
    updateQuantity,
    updateUnitPrice,
    updateDiscountAmount,
    updateTva,
    updateCustomsCode,
    updateTvaPercentage,
  } = useInvoiceStore();

  return (
    <div className="space-y-4 border-t pt-4 mt-4">
      <h3 className="text-md font-semibold mb-2">
        Saint Laurent Invoice Details
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="invoice-number">Invoice Number</Label>
          <Input
            id="invoice-number"
            value={invoiceNumber}
            onChange={(e) => updateInvoiceNumber(e.target.value)}
            placeholder="0513450000412"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="invoice-date">Invoice Date</Label>
          <Input
            id="invoice-date"
            value={invoiceDate}
            onChange={(e) => updateInvoiceDate(e.target.value)}
            placeholder="13 Janvier 2024"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Product Details</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="product-name">Product Name</Label>
          <Input
            id="product-name"
            value={productName}
            onChange={(e) => updateProductName(e.target.value)}
            placeholder="LOULOU SMALL CHAIN"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="product-color">Product Color</Label>
          <Input
            id="product-color"
            value={productColor}
            onChange={(e) => updateProductColor(e.target.value)}
            placeholder="BLACK"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            placeholder="1"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="unit-price">Unit Price</Label>
          <Input
            id="unit-price"
            value={unitPrice}
            onChange={(e) => updateUnitPrice(e.target.value)}
            placeholder="2 100"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="discount-amount">Discount Amount</Label>
          <Input
            id="discount-amount"
            value={discountAmount}
            onChange={(e) => updateDiscountAmount(e.target.value)}
            placeholder="0,00"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="tva">TVA</Label>
          <Input
            id="tva"
            value={tva}
            onChange={(e) => updateTva(e.target.value)}
            placeholder="NOR"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="customs-code">Customs Code</Label>
          <Input
            id="customs-code"
            value={customsCode}
            onChange={(e) => updateCustomsCode(e.target.value)}
            placeholder="64035995"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="tva-percentage">TVA Percentage</Label>
          <Input
            id="tva-percentage"
            value={tvaPercentage}
            onChange={(e) => updateTvaPercentage(e.target.value)}
            placeholder="20.00%"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Totals (Auto-calculated)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="net-price">Net Price (HT)</Label>
          <Input
            id="net-price"
            value={netPrice}
            readOnly
            className="bg-muted opacity-60 cursor-not-allowed"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tva-amount">TVA Amount</Label>
          <Input
            id="tva-amount"
            value={tvaAmount}
            readOnly
            className="bg-muted opacity-60 cursor-not-allowed"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="total-price">Total Price (TTC)</Label>
          <Input
            id="total-price"
            value={totalPrice}
            readOnly
            className="bg-muted opacity-60 cursor-not-allowed"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="total-net-ht">Total Net HT</Label>
          <Input
            id="total-net-ht"
            value={totalNetHt}
            readOnly
            className="bg-muted opacity-60 cursor-not-allowed"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="total-tva-amount">Total TVA Amount</Label>
          <Input
            id="total-tva-amount"
            value={totalTvaAmount}
            readOnly
            className="bg-muted opacity-60 cursor-not-allowed"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="total-ttc">Total TTC</Label>
          <Input
            id="total-ttc"
            value={totalTtc}
            readOnly
            className="bg-muted opacity-60 cursor-not-allowed"
          />
        </div>
      </div>
    </div>
  );
}
