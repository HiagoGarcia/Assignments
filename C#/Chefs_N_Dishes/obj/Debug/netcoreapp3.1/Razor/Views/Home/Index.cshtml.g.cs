#pragma checksum "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "f653bc7cb5f0d1feb3d0d9c7411f8a42efbb46ea"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Index), @"mvc.1.0.view", @"/Views/Home/Index.cshtml")]
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
#line 1 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\_ViewImports.cshtml"
using Chefs_N_Dishes;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\_ViewImports.cshtml"
using Chefs_N_Dishes.Models;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\_ViewImports.cshtml"
using Microsoft.AspNetCore.Http;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"f653bc7cb5f0d1feb3d0d9c7411f8a42efbb46ea", @"/Views/Home/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2bca1e007867c6297778622838d8ba6df73a1ff4", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Chef>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 1 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml"
  
    ViewData["Title"] = "Home Page";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n<div class=\"text-center\">\r\n    <h1 class=\"display-4\">Welcome</h1>\r\n    <span>Chefs | <a href=\"/dishes\">Dishes</a></span>\r\n    <br>\r\n    <a href=\"/new\">New Chef</a>\r\n");
            WriteLiteral(@"
    <div class=""col-sm-6"">
        <div class=""card"">
            <div class=""card-body"">
                <h3>Check out our roster of Chefs!</h3>
                <table class=""table table-striped"">
                    <tr>
                        <th>Name of Chef</th>
                        <th>Age</th>
                        <th># of Dishes</th>

                    </tr>
");
#nullable restore
#line 23 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml"
                     foreach (var chef in Model)
                    {

#line default
#line hidden
#nullable disable
            WriteLiteral("                        <tr>\r\n                            <td>");
#nullable restore
#line 26 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml"
                           Write(chef.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 26 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml"
                                           Write(chef.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 27 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml"
                           Write(chef.DateOfBirth);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            <td>");
#nullable restore
#line 28 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml"
                           Write(chef.CreatedDishes.Count);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                        </tr>\r\n");
#nullable restore
#line 30 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Index.cshtml"
                    }

#line default
#line hidden
#nullable disable
            WriteLiteral("                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Chef>> Html { get; private set; }
    }
}
#pragma warning restore 1591