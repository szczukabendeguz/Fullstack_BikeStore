using BikeStore.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using BikeStore.Entities.Dtos.BikeModel;
using BikeStore.Logic.Logic;

namespace BikeStore.Endpoint.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class BikeModelController : ControllerBase
    {
        BikeModelLogic logic;
        UserManager<AppUser> userManager;

        public BikeModelController(BikeModelLogic logic, UserManager<AppUser> userManager)
        {
            this.logic = logic;
            this.userManager = userManager;
        }

        [HttpPost]
        public void AddBikeModel(BikeModelCreateDto dto)
        {
            logic.AddBikeModel(dto);
        }

        [HttpGet("brand/{brandId}")]
        public IEnumerable<BikeModelViewDto> GetBikeModelsByBrandId(string brandId)
        {
            return logic.GetBikeModelsByBrandId(brandId);
        }

        [HttpGet("ascending-price")]
        public ActionResult<IEnumerable<BikeModelViewDto>> GetAllBikeModelsInAscendingPriceOrder()
        {
            var bikeModels = logic.GetAllBikeModelsInAscendingPriceOrder();
            return Ok(bikeModels);
        }

        [HttpGet("{id}")]
        public ActionResult<BikeModelViewDto> GetBikeModelById(string id)
        {
            try
            {
                var model = logic.GetBikeModelById(id);
                return Ok(model);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBikeModel(string id)
        {
            try
            {
                logic.DeleteBikeModel(id);
                return NoContent();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateBikeModel(string id, [FromBody] BikeModelCreateDto dto)
        {
            try
            {
                logic.UpdateBikeModel(id, dto);
                return Ok("Bike model updated successfully.");
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
