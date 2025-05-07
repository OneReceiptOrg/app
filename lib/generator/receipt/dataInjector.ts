type TemplateData = Record<string, any>;

function injectGucciData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Gucci)");
  const injectedHtml = htmlContent
    .replace(/{{STORE_LOCATION}}/g, templateData.storeLocation || "")
    .replace(/{{STORE_ADDR1}}/g, templateData.storeAddress1 || "")
    .replace(/{{STORE_ADDR2}}/g, templateData.storeAddress2 || "")
    .replace(/{{STORE_CITY_ZIP}}/g, templateData.storeCityZip || "")
    .replace(/{{STORE_PHONE_FAX}}/g, templateData.storePhoneFax || "")
    .replace(/{{DATE}}/g, templateData.date || "")
    .replace(/{{TRANS_NUM}}/g, templateData.transNumber || "")
    .replace(/{{STORE_ID}}/g, templateData.storeId || "")
    .replace(/{{REGISTER_ID}}/g, templateData.registerId || "")
    .replace(/{{CASHIER}}/g, templateData.cashierName || "")
    .replace(/{{CUSTOMER_NAME}}/g, templateData.customerName || "")
    .replace(/{{CUSTOMER_ID}}/g, templateData.customerId || "")
    .replace(/{{PRODUCT_SKU}}/g, templateData.productSku || "")
    .replace(/{{ITEM_PRICE}}/g, templateData.itemPrice || "")
    .replace(/{{PRODUCT_NAME}}/g, templateData.productName || "")
    .replace(/{{PRODUCT_AMOUNT}}/g, templateData.productAmount || "")
    .replace(/{{SALESPERSON}}/g, templateData.salesperson || "")
    .replace(/{{SUBTOTAL}}/g, templateData.subtotal || "")
    .replace(/{{TAX}}/g, templateData.tax || "")
    .replace(/{{TOTAL}}/g, templateData.total || "")
    .replace(/{{PAYMENT_METHOD}}/g, templateData.paymentMethod || "")
    .replace(/{{PAYMENT_AMOUNT}}/g, templateData.paymentAmount || "")
    .replace(/{{CHANGE}}/g, templateData.change || "")
    .replace(/{{ITEM_COUNT}}/g, String(templateData.itemCount || "1"))
    .replace(/{{TAX_CODE}}/g, templateData.taxAnalysisCode || "")
    .replace(/{{TAX_TAXABLE}}/g, templateData.taxAnalysisTaxable || "")
    .replace(/{{TAX_RATE}}/g, templateData.taxAnalysisRate || "")
    .replace(/{{TAX_TOTAL}}/g, templateData.taxAnalysisTotal || "")
    .replace(/{{TAX_TAX}}/g, templateData.taxAnalysisTax || "");
  console.timeEnd("Inject Dynamic Data (Gucci)");
  return injectedHtml;
}

function injectGucciNycData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Gucci NYC)");
  const injectedHtml = htmlContent
    .replace(/{{STORE_NAME}}/g, "NY 5th Ave")
    .replace(/{{STORE_ADDRESS}}/g, "725 Fifth Avenue")
    .replace(/{{STORE_CITY_STATE_ZIP}}/g, "New York NY 10022")
    .replace(/{{STORE_PHONE}}/g, "tel (212) 826-2600")
    .replace(/{{TRANS_NUMBER}}/g, templateData.transNumber || "")
    .replace(/{{TRANS_DATE_TIME}}/g, templateData.transDateTime || "")
    .replace(/{{STORE_NUMBER}}/g, templateData.storeNumber || "")
    .replace(/{{REGISTER_NUMBER}}/g, templateData.registerNumber || "")
    .replace(/{{CASHIER_ID}}/g, templateData.cashierId || "")
    .replace(/{{CUSTOMER_NAME}}/g, templateData.customerName || "")
    .replace(/{{CUSTOMER_ID}}/g, templateData.customerId || "")
    .replace(/{{ITEM_SKU}}/g, templateData.itemSku || "")
    .replace(/{{ITEM_QTY}}/g, templateData.itemQty || "")
    .replace(/{{ITEM_PRICE}}/g, templateData.itemPrice || "")
    .replace(/{{ITEM_TOTAL_AMOUNT}}/g, templateData.itemTotalAmount || "")
    .replace(/{{ITEM_DESCRIPTION}}/g, templateData.itemDescription || "")
    .replace(/{{ITEM_SIZE}}/g, templateData.itemSize || "")
    .replace(/{{ITEM_STYLE_NUMBER}}/g, templateData.itemStyleNumber || "")
    .replace(/{{ITEM_EXTRA_DETAILS}}/g, templateData.itemExtraDetails || "")
    .replace(/{{SALESPERSON_ID}}/g, templateData.salespersonId || "")
    .replace(/{{SALESPERSON_NAME}}/g, templateData.salespersonName || "")
    .replace(/{{SUBTOTAL}}/g, templateData.subtotal || "")
    .replace(/{{TAX_AMOUNT}}/g, templateData.taxAmount || "")
    .replace(/{{TOTAL_AMOUNT}}/g, templateData.totalAmount || "")
    .replace(
      /{{DISTANCE_SALES_AMOUNT}}/g,
      templateData.distanceSalesAmount || ""
    )
    .replace(/{{DISTANCE_SALES_ID}}/g, templateData.distanceSalesId || "")
    .replace(/{{CHANGE_AMOUNT}}/g, templateData.changeAmount || "")
    .replace(/{{SOLD_ITEM_COUNT}}/g, templateData.soldItemCount || "")
    .replace(/{{TAX_CODE}}/g, templateData.taxCode || "")
    .replace(/{{TAXABLE_AMOUNT}}/g, templateData.taxableAmount || "")
    .replace(/{{TAX_RATE}}/g, templateData.taxRate || "")
    .replace(/{{TAX_TOTAL}}/g, templateData.taxTotal || "")
    .replace(/{{TAX_AMOUNT_FINAL}}/g, templateData.taxAmountFinal || "");
  console.timeEnd("Inject Dynamic Data (Gucci NYC)");
  return injectedHtml;
}

