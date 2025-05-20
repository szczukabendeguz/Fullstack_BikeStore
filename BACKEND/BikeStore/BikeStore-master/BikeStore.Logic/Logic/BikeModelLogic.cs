using BikeStore.Data;
using BikeStore.Logic.Helpers;
using BikeStore.Entities;
using BikeStore.Entities.Dtos.BikeModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BikeStore.Logic.Logic
{
    public class BikeModelLogic
    {
        Repository<BikeModel> repo;
        DtoProvider dtoProvider;

        public BikeModelLogic(Repository<BikeModel> repo, DtoProvider dtoProvider)
        {
            this.repo = repo;
            this.dtoProvider = dtoProvider;
        }

        public void AddBikeModel(BikeModelCreateDto dto)
        {
            var model = dtoProvider.Mapper.Map<BikeModel>(dto);
            repo.Create(model);
        }

        public IEnumerable<BikeModelViewDto> GetBikeModelsByBrandId(string brandId)
        {
            var bikeModels = repo.GetAll()
                                 .Where(bm => bm.BrandId == brandId)
                                 .ToList();

            var bikeModelDtos = bikeModels.Select(bm => dtoProvider.Mapper.Map<BikeModelViewDto>(bm))
                                          .ToList();

            return bikeModelDtos;
        }

        public BikeModelViewDto GetBikeModelById(string id)
        {
            var bikeModel = repo.FindById(id);
            if (bikeModel == null)
            {
                throw new Exception("Bike model not found.");
            }

            return dtoProvider.Mapper.Map<BikeModelViewDto>(bikeModel);
        }


        public IEnumerable<BikeModelViewDto> GetAllBikeModelsInAscendingPriceOrder()
        {
            var bikeModels = repo.GetAll()
                                 .OrderBy(bm => bm.AskingPrice)
                                 .ToList();

            var bikeModelDtos = bikeModels.Select(bm => dtoProvider.Mapper.Map<BikeModelViewDto>(bm))
                                          .ToList();

            return bikeModelDtos;
        }

        public void DeleteBikeModel(string id)
        {
            var bikeModel = repo.FindById(id);
            if (bikeModel == null)
            {
                throw new Exception("Bike model not found.");
            }

            repo.Delete(bikeModel);
        }

        public void UpdateBikeModel(string id, BikeModelCreateDto dto)
        {
            var existingModel = repo.FindById(id);
            if (existingModel == null)
            {
                throw new Exception("Bike model not found.");
            }

            dtoProvider.Mapper.Map(dto, existingModel);
            repo.Update(existingModel);
        }
    }
}
