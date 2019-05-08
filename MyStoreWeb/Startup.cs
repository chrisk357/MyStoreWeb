using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using MyStoreWeb.Data;
using MyStoreWeb.Data.Entities;
using MyStoreWeb.Services;
using Newtonsoft.Json;
using Microsoft.IdentityModel.Tokens;
using MyStoreWeb.Services;
using MyStoreWeb.Data;
using System.Text;

namespace MyStoreWeb
{
    public class Startup
    {
        private readonly IConfiguration _config;

        public Startup(IConfiguration config)
        {
            _config = config;
        }

      //  public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddIdentity<StoreUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
                //can also set up password rules as well by using this

            })
            .AddEntityFrameworkStores<StoreContext>();

            services.AddAuthentication()
                .AddCookie()
                .AddJwtBearer(cfg =>
                {
                    cfg.TokenValidationParameters = new TokenValidationParameters()
                    {
                        ValidIssuer = _config["Tokens:Issuer"],
                        ValidAudience = _config["Tokens:Audience"],
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Tokens:Key"]))
                    };
                });


            services.AddDbContext<StoreContext>(cfg =>
            {
                cfg.UseSqlServer(_config.GetConnectionString("StoreConnectionString"));
            });

            services.AddAutoMapper();
            services.AddTransient<StoreSeeder>();
            services.AddScoped<IStoreRepository, StoreRepository>();
            services.AddTransient<IMailService, NullMailService>();

            services.AddMvc()
                .AddJsonOptions(opt => opt.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore)
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

         //   services.Configure<CookiePolicyOptions>(options =>
         //       {
         //           // This lambda determines whether user consent for non-essential cookies is needed for a given request.
          //          options.CheckConsentNeeded = context => true;
          //          options.MinimumSameSitePolicy = SameSiteMode.None;
         //       });
            



        }

                // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
                {
                    if (env.IsDevelopment())
                    {
                        app.UseDeveloperExceptionPage();
                    }


                    /*
                     * else
                    {
                        app.UseExceptionHandler("/Home/Error");
                        // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                        app.UseHsts();
                    }
                    */
                    app.UseHttpsRedirection();
                    app.UseStaticFiles();
            //Authentication needs to be placed before the MVC one to execute properly
                    app.UseAuthentication();
           
                //    app.UseNodeModules(env);
               //     app.UseCookiePolicy();

                    app.UseMvc(routes =>
                    {
                        routes.MapRoute(
                            name: "default",
                            template: "{controller=Home}/{action=Index}/{id?}");
                    });
                }
        };
}
    

