#pragma checksum "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\Home\_ExistingProducts.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "2c25e6b030df70ff804cd7f0043515f4fd573151"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home__ExistingProducts), @"mvc.1.0.view", @"/Views/Home/_ExistingProducts.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\_ViewImports.cshtml"
using Products_and_Categories;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\_ViewImports.cshtml"
using Products_and_Categories.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2c25e6b030df70ff804cd7f0043515f4fd573151", @"/Views/Home/_ExistingProducts.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"9983e9a22e732b0815ceb33fab531bedd71c1f02", @"/Views/_ViewImports.cshtml")]
    public class Views_Home__ExistingProducts : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Product>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<div class=""row"">
    <div class=""col-sm-6"">
        <div class=""card"">
            <div class=""card-body"">
                <table class=""table table-striped"">
                    <tr>
                        <th>Products</th>
                    </tr>
");
#nullable restore
#line 11 "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\Home\_ExistingProducts.cshtml"
                     foreach (var product in ViewBag.Products)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <tr>\r\n                            <td><a");
            BeginWriteAttribute("href", " href=\"", 430, "\"", 465, 2);
            WriteAttributeValue("", 437, "/products/", 437, 10, true);
#nullable restore
#line 14 "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\Home\_ExistingProducts.cshtml"
WriteAttributeValue("", 447, product.ProductID, 447, 18, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(">");
#nullable restore
#line 14 "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\Home\_ExistingProducts.cshtml"
                                                                  Write(product.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</a></td>\r\n                        </tr>\r\n");
#nullable restore
#line 16 "C:\Code Stuff\Assignments\Assignments\C#\Products_and_Categories\Views\Home\_ExistingProducts.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Product> Html { get; private set; }
    }
}
#pragma warning restore 1591
