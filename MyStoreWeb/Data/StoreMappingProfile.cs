using AutoMapper;
using MyStoreWeb.Data.Entities;
using MyStoreWeb.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MyStoreWeb.Data
{
    public class StoreMappingProfile : Profile
    {
        public StoreMappingProfile()
        {
            CreateMap<Order, OrderViewModel>()
            .ForMember(o => o.OrderId, ex => ex.MapFrom(o => o.Id))
            .ReverseMap();
        }
    }
}
