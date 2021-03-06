#pragma checksum "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "4fb0c8b59565afb533850badc86faf6d39aea539"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Dishes), @"mvc.1.0.view", @"/Views/Home/Dishes.cshtml")]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4fb0c8b59565afb533850badc86faf6d39aea539", @"/Views/Home/Dishes.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"2bca1e007867c6297778622838d8ba6df73a1ff4", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Dishes : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Dish>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<div class=""text-center"">

    <span><a href=""/"">Chefs</a> | Dishes</span>
    <br>
    <a href=""/dishes/new"">Add a Dish</a>
    <div class=""row"">
        <div class=""col-sm-6"">
            <div class=""card"">
                <div class=""card-body"">
                    <h3>Yum, take a look at our tastry dishes!</h3>
                    <table class=""table table-striped"">
                        <tr>
                            <th>Name of Dish</th>
                            <th>Name of Chef</th>
                            <th>Tastiness</th>
                            <th>Calories</th>
                        </tr>
");
#nullable restore
#line 20 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml"
                         foreach (var dish in Model)
                        {

#line default
#line hidden
#nullable disable
            WriteLiteral("                            <tr>\r\n                                <td>");
#nullable restore
#line 23 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml"
                               Write(dish.Name);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                <td>");
#nullable restore
#line 24 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml"
                               Write(dish.Creator.FirstName);

#line default
#line hidden
#nullable disable
            WriteLiteral(" ");
#nullable restore
#line 24 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml"
                                                       Write(dish.Creator.LastName);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                <td>");
#nullable restore
#line 25 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml"
                               Write(dish.Tastiness);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                                <td>");
#nullable restore
#line 26 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml"
                               Write(dish.Calories);

#line default
#line hidden
#nullable disable
            WriteLiteral("</td>\r\n                            </tr>\r\n");
#nullable restore
#line 28 "C:\Code Stuff\Assignments\Assignments\C#\Chefs_N_Dishes\Views\Home\Dishes.cshtml"
                        }

#line default
#line hidden
#nullable disable
            WriteLiteral("                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Dish>> Html { get; private set; }
    }
}
#pragma warning restore 1591