function injectSephoraData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Sephora)");
  const injectedHtml = htmlContent
    .replace(/{{STORE_NAME}}/g, templateData.storeName || "Sephora")
    .replace(/{{STORE_ADDRESS}}/g, templateData.storeAddress || "")
    .replace(/{{STORE_CITY_STATE_ZIP}}/g, templateData.storeCityStateZip || "")
    .replace(/{{PRODUCT_NAME}}/g, templateData.productName || "")
    .replace(/{{PRODUCT_SKU}}/g, templateData.productSku || "")
    .replace(/{{PRODUCT_QTY}}/g, String(templateData.productQty || "1"))
    .replace(/{{ITEM_PRICE}}/g, templateData.itemPrice || "")
    .replace(/{{PRODUCT_AMOUNT}}/g, templateData.productAmount || "")
    .replace(/{{SUBTOTAL}}/g, templateData.subtotal || "")
    .replace(/{{TAX_DESC}}/g, templateData.taxDesc || "")
    .replace(/{{TAX_PERCENT}}/g, templateData.taxPercent || "")
    .replace(/{{TAX_AMOUNT}}/g, templateData.taxAmount || "")
    .replace(/{{TOTAL_AMOUNT}}/g, templateData.totalAmount || "")
    .replace(/{{PAYMENT_TYPE}}/g, templateData.paymentType || "")
    .replace(/{{PAYMENT_AMOUNT}}/g, templateData.paymentAmount || "")
    .replace(/{{CARD_NUMBER_MASKED}}/g, templateData.cardNumberMasked || "")
    .replace(/{{CARD_TYPE}}/g, templateData.cardType || "")
    .replace(/{{CARD_ENTRY}}/g, templateData.cardEntry || "")
    .replace(/{{TRANS_TYPE}}/g, templateData.transType || "")
    .replace(/{{AUTH_CODE}}/g, templateData.authCode || "")
    .replace(/{{SEQUENCE_NUM}}/g, templateData.sequenceNum || "")
    .replace(/{{REFERENCE_NUM}}/g, templateData.referenceNum || "")
    .replace(/{{TERMINAL_ID}}/g, templateData.terminalId || "")
    .replace(/{{DATE}}/g, templateData.date || "")
    .replace(/{{TIME}}/g, templateData.time || "")
    .replace(/{{APPROVAL_STATUS}}/g, templateData.approvalStatus || "APPROVED");
  console.timeEnd("Inject Dynamic Data (Sephora)");
  return injectedHtml;
}

function injectAppleData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Apple)");
  const injectedHtml = htmlContent
    .replace(
      /Apple Downtown Brooklyn/g,
      templateData.appleStoreLocation || "Apple Downtown Brooklyn"
    )
    .replace(
      /04\/12\/2025, 10:04 PM/g,
      templateData.appleDateTime || "04/12/2025, 10:04 PM"
    )
    .replace(
      /AirPods \(2nd Generation\)/g,
      templateData.appleProductName || "AirPods (2nd Generation)"
    )
    .replace(
      /PartNumber:MV7N2AM\/A/g,
      "PartNumber:" + (templateData.applePartNumber || "MV7N2AM/A")
    )
    .replace(
      /Return Date:Apr 26, 2025/g,
      "Return Date:" + (templateData.appleReturnDate || "Apr 26, 2025")
    )
    .replace(
      /<p class="text-25">129\.95<\/p>/g,
      `<p class="text-25">${templateData.appleSubTotal || "129.95"}</p>`
    )
    .replace(
      /<p class="text-26">129\.95<\/p>/g,
      `<p class="text-26">${templateData.appleSubTotal || "129.95"}</p>`
    )
    .replace(
      /<p class="text-24">Tax@9\.04%<\/p>/g,
      `<p class="text-24">Tax@${templateData.appleTaxRate || "9.04%"}</p>`
    )
    .replace(
      /<p class="text-30">12\.00<\/p>/g,
      `<p class="text-30">${templateData.appleTaxAmount || "12.00"}</p>`
    )
    .replace(
      /<p class="text-27">141\.28<\/p>/g,
      `<p class="text-27">${templateData.appleTotal || "141.28"}</p>`
    )
    .replace(
      /<p class="text-28">141\.28<\/p>/g,
      `<p class="text-28">${templateData.appleTotal || "141.28"}</p>`
    )
    .replace(/CHASE VISA/g, templateData.applePaymentMethod || "CHASE VISA")
    .replace(/\.{5}3123/g, templateData.appleCardNumber || ".....3123")
    .replace(
      /Date\/Time: 2024\/01\/13 &nbsp;14:43:16/g,
      `Date/Time: ${
        templateData.appleTransactionDateTime || "2024/01/13 &nbsp;14:43:16"
      }`
    )
    .replace(
      /Application ID: A00000000031010/g,
      `Application ID: ${templateData.appleApplicationId || "A00000000031010"}`
    )
    .replace(
      /Application PAN Sequence Number: 01/g,
      `Application PAN Sequence Number: ${
        templateData.appleApplicationPanSequence || "01"
      }`
    )
    .replace(
      /Device d: 0000/g,
      `Device d: ${templateData.appleDeviceId || "0000"}`
    )
    .replace(
      /Card Type: Credit/g,
      `Card Type: ${templateData.appleCardType || "Credit"}`
    )
    .replace(
      /Preferred Name: CHASE VISA/g,
      `Preferred Name: ${templateData.applePreferredName || "CHASE VISA"}`
    )
    .replace(
      /TVR: 0000000000000/g,
      `TVR: ${templateData.appleTvr || "0000000000000"}`
    )
    .replace(/TSI:0000/g, `TSI:${templateData.appleTsi || "0000"}`)
    .replace(
      /2 0 2 4 0 1 1 3 B 1 3 2 5 0 2 7 0 1 9/g,
      templateData.appleTransactionCode ||
        "2 0 2 4 0 1 1 3 B 1 3 2 5 0 2 7 0 1 9"
    );
  console.timeEnd("Inject Dynamic Data (Apple)");
  return injectedHtml;
}

