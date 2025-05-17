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
        public async Task AddBikeModel(BikeModelCreateDto dto)
        {
            var user = await userManager.GetUserAsync(User);
            logic.AddBikeModel(dto, user.Id);
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

        [HttpDelete("{id}")]
        public IActionResult DeleteBikeModel(string id)
        {
            try
            {
                logic.DeleteBikeModel(id);
                return Ok("Bike model deleted successfully.");
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
