import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useInvoiceStore } from "@/lib/store";

interface AppleInvoiceFieldsProps {}

export default function AppleInvoiceForm({}: AppleInvoiceFieldsProps) {
  const {
    storeTitle,
    storeName,
    storeAddress1,
    storeAddress2,
    storeWebsite,
    vatLabel,
    vatNumber,
    customerName,
    customerEmail,
    productName,
    refNumber,
    refLabel,
    serialNumber,
    serialLabel,
    returnDate,
    returnDateLabel,
    supportUrl,
    supportText,
    ecoParticipationAmount,
    ecoParticipationText,
    unitPrice,
    vatRate,
    quantity,
    priceHt,
    tvaAmount,
    total,
    totalPriceHt,
    totalTva,
    totalTtc,
    paymentMethod1CardLast4,
    paymentMethod1AuthCode,
    paymentMethod1Amount,
    paymentMethod1Text,
    paymentMethod1Type,
    paymentMethod1Details,
    paymentMethod1CardMask,
    paymentMethod2CardLast4,
    paymentMethod2AuthCode,
    paymentMethod2Amount,
    paymentMethod2Text,
    paymentMethod2CardMask,
    giftcardLast4,
    giftcardBalance,
    giftcardBalanceLabel,
    giftcardMask,
    date,
    updateStoreTitle,
    updateStoreName,
    updateStoreAddress1,
    updateStoreAddress2,
    updateStoreWebsite,
    updateVatLabel,
    updateVatNumber,
    updateCustomerName,
    updateCustomerEmail,
    updateProductName,
    updateRefLabel,
    updateRefNumber,
    updateSerialLabel,
    updateSerialNumber,
    updateReturnDateLabel,
    updateReturnDate,
    updateSupportText,
    updateSupportUrl,
    updateEcoParticipationText,
    updateEcoParticipationAmount,
    updateUnitPrice,
    updateVatRate,
    updateQuantity,
    updatePaymentMethod1Text,
    updatePaymentMethod1Type,
    updatePaymentMethod1Details,
    updatePaymentMethod1CardMask,
    updatePaymentMethod1CardLast4,
    updatePaymentMethod1AuthCode,
    updatePaymentMethod1Amount,
    updatePaymentMethod2Text,
    updatePaymentMethod2CardMask,
    updatePaymentMethod2CardLast4,
    updatePaymentMethod2AuthCode,
    updatePaymentMethod2Amount,
    updateGiftcardBalanceLabel,
    updateGiftcardMask,
    updateGiftcardLast4,
    updateGiftcardBalance,
    updateDate,
  } = useInvoiceStore();

  return (
    <div className="space-y-4 border-t pt-4 mt-4">
      <h3 className="text-md font-semibold mb-2">Apple Invoice Details</h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="store-title">Receipt Title</Label>
          <Input
            id="store-title"
            value={storeTitle}
            onChange={(e) => updateStoreTitle(e.target.value)}
            placeholder="Reçu"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="store-name">Store Name</Label>
          <Input
            id="store-name"
            value={storeName}
            onChange={(e) => updateStoreName(e.target.value)}
            placeholder="Apple Sainte-Catherine"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="date">Date</Label>
          <Input
            id="date"
            value={date}
            onChange={(e) => updateDate(e.target.value)}
            placeholder="05/06/23 - 17:41"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Store Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="store-address1">Address Line 1</Label>
        <Input
          id="store-address1"
          value={storeAddress1}
          onChange={(e) => updateStoreAddress1(e.target.value)}
          placeholder="2-4 rue Sainte-Catherine"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="store-address2">Address Line 2</Label>
        <Input
          id="store-address2"
          value={storeAddress2}
          onChange={(e) => updateStoreAddress2(e.target.value)}
          placeholder="33000 Bordeaux"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="store-website">Website</Label>
          <Input
            id="store-website"
            value={storeWebsite}
            onChange={(e) => updateStoreWebsite(e.target.value)}
            placeholder="http://www.apple.com/retail"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="vat-number">VAT Number</Label>
          <Input
            id="vat-number"
            value={vatNumber}
            onChange={(e) => updateVatNumber(e.target.value)}
            placeholder="FR21483209383"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Customer Details</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="customer-name">Name</Label>
          <Input
            id="customer-name"
            value={customerName}
            onChange={(e) => updateCustomerName(e.target.value)}
            placeholder="Ayoub Bourouis"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="customer-email">Email</Label>
          <Input
            id="customer-email"
            type="email"
            value={customerEmail}
            onChange={(e) => updateCustomerEmail(e.target.value)}
            placeholder="Ayoubytb677@gmail.com"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Product Details</h4>
      <div className="grid gap-2">
        <Label htmlFor="product-name">Product Name</Label>
        <Input
          id="product-name"
          value={productName}
          onChange={(e) => updateProductName(e.target.value)}
          placeholder="AirPods (3ᵉ génération) avec Boîtier de charge Lightning"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="ref-number">Reference Number</Label>
          <Input
            id="ref-number"
            value={refNumber}
            onChange={(e) => updateRefNumber(e.target.value)}
            placeholder="MPNY3ZM/A"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="serial-number">Serial Number</Label>
          <Input
            id="serial-number"
            value={serialNumber}
            onChange={(e) => updateSerialNumber(e.target.value)}
            placeholder="TGCXD6Q1YP"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="return-date">Return Date</Label>
          <Input
            id="return-date"
            value={returnDate}
            onChange={(e) => updateReturnDate(e.target.value)}
            placeholder="08 janv. , 2023"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="support-url">Support URL</Label>
          <Input
            id="support-url"
            value={supportUrl}
            onChange={(e) => updateSupportUrl(e.target.value)}
            placeholder="www.apple.com/fr/support"
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="eco-participation">Eco-Participation Amount</Label>
        <Input
          id="eco-participation"
          value={ecoParticipationAmount}
          onChange={(e) => updateEcoParticipationAmount(e.target.value)}
          placeholder="0,02 €"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="unit-price">Unit Price</Label>
          <Input
            id="unit-price"
            value={unitPrice}
            onChange={(e) => updateUnitPrice(e.target.value)}
            placeholder="174,17 €"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="vat-rate">VAT Rate</Label>
          <Input
            id="vat-rate"
            value={vatRate}
            onChange={(e) => updateVatRate(e.target.value)}
            placeholder="20,0%"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="quantity">Quantity</Label>
          <Input
            id="quantity"
            value={quantity}
            onChange={(e) => updateQuantity(e.target.value)}
            placeholder="1"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Totals (Auto-calculated)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="price-ht">Price HT</Label>
          <Input
            id="price-ht"
            value={priceHt}
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
          <Label htmlFor="total">Total</Label>
          <Input
            id="total"
            value={total}
            readOnly
            className="bg-muted opacity-60 cursor-not-allowed"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Payment Method 1 (Gift Card)</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="payment1-last4">Card Last 4</Label>
          <Input
            id="payment1-last4"
            value={paymentMethod1CardLast4}
            onChange={(e) => updatePaymentMethod1CardLast4(e.target.value)}
            placeholder="6260"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="payment1-auth">Auth Code</Label>
          <Input
            id="payment1-auth"
            value={paymentMethod1AuthCode}
            onChange={(e) => updatePaymentMethod1AuthCode(e.target.value)}
            placeholder="9212502"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="payment1-amount">Amount</Label>
          <Input
            id="payment1-amount"
            value={paymentMethod1Amount}
            onChange={(e) => updatePaymentMethod1Amount(e.target.value)}
            placeholder="150,00 €"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">
        Payment Method 2 (Credit Card)
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="payment2-last4">Card Last 4</Label>
          <Input
            id="payment2-last4"
            value={paymentMethod2CardLast4}
            onChange={(e) => updatePaymentMethod2CardLast4(e.target.value)}
            placeholder="2418"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="payment2-auth">Auth Code</Label>
          <Input
            id="payment2-auth"
            value={paymentMethod2AuthCode}
            onChange={(e) => updatePaymentMethod2AuthCode(e.target.value)}
            placeholder="724941"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="payment2-amount">Amount</Label>
          <Input
            id="payment2-amount"
            value={paymentMethod2Amount}
            onChange={(e) => updatePaymentMethod2Amount(e.target.value)}
            placeholder="59,00 €"
          />
        </div>
      </div>

      <h4 className="text-sm font-medium pt-2">Gift Card Balance</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="grid gap-2">
          <Label htmlFor="giftcard-last4">Card Last 4</Label>
          <Input
            id="giftcard-last4"
            value={giftcardLast4}
            onChange={(e) => updateGiftcardLast4(e.target.value)}
            placeholder="6260"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="giftcard-balance">Balance</Label>
          <Input
            id="giftcard-balance"
            value={giftcardBalance}
            onChange={(e) => updateGiftcardBalance(e.target.value)}
            placeholder="0,00 €"
          />
        </div>
      </div>
    </div>
  );
}