function injectDysonData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Dyson)");
  const injectedHtml = htmlContent
    .replace(/{{STORE_NAME}}/g, templateData.storeName || "Dyson Demo Store")
    .replace(
      /{{STORE_ADDRESS}}/g,
      templateData.storeAddress || "123 Oxford Street"
    )
    .replace(/{{STORE_CITY}}/g, templateData.storeCity || "London W1D 2LF")
    .replace(/{{STORE_PHONE}}/g, templateData.storePhone || "+44 800 298 0298")
    .replace(/{{DATE}}/g, templateData.date || "03/15/2024 15:45")
    .replace(/{{ORDER_NUMBER}}/g, templateData.orderNumber || "ORD-132431")
    .replace(
      /{{ORDER_REFERENCE}}/g,
      templateData.orderReference || "DYS-24031500789"
    )
    .replace(/{{CUSTOMER_NAME}}/g, templateData.customerName || "Emma Thompson")
    .replace(
      /{{CUSTOMER_EMAIL}}/g,
      templateData.customerEmail || "emma.t@email.com"
    )
    .replace(
      /{{PRODUCT_NAME}}/g,
      templateData.productName || "Dyson V15 Detect Absolute"
    )
    .replace(
      /{{PRODUCT_MODEL}}/g,
      templateData.productModel || "V15 Detect Absolute"
    )
    .replace(/{{PRODUCT_SKU}}/g, templateData.productSku || "419128-01")
    .replace(
      /{{SERIAL_NUMBER}}/g,
      templateData.serialNumber || "XB22-UK-LEA193"
    )
    .replace(/{{PRICE}}/g, templateData.price || "699.99")
    .replace(/{{TAX}}/g, templateData.tax || "140.00")
    .replace(/{{CARD_LAST4}}/g, templateData.cardLast4 || "7823");
  console.timeEnd("Inject Dynamic Data (Dyson)");
  return injectedHtml;
}

function injectFlightClubData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Flight Club)");
  const injectedHtml = htmlContent
    .replace(
      /Air Jordan 1 High OG/g,
      templateData.productName || "Air Jordan 1 High OG"
    )
    .replace(/Order 206707/g, "Order " + (templateData.orderNumber || "206707"))
    .replace(
      /Saturday, May 11, 2019, 2:08 PM/g,
      templateData.date || "Saturday, May 11, 2019, 2:08 PM"
    )
    .replace(/812 Broadway/g, templateData.storeAddress || "812 Broadway")
    .replace(
      /New York NY, 10003/g,
      templateData.storeCityStateZip || "New York NY, 10003"
    )
    .replace(/\(888\) 937-8020/g, templateData.storePhone || "(888) 937-8020")
    .replace(/cd4487-100/g, templateData.productSku || "cd4487-100")
    .replace(/US Size: 9.5/g, "US Size: " + (templateData.productSize || "9.5"))
    .replace(/\$175\.00/g, "$" + (templateData.itemPrice || "175.00"))
    .replace(/\$18\.83/g, "$" + (templateData.taxAmount || "18.83"))
    .replace(/\$243\.83/g, "$" + (templateData.totalAmount || "243.83"))
    .replace(/\$0\.00/g, "$" + (templateData.changeAmount || "0.00"));
  console.timeEnd("Inject Dynamic Data (Flight Club)");
  return injectedHtml;
}

