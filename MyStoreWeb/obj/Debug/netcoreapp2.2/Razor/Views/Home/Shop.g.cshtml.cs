#pragma checksum "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\Home\Shop.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "020545d962444d6e6526b8d7a6b471bbc231beb6"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Shop), @"mvc.1.0.view", @"/Views/Home/Shop.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/Shop.cshtml", typeof(AspNetCore.Views_Home_Shop))]
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
#line 1 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\_ViewImports.cshtml"
using MyStoreWeb;

#line default
#line hidden
#line 2 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\_ViewImports.cshtml"
using MyStoreWeb.Models;

#line default
#line hidden
#line 3 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\_ViewImports.cshtml"
using MyStoreWeb.Controllers;

#line default
#line hidden
#line 4 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\_ViewImports.cshtml"
using MyStoreWeb.Data.Entities;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"020545d962444d6e6526b8d7a6b471bbc231beb6", @"/Views/Home/Shop.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"fffaef0a4ed559cf3feb979674c00cf612d0b114", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Shop : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Product>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(29, 26, true);
            WriteLiteral("\r\n<h1>Shop</h1>\r\n<p>Count:");
            EndContext();
            BeginContext(56, 13, false);
#line 4 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\Home\Shop.cshtml"
    Write(Model.Count());

#line default
#line hidden
            EndContext();
            BeginContext(69, 6, true);
            WriteLiteral("</p>\r\n");
            EndContext();
#line 5 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\Home\Shop.cshtml"
 foreach (var p in Model)
{

#line default
#line hidden
            BeginContext(105, 8, true);
            WriteLiteral("    <li>");
            EndContext();
            BeginContext(114, 14, false);
#line 7 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\Home\Shop.cshtml"
   Write(p.ProductModel);

#line default
#line hidden
            EndContext();
            BeginContext(128, 7, true);
            WriteLiteral("</li>\r\n");
            EndContext();
#line 8 "C:\Users\Admin\Source\Repos\chrisk357\MyStoreWeb\MyStoreWeb\Views\Home\Shop.cshtml"
}

#line default
#line hidden
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Product>> Html { get; private set; }
    }
}
#pragma warning restore 1591
