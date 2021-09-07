# HTML to PDF

## Apose HTML

https://products.aspose.app/html/en/conversion/zip-to-pdf/

Pros:
+ Have a free service that can convert ZIP to PDF with HTML files.
+ Support SVG.
+ Support HTML form input elements.

Cons:
+ Always use LucidaConsole font - there is no way to change font.
+ Can not handle our entire site CSS - see `npm run optimizeCSS`.
+ Seems to only support manual upload of ZIP file.
+ Has no configuration options.
+ Extremely scarce documentation for their online service.
+ Does not generates table of content.

## DocRaptor

https://docraptor.com/documentation/

Pros:
+ Support all fonts - the exact same way as any browser.
+ Can handle our entire site CSS.
+ Can load all assets from our website.
+ Support SVG.
+ Has a free (5 PDF/month) API that can be automated.
+ Has very good process insights.
+ Lots of configuration options.
+ JavaScript errors are available in the process logs.
+ Creates table of content based H tags.

Cons:
+ No support for HTML form input elements!
+ Has 2 extremely old JS engines.

## NPM Scripts

+ `optimizeCSS`: Figure out which CSS is used in aspose/Page1.html and output an CSS bundle with only those styles based on our site CSS.
+ `bundle`: Copy our fonts into aspose/ and creates a ZIP file in build/ with HTML page, CSS, image and fonts from aspose/.
+ `aspose`: Run `optimizeCSS` and `bundle`.
+ `raptor`: Uploads docRaptor/Page1.html to DocRaptor and saves a converted PDF file in build/.