function injectFlannelsData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Flannels)");
  const injectedHtml = htmlContent
    .replace(/{{STORE_NAME}}/g, "Flannels")
    .replace(/{{STORE_ADDRESS}}/g, templateData.flannelsStoreAddress || "")
    .replace(
      /{{STORE_CITY_STATE_ZIP}}/g,
      templateData.flannelsStoreCityStateZip || ""
    )
    .replace(/{{EMPLOYEE_ID}}/g, templateData.flannelsEmployeeId || "")
    .replace(/{{EMPLOYEE_NUMBER}}/g, templateData.flannelsEmployeeNumber || "")
    .replace(/{{PRODUCT_SKU}}/g, templateData.flannelsProductSku || "")
    .replace(/{{PRODUCT_NAME}}/g, templateData.flannelsProductName || "")
    .replace(/{{ITEM_PRICE}}/g, templateData.flannelsItemPrice || "")
    .replace(/{{SUBTOTAL}}/g, templateData.flannelsSubtotal || "")
    .replace(/{{TOTAL}}/g, templateData.flannelsTotal || "")
    .replace(/{{PAYMENT_METHOD}}/g, templateData.flannelsPaymentMethod || "")
    .replace(/{{PAYMENT_AMOUNT}}/g, templateData.flannelsPaymentAmount || "")
    .replace(
      /{{CARD_NUMBER_MASKED}}/g,
      templateData.flannelsCardNumberMasked || ""
    )
    .replace(/{{MERCHANT_NUMBER}}/g, templateData.flannelsMerchantNumber || "")
    .replace(/{{TERMINAL_NUMBER}}/g, templateData.flannelsTerminalNumber || "")
    .replace(/{{APP_ID}}/g, templateData.flannelsAppId || "")
    .replace(/{{AUTH_CODE}}/g, templateData.flannelsAuthCode || "")
    .replace(/{{STORE_ID}}/g, templateData.flannelsStoreId || "")
    .replace(/{{TILL_ID}}/g, templateData.flannelsTillId || "")
    .replace(
      /{{TRANSACTION_NUMBER}}/g,
      templateData.flannelsTransactionNumber || ""
    )
    .replace(/{{DATE}}/g, templateData.flannelsDate || "")
    .replace(/{{TIME}}/g, templateData.flannelsTime || "")
    .replace(/{{OPERATOR_ID}}/g, templateData.flannelsOperatorId || "")
    .replace(/{{ITEM_COUNT}}/g, String(templateData.flannelsItemCount || "1"))
    .replace(/{{VAT_NUMBER}}/g, templateData.flannelsVatNumber || "")
    .replace(/{{BARCODE_NUMBER}}/g, templateData.flannelsBarcodeNumber || "");
  console.timeEnd("Inject Dynamic Data (Flannels)");
  return injectedHtml;
}

function injectStussyData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Stussy)");

  const injectedHtml = htmlContent
    .replace(
      /{{STORE_ADDRESS_LINE1}}/g,
      templateData["STORE_ADDRESS_LINE1"] || ""
    )
    .replace(/{{STORE_CITY}}/g, templateData["STORE_CITY"] || "")
    .replace(/{{STORE_PHONE}}/g, templateData["STORE_PHONE"] || "")
    .replace(/{{DATE_TIME}}/g, templateData["DATE_TIME"] || "")
    .replace(/{{TICKET_NUMBER}}/g, templateData["TICKET_NUMBER"] || "")
    .replace(/{{VAT_NUMBER}}/g, templateData["VAT_NUMBER"] || "")
    .replace(/{{REGISTER}}/g, templateData["REGISTER"] || "")
    .replace(/{{EMPLOYEE}}/g, templateData["EMPLOYEE"] || "")
    .replace(/{{PRODUCT_NAME}}/g, templateData["PRODUCT_NAME"] || "")
    .replace(/{{PRODUCT_PRICE}}/g, templateData["PRODUCT_PRICE"] || "")
    .replace(/{{PRODUCT_SIZE}}/g, templateData["PRODUCT_SIZE"] || "")
    .replace(/{{SUBTOTAL}}/g, templateData["SUBTOTAL"] || "")
    .replace(/{{TAX_BASE}}/g, templateData["TAX_BASE"] || "")
    .replace(/{{TAX_RATE}}/g, templateData["TAX_RATE"] || "")
    .replace(/{{TAX_AMOUNT}}/g, templateData["TAX_AMOUNT"] || "")
    .replace(/{{TOTAL}}/g, templateData["TOTAL"] || "")
    .replace(/{{PAYMENT_METHOD}}/g, templateData["PAYMENT_METHOD"] || "")
    .replace(/{{BARCODE_NUMBER}}/g, templateData["BARCODE_NUMBER"] || "");

  console.timeEnd("Inject Dynamic Data (Stussy)");
  return injectedHtml;
}

function injectLVData(htmlContent: string, templateData: TemplateData): string {
  const injectedHtml = htmlContent
    .replace(/{{STORE_NAME}}/g, String(templateData.STORE_NAME || ""))
    .replace(
      /{{STORE_ADDRESS_LINE}}/g,
      String(templateData.STORE_ADDRESS_LINE || "")
    )
    .replace(
      /{{STORE_CITY_POSTAL}}/g,
      String(templateData.STORE_CITY_POSTAL || "")
    )
    .replace(/{{STORE_COUNTRY}}/g, String(templateData.STORE_COUNTRY || ""))
    .replace(/{{STORE_PHONE}}/g, String(templateData.STORE_PHONE || ""))
    .replace(/{{STORE_SIRET}}/g, String(templateData.STORE_SIRET || ""))
    .replace(/{{STORE_NAF}}/g, String(templateData.STORE_NAF || ""))
    .replace(
      /{{STORE_TVA_NUMBER}}/g,
      String(templateData.STORE_TVA_NUMBER || "")
    )
    .replace(/{{STORE_SIREN}}/g, String(templateData.STORE_SIREN || ""))
    .replace(/{{SIGNATURE_CODE}}/g, String(templateData.SIGNATURE_CODE || ""))
    .replace(/{{DOCUMENT_NUMBER}}/g, String(templateData.DOCUMENT_NUMBER || ""))
    .replace(
      /{{POS_SOFTWARE_VERSION}}/g,
      String(templateData.POS_SOFTWARE_VERSION || "")
    )
    .replace(/{{STORE_ID}}/g, String(templateData.STORE_ID || ""))
    .replace(/{{REGISTER_ID}}/g, String(templateData.REGISTER_ID || ""))
    .replace(/{{DATE}}/g, String(templateData.DATE || ""))
    .replace(/{{TIME}}/g, String(templateData.TIME || ""))
    .replace(/{{TRANSACTION_ID}}/g, String(templateData.TRANSACTION_ID || ""))
    .replace(/{{SALES_ASSOCIATE}}/g, String(templateData.SALES_ASSOCIATE || ""))
    .replace(/{{CUSTOMER_NAME}}/g, String(templateData.CUSTOMER_NAME || ""))
    .replace(
      /{{PRODUCT_DESCRIPTION}}/g,
      String(templateData.PRODUCT_DESCRIPTION || "")
    )
    .replace(/{{PRODUCT_CODE}}/g, String(templateData.PRODUCT_CODE || ""))
    .replace(/{{QUANTITY}}/g, String(templateData.QUANTITY || ""))
    .replace(/{{VAT_RATE}}/g, String(templateData.VAT_RATE || ""))
    .replace(/{{UNIT_PRICE_HT}}/g, String(templateData.UNIT_PRICE_HT || ""))
    .replace(/{{UNIT_PRICE_TTC}}/g, String(templateData.UNIT_PRICE_TTC || ""))
    .replace(/{{TOTAL_TTC}}/g, String(templateData.TOTAL_TTC || ""))
    .replace(/{{TOTAL_HT}}/g, String(templateData.TOTAL_HT || ""))
    .replace(/{{TOTAL_TAX}}/g, String(templateData.TOTAL_TAX || ""))
    .replace(/{{PAYMENT_METHOD}}/g, String(templateData.PAYMENT_METHOD || ""))
    .replace(/{{AMOUNT_PAID}}/g, String(templateData.AMOUNT_PAID || ""))
    .replace(/{{CHANGE_GIVEN}}/g, String(templateData.CHANGE_GIVEN || ""));

  console.timeEnd("Inject Dynamic Data (Louis Vuitton)");
  return injectedHtml;
}

function injectBalenciagaData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Balenciaga)");

  // Handle products array
  let productsHtml = "";
  if (templateData.products && Array.isArray(templateData.products)) {
    const productTemplate =
      '{{#each products}}<div style="text-align: left; margin-top: -1px; font-weight: 30px;">{{sku}} {{quantity}} {{price}} {{total}}</div><div style="text-align: left; margin-top: -12px;">{{name}} {{size}}</div><div style="text-align: left; margin-top: -12px;">Salesperson; {{salesperson}}</div>{{/each}}';
    const productStart = htmlContent.indexOf("{{#each products}}");
    const productEnd = htmlContent.indexOf("{{/each}}") + "{{/each}}".length;

    if (productStart !== -1 && productEnd !== -1) {
      // Remove the template placeholder
      htmlContent =
        htmlContent.slice(0, productStart) +
        productsHtml +
        htmlContent.slice(productEnd);

      // Generate the HTML for each product
      productsHtml = templateData.products
        .map(
          (product) => `
                <div style="text-align: left; margin-top: -1px; font-weight: 30px;">${
                  product.sku || ""
                } ${product.quantity || "1"} ${product.price || "0.00"} ${
            product.total || "0.00"
          }</div>
                <div style="text-align: left; margin-top: -12px;">${
                  product.name || "Product"
                } ${product.size || ""}</div>
                <div style="text-align: left; margin-top: -12px;">Salesperson; ${
                  product.salesperson || ""
                }</div>
            `
        )
        .join("");

      // Insert the generated HTML in place of the placeholder
      htmlContent = htmlContent.replace(
        "{{#each products}}{{/each}}",
        productsHtml
      );
    }
  }

  // Handle tax analysis array
  let taxAnalysisHtml = "";
  if (templateData.taxAnalysis && Array.isArray(templateData.taxAnalysis)) {
    const taxTemplate =
      '{{#each taxAnalysis}}<div style="text-align: left;">{{code}} {{taxable}} {{rate}}% {{totalTax}}</div>{{/each}}';
    const taxStart = htmlContent.indexOf("{{#each taxAnalysis}}");
    const taxEnd =
      htmlContent.indexOf("{{/each}}", taxStart) + "{{/each}}".length;

    if (taxStart !== -1 && taxEnd !== -1) {
      // Remove the template placeholder
      htmlContent =
        htmlContent.slice(0, taxStart) +
        taxAnalysisHtml +
        htmlContent.slice(taxEnd);

      // Generate the HTML for each tax analysis
      taxAnalysisHtml = templateData.taxAnalysis
        .map(
          (tax) => `
                <div style="text-align: left;">${tax.code || "Tax"} ${
            tax.taxable || "0.00"
          } ${tax.rate || "0"}% ${tax.totalTax || "0.00"}</div>
            `
        )
        .join("");

      // Insert the generated HTML in place of the placeholder
      htmlContent = htmlContent.replace(
        "{{#each taxAnalysis}}{{/each}}",
        taxAnalysisHtml
      );
    }
  }

  // Replace standard placeholders
  const injectedHtml = htmlContent
    .replace(/{{storeName}}/g, templateData.storeName || "Costa Mesa")
    .replace(
      /{{storeAddress}}/g,
      templateData.storeAddress || "3333 Bristol Street"
    )
    .replace(/{{storeCity}}/g, templateData.storeCity || "Costa Mesa")
    .replace(/{{storeZip}}/g, templateData.storeZip || "92626")
    .replace(/{{storePhone}}/g, templateData.storePhone || "(714)-668-0057")
    .replace(/{{transactionNumber}}/g, templateData.transactionNumber || "6985")
    .replace(/{{date}}/g, templateData.date || "04/02/19")
    .replace(/{{time}}/g, templateData.time || "12:04:43")
    .replace(/{{cashier}}/g, templateData.cashier || "1052200")
    .replace(/{{register}}/g, templateData.register || "1")
    .replace(
      /{{customerName}}/g,
      templateData.customerName || "Ruslan Badretdinov"
    )
    .replace(/{{customerId}}/g, templateData.customerId || "2362349677847")
    .replace(/{{currency}}/g, templateData.currency || "USD")
    .replace(/{{subtotal}}/g, templateData.subtotal || "495.00")
    .replace(/{{tax}}/g, templateData.tax || "36.09")
    .replace(/{{total}}/g, templateData.total || "531.09")
    .replace(/{{paymentMethod}}/g, templateData.paymentMethod || "Visa")
    .replace(/{{paymentAmount}}/g, templateData.paymentAmount || "440.00")
    .replace(/{{change}}/g, templateData.change || "0.00")
    .replace(/{{itemCount}}/g, String(templateData.itemCount || "1"));

  console.timeEnd("Inject Dynamic Data (Balenciaga)");
  return injectedHtml;
}

function injectSamsungData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Samsung)");

  // Handle products array
  let productsHtml = "";
  if (templateData.products && Array.isArray(templateData.products)) {
    const productStart = htmlContent.indexOf("{{#each products}}");
    const productEnd =
      htmlContent.indexOf("{{/each}}", productStart) + "{{/each}}".length;

    if (productStart !== -1 && productEnd !== -1) {
      const productTemplate = htmlContent.substring(
        productStart + "{{#each products}}".length,
        productEnd - "{{/each}}".length
      );

      // Generate the HTML for each product
      productsHtml = templateData.products
        .map((product) => {
          let productHtml = productTemplate;
          productHtml = productHtml
            .replace(/{{sku}}/g, product.sku || "")
            .replace(/{{name}}/g, product.name || "")
            .replace(/{{quantity}}/g, product.quantity || "1")
            .replace(/{{price}}/g, product.price || "0.00")
            .replace(/{{total}}/g, product.total || "0.00");
          return productHtml;
        })
        .join("");

      // Replace the template with generated HTML
      htmlContent =
        htmlContent.substring(0, productStart) +
        productsHtml +
        htmlContent.substring(productEnd);
    }
  }

  // Handle tax items array
  let taxItemsHtml = "";
  if (templateData.taxItems && Array.isArray(templateData.taxItems)) {
    const taxStart = htmlContent.indexOf("{{#each taxItems}}");
    const taxEnd =
      htmlContent.indexOf("{{/each}}", taxStart) + "{{/each}}".length;

    if (taxStart !== -1 && taxEnd !== -1) {
      const taxTemplate = htmlContent.substring(
        taxStart + "{{#each taxItems}}".length,
        taxEnd - "{{/each}}".length
      );

      // Generate the HTML for each tax item
      taxItemsHtml = templateData.taxItems
        .map((taxItem) => {
          let taxHtml = taxTemplate;
          taxHtml = taxHtml
            .replace(/{{name}}/g, taxItem.name || "")
            .replace(/{{rate}}/g, taxItem.rate || "0.0")
            .replace(/{{amount}}/g, taxItem.amount || "0.00");
          return taxHtml;
        })
        .join("");

      // Replace the template with generated HTML
      htmlContent =
        htmlContent.substring(0, taxStart) +
        taxItemsHtml +
        htmlContent.substring(taxEnd);
    }
  }

  // Replace standard placeholders
  const injectedHtml = htmlContent
    .replace(
      /{{storeName}}/g,
      templateData.storeName || "Samsung Experience Store"
    )
    .replace(
      /{{storeAddress}}/g,
      templateData.storeAddress || "123 High Street"
    )
    .replace(/{{storeCity}}/g, templateData.storeCity || "London SW1Y 4SB")
    .replace(/{{storePhone}}/g, templateData.storePhone || "+44 333 000 0333")
    .replace(/{{date}}/g, templateData.date || "03/14/2024 10:30")
    .replace(/{{customerName}}/g, templateData.customerName || "David Wilson")
    .replace(/{{customerId}}/g, templateData.customerId || "193911")
    .replace(
      /{{customerEmail}}/g,
      templateData.customerEmail || "david.w@email.com"
    )
    .replace(/{{subtotal}}/g, templateData.subtotal || "1,299.99")
    .replace(/{{total}}/g, templateData.total || "1,559.99")
    .replace(/{{paymentMethod}}/g, templateData.paymentMethod || "Credit Card")
    .replace(/{{cardLast4}}/g, templateData.cardLast4 || "8901")
    .replace(/{{orderNumber}}/g, templateData.orderNumber || "ORD-377459")
    .replace(/{{serialNumber}}/g, templateData.serialNumber || "RF8M99BKXEN");

  console.timeEnd("Inject Dynamic Data (Samsung)");
  return injectedHtml;
}

function injectAdidasData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Adidas)");

  // Handle products array
  let productsHtml = "";
  if (templateData.products && Array.isArray(templateData.products)) {
    const productStart = htmlContent.indexOf("{{#each products}}");
    const productEnd =
      htmlContent.indexOf("{{/each}}", productStart) + "{{/each}}".length;

    if (productStart !== -1 && productEnd !== -1) {
      const productTemplate = htmlContent.substring(
        productStart + "{{#each products}}".length,
        productEnd - "{{/each}}".length
      );

      // Generate the HTML for each product
      productsHtml = templateData.products
        .map((product) => {
          let productHtml = productTemplate;
          productHtml = productHtml
            .replace(/{{sku}}/g, product.sku || "")
            .replace(/{{name}}/g, product.name || "")
            .replace(/{{price}}/g, product.price || "0.00")
            .replace(/{{quantity}}/g, product.quantity || "1")
            .replace(/{{description}}/g, product.description || "")
            .replace(/{{size}}/g, product.size || "");
          return productHtml;
        })
        .join("");

      // Replace the template with generated HTML
      htmlContent =
        htmlContent.substring(0, productStart) +
        productsHtml +
        htmlContent.substring(productEnd);
    }
  }

  // Replace standard placeholders
  const injectedHtml = htmlContent
    .replace(/{{storeId}}/g, templateData.storeId || "6525")
    .replace(/{{storeName}}/g, templateData.storeName || "New York Fifth Ave")
    .replace(/{{storeAddress}}/g, templateData.storeAddress || "565 5th Ave")
    .replace(/{{storeCity}}/g, templateData.storeCity || "New York, NY 10017")
    .replace(/{{storePhone}}/g, templateData.storePhone || "(212) 883-5606")
    .replace(/{{transactionId}}/g, templateData.transactionId || "652510803")
    .replace(/{{dateTime}}/g, templateData.dateTime || "02:51:10PM 12/19/2019")
    .replace(/{{subtotal}}/g, templateData.subtotal || "250.00")
    .replace(/{{taxLabel}}/g, templateData.taxLabel || "ACC")
    .replace(/{{tax}}/g, templateData.tax || "22.20")
    .replace(/{{total}}/g, templateData.total || "239.53")
    .replace(/{{payment}}/g, templateData.payment || "239.53")
    .replace(/{{balance}}/g, templateData.balance || "0.00")
    .replace(/{{paymentMethod}}/g, templateData.paymentMethod || "VISA")
    .replace(/{{paymentDate}}/g, templateData.paymentDate || "12/19/2019")
    .replace(/{{paymentAmount}}/g, templateData.paymentAmount || "239.53")
    .replace(
      /{{referenceNumber}}/g,
      templateData.referenceNumber || "6079606827"
    )
    .replace(/{{authNumber}}/g, templateData.authNumber || "095915")
    .replace(/{{cardLast4}}/g, templateData.cardLast4 || "1126");

  console.timeEnd("Inject Dynamic Data (Adidas)");
  return injectedHtml;
}

function injectFootLockerData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Foot Locker)");

  const injectedHtml = htmlContent
    .replace(/{{productName}}/g, templateData.productName || "")
    .replace(/{{price}}/g, templateData.price || "")
    .replace(/{{tax}}/g, templateData.tax || "")
    .replace(/{{total}}/g, templateData.total || "")
    .replace(/{{dateTime}}/g, templateData.dateTime || "")
    .replace(/{{date}}/g, templateData.date || "")
    .replace(/{{orderNumber}}/g, templateData.orderNumber || "")
    .replace(/{{storeNumber}}/g, templateData.storeNumber || "")
    .replace(/{{register}}/g, templateData.register || "")
    .replace(/{{cashier}}/g, templateData.cashier || "")
    .replace(/{{productSKU}}/g, templateData.productSKU || "")
    .replace(/{{cardLast4}}/g, templateData.cardLast4 || "")
    .replace(/{{approvalCode}}/g, templateData.approvalCode || "")
    .replace(/{{storeName}}/g, templateData.storeName || "")
    .replace(/{{storeAddress}}/g, templateData.storeAddress || "")
    .replace(/{{storeAddressLine2}}/g, templateData.storeAddressLine2 || "")
    .replace(/{{storeCity}}/g, templateData.storeCity || "")
    .replace(/{{storeZip}}/g, templateData.storeZip || "")
    .replace(/{{storePhone}}/g, templateData.storePhone || "")
    .replace(/{{associateNumber}}/g, templateData.associateNumber || "")
    .replace(/{{cardExpiry}}/g, templateData.cardExpiry || "")
    .replace(/{{taxRate}}/g, templateData.taxRate || "")
    .replace(/{{taxableAmount}}/g, templateData.taxableAmount || "")
    .replace(/{{quantity}}/g, templateData.quantity || "1")
    .replace(/{{validationCode}}/g, templateData.validationCode || "");

  console.timeEnd("Inject Dynamic Data (Foot Locker)");
  return injectedHtml;
}

function injectThreeUkData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Three UK)");

  const injectedHtml = htmlContent
    .replace(/{{BRAND_NAME}}/g, templateData.brandName || "")
    .replace(/{{BRANCH_NAME}}/g, templateData.branchName || "")
    .replace(/{{STORE_ADDRESS}}/g, templateData.storeAddress || "")
    .replace(/{{STORE_CITY}}/g, templateData.storeCity || "")
    .replace(/{{STORE_PHONE}}/g, templateData.storePhone || "")
    .replace(/{{PRODUCT_NAME}}/g, templateData.productName || "")
    .replace(/{{PRODUCT_PRICE}}/g, templateData.productPrice || "")
    .replace(/{{PRODUCT_IMEI}}/g, templateData.productImei || "")
    .replace(/{{INVOICE_NUMBER}}/g, templateData.invoiceNumber || "")
    .replace(/{{SERVED_BY}}/g, templateData.servedBy || "")
    .replace(/{{VAT_NUMBER}}/g, templateData.vatNumber || "")
    .replace(/{{TRANSACTION_DATE}}/g, templateData.transactionDate || "")
    .replace(/{{TRANSACTION_TIME}}/g, templateData.transactionTime || "")
    .replace(/{{TRANSACTION_STORE}}/g, templateData.transactionStore || "")
    .replace(/{{TRANSACTION_TERM}}/g, templateData.transactionTerm || "")
    .replace(/{{TRANSACTION_CODE}}/g, templateData.transactionCode || "");

  console.timeEnd("Inject Dynamic Data (Three UK)");
  return injectedHtml;
}

function injectGoyardData(
  htmlContent: string,
  templateData: TemplateData
): string {
  console.time("Inject Dynamic Data (Goyard)");
  const dateTimeParts = (templateData.date || "").split(" ");
  const date = dateTimeParts[0] || "";
  const time = dateTimeParts[1] || "";
  const injectedHtml = htmlContent
    .replace(/{{STORE_NAME}}/g, templateData.storeName || "")
    .replace(/{{STORE_ADDRESS}}/g, templateData.storeAddress || "")
    .replace(/{{STORE_CITY}}/g, templateData.storeCity || "")
    .replace(/{{STORE_PHONE}}/g, templateData.storePhone || "")
    .replace(/{{ORDER_NUMBER}}/g, templateData.orderNumber || "")
    .replace(/{{DATE}}/g, date)
    .replace(/{{TIME}}/g, time)
    .replace(/{{STORE_ID}}/g, templateData.storeNumber || "")
    .replace(/{{CASHIER_ID}}/g, templateData.cashier || "")
    .replace(/{{TRANSACTION_NUMBER}}/g, templateData.transactionNumber || "")
    .replace(/{{CUSTOMER_ID}}/g, templateData.customerId || "")
    .replace(/{{CUSTOMER_NAME}}/g, templateData.customerName || "")
    .replace(/{{PRODUCT_QUANTITY}}/g, templateData.quantity || "")
    .replace(/{{PRODUCT_NAME}}/g, templateData.productName || "")
    .replace(/{{PRODUCT_PRICE}}/g, templateData.productPrice || "")
    .replace(/{{PRODUCT_REFERENCE}}/g, templateData.productReference || "")
    .replace(/{{PRODUCT_COLOR}}/g, templateData.productColor || "")
    .replace(/{{CARD_MASK}}/g, templateData.cardLast4 || "")
    .replace(/{{ITEM_COUNT}}/g, templateData.quantity || "")
    .replace(/{{PAYMENT_METHOD}}/g, templateData.paymentMethod || "")
    .replace(/{{PAYMENT_AMOUNT}}/g, templateData.paymentAmount || "")
    .replace(/{{CURRENCY}}/g, templateData.currency || "")
    .replace(/{{TAX_LABEL}}/g, templateData.taxLabel || "")
    .replace(/{{TAX_AMOUNT}}/g, templateData.taxAmount || "")
    .replace(/{{TAX_RATE}}/g, templateData.taxRate || "")
    .replace(/{{TAX_BASE_AMOUNT}}/g, templateData.taxableAmount || "")
    .replace(/{{VAT_NUMBER}}/g, templateData.vatNumber || "")
    .replace(/{{SALES_ASSOCIATE}}/g, templateData.salesAssociate || "");
  console.timeEnd("Inject Dynamic Data (Goyard)");
  return injectedHtml;
}

export function injectData(
  template: string,
  htmlContent: string,
  templateData: TemplateData
): string {
  switch (template) {
    case "gucci":
      return injectGucciData(htmlContent, templateData);
    case "gucci_nyc":
      return injectGucciNycData(htmlContent, templateData);
    case "sephora":
      return injectSephoraData(htmlContent, templateData);
    case "apple":
      return injectAppleData(htmlContent, templateData);
    case "dyson":
      return injectDysonData(htmlContent, templateData);
    case "flight_club":
      return injectFlightClubData(htmlContent, templateData);
    case "flannels":
      return injectFlannelsData(htmlContent, templateData);
    case "stussy":
      return injectStussyData(htmlContent, templateData);
    case "lv":
      return injectLVData(htmlContent, templateData);
    case "balenciaga":
      return injectBalenciagaData(htmlContent, templateData);
    case "samsung":
      return injectSamsungData(htmlContent, templateData);
    case "adidas":
      return injectAdidasData(htmlContent, templateData);
    case "foot_locker":
      return injectFootLockerData(htmlContent, templateData);
    case "three_uk":
      return injectThreeUkData(htmlContent, templateData);
    case "goyard":
      return injectGoyardData(htmlContent, templateData);
    default:
      console.warn(`No data injection logic defined for template: ${template}`);
      return htmlContent;
  }
}
